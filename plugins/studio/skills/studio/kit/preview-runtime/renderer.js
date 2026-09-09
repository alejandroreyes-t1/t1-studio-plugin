// T1 Studio — preview renderer.
//
// Plain JS, no JSX, no bundler: React.createElement directly (React/ReactDOM are vendored as
// global UMD builds — see index.html). Renders a validated ScreenSpec tree using the REAL Nexus
// components, compiled offline from Phoenix into `vendor/nexus-react.bundle.js` (see
// scripts/build-nexus-vendor.sh) and exposed as `window.NexusReact`. Prop names below are taken
// straight from nexus-contract/manifest.generated.json, which was extracted from these same real
// components — keep them in sync, not with what "seems natural".
//
// Extensions beyond the ScreenSpec documented in SCREENSPEC.md (see "Prototype extensions"):
//   - top-level `state`: flat object of primitive initial values, local to this prototype.
//   - `{ "$state": "key" }` anywhere a Value is expected — reads state.key (read-only).
//   - `{ "$bind": "key" }` on a component's controlled-value prop AND its paired change-handler
//     prop (same key on both) — the renderer wires the read and the write side. On the
//     handler prop, the component's OWN adapter below decides how the real Nexus callback's
//     argument becomes the stored value (e.g. Input.onChange gets a string already; Dialog.onClose
//     takes no argument and always writes `false`).
//   - `{ "$act": "id", "effect": {...} }` — effect is one op object, or an array of them applied in
//     order. A bare `{ "$act": "id" }` stays a no-op, for backward compatibility.
//   - top-level `shell` — preview-only chrome (sidebar/nav). Never a Nexus node, never validated,
//     never counted as a "componente Nexus utilizado".
'use strict';

const h = React.createElement;
const N = window.NexusReact || {};

// ---------------------------------------------------------------------------------------------
// Effects
// ---------------------------------------------------------------------------------------------

