# ScreenSpec v0 — the format

A screen is JSON. No JSX, no CSS, no HTML. The renderer walks this tree and mounts the REAL
`@t1/nexus-react` components.

```jsonc
{
  "screen": "string — human name",
  "root": Node
}
```

## Node

```jsonc
{
  "c": "ComponentName",        // MUST be a component name from the manifest
  "p": { "propName": Value },  // props, from the manifest's prop list for that component
  "ch": [ Node | "text" ]      // optional; becomes `children`
}
```

A bare string where a Node is expected renders as text.

The 32 component names in the manifest: `Alert`, `AnnouncementBar`, `Avatar`, `Badge`, `Banner`,
`Button`, `Checkbox`, `Collage`, `DataTable`, `Dialog`, `EmptyState`, `FallbackImage`, `Hero`, `Icon`,
`IconButton`, `ImageWithText`, `Input`, `PageHeader`, `Pagination`, `RichText`, `RowActionsMenu`,
`SectionStack`, `Select`, `SurfaceCard`, `Switch`, `T1FinalCTA`, `T1LifestyleCards`, `Tabs`, `Tag`,
`Textarea`, `Toast`, `ToastProvider`. Each entry in `components[]` lists its props; a union prop
carries its legal members in `values`. When a prop's type is a NAME with no `values` (`RowAction`,
`SelectOption`, `TabItem`, `DataTableColumn`, `ColumnAlign`, `SortDirection`…), its shape is in
`types.<Name>.declaration` — an object's fields, or a union's literals. Array-shaped props
(`columns`, `items`, `options`, `tabs`) are arrays of those objects, and the validator checks every
field of every element.

**Where this file and the manifest disagree, this file wins** — it describes the JSON form the
renderer and `validar.mjs` accept. Today that is only `DataTable` (`rowKey` as a field name,
`columns[].cell` instead of `render`; see below).

## Value

| Form | Meaning |
| --- | --- |
| `"hola"`, `12`, `true` | literal |
| `{ "c": … }` | a nested Node — use this for slot props like `action`, `icon`, `empty` |
| `[ Node, … ]` | a list of nodes |
| `{ "$act": "id" }` | a callback placeholder (the POC renders it as a no-op) |

## Layout

There is no layout component in the manifest. Use:

```jsonc
{ "c": "Box", "p": { "gap": 16, "direction": "column", "padding": 24, "maxWidth": 1120 }, "ch": [ … ] }
```

`Box` is the ONLY non-Nexus primitive the renderer provides — a plain flex `<div>`. It exists so
you never need raw CSS. **Every prop maps 1:1 to the CSS property named, with CSS values** — there
is no token scale and no custom vocabulary:

| prop | type | legal values | maps to |
| --- | --- | --- | --- |
| `direction` | enum | `row` \| `column` (default `column`) | `flex-direction` |
| `gap` | number | pixels | `gap` |
| `padding` | number | pixels | `padding` |
| `align` | enum | `start` \| `center` \| `end` \| `stretch` \| `baseline` | `align-items` |
| `justify` | enum | `start` \| `center` \| `end` \| `space-between` \| `space-around` | `justify-content` |
| `wrap` | boolean | `true` \| `false` | `flex-wrap: wrap` |
| `maxWidth` | number | pixels | `max-width` + auto-centrado horizontal |
| `grow` | number | `0`, `1`, `2` … — a RATIO against sibling `grow` values | `flex-grow` + `flex-basis: 0` |
| `background` | string | **do not use** — exists for the renderer only; any value breaks rule 6 | `background` |

**There is no `width`.** To split a row, give each child a `grow` and let the ratio decide; to cap
one side, use `maxWidth` on it and `grow` on the other.

If you need something the manifest cannot express, use:

```jsonc
{ "c": "Escape", "p": { "why": "one line — what Nexus is missing" }, "ch": [ "…" ] }
```

`Escape` renders a visible dashed placeholder. **Use it rather than faking a component.** Every
Escape is a finding: it names a real gap in the design system.

## DataTable columns

`columns` is an array of column objects. The `render` prop is a function and cannot be JSON, so use
`cell` instead — the renderer converts it:

```jsonc
{
  "c": "DataTable",
  "p": {
    "rowKey": "id",                       // field name; the renderer makes the function
    "rows": [ { "id": "1", "guia": "…" } ],
    "columns": [
      { "key": "guia",   "header": "Guía",   "cell": { "$row": "guia" } },
      { "key": "estado", "header": "Estado", "cell": { "c": "Badge", "p": { "tone": { "$row": "tone" } }, "ch": [ { "$row": "estado" } ] } },
      { "key": "costo",  "header": "Costo",  "align": "right", "cell": { "$row": "costo" } }
    ]
  }
}
```

`{ "$row": "field" }` reads that field from the current row. It may appear inside a nested Node's
props or children.

