// Regenerates data/comparison.json, data/comparison.csv, SOURCES.md
// and the full feature table in README.md from data/<app>.json.
// Usage: node scripts/build.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const APPS = ['chatty', 'tidio', 'zipchat', 'gorgias'];
const NAMES = { chatty: 'Chatty', tidio: 'Tidio', zipchat: 'Zipchat', gorgias: 'Gorgias' };
const CATEGORIES = {
  pricing: 'Pricing',
  ai: 'AI agent',
  attr: 'Sales attribution',
  ch: 'Channels and inbox',
  plat: 'Platform',
  setup: 'Setup',
  other: 'Other',
  rating: 'Ratings',
  extra: 'App-specific details',
};
const ORDER = Object.keys(CATEGORIES);

const data = {};
for (const app of APPS) {
  data[app] = JSON.parse(readFileSync(join(root, 'data', `${app}.json`), 'utf8'));
}

// Union of ids, in schema order, then first-seen order.
const ids = [];
const feature = {};
for (const app of APPS) {
  for (const r of data[app]) {
    if (!feature[r.id]) {
      ids.push(r.id);
      feature[r.id] = r.feature;
    }
  }
}
const prefix = (id) => id.split('.')[0];
ids.sort((a, b) => ORDER.indexOf(prefix(a)) - ORDER.indexOf(prefix(b)));

const rows = ids.map((id) => {
  const row = { id, category: CATEGORIES[prefix(id)] || 'Other', feature: feature[id] };
  for (const app of APPS) {
    const r = data[app].find((x) => x.id === id);
    row[app] = r
      ? {
          value: r.value,
          status: r.status,
          source_url: r.source_url || '',
          evidence: r.evidence || '',
          accessed: r.accessed || '',
          note: r.note || '',
        }
      : { value: 'Not tracked for this app', status: 'unknown', source_url: '', evidence: '', accessed: '', note: '' };
  }
  return row;
});

const accessedAll = [...new Set(APPS.flatMap((a) => data[a].map((r) => r.accessed).filter(Boolean)))].sort();
writeFileSync(
  join(root, 'data', 'comparison.json'),
  JSON.stringify({ apps: APPS, accessed: accessedAll, rows }, null, 2) + '\n'
);

// CSV
const esc = (s) => (/[",\n]/.test(s) ? `"${String(s).replace(/"/g, '""')}"` : String(s));
const header = ['category', 'id', 'feature', ...APPS, ...APPS.map((a) => `${a}_source`)];
const csv = [header.join(',')];
for (const r of rows) {
  csv.push(
    [r.category, r.id, r.feature, ...APPS.map((a) => r[a].value), ...APPS.map((a) => r[a].source_url)]
      .map(esc)
      .join(',')
  );
}
writeFileSync(join(root, 'data', 'comparison.csv'), csv.join('\n') + '\n');

// README full table
const cell = (c) => {
  const v = String(c.value).replace(/\|/g, '/').replace(/\n/g, ' ');
  if (c.status === 'unknown' && !c.source_url) return `Unknown: ${v}`;
  if (c.status === 'unknown') return `Unknown: ${v} ([checked](${c.source_url}))`;
  return `${v} ([source](${c.source_url}))`;
};
const out = [];
for (const cat of ORDER.map((k) => CATEGORIES[k])) {
  const group = rows.filter((r) => r.category === cat);
  if (!group.length) continue;
  out.push(`### ${cat}`, '');
  out.push(`| Feature | ${APPS.map((a) => NAMES[a]).join(' | ')} |`);
  out.push(`|---|${APPS.map(() => '---').join('|')}|`);
  for (const r of group) {
    out.push(`| ${r.feature} | ${APPS.map((a) => cell(r[a])).join(' | ')} |`);
  }
  out.push('');
}
const readmePath = join(root, 'README.md');
const readme = readFileSync(readmePath, 'utf8');
const START = '<!-- FULL-TABLE:START -->';
const END = '<!-- FULL-TABLE:END -->';
const i = readme.indexOf(START);
const j = readme.indexOf(END);
if (i < 0 || j < 0) throw new Error('README markers not found');
writeFileSync(readmePath, readme.slice(0, i + START.length) + '\n\n' + out.join('\n') + '\n' + readme.slice(j));

// SOURCES.md
const src = ['# Sources', '', 'Every URL used in the data files, grouped by app. All pages were read on the date shown.', ''];
for (const app of APPS) {
  const seen = new Map();
  for (const r of data[app]) {
    if (!r.source_url) continue;
    if (!seen.has(r.source_url)) seen.set(r.source_url, { accessed: new Set(), ids: [] });
    seen.get(r.source_url).accessed.add(r.accessed);
    seen.get(r.source_url).ids.push(r.id);
  }
  src.push(`## ${NAMES[app]}`, '');
  for (const [url, v] of [...seen].sort((a, b) => a[0].localeCompare(b[0]))) {
    src.push(`- ${url} (accessed ${[...v.accessed].join(', ')}). Used for: ${v.ids.join(', ')}`);
  }
  src.push('');
}
writeFileSync(join(root, 'SOURCES.md'), src.join('\n'));

console.log(`Built ${rows.length} rows x ${APPS.length} apps.`);
