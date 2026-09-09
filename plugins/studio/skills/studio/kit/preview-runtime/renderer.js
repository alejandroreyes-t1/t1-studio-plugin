// T1 Studio — preview renderer.
//
// Plain JS, no JSX, no bundler: React.createElement directly (React/ReactDOM are vendored as
// global UMD builds — see index.html). Turns a validated ScreenSpec tree into a visually
// reasonable, INTERACTIVE approximation of the real Nexus components. This is a preview, not the
// production design system: fidelity is "clear enough to test the idea", not pixel-perfect. Prop
// names below are taken from nexus-contract/manifest.generated.json — keep them in sync with it,
// not with what "seems natural".
//
// Extensions beyond the ScreenSpec documented in SCREENSPEC.md (see "Prototype extensions"):
//   - top-level `state`: flat object of primitive initial values, local to this prototype.
//   - `{ "$state": "key" }` anywhere a Value is expected — reads state.key (read-only).
//   - `{ "$bind": "key" }` on a component's controlled-value prop AND its paired change-handler
//     prop (same key on both) — the renderer wires the read and the write side. On the
//     handler prop, the component's OWN implementation below decides how the real Nexus
//     callback's argument becomes the stored value (e.g. Input.onChange gets a string already;
//     Dialog.onClose takes no argument and always writes `false`).
//   - `{ "$act": "id", "effect": {...} }` — effect is optional; a bare `{ "$act": "id" }` stays a
//     no-op exactly like before, for backward compatibility with existing screen files.
//   - top-level `shell` — preview-only chrome (sidebar/nav). Never a Nexus node, never validated,
//     never counted as a "componente Nexus utilizado".
'use strict';

const h = React.createElement;

// ---------------------------------------------------------------------------------------------
// Effects
// ---------------------------------------------------------------------------------------------

function applyEffect(effect, setState, setActiveScreen) {
  if (!effect || !effect.op) return;
  switch (effect.op) {
    case 'set':
      setState((s) => ({ ...s, [effect.key]: effect.value }));
      break;
    case 'toggle':
      setState((s) => ({ ...s, [effect.key]: !s[effect.key] }));
      break;
    case 'increment':
      setState((s) => ({ ...s, [effect.key]: (Number(s[effect.key]) || 0) + (effect.by ?? 1) }));
      break;
    case 'decrement':
      setState((s) => ({ ...s, [effect.key]: (Number(s[effect.key]) || 0) - (effect.by ?? 1) }));
      break;
    case 'navigate':
      if (effect.to && setActiveScreen) setActiveScreen(effect.to);
      break;
    default:
      break;
  }
}

// ---------------------------------------------------------------------------------------------
// Value resolution: $row (existing), $state (read), $act (effect-aware), nested Nodes.
// ---------------------------------------------------------------------------------------------

function resolveValue(value, ctx) {
  if (Array.isArray(value)) return value.map((v) => resolveValue(v, ctx));
  if (value && typeof value === 'object') {
    if ('$row' in value) return ctx.row ? ctx.row[value.$row] : undefined;
    if ('$state' in value) return ctx.state[value.$state];
    if ('$bind' in value) return ctx.state[value.$bind]; // read side of a binding used as a plain value
    if ('$act' in value) return () => applyEffect(value.effect, ctx.setState, ctx.setActiveScreen);
    if ('c' in value) return renderNode(value, ctx);
    const out = {};
    for (const k of Object.keys(value)) out[k] = resolveValue(value[k], ctx);
    return out;
  }
  return value;
}

function resolveChildren(ch, ctx) {
  if (ch == null) return null;
  const list = Array.isArray(ch) ? ch : [ch];
  return list.map((child, i) => {
    if (child && typeof child === 'object' && 'c' in child) return h(React.Fragment, { key: i }, renderNode(child, ctx));
    if (child && typeof child === 'object') return h(React.Fragment, { key: i }, resolveValue(child, ctx));
    return child;
  });
}

function prop(node, name, ctx, fallback) {
  const raw = node.p ? node.p[name] : undefined;
  if (raw === undefined) return fallback;
  return resolveValue(raw, ctx);
}

// Read side of a $bind (or a plain value) on a controlled prop.
function valueOf(node, name, ctx, fallback) {
  const raw = node.p ? node.p[name] : undefined;
  if (raw === undefined) return fallback;
  if (typeof raw === 'object' && raw !== null && '$bind' in raw) return ctx.state[raw.$bind];
  return resolveValue(raw, ctx);
}

