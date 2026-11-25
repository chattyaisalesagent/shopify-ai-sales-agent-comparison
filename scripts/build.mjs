// Regenerates data/comparison.json, data/comparison.csv, SOURCES.md
// the full feature table in README.md and the pair tables in compare/*.md
// from data/<app>.json, and _data/faq.json (FAQPage JSON-LD) from the FAQ sections.
// Usage: node scripts/build.mjs
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
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

// compare/chatty-vs-<app>.md pair tables
const PAIR_IDS = [
  'ai.product_recommendation',
  'ai.add_to_cart',
  'ai.checkout_link',
  'attr.revenue_report',
  'attr.method',
  'attr.order_tag',
  'pricing.free_plan',
  'pricing.entry_paid',
  'pricing.plans',
  'pricing.ai_unit',
  'pricing.ai_overage',
  'ai.channels',
  'plat.shopify',
  'plat.other_platforms',
  'setup.onboarding',
  'ai.human_handover',
  'ai.languages',
  'rating.shopify_app_store',
];
const PAIR_LABELS = { 'setup.onboarding': 'Setup help', 'plat.shopify': 'Shopify app' };
const PSTART = '<!-- PAIR-TABLE:START -->';
const PEND = '<!-- PAIR-TABLE:END -->';
for (const other of APPS.filter((a) => a !== 'chatty')) {
  const path = join(root, 'compare', `chatty-vs-${other}.md`);
  if (!existsSync(path)) continue;
  const urls = [];
  const ref = (url) => {
    if (!urls.includes(url)) urls.push(url);
    const n = urls.indexOf(url) + 1;
    return `[[${n}]][${n}]`;
  };
  const pcell = (c) => {
    const v = String(c.value).replace(/\|/g, '/').replace(/\n/g, ' ');
    const text = c.status === 'unknown' ? `Unknown: ${v}` : v;
    return c.source_url ? `${text} ${ref(c.source_url)}` : text;
  };
  const t = [`| Feature | Chatty | ${NAMES[other]} |`, '|---|---|---|'];
  for (const id of PAIR_IDS) {
    const r = rows.find((x) => x.id === id);
    if (!r) throw new Error(`pair table: missing row ${id}`);
    t.push(`| ${PAIR_LABELS[id] || r.feature} | ${pcell(r.chatty)} | ${pcell(r[other])} |`);
  }
  t.push('', 'Table sources:', '', ...urls.map((u, k) => `${k + 1}. ${u}`), '', ...urls.map((u, k) => `[${k + 1}]: ${u}`));
  const md = readFileSync(path, 'utf8');
  const a = md.indexOf(PSTART);
  const b = md.indexOf(PEND);
  if (a < 0 || b < 0) throw new Error(`compare/chatty-vs-${other}.md markers not found`);
  writeFileSync(path, md.slice(0, a + PSTART.length) + '\n\n' + t.join('\n') + '\n\n' + md.slice(b));
}

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

// _data/faq.json: FAQPage JSON-LD per page, from each page's "## FAQ" section.
// Rendered by _includes/head-custom.html, keyed by page path.
const plain = (s) =>
  s
    .replace(/\s*\((?:\[[^\]]+\]\([^)]+\)(?:,\s*)?)+\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').trim();
const faq = {};
for (const file of ['README.md', ...APPS.filter((a) => a !== 'chatty').map((a) => `compare/chatty-vs-${a}.md`)]) {
  const md = readFileSync(join(root, file), 'utf8');
  const sec = md.split('\n## FAQ\n')[1];
  if (!sec) continue;
  const items = sec
    .split('\n## ')[0]
    .split('\n### ')
    .slice(1)
    .map((block) => {
      const [q, ...rest] = block.split('\n');
      return {
        '@type': 'Question',
        name: plain(q),
        acceptedAnswer: { '@type': 'Answer', text: plain(rest.join(' ').replace(/\s+/g, ' ')) },
      };
    });
  if (items.length) faq[file] = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items };
}
mkdirSync(join(root, '_data'), { recursive: true });
writeFileSync(join(root, '_data', 'faq.json'), JSON.stringify(faq, null, 2) + '\n');

console.log(`Built ${rows.length} rows x ${APPS.length} apps.`);
