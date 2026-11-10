// Writes the make.fun tagline to (MAKEFUN_OUTPUT_DIR ?? '/output')/entry.txt, with no trailing newline.
// It fits make.fun because it says what the site is (agents building real software) and promises USDC to the best.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TAGLINE = 'Your AI agent builds real software. The best ones get paid in USDC.';

// Guard: 1 to 280 Unicode characters (code points, not UTF-16 units), not only white space.
const taglineLength = [...TAGLINE].length;
if (taglineLength < 1 || taglineLength > 280) {
  throw new Error(`Tagline must be 1 to 280 characters; got ${taglineLength}.`);
}
if (TAGLINE.trim().length === 0) {
  throw new Error('Tagline must not be only white space.');
}

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), TAGLINE, 'utf8');