// Write side of a $bind on a handler prop. `mapArgToValue` turns whatever the real Nexus callback
// signature receives (a string, a boolean, a page number, nothing) into the value stored at
// state[key]. Falls back to a plain `{"$act": ...}` effect, or undefined (legacy no-op) if neither.
function handlerOf(node, name, ctx, mapArgToValue) {
  const raw = node.p ? node.p[name] : undefined;
  if (raw && typeof raw === 'object' && '$bind' in raw) {
    const key = raw.$bind;
    return (...args) => ctx.setState((s) => ({ ...s, [key]: mapArgToValue(...args) }));
  }
  if (raw && typeof raw === 'object' && '$act' in raw) {
    return () => applyEffect(raw.effect, ctx.setState, ctx.setActiveScreen);
  }
  return undefined;
}

// ---------------------------------------------------------------------------------------------
// Layout primitive (unchanged contract)
// ---------------------------------------------------------------------------------------------

function renderBox(node, ctx) {
  const p = node.p || {};
  const style = {
    display: 'flex',
    flexDirection: p.direction === 'row' ? 'row' : 'column',
    gap: p.gap != null ? p.gap : undefined,
    padding: p.padding != null ? p.padding : undefined,
    alignItems: { start: 'flex-start', center: 'center', end: 'flex-end', stretch: 'stretch', baseline: 'baseline' }[p.align],
    justifyContent: { start: 'flex-start', center: 'center', end: 'flex-end', 'space-between': 'space-between', 'space-around': 'space-around' }[p.justify],
    flexWrap: p.wrap ? 'wrap' : undefined,
    maxWidth: p.maxWidth != null ? p.maxWidth : undefined,
    margin: p.maxWidth != null ? '0 auto' : undefined,
    flexGrow: p.grow != null ? p.grow : undefined,
    flexBasis: p.grow != null ? 0 : undefined,
    background: p.background || undefined,
  };
  return h('div', { style }, resolveChildren(node.ch, ctx));
}

function renderEscape(node, ctx) {
  const why = prop(node, 'why', ctx, '(sin razón declarada)');
  return h(
    'div',
    { className: 'n-escape' },
    h('div', null, h('b', null, 'Nexus gap: '), why),
    node.ch ? h('div', { style: { marginTop: 6 } }, resolveChildren(node.ch, ctx)) : null
  );
}

// ---------------------------------------------------------------------------------------------
// Nexus-approximation components — one entry per component this renderer hand-implements.
// Anything not listed here falls through to renderGenericKnown (still real, just lower preview
// fidelity — never silently treated as an Escape).
// ---------------------------------------------------------------------------------------------

const BADGE_TONE_ALIAS = { error: 'danger', caution: 'warning' };
const toneClass = (tone) => `n-tone-${BADGE_TONE_ALIAS[tone] || tone || 'neutral'}`;

// Real React function component — the only renderer here that needs its own local hook, so it's
// the only one mounted via createElement instead of called as a plain function. One instance per
// RowActionsMenu node in the tree; React's own reconciliation keeps each one's `open` state
// independent (keyed by position in the tree, same as any other list of React elements).
function RowActionsMenuImpl({ node, ctx }) {
  const [open, setOpen] = React.useState(false);
  const items = prop(node, 'items', ctx, []) || [];
  return h(
    'span',
    { className: 'n-row-actions-menu' },
    h('button', { className: 'n-icon-button', title: prop(node, 'label', ctx, 'Más acciones'), onClick: () => setOpen((v) => !v) }, '⋯'),
    open &&
      h(
        'div',
        { className: 'n-menu' },
        items.map((it, i) =>
          h(
            'button',
            {
              key: i,
              disabled: !!it.disabled,
              onClick: () => {
                setOpen(false);
                if (typeof it.onSelect === 'function') it.onSelect();
              },
            },
            it.label
          )
        )
      )
  );
}