## Rules

1. **Only components that exist in the manifest.** Inventing one is the failure this format exists
   to prevent.
2. **Only props that exist on that component**, with types the manifest declares.
3. **Content must be PLAUSIBLE but visibly FICTITIOUS.** Carrier names and formats are real; every
   person, address, phone, amount and volume is invented and must read as invented
   (`Cliente de ejemplo 01`, `Tel. 55 0000 0000`). Never real T1 metrics, volumes or targets —
   these files circulate. Never invent a statistic to sound credible: ask for the real number or
   omit the claim.
4. The screen opens with a demo banner declaring that every datum is an example — the FIRST Nexus
   component in the tree must be
   `{ "c": "AnnouncementBar", "p": { "text": "Datos de ejemplo — ningún dato de esta pantalla es real." } }`.
   Do not use `Alert` for this: it is a live region that announces itself on load.
5. Cover the screen, not a fragment: header, the main content, and whatever the flow needs.
6. **Never fake a component with a styled `Box`.** No hardcoded colour — no `#hex` anywhere, no
   `Box.background` — colour comes from a Nexus component's own props (`Badge.tone`, `Button.variant`,
   `SurfaceCard`…). If the catalogue cannot express it, that is an `Escape`, declared.

`validar.mjs` enforces rules 1–2 as *defectos de conformidad* and rules 4 and 6 as *reglas de
contenido*; both fail the run. Rules 3 and 5 are judgment — the auditor prompt checks them. The
validator cannot see arithmetic, copy, or whether a statistic is invented.

## Prototype extensions (interactive preview only)

These extend the format above to drive the live, interactive preview (`preview-server.mjs` +
`preview-runtime/`). They do not change rules 1–6 above and `validar.mjs` still enforces every one
of them exactly as before — a screen using these extensions must still be built ONLY from real
Nexus components with real props. Nothing here is a new component or a way around the manifest.

```jsonc
{
  "screen": "string",
  "state": { "key": /* primitive */ initialValue, … },   // NEW, optional
  "shell": { "kind": "app" | "none", … } | undefined,     // NEW, optional
  "root": Node
}
```

**`state`** — a flat object of primitive initial values (string/number/boolean), local to this one
prototype. Every key used by `$state`/`$bind` below must be declared here — the validator checks
this and fails the run if it isn't (same severity as any other `valor ilegal`).

**`{ "$state": "key" }`** as a Value — reads `state.key`. Read-only; legal anywhere a Value is
legal, same as `$row`.

**`{ "$bind": "key" }`** — two-way. Put it on a component's controlled-value prop (`value`,
`checked`, `activeId`, `open`, `page`…) to read `state.key`, AND on that same component's paired
change-handler prop (`onChange`, `onCheckedChange`, `onSelect`, `onClose`, `onPageChange`…) to
write to it — the renderer's own implementation of that component decides how the real callback's
argument becomes the stored value. Both props are still validated exactly as their real manifest
types require (a function-typed prop only accepts `$act` or `$bind`, never a literal).

```jsonc
{ "c": "Input", "p": { "label": "Buscar", "value": { "$bind": "search" }, "onChange": { "$bind": "search" } } }
```

**`{ "$act": "id", "effect": {...} }`** — `effect` is a new OPTIONAL field on the existing `$act`
placeholder. A bare `{ "$act": "id" }` is still exactly what it always was (a no-op in the POC
renderer) — existing screens keep working unchanged. `effect.op` is one of:

| op | fields | does |
| --- | --- | --- |
| `set` | `key`, `value` | `state.key = value` |
| `toggle` | `key` | flips a boolean |
| `increment` / `decrement` | `key`, `by?` (default 1) | adds/subtracts from a number |
| `navigate` | `to` (a screen slug) | switches which screen of the prototype is showing |

**`shell`** (top-level, sibling of `root`) — PREVIEW-ONLY chrome (a sidebar + nav rail), rendered
by `preview-runtime/renderer.js`'s `PreviewShell`, never by Nexus. It is NEVER validated, NEVER
counted as a "componente Nexus utilizado" in the handoff report, and never something `validar.mjs`
even looks at. `{ "kind": "none" }` (or omitting `shell`) renders the screen alone, exactly like
before. Before reaching for `shell`, check whether Nexus actually has a real
Sidebar/AppShell/navigation component (`nexus-contract/inventory.json`) — if it does, compose the
screen with that instead and skip `shell` entirely; today it doesn't, so `shell.kind: "app"` is the
fallback, clearly labeled in the preview UI as not-Nexus.

```jsonc
{ "kind": "app", "title": "T1 Operaciones", "nav": [ { "label": "Devoluciones", "to": "devoluciones" }, { "label": "Conciliación", "to": "conciliacion" } ] }
```
