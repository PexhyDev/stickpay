import { spawn } from "node:child_process";

const isWindows = process.platform === "win32";
const serverUrl = "http://127.0.0.1:3000";

function run(command, args, options = {}) {
  return spawn(command, args, {
    stdio: "inherit",
    shell: false,
    windowsHide: true,
    ...options,
  });
}

async function waitForServer(timeoutMs = 120_000) {
  const startedAt = Date.now();
  while (Date.now() - startedAt < timeoutMs) {
    try {
      const response = await fetch(serverUrl);
      if (response.ok) return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 750));
    }
  }
  throw new Error(`Timed out waiting for ${serverUrl}`);
}

async function stopServer(server) {
  if (server.killed || server.exitCode !== null) return;

  const stopped = new Promise((resolve) => {
    server.once("exit", resolve);
    setTimeout(resolve, 5_000);
  });

  if (isWindows && server.pid) {
    spawn("taskkill", ["/pid", String(server.pid), "/T", "/F"], {
      stdio: "ignore",
      windowsHide: true,
    });
  } else {
    server.kill("SIGTERM");
  }

  await stopped;
}

const server = run("node", ["node_modules/next/dist/bin/next", "dev", "--hostname", "127.0.0.1"]);

try {
  await waitForServer();

  const tests = run("node", ["node_modules/@playwright/test/cli.js", "test"]);
  const exitCode = await new Promise((resolve) => {
    tests.on("exit", (code) => resolve(code ?? 1));
  });

  await stopServer(server);
  process.exit(exitCode);
} catch (error) {
  console.error(error);
  await stopServer(server);
  process.exit(1);
}
