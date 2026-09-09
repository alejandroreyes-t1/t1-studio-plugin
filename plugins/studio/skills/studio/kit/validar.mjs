#!/usr/bin/env node
/**
 * validar.mjs — audita un ScreenSpec contra el manifiesto de Nexus. Sin dependencias.
 *
 *   node validar.mjs pantallas/screen-guias.json [más archivos…]
 *   node validar.mjs --manifest otro-manifiesto.json pantalla.json
 *
 * Correr desde la carpeta del kit (las rutas de pantalla son relativas a donde estás parado).
 *
 * Reproduce, de forma mecánica, la auditoría que en el POC hizo un agente independiente. Reporta
 * dos cosas por separado y sale con código 1 si cualquiera de las dos es mayor que cero:
 *
 * DEFECTOS DE CONFORMIDAD (las cuatro clases del POC):
 *   1. componente inventado — no existe en el manifiesto (Box y Escape son los únicos primitivos locales)
 *   2. prop inexistente — para ese componente, o un campo que no existe dentro de un objeto tipado
 *      (una columna, un ítem de menú, una opción de select, una pestaña)
 *   3. valor ilegal — fuera del union declarado (también cuando el valor llega por `$row` desde una
 *      fila), tipo equivocado, número escrito como texto, función que no es `{ "$act": … }`, un campo
 *      `$row` que no existe en la fila, un `rowKey` que no es campo de las filas
 *   4. prop requerida faltante — en el componente o dentro de un objeto tipado
 *
 * REGLAS DE CONTENIDO (SCREENSPEC.md):
 *   R4. la pantalla abre con un AnnouncementBar de datos de ejemplo
 *   R6. sin colores fijos: ningún `#hex` en ningún valor, ningún `Box.background`
 *
 * Además lista, sin contarlos: los Escape (huecos de Nexus declarados) y advertencias de juicio
 * (Alert usado como estado fijo de página — es una región viva).
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));

// ── argumentos ────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
let manifestPath = join(HERE, 'nexus-manifest.json');
const files = [];
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--manifest') manifestPath = args[++i];
  else files.push(args[i]);
}
if (!files.length) {
  console.error('uso: node validar.mjs [--manifest nexus-manifest.json] pantalla.json [más…]');
  process.exit(2);
}

const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
const COMPONENTS = new Map(manifest.components.map((c) => [c.name, c]));
const TYPES = manifest.types ?? {};

// Los dos primitivos que el renderer aporta fuera de Nexus (SCREENSPEC.md §Layout).
const LOCAL = {
  Box: [
    { name: 'direction', type: 'enum', values: ['row', 'column'] },
    { name: 'gap', type: 'number' },
    { name: 'padding', type: 'number' },
    { name: 'align', type: 'enum', values: ['start', 'center', 'end', 'stretch', 'baseline'] },
    { name: 'justify', type: 'enum', values: ['start', 'center', 'end', 'space-between', 'space-around'] },
    { name: 'wrap', type: 'boolean' },
    { name: 'maxWidth', type: 'number' },
    { name: 'grow', type: 'number' },
    { name: 'background', type: 'string' },
  ],
  Escape: [{ name: 'why', type: 'string', required: true }],
};

// ── lectura mínima de las declaraciones TypeScript del manifiesto (`types`) ─────
// Una interfaz se vuelve una lista de campos; un alias de literales se vuelve una lista de valores.
// Lo que no encaje en esas dos formas se trata como opaco (no se valida, no se inventa).
const stripComments = (s) => s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '');
const literalUnion = (body) => {
  const b = body.trim().replace(/^\|/, '');
  const parts = b.split('|').map((x) => x.trim()).filter(Boolean);
  if (!parts.length) return null;
  const out = [];
  for (const p of parts) {
    if (/^'[^']*'$/.test(p) || /^"[^"]*"$/.test(p)) out.push(p.slice(1, -1));
    else if (/^-?\d+(\.\d+)?$/.test(p)) out.push(Number(p));
    else return null;
  }
  return out;
};
const parseFields = (body) => {
  const fields = [];
  for (const raw of body.split(';')) {
    const line = raw.trim();
    if (!line) continue;
    const m = line.match(/^(?:readonly\s+)?([A-Za-z_$][\w$]*)(\?)?\s*:\s*([\s\S]+)$/);
    if (m) fields.push({ name: m[1], required: !m[2], type: m[3].trim() });
  }
  return fields;
};
const shapeCache = new Map();
/** { kind: 'values', values } | { kind: 'fields', fields } | { kind: 'opaque' } */
const shapeOf = (typeName) => {
  if (shapeCache.has(typeName)) return shapeCache.get(typeName);
  let shape = { kind: 'opaque' };
  const decl = TYPES[typeName]?.declaration;
  if (decl) {
    const d = stripComments(decl);
    const ifc = d.match(/interface\s+[\w$]+(?:<[^>]*>)?\s*(?:extends[^{]*)?\{([\s\S]*)\}/);
    const alias = d.match(/type\s+[\w$]+(?:<[^>]*>)?\s*=\s*([\s\S]*?)\s*;?\s*$/);
    if (ifc) shape = { kind: 'fields', fields: parseFields(ifc[1]) };
    else if (alias) {
      const body = alias[1].trim();
      const values = literalUnion(body);
      const obj = body.match(/^\{([\s\S]*)\}$/);
      if (values) shape = { kind: 'values', values };
      else if (obj) shape = { kind: 'fields', fields: parseFields(obj[1]) };
    }
  }
  shapeCache.set(typeName, shape);
  return shape;
};

const isNode = (v) => v && typeof v === 'object' && !Array.isArray(v) && typeof v.c === 'string';
const isRow = (v) => v && typeof v === 'object' && !Array.isArray(v) && '$row' in v;
const isAct = (v) => v && typeof v === 'object' && !Array.isArray(v) && '$act' in v;
const isFn = (t) => /=>/.test(t);
const HEX = /#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})\b/i;
const arrayOf = (t) => {
  const s = t.replace(/<[^<>]*>/g, (g) => (/^<[A-Z][\w$]*>$/.test(g) ? g : '')).trim();
  const m = s.match(/^(?:ReadonlyArray|Array)<([A-Z][\w$]*)(?:<[^>]*>)?>$/) || s.match(/^(?:readonly\s+)?([A-Z][\w$]*)(?:<[^>]*>)?\[\]$/);
  return m ? m[1] : null;
};
const namedType = (t) => {
  const m = t.replace(/<[^>]*>/g, '').trim().match(/^([A-Z][\w$]*)$/);
  return m ? m[1] : null;
};
const inlineObject = (t) => {
  const m = t.trim().match(/^\{([\s\S]*)\}$/);
  return m ? parseFields(m[1]) : null;
};

// ── auditoría de un archivo ───────────────────────────────────────────────────
const audit = (spec) => {
  const r = {
    nodes: 0, props: 0, escapes: [],
    defects: { invented: [], unknownProp: [], badValue: [], missingRequired: [] },
    rules: [], warnings: [],
    firstComponent: null,
  };
  const seen = new Set();
  const add = (list, msg) => { if (!seen.has(msg)) { seen.add(msg); list.push(msg); } };

  /** Sustituye { "$row": campo } por el valor de la fila; registra campos que la fila no tiene. */
  const bindRow = (v, row, path, rowIdx) => {
    if (isRow(v)) {
      if (!(v.$row in row)) add(r.defects.badValue, `${path}: $row.${v.$row} no existe en la fila ${rowIdx}`);
      return row[v.$row];
    }
    if (Array.isArray(v)) return v.map((x) => bindRow(x, row, path, rowIdx));
    if (v && typeof v === 'object') {
      const o = {};
      for (const [k, x] of Object.entries(v)) o[k] = bindRow(x, row, path, rowIdx);
      return o;
    }
    return v;
  };

  const checkHex = (path, label, v) => {
    if (typeof v === 'string' && HEX.test(v)) add(r.rules, `R6 ${path}: ${label} lleva un color fijo ${v.match(HEX)[0]} — el color sale de un componente de Nexus, no de un hex`);
  };

  /** Valida un valor contra un tipo declarado (de una prop o de un campo de un objeto tipado). */
  const checkTyped = (path, owner, name, type, values, v, ctx) => {
    if (v === undefined || v === null) return;
    if (isRow(v)) { if (ctx.rowMode) add(r.defects.badValue, `${path}: $row fuera de una celda de DataTable`); return; }
    if (isAct(v)) {
      if (!isFn(type) && type !== 'ReactNode') add(r.warnings, `${path}: $act en algo que no es función (${type})`);
      return;
    }
    if (isFn(type)) { add(r.defects.badValue, `${path}: ${owner}.${name} es una función (${type}); usa { "$act": "id" }`); return; }
    if (isNode(v)) { walk(v, path, ctx); return; }

    const elem = arrayOf(type);
    if (elem) {
      if (!Array.isArray(v)) { add(r.defects.badValue, `${path}: ${owner}.${name} debe ser un array de ${elem}`); return; }
      v.forEach((item, i) => checkShape(`${path}[${i}]`, elem, shapeOf(elem), item, ctx));
      return;
    }
    if (Array.isArray(v)) {
      if (type === 'ReactNode' || /ReactNode/.test(type)) { v.forEach((x, i) => { if (isNode(x)) walk(x, `${path}[${i}]`, ctx); }); return; }
      add(r.defects.badValue, `${path}: ${owner}.${name} no es un array (${type})`);
      return;
    }
    const inline = inlineObject(type);
    if (inline) { checkShape(path, `${owner}.${name}`, { kind: 'fields', fields: inline }, v, ctx); return; }

    let legal = values;
    const tn = namedType(type);
    if (!legal && tn) {
      const s = shapeOf(tn);
      if (s.kind === 'values') legal = s.values;
      else if (s.kind === 'fields') { checkShape(path, tn, s, v, ctx); return; }
    }
    if (legal?.length) {
      const strict = legal.some((m) => m === v);
      if (!strict) {
        const loose = legal.some((m) => String(m) === String(v));
        add(r.defects.badValue, loose
          ? `${path}: ${owner}.${name} = ${JSON.stringify(v)} — es texto y el union es numérico; escribe ${v} sin comillas`
          : `${path}: ${owner}.${name} = ${JSON.stringify(v)} — legal: ${legal.map((m) => JSON.stringify(m)).join(' | ')}`);
      }
      return;
    }
    if (type === 'boolean' && typeof v !== 'boolean') add(r.defects.badValue, `${path}: ${owner}.${name} debe ser boolean, llegó ${typeof v}`);
    else if (type === 'number' && typeof v !== 'number') add(r.defects.badValue, `${path}: ${owner}.${name} debe ser number, llegó ${typeof v}`);
    else if (type === 'string' && typeof v !== 'string') add(r.defects.badValue, `${path}: ${owner}.${name} debe ser string, llegó ${typeof v}`);
    else if (typeof v === 'object') add(r.warnings, `${path}: ${owner}.${name} es un objeto de tipo ${type} que el validador no sabe leer — revísalo a mano`);
    checkHex(path, `${owner}.${name}`, v);
  };

  /** Valida un objeto contra una forma con campos (columna, ítem, opción, pestaña…). */
  const checkShape = (path, typeName, shape, v, ctx) => {
    if (shape.kind === 'values') { checkTyped(path, typeName, '', '', shape.values, v, ctx); return; }
    if (shape.kind !== 'fields') { if (isNode(v)) walk(v, path, ctx); return; }
    if (!v || typeof v !== 'object' || Array.isArray(v)) { add(r.defects.badValue, `${path}: debe ser un objeto ${typeName}`); return; }
    const byName = new Map(shape.fields.map((f) => [f.name, f]));
    for (const [k, x] of Object.entries(v)) {
      // DataTableColumn: `cell` es el sustituto JSON de `render` (SCREENSPEC.md §DataTable columns).
      if (typeName === 'DataTableColumn' && k === 'render') { add(r.defects.badValue, `${path}: render es una función; usa cell`); continue; }
      if (typeName === 'DataTableColumn' && k === 'cell') {
        if (!(isRow(x) || isNode(x) || typeof x === 'string')) add(r.defects.badValue, `${path}.cell: debe ser { "$row": … } o un Node`);
        continue; // las celdas se validan por fila, en la DataTable
      }
      const f = byName.get(k);
      if (!f) { add(r.defects.unknownProp, `${path}: ${typeName} no tiene el campo "${k}"`); continue; }
      checkTyped(`${path}.${k}`, typeName, k, f.type, undefined, x, ctx);
    }
    for (const f of shape.fields) {
      if (f.required && v[f.name] === undefined) add(r.defects.missingRequired, `${path}: ${typeName} requiere "${f.name}"`);
    }
  };

  const walk = (n, path = '', ctx = { rowMode: false }) => {
    if (Array.isArray(n)) { n.forEach((x, i) => walk(x, `${path}/ch:${i}`, ctx)); return; }
    if (!isNode(n)) return;
    if (!ctx.rowMode) r.nodes++;
    const name = n.c;
    const local = LOCAL[name];
    const comp = COMPONENTS.get(name);
    if (!local && !comp) {
      add(r.defects.invented, `${path || '/'}: <${name}> no existe en el manifiesto`);
      walk(n.ch ?? [], path, ctx);
      return;
    }
    if (comp && !ctx.rowMode && r.firstComponent === null) r.firstComponent = { name, path: path || '/' };
    const props = local ?? comp.props;
    const byName = new Map(props.map((p) => [p.name, p]));
    const p = n.p ?? {};

    if (name === 'Box' && p.background !== undefined) add(r.rules, `R6 ${path || '/'}: Box.background=${JSON.stringify(p.background)} — el color sale de un componente de Nexus, no de un Box pintado`);
    if (name === 'Escape' && !ctx.rowMode) r.escapes.push(String(p.why ?? '(sin why)'));
    if (name === 'Alert' && !ctx.rowMode) add(r.warnings, `${path || '/'}: Alert es una región viva (se anuncia al cargar); para un estado fijo de página considera otro componente`);

    let rows = null;
    if (name === 'DataTable' && Array.isArray(p.rows)) rows = p.rows;

    for (const [k, v] of Object.entries(p)) {
      if (!ctx.rowMode) r.props++;
      const here = `${path || '/'}·${k}`;
      if (name === 'DataTable' && k === 'rowKey') {
        if (typeof v !== 'string') { add(r.defects.badValue, `${here}: rowKey debe ser el nombre de un campo`); continue; }
        if (rows) rows.forEach((row, i) => { if (!row || !(v in row)) add(r.defects.badValue, `${here}: rowKey "${v}" no existe en la fila ${i}`); });
        continue;
      }
      if (name === 'DataTable' && k === 'rows') { if (!Array.isArray(v)) add(r.defects.badValue, `${here}: rows debe ser un array`); continue; }
      if (name === 'Box' && k === 'background') continue; // ya reportado como R6
      const prop = byName.get(k);
      if (!prop) { add(r.defects.unknownProp, `${here}: ${name} no tiene la prop "${k}"`); continue; }
      checkTyped(here, name, k, prop.type, prop.values, v, ctx);
    }
    // Las celdas se validan con CADA fila sustituida: un tone ilegal que llega por datos también cuenta.
    if (name === 'DataTable' && Array.isArray(p.columns) && rows) {
      p.columns.forEach((col, ci) => {
        if (!col || col.cell === undefined) return;
        const cellPath = `${path || '/'}·columns[${ci}].cell`;
        rows.forEach((row, ri) => {
          if (!row || typeof row !== 'object') return;
          const bound = bindRow(col.cell, row, cellPath, ri);
          if (isNode(bound)) walk(bound, cellPath, { rowMode: true });
        });
      });
    }
    for (const prop of props) {
      if (!prop.required) continue;
      const satisfied = p[prop.name] !== undefined || (prop.name === 'children' && Array.isArray(n.ch) && n.ch.length > 0);
      if (!satisfied) add(r.defects.missingRequired, `${path || '/'}: <${name}> requiere "${prop.name}"`);
    }
    if (n.ch !== undefined && !Array.isArray(n.ch)) add(r.defects.badValue, `${path || '/'}: ch debe ser un array`);
    (n.ch ?? []).forEach((c, i) => {
      if (typeof c === 'string') checkHex(`${path || '/'}/ch:${i}`, 'texto', c);
      walk(c, `${path}/ch:${i}`, ctx);
    });
  };

  walk(spec.root);
  if (!r.firstComponent) add(r.rules, 'R4 /: la pantalla no tiene ningún componente de Nexus');
  else if (r.firstComponent.name !== 'AnnouncementBar') add(r.rules, `R4 ${r.firstComponent.path}: la pantalla debe abrir con un AnnouncementBar de datos de ejemplo; el primer componente es <${r.firstComponent.name}>`);
  return r;
};

// ── salida ────────────────────────────────────────────────────────────────────
let exitCode = 0;
for (const file of files) {
  let spec;
  try { spec = JSON.parse(readFileSync(file, 'utf8')); }
  catch (e) { console.log(`✗ ${file}: JSON inválido — ${e.message}`); exitCode = 1; continue; }
  if (!spec || !isNode(spec.root)) { console.log(`✗ ${file}: falta "root" (SCREENSPEC.md)`); exitCode = 1; continue; }

  const r = audit(spec);
  const d = r.defects;
  const total = d.invented.length + d.unknownProp.length + d.badValue.length + d.missingRequired.length;
  const bad = total > 0 || r.rules.length > 0;
  if (bad) exitCode = 1;

  console.log(`${bad ? '✗' : '✓'} ${file} — "${spec.screen ?? '(sin nombre)'}"`);
  console.log(`  nodos: ${r.nodes} · asignaciones de props: ${r.props} · escapes: ${r.escapes.length}`);
  console.log(`  defectos de conformidad: ${total}  (componentes inventados ${d.invented.length} · props inexistentes ${d.unknownProp.length} · valores ilegales ${d.badValue.length} · requeridas faltantes ${d.missingRequired.length})`);
  for (const [k, label] of [['invented', 'componente inventado'], ['unknownProp', 'prop inexistente'], ['badValue', 'valor ilegal'], ['missingRequired', 'requerida faltante']]) {
    for (const line of d[k]) console.log(`    ✗ ${label} — ${line}`);
  }
  console.log(`  reglas de contenido rotas: ${r.rules.length}`);
  for (const line of r.rules) console.log(`    ✗ ${line}`);
  if (r.escapes.length) {
    console.log(`  escapes (huecos de Nexus declarados, no son defectos): ${r.escapes.length}`);
    for (const e of r.escapes) console.log(`    · ${e}`);
  }
  if (r.warnings.length) {
    console.log(`  advertencias (no bloquean; anótalas en el reporte): ${r.warnings.length}`);
    for (const w of r.warnings) console.log(`    ! ${w}`);
  }
  console.log('');
}
process.exit(exitCode);
