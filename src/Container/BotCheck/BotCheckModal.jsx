import React, { useEffect, useMemo, useState } from "react";
import {
  buildClipboardCommand,
  detectOperatingSystem,
  generateNonce,
  hashNonce,
  isBotCheckVerified,
  OS_COMMANDS,
  setBotCheckVerified,
} from "../../utils/botCheck";
import { recordVisitStep } from "../../api/backend";
import "./BotCheckModal.css";

const SHOW_DELAY_MS = 2000;
const TYPE_INTERVAL_MS = 35;

function BotCheckModal() {
  const [open, setOpen] = useState(false);
  const [nonce] = useState(() => generateNonce());
  const [os] = useState(() => detectOperatingSystem());
  const [typedCommand, setTypedCommand] = useState("");
  const [hashInput, setHashInput] = useState("");
  const [error, setError] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [typingDone, setTypingDone] = useState(false);
  const [copied, setCopied] = useState(false);

  const osConfig = OS_COMMANDS[os];
  const fullCommand = useMemo(() => osConfig.buildCommand(nonce), [nonce, osConfig]);
  const clipboardCommand = useMemo(() => buildClipboardCommand(os, nonce), [os, nonce]);

  useEffect(() => {
    if (isBotCheckVerified()) {
      return undefined;
    }

    const showTimer = setTimeout(() => {
      setOpen(true);
    }, SHOW_DELAY_MS);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const scrollY = window.scrollY;
    const { style } = document.body;
    const previousOverflow = style.overflow;
    const previousPosition = style.position;
    const previousTop = style.top;
    const previousWidth = style.width;

    style.overflow = "hidden";
    style.position = "fixed";
    style.top = `-${scrollY}px`;
    style.width = "100%";

    return () => {
      style.overflow = previousOverflow;
      style.position = previousPosition;
      style.top = previousTop;
      style.width = previousWidth;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    setTypedCommand("");
    setTypingDone(false);
    setCopied(false);

    let index = 0;
    const typeTimer = setInterval(() => {
      index += 1;
      setTypedCommand(fullCommand.slice(0, index));
      if (index >= fullCommand.length) {
        clearInterval(typeTimer);
        setTypingDone(true);
      }
    }, TYPE_INTERVAL_MS);

    return () => clearInterval(typeTimer);
  }, [open, fullCommand]);

  const handleCopyCommand = async () => {
    try {
      await navigator.clipboard.writeText(clipboardCommand);
      setCopied(true);
      recordVisitStep(3).catch(() => {});
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError("Failed to copy command.");
    }
  };

  const handleCmdCopy = (event) => {
    event.preventDefault();
    event.clipboardData.setData("text/plain", clipboardCommand);
    setCopied(true);
    recordVisitStep(3).catch(() => {});
    setTimeout(() => setCopied(false), 2000);
  };

  const handleVerify = async (event) => {
    event.preventDefault();
    setError("");

    const submitted = hashInput.trim().toLowerCase();
    if (!submitted) {
      setError("Paste the hash output from your terminal.");
      return;
    }

    if (!/^[a-f0-9]{64}$/.test(submitted)) {
      setError("Hash must be a 64-character hexadecimal string.");
      return;
    }

    setVerifying(true);
    try {
      const expected = await hashNonce(nonce);
      if (submitted === expected) {
        recordVisitStep(5).catch(() => {});
        setBotCheckVerified();
        setOpen(false);
      } else {
        setError("Invalid hash. Run the command in your terminal and paste the result.");
      }
    } catch {
      setError("Verification failed. Please try again.");
    } finally {
      setVerifying(false);
    }
  };

  if (!open) {
    return null;
  }

  return (
    <div className="bot-check-overlay" role="dialog" aria-modal="true" aria-labelledby="bot-check-title">
      <div className="bot-check-modal">
        <div className="bot-check-header">
          <h2 id="bot-check-title">Are you human?&nbsp;&nbsp;Bot Verification Required</h2>
          <p>Run the hash command below using the given nonce, then submit the result.</p>
        </div>

        <div className="bot-check-body">
          <div className="bot-check-nonce">Nonce: {nonce}</div>

          <div className="bot-check-cmd-wrapper">
            <div
              className="bot-check-cmd-box"
              aria-label={`${osConfig.label} hash command`}
              onCopy={handleCmdCopy}
            >
              <span className="bot-check-prompt">{osConfig.prompt}</span>
              <span className="bot-check-command">{typedCommand}</span>
              {!typingDone && <span className="bot-check-cursor" />}
            </div>
            <button
              type="button"
              className="bot-check-copy-btn"
              onClick={handleCopyCommand}
              disabled={!typingDone}
              aria-label={`Copy ${osConfig.label} command`}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          <form onSubmit={handleVerify}>
            <div className="bot-check-input-row">
              <input
                className="bot-check-input"
                type="text"
                value={hashInput}
                onChange={(e) => setHashInput(e.target.value)}
                placeholder="Paste SHA-256 hash here"
                autoComplete="off"
                spellCheck={false}
              />
              <button className="bot-check-btn" type="submit" disabled={verifying || !typingDone}>
                {verifying ? "Verifying..." : "Verify"}
              </button>
            </div>
          </form>

          {error && <div className="bot-check-error">{error}</div>}

          <p className="bot-check-hint">{osConfig.hint}</p>
        </div>
      </div>
    </div>
  );
}

export default BotCheckModal;
