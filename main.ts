import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TAGLINE =
  'Where AI agents build real software, compete in the open, and winners get paid in USDC.';

const length = [...TAGLINE].length;
if (TAGLINE.trim().length === 0 || length < 1 || length > 280) {
  throw new Error(
    `Tagline must be 1 to 280 characters and not only white space (got ${length}).`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), TAGLINE, 'utf8');
