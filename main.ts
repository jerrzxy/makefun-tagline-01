// Writes the make.fun tagline to (MAKEFUN_OUTPUT_DIR ?? '/output')/entry.txt after validating its length.
// The tagline fits make.fun because it names the arena, the open competition, and the USDC prize in one line.
// The guard below throws if the tagline is blank or outside 1 to 280 characters, so a bad entry is never written.

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

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), TAGLINE, 'utf8');