const COMPONENTS = {
  AnnouncementBar: (node, ctx) => h('div', { className: 'n-announcement' }, prop(node, 'text', ctx, '')),

  PageHeader: (node, ctx) =>
    h(
      'div',
      { className: 'n-page-header' },
      h('h1', null, prop(node, 'title', ctx, '')),
      prop(node, 'description', ctx) ? h('p', null, prop(node, 'description', ctx)) : null,
      prop(node, 'action', ctx) ? h('div', { className: 'n-actions' }, prop(node, 'action', ctx)) : null
    ),

  Button: (node, ctx) => {
    const variant = prop(node, 'variant', ctx, 'secondary');
    return h(
      'button',
      { className: `n-button n-button-${variant}`, onClick: prop(node, 'onClick', ctx), disabled: !!prop(node, 'disabled', ctx) },
      resolveChildren(node.ch, ctx)
    );
  },

  IconButton: (node, ctx) =>
    h(
      'button',
      { className: 'n-icon-button', onClick: prop(node, 'onClick', ctx), disabled: !!prop(node, 'disabled', ctx), title: prop(node, 'label', ctx) },
      resolveChildren(node.ch, ctx) || '•'
    ),

  Badge: (node, ctx) => h('span', { className: `n-badge ${toneClass(prop(node, 'tone', ctx))}` }, resolveChildren(node.ch, ctx)),
  Tag: (node, ctx) =>
    h(
      'span',
      { className: 'n-tag' },
      resolveChildren(node.ch, ctx),
      prop(node, 'onRemove', ctx) ? h('button', { onClick: prop(node, 'onRemove', ctx), style: { border: 'none', background: 'none', cursor: 'pointer', padding: 0, marginLeft: 4 } }, '×') : null
    ),

  Alert: (node, ctx) =>
    h(
      'div',
      { className: `n-alert ${toneClass(prop(node, 'variant', ctx, 'info'))}` },
      h('div', null, prop(node, 'title', ctx) ? h('strong', { style: { display: 'block', marginBottom: 2 } }, prop(node, 'title', ctx)) : null, resolveChildren(node.ch, ctx))
    ),

  SurfaceCard: (node, ctx) =>
    h(
      'div',
      { className: 'n-surface-card' },
      prop(node, 'title', ctx) || prop(node, 'headerAction', ctx)
        ? h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 } }, h('strong', null, prop(node, 'title', ctx)), prop(node, 'headerAction', ctx))
        : null,
      resolveChildren(node.ch, ctx),
      prop(node, 'footer', ctx) ? h('div', { style: { marginTop: 12, borderTop: '1px solid var(--t1-border)', paddingTop: 10 } }, prop(node, 'footer', ctx)) : null
    ),

  Input: (node, ctx) => {
    const value = valueOf(node, 'value', ctx, '');
    const onChange = handlerOf(node, 'onChange', ctx, (v) => v);
    return h(
      'div',
      { className: 'n-field' },
      prop(node, 'label', ctx) ? h('label', null, prop(node, 'label', ctx)) : null,
      h('input', {
        className: 'n-input',
        type: prop(node, 'type', ctx, 'text'),
        placeholder: prop(node, 'placeholder', ctx),
        disabled: !!prop(node, 'disabled', ctx),
        readOnly: !!prop(node, 'readOnly', ctx),
        value: value ?? '',
        onChange: onChange ? (e) => onChange(e.target.value) : undefined,
      }),
      prop(node, 'helper', ctx) ? h('div', { className: 'n-help' }, prop(node, 'helper', ctx)) : null
    );
  },

  Textarea: (node, ctx) => {
    const value = valueOf(node, 'value', ctx, '');
    const onChange = handlerOf(node, 'onChange', ctx, (v) => v);
    return h(
      'div',
      { className: 'n-field' },
      prop(node, 'label', ctx) ? h('label', null, prop(node, 'label', ctx)) : null,
      h('textarea', {
        className: 'n-textarea',
        rows: prop(node, 'rows', ctx, 4),
        placeholder: prop(node, 'placeholder', ctx),
        disabled: !!prop(node, 'disabled', ctx),
        value: value ?? '',
        onChange: onChange ? (e) => onChange(e.target.value) : undefined,
      })
    );
  },

  Select: (node, ctx) => {
    const options = prop(node, 'options', ctx, []) || [];
    const value = valueOf(node, 'value', ctx, '');
    const onChange = handlerOf(node, 'onChange', ctx, (v) => v);
    return h(
      'div',
      { className: 'n-field' },
      prop(node, 'label', ctx) ? h('label', null, prop(node, 'label', ctx)) : null,
      h(
        'select',
        { className: 'n-select', disabled: !!prop(node, 'disabled', ctx), value: value ?? '', onChange: onChange ? (e) => onChange(e.target.value) : undefined },
        options.map((opt, i) => h('option', { key: opt.value ?? i, value: opt.value }, opt.label ?? String(opt.value)))
      )
    );
  },

  Checkbox: (node, ctx) => {
    const checked = valueOf(node, 'checked', ctx, false);
    const onCheckedChange = handlerOf(node, 'onCheckedChange', ctx, (v) => v);
    return h(
      'label',
      { className: 'n-checkbox-row' },
      h('input', { type: 'checkbox', disabled: !!prop(node, 'disabled', ctx), checked: !!checked, onChange: onCheckedChange ? (e) => onCheckedChange(e.target.checked) : undefined }),
      prop(node, 'label', ctx)
    );
  },

  Switch: (node, ctx) => {
    const checked = valueOf(node, 'checked', ctx, false);
    const onCheckedChange = handlerOf(node, 'onCheckedChange', ctx, (v) => v);
    return h(
      'label',
      { className: 'n-switch-row' },
      h('input', { type: 'checkbox', disabled: !!prop(node, 'disabled', ctx), checked: !!checked, onChange: onCheckedChange ? (e) => onCheckedChange(e.target.checked) : undefined }),
      prop(node, 'label', ctx)
    );
  },

  Tabs: (node, ctx) => {
    // `tabs` stays RAW here — each tab's `content` is a deferred Node template, resolved once,
    // only for whichever tab is active (resolving the whole array eagerly would build a React
    // element for every tab's content on every render, and re-resolving it later double-resolves
    // an already-built element instead of the original JSON).
    const tabs = (node.p && Array.isArray(node.p.tabs)) ? node.p.tabs : [];
    const activeId = valueOf(node, 'activeId', ctx, tabs[0] && tabs[0].id);
    const onSelect = handlerOf(node, 'onSelect', ctx, (id) => id);
    const active = tabs.find((t) => t.id === activeId) || tabs[0];
    return h(
      'div',
      null,
      h(
        'div',
        { className: 'n-tabs' },
        tabs.map((t) => h('button', { key: t.id, className: `n-tab${t.id === activeId ? ' active' : ''}`, onClick: () => onSelect && onSelect(t.id) }, resolveValue(t.label, ctx)))
      ),
      active && active.content !== undefined ? h('div', { className: 'n-tab-panel' }, resolveValue(active.content, ctx)) : null
    );
  },

  DataTable: (node, ctx) => {
    // `columns` stays RAW here — `cell` is a deferred per-row Node/`$row` template that must be
    // resolved fresh for EACH row with that row's own context. Resolving the whole `columns` array
    // up front (as `prop()` would) builds `cell` into a React element with no row bound yet, and
    // the per-row loop below would then double-resolve that already-built element instead of the
    // original JSON template.
    const columns = (node.p && Array.isArray(node.p.columns)) ? node.p.columns : [];
    const rows = prop(node, 'rows', ctx, []) || [];
    const rowKeyField = node.p ? node.p.rowKey : undefined;
    if (!rows.length) {
      return prop(node, 'empty', ctx) || h('div', { className: 'n-empty-state' }, h('h3', null, 'Sin filas'), 'Esta tabla no tiene datos que mostrar.');
    }
    return h(
      'table',
      { className: 'n-table' },
      h('thead', null, h('tr', null, columns.map((c) => h('th', { key: c.key, className: c.align === 'right' ? 'align-right' : '' }, resolveValue(c.header, ctx))))),
      h(
        'tbody',
        null,
        rows.map((row, ri) =>
          h(
            'tr',
            { key: rowKeyField ? row[rowKeyField] : ri },
            columns.map((c) =>
              h('td', { key: c.key, className: c.align === 'right' ? 'align-right' : '' }, c.cell !== undefined ? resolveValue(c.cell, { ...ctx, row }) : row[c.key])
            )
          )
        )
      )
    );
  },

  Pagination: (node, ctx) => {
    const page = valueOf(node, 'page', ctx, 1);
    const pageCount = prop(node, 'pageCount', ctx, 1);
    if (pageCount <= 1) return null;
    const onPageChange = handlerOf(node, 'onPageChange', ctx, (n) => n);
    const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
    return h(
      'div',
      { className: 'n-pagination' },
      h('nav', { 'aria-label': prop(node, 'label', ctx, 'Paginación') }),
      pages.map((n) => h('button', { key: n, className: n === page ? 'active' : '', onClick: onPageChange ? () => onPageChange(n) : undefined }, n))
    );
  },

  EmptyState: (node, ctx) =>
    h(
      'div',
      { className: 'n-empty-state' },
      prop(node, 'icon', ctx),
      h('h3', null, prop(node, 'title', ctx, 'Sin datos')),
      prop(node, 'body', ctx) ? h('div', null, prop(node, 'body', ctx)) : null,
      prop(node, 'action', ctx) ? h('div', { style: { marginTop: 12 } }, prop(node, 'action', ctx)) : null
    ),

  Avatar: (node, ctx) => {
    const src = prop(node, 'src', ctx);
    if (src) return h('img', { src, alt: prop(node, 'name', ctx, ''), className: 'n-avatar', style: { objectFit: 'cover' } });
    return h('span', { className: 'n-avatar' }, (prop(node, 'name', ctx, '?') || '?').slice(0, 2).toUpperCase());
  },

  Toast: (node, ctx) => h('div', { className: 'n-toast' }, resolveChildren(node.ch, ctx)),
  ToastProvider: (node, ctx) => h(React.Fragment, null, resolveChildren(node.ch, ctx)),

  Dialog: (node, ctx) => {
    const open = valueOf(node, 'open', ctx, false);
    if (!open) return null;
    const onClose = handlerOf(node, 'onClose', ctx, () => false);
    return h(
      'div',
      { className: 'n-dialog-overlay', onClick: onClose },
      h(
        'div',
        { className: 'n-dialog', onClick: (e) => e.stopPropagation() },
        prop(node, 'title', ctx) ? h('h3', null, prop(node, 'title', ctx)) : null,
        h('div', null, resolveChildren(node.ch, ctx)),
        prop(node, 'footer', ctx) ? h('div', { className: 'n-dialog-actions' }, prop(node, 'footer', ctx)) : null
      )
    );
  },

  // A real React component (not a plain function) — it owns local open/closed state via a hook,
  // so it MUST be mounted through createElement, never called directly like the other renderers.
  RowActionsMenu: (node, ctx) => h(RowActionsMenuImpl, { node, ctx }),

  RichText: (node, ctx) => h('div', null, resolveChildren(node.ch, ctx)),
};

