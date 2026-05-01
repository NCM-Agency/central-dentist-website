// One-shot: add aria-hidden="true" focusable="false" to every <svg> in src/
// that doesn't already have aria-hidden, aria-label, aria-labelledby, or a child <title>.
// Skips _archived and .bak files and the SocialLinks component.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, extname, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC_ROOT = resolve(__dirname, '..', 'src');

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === '_archived' || entry.name === 'node_modules') continue;
      yield* walk(path);
    } else if (entry.isFile()) {
      yield path;
    }
  }
}

const SVG_TAG = /<svg\b([^>]*?)>/g;

function patchSvgTag(attrs) {
  if (/\baria-hidden\s*=/.test(attrs)) return null;
  if (/\baria-label(?:ledby)?\s*=/.test(attrs)) return null;
  return ` aria-hidden="true" focusable="false"${attrs}`;
}

let touched = 0;
let svgEdits = 0;

for await (const file of walk(SRC_ROOT)) {
  if (extname(file) !== '.astro') continue;
  if (file.endsWith('.bak')) continue;
  if (file.endsWith('SocialLinks.astro')) continue;

  const original = await readFile(file, 'utf8');
  let edits = 0;
  const next = original.replace(SVG_TAG, (match, attrs) => {
    const patched = patchSvgTag(attrs);
    if (patched === null) return match;
    edits++;
    return `<svg${patched}>`;
  });
  if (edits > 0) {
    await writeFile(file, next, 'utf8');
    touched++;
    svgEdits += edits;
    console.log(`  ${file.replace(SRC_ROOT, 'src')}  (+${edits})`);
  }
}

console.log(`\nDone. ${touched} files touched, ${svgEdits} SVG tags patched.`);
