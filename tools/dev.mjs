/**
 * Start Next.js dev server.
 */
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const child = spawn("npx", ["next", "dev", "-p", "3618"], {
  cwd: root,
  stdio: "inherit",
  shell: process.platform === "win32",
  env: process.env,
});

child.on("exit", (code, signal) => {
  if (signal) {
    console.log(`[next] exited signal ${signal}`);
  } else {
    console.log(`[next] exited ${code}`);
  }
  process.exit(code ?? 1);
});

function shutdown() {
  if (!child.killed) child.kill();
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