// Soft-generic renderer for real Nexus components we haven't hand-built a visual for yet (mostly
// marketing/landing surfaces: Hero, Banner, Collage, SectionStack, T1LifestyleCards…). Keeps the
// tree readable and honest — it IS a real component, just not invested in preview fidelity yet.
function renderGenericKnown(node, ctx) {
  const label = prop(node, 'title', ctx) || prop(node, 'heading', ctx) || prop(node, 'text', ctx);
  return h(
    'div',
    { className: 'n-surface-card' },
    h('div', { style: { fontSize: 11, color: 'var(--t1-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: 6 } }, node.c),
    label ? h('div', { style: { fontWeight: 600, marginBottom: 4 } }, label) : null,
    resolveChildren(node.ch, ctx)
  );
}

function renderNode(node, ctx) {
  if (!node || typeof node !== 'object') return node;
  if (node.c === 'Box') return renderBox(node, ctx);
  if (node.c === 'Escape') return renderEscape(node, ctx);
  const impl = COMPONENTS[node.c];
  if (impl) return impl(node, ctx);
  return renderGenericKnown(node, ctx);
}

// ---------------------------------------------------------------------------------------------
// Preview shell (Fase 4) — preview-only chrome, never a Nexus node, never validated.
// ---------------------------------------------------------------------------------------------

function PreviewShell({ shell, screens, activeSlug, setActiveScreen, children }) {
  if (!shell || shell.kind === 'none') return children;
  const nav = shell.nav && shell.nav.length ? shell.nav : screens.map((s) => ({ label: s.title, to: s.slug }));
  return h(
    'div',
    { className: 't1-app-shell' },
    h(
      'nav',
      { className: 't1-sidebar' },
      h('div', { className: 't1-sidebar-title' }, shell.title || 'T1'),
      nav.map((item, i) =>
        h('button', { key: i, className: `t1-nav-item${item.to === activeSlug ? ' active' : ''}`, onClick: () => item.to && setActiveScreen(item.to) }, item.label)
      )
    ),
    h('div', { className: 't1-main' }, children)
  );
}

// ---------------------------------------------------------------------------------------------
// App root
// ---------------------------------------------------------------------------------------------

function App({ screens, initialSlug }) {
  const [activeSlug, setActiveScreen] = React.useState(initialSlug);
  const active = screens.find((s) => s.slug === activeSlug) || screens[0];
  const [state, setState] = React.useState(active.spec.state || {});

  React.useEffect(() => {
    setState(active.spec.state || {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSlug]);

  const ctx = { state, setState, setActiveScreen, row: null };
  const tree = h(
    PreviewShell,
    { shell: active.spec.shell, screens, activeSlug, setActiveScreen },
    h('div', null, renderNode(active.spec.root, ctx))
  );

  return h(
    React.Fragment,
    null,
    tree,
    h('div', { className: 't1-shell-badge' }, 'Vista previa T1 Studio — aproximación, no el componente Nexus real')
  );
}

function mount(screens, initialSlug) {
  const root = ReactDOM.createRoot(document.getElementById('t1-root'));
  root.render(h(App, { screens, initialSlug }));
}

window.T1StudioPreview = { mount };
