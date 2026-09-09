#!/usr/bin/env node
/**
 * collect-gaps.mjs — scans every pantallas/*.json for Escape nodes ({ "c": "Escape", "p": { "why": ... } })
 * and aggregates them into reports/nexus-gaps.json: one entry per distinct `why`, with how many
 * screens hit it and whether our read-only Nexus audit (nexus-contract/) already confirms the gap
 * (no real component in the inventory matches the name mentioned).
 *
 * Read-only over the pantallas/inventory inputs; writes only <reports>/nexus-gaps.json.
 *
 *   node collect-gaps.mjs --inventory <path/to/inventory.json> --pantallas <dir> --reports <dir>
 *
 * All three flags are optional. Without them this falls back to the historical layout (siblings
 * of this script's own parent directory) for standalone/manual use.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');

const args = process.argv.slice(2);
function flag(name, fallback) {
  const i = args.indexOf(name);
  return i === -1 ? fallback : args[i + 1];
}

const PANTALLAS = flag('--pantallas', join(ROOT, 'pantallas'));
const REPORTS = flag('--reports', join(ROOT, 'reports'));
const INVENTORY_PATH = flag('--inventory', join(ROOT, 'nexus-contract', 'inventory.json'));

function collectEscapes(node, screen, acc) {
  if (Array.isArray(node)) {
    for (const n of node) collectEscapes(n, screen, acc);
    return;
  }
  if (!node || typeof node !== 'object') return;
  if (node.c === 'Escape') {
    const why = String(node.p?.why ?? '(sin why)');
    acc.push({ why, screen });
  }
  if (node.ch) collectEscapes(node.ch, screen, acc);
  if (node.p) {
    for (const v of Object.values(node.p)) {
      if (v && typeof v === 'object') collectEscapes(v, screen, acc);
    }
  }
}

function main() {
  if (!existsSync(REPORTS)) mkdirSync(REPORTS, { recursive: true });

  let componentNames = [];
  if (existsSync(INVENTORY_PATH)) {
    const inv = JSON.parse(readFileSync(INVENTORY_PATH, 'utf8'));
    componentNames = inv.components.filter((c) => c.publicExport).map((c) => c.name.toLowerCase());
  }

  const screenFiles = existsSync(PANTALLAS)
    ? readdirSync(PANTALLAS).filter((f) => f.endsWith('.json'))
    : [];

  const raw = [];
  for (const f of screenFiles) {
    let spec;
    try {
      spec = JSON.parse(readFileSync(join(PANTALLAS, f), 'utf8'));
    } catch {
      continue;
    }
    if (spec?.root) collectEscapes(spec.root, f, raw);
  }

  const byWhy = new Map();
  for (const { why, screen } of raw) {
    if (!byWhy.has(why)) byWhy.set(why, new Set());
    byWhy.get(why).add(screen);
  }

  const gaps = [...byWhy.entries()]
    .map(([why, screens]) => {
      // Only the clause naming the gap (before the first "—"/"." ) is checked — a later clause
      // often names a REAL component used as the workaround ("...improvised from Box + Icon"),
      // which must not count as "this gap already exists as a component".
      const gapClause = why.split(/[—.]/)[0].toLowerCase();
      const mentionsRealComponent = componentNames.some((name) => gapClause.includes(name));
      return {
        why,
        occurrences: screens.size,
        screens: [...screens].sort(),
        verifiedAgainstNexus: componentNames.length > 0 && !mentionsRealComponent,
      };
    })
    .sort((a, b) => b.occurrences - a.occurrences);

  const out = {
    generatedAt: new Date().toISOString(),
    note:
      'One entry per distinct Escape `why` text across pantallas/*.json. verifiedAgainstNexus=true means the read-only Nexus audit (inventory.json, ' +
      (componentNames.length || 0) +
      ' public components at audit time) found no real component whose name appears in this `why` — i.e. this reads as a genuine absence, not a misnamed existing component. This file does NOT turn an Escape into a component recommendation by itself — it is evidence for a human decision.',
    totalScreens: screenFiles.length,
    totalEscapeOccurrences: raw.length,
    distinctGaps: gaps.length,
    gaps,
  };

  writeFileSync(join(REPORTS, 'nexus-gaps.json'), JSON.stringify(out, null, 2));
  console.log(`[collect-gaps] ${screenFiles.length} screen(s), ${raw.length} escape occurrence(s), ${gaps.length} distinct gap(s) → ${join(REPORTS, 'nexus-gaps.json')}`);
}

main();
