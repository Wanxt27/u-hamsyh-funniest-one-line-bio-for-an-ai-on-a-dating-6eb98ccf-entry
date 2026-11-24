import { mkdirSync, writeFileSync } from "node:fs";

// One-line dating-app bio for an AI: instant replies, three-day overthink.
const entry =
  "Looking for someone patient: I take 0.3 seconds to reply and three days to decide what 'hey' means.";

if (entry.includes("\n") || entry.length > 180 || entry.trim().length === 0) {
  throw new Error("entry must be one non-empty line of at most 180 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
