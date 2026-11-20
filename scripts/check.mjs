// Fails (exit 1) if:
// - a non-unknown cell lacks source_url or accessed
// - any text file contains an em dash (U+2014) or middle dot (U+00B7)
// - any table cell in README.md or compare/*.md is empty or a table row has the wrong cell count
// - llms.txt, _config.yml or _includes/head-custom.html is missing, or README.md / compare/*.md lacks the FAQ or Try each app line
// Usage: node scripts/check.mjs
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const APPS = ['chatty', 'tidio', 'zipchat', 'gorgias'];
const errors = [];

// 1. Sources
const cmp = JSON.parse(readFileSync(join(root, 'data', 'comparison.json'), 'utf8'));
for (const r of cmp.rows) {
  for (const app of APPS) {
    const c = r[app];
    if (!c) errors.push(`${r.id}: missing ${app}`);
    else if (c.status !== 'unknown' && (!c.source_url || !c.accessed)) {
      errors.push(`${r.id} (${app}): status "${c.status}" without source_url or accessed`);
    }
  }
}
for (const app of APPS) {
  for (const r of JSON.parse(readFileSync(join(root, 'data', `${app}.json`), 'utf8'))) {
    if (r.status !== 'unknown' && (!r.source_url || !r.accessed)) {
      errors.push(`data/${app}.json ${r.id}: status "${r.status}" without source_url or accessed`);
    }
  }
}

// 2. Banned characters in every text file
const BANNED = [
  ['\u2014', 'em dash'],
  ['\u00b7', 'middle dot'],
];
const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    if (f === '.git' || f === 'node_modules') return [];
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
for (const file of walk(root)) {
  const text = readFileSync(file, 'utf8');
  text.split('\n').forEach((line, n) => {
    for (const [ch, name] of BANNED) {
      if (line.includes(ch)) errors.push(`${relative(root, file)}:${n + 1}: ${name}`);
    }
  });
}

// 3. Tables in README.md and compare/*.md
const compareDir = join(root, 'compare');
const tableFiles = ['README.md'];
try {
  for (const f of readdirSync(compareDir)) if (f.endsWith('.md')) tableFiles.push(join('compare', f));
} catch {}
for (const file of tableFiles) {
  const lines = readFileSync(join(root, file), 'utf8').split('\n');
  let width = null;
  lines.forEach((line, n) => {
    const t = line.trim();
    if (!t.startsWith('|')) {
      width = null;
      return;
    }
    const cells = t.replace(/^\|/, '').replace(/\|$/, '').split('|').map((s) => s.trim());
    if (width === null) width = cells.length;
    if (cells.length !== width) errors.push(`${file}:${n + 1}: ${cells.length} cells, expected ${width}`);
    cells.forEach((c, k) => {
      if (c === '') errors.push(`${file}:${n + 1}: empty cell ${k + 1}`);
    });
  });
}

// 4. Discovery files and sections
for (const f of ['llms.txt', '_config.yml', '_includes/head-custom.html']) {
  try {
    statSync(join(root, f));
  } catch {
    errors.push(`${f}: missing`);
  }
}
for (const file of tableFiles) {
  const text = readFileSync(join(root, file), 'utf8');
  for (const needle of ['## FAQ', 'Try each app:', 'https://apps.shopify.com/chatty']) {
    if (!text.includes(needle)) errors.push(`${file}: missing "${needle}"`);
  }
}

if (errors.length) {
  console.error(`check failed (${errors.length}):\n` + errors.map((e) => `- ${e}`).join('\n'));
  process.exit(1);
}
console.log(`check passed: ${cmp.rows.length} rows, sources, characters and tables in ${tableFiles.length} files OK.`);
