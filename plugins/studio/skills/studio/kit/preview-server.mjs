#!/usr/bin/env node
/**
 * preview-server.mjs — zero-dependency local HTTP server for the T1 Studio interactive preview.
 *
 * Serves every ScreenSpec under <dir>/pantallas/*.json as one navigable, interactive React
 * prototype (see kit/preview-runtime/renderer.js). No build step, no npm install — React/ReactDOM
 * are vendored UMD builds shipped inside the plugin.
 *
 *   node preview-server.mjs --dir <t1-studio-output dir> [--port <n>]
 *
 * --port 0 (default) picks a free port automatically. On start, writes a lockfile at
 * <dir>/.preview-lock.json with { pid, port, startedAt } so a caller can detect an already-running
 * server for this project and reuse it instead of spawning a duplicate.
 */
import { createServer } from 'node:http';
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync, unlinkSync } from 'node:fs';
import { join, dirname, extname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const HERE = dirname(fileURLToPath(import.meta.url));
const RUNTIME_DIR = join(HERE, 'preview-runtime');

const args = process.argv.slice(2);
function flag(name, fallback) {
  const i = args.indexOf(name);
  return i === -1 ? fallback : args[i + 1];
}

const DIR = flag('--dir', process.cwd());
const REQUESTED_PORT = Number(flag('--port', '0')) || 0;
const PANTALLAS = join(DIR, 'pantallas');
const LOCKFILE = join(DIR, '.preview-lock.json');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
};

function listScreens() {
  if (!existsSync(PANTALLAS)) return [];
  const files = readdirSync(PANTALLAS)
    .filter((f) => f.endsWith('.json'))
    .sort();
  const screens = [];
  for (const f of files) {
    try {
      const full = join(PANTALLAS, f);
      const spec = JSON.parse(readFileSync(full, 'utf8'));
      const slug = basename(f, '.json').replace(/^screen-/, '');
      screens.push({ slug, title: spec.screen || slug, spec, mtimeMs: statSync(full).mtimeMs });
    } catch {
      // skip a screen mid-write / malformed — never crash the preview over one bad file
    }
  }
  return screens;
}

function versionHash() {
  if (!existsSync(PANTALLAS)) return 'empty';
  const files = readdirSync(PANTALLAS)
    .filter((f) => f.endsWith('.json'))
    .sort();
  const hash = createHash('sha1');
  for (const f of files) {
    const st = statSync(join(PANTALLAS, f));
    hash.update(`${f}:${st.mtimeMs}:${st.size};`);
  }
  return hash.digest('hex').slice(0, 12);
}

function sendFile(res, path, contentType) {
  try {
    const body = readFileSync(path);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(body);
  } catch {
    res.writeHead(404);
    res.end('not found');
  }
}

function renderIndex(res, screenParam) {
  const screens = listScreens();
  if (!screens.length) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(
      '<!doctype html><meta charset="utf-8"><body style="font:14px -apple-system,sans-serif;padding:40px;color:#5b6472">' +
        'Todavía no hay pantallas en <code>' + PANTALLAS + '</code>. Pide una y recarga.</body>'
    );
    return;
  }
  const requested = screenParam && screens.find((s) => s.slug === screenParam);
  const initial = requested || [...screens].sort((a, b) => b.mtimeMs - a.mtimeMs)[0];

  const template = readFileSync(join(RUNTIME_DIR, 'index.html'), 'utf8');
  const payload = {
    screens: screens.map(({ slug, title, spec }) => ({ slug, title, spec })),
    initialSlug: initial.slug,
    version: versionHash(),
  };
  const html = template.replace('__T1_STUDIO_DATA__', JSON.stringify(payload).replace(/</g, '\\u003c'));
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
}

const server = createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');

  if (url.pathname === '/') return renderIndex(res, url.searchParams.get('screen'));
  if (url.pathname === '/api/version') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ version: versionHash() }));
  }
  if (url.pathname === '/styles.css') return sendFile(res, join(RUNTIME_DIR, 'styles.css'), MIME['.css']);
  if (url.pathname === '/nexus-tokens.css') return sendFile(res, join(RUNTIME_DIR, 'nexus-tokens.css'), MIME['.css']);
  if (url.pathname === '/renderer.js') return sendFile(res, join(RUNTIME_DIR, 'renderer.js'), MIME['.js']);
  if (url.pathname.startsWith('/vendor/')) {
    const file = join(RUNTIME_DIR, 'vendor', basename(url.pathname));
    return sendFile(res, file, MIME[extname(file)] || 'application/octet-stream');
  }
  res.writeHead(404);
  res.end('not found');
});

server.listen(REQUESTED_PORT, '127.0.0.1', () => {
  const port = server.address().port;
  writeFileSync(LOCKFILE, JSON.stringify({ pid: process.pid, port, startedAt: new Date().toISOString(), dir: DIR }, null, 2));
  console.log(`T1_STUDIO_PREVIEW_URL=http://localhost:${port}`);
});

function shutdown() {
  try {
    if (existsSync(LOCKFILE)) unlinkSync(LOCKFILE);
  } catch {
    // best-effort cleanup
  }
  process.exit(0);
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