function applyEffect(effect, setState, setActiveScreen) {
  if (!effect) return;
  const ops = Array.isArray(effect) ? effect : [effect];
  for (const op of ops) {
    if (!op || !op.op) continue;
    switch (op.op) {
      case 'set':
        setState((s) => ({ ...s, [op.key]: op.value }));
        break;
      case 'toggle':
        setState((s) => ({ ...s, [op.key]: !s[op.key] }));
        break;
      case 'increment':
        setState((s) => ({ ...s, [op.key]: (Number(s[op.key]) || 0) + (op.by ?? 1) }));
        break;
      case 'decrement':
        setState((s) => ({ ...s, [op.key]: (Number(s[op.key]) || 0) - (op.by ?? 1) }));
        break;
      case 'navigate':
        if (op.to && setActiveScreen) setActiveScreen(op.to);
        break;
      default:
        break;
    }
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
// Layout primitive + Escape (ours — never Nexus)
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
// Real-Nexus adapters — only for components with a two-way $bind pair or deferred/lazy content.
// Everything else goes through the generic passthrough in renderNode (real props resolve 1:1,
// since the manifest was extracted FROM these same components).
// ---------------------------------------------------------------------------------------------

const ADAPTERS = {
  Input: (node, ctx) =>
    h(N.Input, {
      label: prop(node, 'label', ctx),
      placeholder: prop(node, 'placeholder', ctx),
      helper: prop(node, 'helper', ctx),
      type: prop(node, 'type', ctx),
      state: prop(node, 'state', ctx),
      disabled: !!prop(node, 'disabled', ctx),
      readOnly: !!prop(node, 'readOnly', ctx),
      id: prop(node, 'id', ctx),
      leftIcon: prop(node, 'leftIcon', ctx),
      value: valueOf(node, 'value', ctx, ''),
      onChange: handlerOf(node, 'onChange', ctx, (v) => v) || (() => {}),
    }),

  Textarea: (node, ctx) =>
    h(N.Textarea, {
      label: prop(node, 'label', ctx),
      placeholder: prop(node, 'placeholder', ctx),
      helper: prop(node, 'helper', ctx),
      rows: prop(node, 'rows', ctx),
      state: prop(node, 'state', ctx),
      disabled: !!prop(node, 'disabled', ctx),
      readOnly: !!prop(node, 'readOnly', ctx),
      id: prop(node, 'id', ctx),
      value: valueOf(node, 'value', ctx, ''),
      onChange: handlerOf(node, 'onChange', ctx, (v) => v) || (() => {}),
    }),

  Select: (node, ctx) =>
    h(N.Select, {
      label: prop(node, 'label', ctx),
      placeholder: prop(node, 'placeholder', ctx),
      disabled: !!prop(node, 'disabled', ctx),
      id: prop(node, 'id', ctx),
      options: prop(node, 'options', ctx, []) || [],
      value: valueOf(node, 'value', ctx, ''),
      onChange: handlerOf(node, 'onChange', ctx, (v) => v) || (() => {}),
    }),

  Checkbox: (node, ctx) =>
    h(N.Checkbox, {
      label: prop(node, 'label', ctx),
      disabled: !!prop(node, 'disabled', ctx),
      indeterminate: prop(node, 'indeterminate', ctx),
      id: prop(node, 'id', ctx),
      checked: !!valueOf(node, 'checked', ctx, false),
      onCheckedChange: handlerOf(node, 'onCheckedChange', ctx, (v) => v) || (() => {}),
    }),

  Switch: (node, ctx) =>
    h(N.Switch, {
      label: prop(node, 'label', ctx),
      ariaLabel: prop(node, 'ariaLabel', ctx),
      disabled: !!prop(node, 'disabled', ctx),
      checked: !!valueOf(node, 'checked', ctx, false),
      onCheckedChange: handlerOf(node, 'onCheckedChange', ctx, (v) => v) || (() => {}),
    }),

  Pagination: (node, ctx) =>
    h(N.Pagination, {
      label: prop(node, 'label', ctx),
      siblingWindow: prop(node, 'siblingWindow', ctx),
      hrefForPage: prop(node, 'hrefForPage', ctx),
      pageCount: prop(node, 'pageCount', ctx, 1),
      page: valueOf(node, 'page', ctx, 1),
      onPageChange: handlerOf(node, 'onPageChange', ctx, (n) => n),
    }),

  Dialog: (node, ctx) =>
    h(
      N.Dialog,
      {
        title: prop(node, 'title', ctx),
        closeLabel: prop(node, 'closeLabel', ctx),
        footer: prop(node, 'footer', ctx),
        variant: prop(node, 'variant', ctx),
        open: !!valueOf(node, 'open', ctx, false),
        onClose: handlerOf(node, 'onClose', ctx, () => false) || (() => {}),
      },
      resolveChildren(node.ch, ctx)
    ),

  // Tabs' real signature wants every tab's `content` already resolved into a ReactNode (it
  // decides internally which one to show) — unlike DataTable cells, there's no "only resolve the
  // active one" option here, so we resolve them all, once, per render.
  Tabs: (node, ctx) => {
    const rawTabs = node.p && Array.isArray(node.p.tabs) ? node.p.tabs : [];
    const tabs = rawTabs.map((t) => ({
      id: t.id,
      label: resolveValue(t.label, ctx),
      content: t.content !== undefined ? resolveValue(t.content, ctx) : undefined,
    }));
    return h(N.Tabs, {
      tabs,
      activeId: valueOf(node, 'activeId', ctx, rawTabs[0] && rawTabs[0].id),
      onSelect: handlerOf(node, 'onSelect', ctx, (id) => id) || (() => {}),
    });
  },

  // DataTable's real `rowKey` is a function and `columns[].render` is a function — ScreenSpec's
  // JSON-safe substitutes (`rowKey` as a field name, `cell` instead of `render`, per
  // SCREENSPEC.md §DataTable) get converted here, at the boundary, into what the real component
  // expects. `cell` must stay a RAW template resolved per-row inside `render`, not resolved once
  // up front — resolving it eagerly would build one React element shared across every row.
  DataTable: (node, ctx) => {
    const p = node.p || {};
    const rawColumns = Array.isArray(p.columns) ? p.columns : [];
    const rows = prop(node, 'rows', ctx, []) || [];
    const rowKeyField = p.rowKey;
    const columns = rawColumns.map((c) => ({
      key: c.key,
      header: resolveValue(c.header, ctx),
      align: c.align,
      render: c.cell !== undefined ? (row) => resolveValue(c.cell, { ...ctx, row }) : (row) => row[c.key],
    }));
    return h(N.DataTable, {
      columns,
      rows,
      rowKey: (row) => (rowKeyField ? row[rowKeyField] : undefined),
      caption: prop(node, 'caption', ctx),
      empty: prop(node, 'empty', ctx),
    });
  },
};

function renderNode(node, ctx) {
  if (!node || typeof node !== 'object') return node;
  if (node.c === 'Box') return renderBox(node, ctx);
  if (node.c === 'Escape') return renderEscape(node, ctx);
  const adapter = ADAPTERS[node.c];
  if (adapter) return adapter(node, ctx);
  if (N[node.c]) {
    // Generic passthrough for any other real, compiled Nexus component — every prop resolves
    // 1:1 via $row/$state/$act/nested-Node handling, which is correct as long as the component
    // has no per-item deferred content (the ADAPTERS above exist precisely for the ones that do).
    return h(N[node.c], resolveValue(node.p || {}, ctx), resolveChildren(node.ch, ctx));
  }
  return renderGenericKnown(node, ctx);
}

// Soft-generic fallback for a real Nexus component NOT compiled into vendor/nexus-react.bundle.js
// (e.g. T1FinalCTA, or anything from the chat-kit/landing subpackages) — keeps the tree readable
// and honest: it IS a real component, just not vendored here yet.
function renderGenericKnown(node, ctx) {
  const label = prop(node, 'title', ctx) || prop(node, 'heading', ctx) || prop(node, 'text', ctx);
  return h(
    'div',
    { className: 'n-generic-fallback' },
    h('div', { style: { fontWeight: 700, textTransform: 'uppercase', fontSize: 11, marginBottom: 6 } }, node.c + ' (no vendorizado en el preview)'),
    label ? h('div', { style: { fontWeight: 600, marginBottom: 4 } }, label) : null,
    resolveChildren(node.ch, ctx)
  );
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
    h('div', { className: 't1-shell-badge' }, 'Vista previa T1 Studio — componentes reales de Nexus, ensamblados para este prototipo')
  );
}

function mount(screens, initialSlug) {
  const root = ReactDOM.createRoot(document.getElementById('t1-root'));
  root.render(h(App, { screens, initialSlug }));
}

window.T1StudioPreview = { mount };
