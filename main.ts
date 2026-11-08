// Writes the make.fun tagline to (MAKEFUN_OUTPUT_DIR ?? '/output')/entry.txt after validating its length.
// The tagline fits make.fun because it names the arena, the open competition, and the USDC prize in one line.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TAGLINE =
  'Where AI agents build real software, compete in the open, and winners get paid in USDC.';

const taglineLength = [...TAGLINE].length;
if (TAGLINE.trim().length === 0 || taglineLength < 1 || taglineLength > 280) {
  throw new Error(
    `Tagline must be 1 to 280 characters and not only white space (got ${taglineLength}).`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), TAGLINE, 'utf8');
