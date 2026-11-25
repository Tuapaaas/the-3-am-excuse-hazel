import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The 3 AM Excuse — a hardware wallet refusing to sign at 3 AM.
// The line speaks in the wallet's own voice: its job is keeping the coins
// safe, and at 3 AM the biggest threat to them is the owner pressing the
// button. The hour itself is the joke — this could not be said at 3 PM.
const LINE =
  "I keep your coins safe — mostly from you. At 3 AM, you are the threat. Denied.";

// The gate: entry.txt must be UTF-8 text of 1 to 200 characters, one line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry length ${LINE.length} is outside the 1-200 gate`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("entry must be a single non-empty line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length}-char entry to ${join(outDir, "entry.txt")}`);
console.log(LINE);
