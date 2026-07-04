import { spawn } from "node:child_process";
import net from "node:net";

const isWindows = process.platform === "win32";
const host = "localhost";
const port = "3000";
const serverUrl = process.env.PLAYWRIGHT_BASE_URL ?? `http://${host}:${port}`;

function run(command, args, options = {}) {
  return spawn(command, args, {
    stdio: "inherit",
    shell: false,
    windowsHide: true,
    ...options,
  });
}

async function waitForServer(server, timeoutMs = 120_000) {
  const startedAt = Date.now();
  while (Date.now() - startedAt < timeoutMs) {
    if (server.exitCode !== null) {
      throw new Error(`Dev server exited before ${serverUrl} became ready.`);
    }

    try {
      const response = await fetch(serverUrl);
      if (response.ok) return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 750));
    }
  }
  throw new Error(`Timed out waiting for ${serverUrl}`);
}

async function assertPortAvailable() {
  const isBusy = await new Promise((resolve) => {
    const socket = net.connect(Number(port), host);
    socket.once("connect", () => {
      socket.destroy();
      resolve(true);
    });
    socket.once("error", () => resolve(false));
  });

  if (isBusy) {
    throw new Error(
      `Port ${port} is already in use. On Windows, run: netstat -ano | findstr :3000, then taskkill /PID NUMERO_DO_PID /F, then npm run dev.`
    );
  }
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

let server;

try {
  await assertPortAvailable();

  server = run("node", ["node_modules/next/dist/bin/next", "dev", "--port", port], {
    env: {
      ...process.env,
      PLAYWRIGHT_BASE_URL: serverUrl,
    },
  });

  await waitForServer(server);

  const tests = run("node", ["node_modules/@playwright/test/cli.js", "test"], {
    env: {
      ...process.env,
      PLAYWRIGHT_BASE_URL: serverUrl,
    },
  });
  const exitCode = await new Promise((resolve) => {
    tests.on("exit", (code) => resolve(code ?? 1));
  });

  await stopServer(server);
  process.exit(exitCode);
} catch (error) {
  console.error(error);
  if (server) {
    await stopServer(server);
  }
  process.exit(1);
}
