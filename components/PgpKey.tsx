'use client';

import { useState } from 'react';

const PGP_KEY = `-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEZ97q3BYJKwYBBAHaRw8BAQdA7KwLzeC5YdoAihBEyA7gO9dq0ng6ATnRhlYO
uYCODh60IGZlbWJveXBpZyA8aGFyaW1hc3NhYUBnbWFpbC5jb20+iJkEExYKAEEW
IQQ4mWlM0u5cSsBSHSd26NnRgRF/4AUCZ97q3AIbAwUJEswDAAULCQgHAgIiAgYV
CgkICwIEFgIDAQIeBwIXgAAKCRB26NnRgRF/4GqsAQCo7HM/Jq2ngIWbgx58Y3bc
Ot20grsiJSttkM1BLDl1CQD/XsBH5CEpytrs5PmJcH4JkAYpT+3/2h3L1OWH98ba
NQe4OARn3urcEgorBgEEAZdVAQUBAQdADlxKU1QMGD3Ka76lwUNafPxGEWquzv8j
dLB3wP8wXwkDAQgHiH4EGBYKACYWIQQ4mWlM0u5cSsBSHSd26NnRgRF/4AUCZ97q
3AIbDAUJEswDAAAKCRB26NnRgRF/4I1vAQC/dfxEcdAz1ciPJB/YXYvMU+w0vrop
HIoPnsJ43HBdJgD8DqBoi1n7WcT0MDtI6XDBXRBujJOrFS8K4xDXvrCopwo=
=Bd3a
-----END PGP PUBLIC KEY BLOCK-----`;

export default function PgpKey() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyKey = async () => {
    try {
      await navigator.clipboard.writeText(PGP_KEY);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy key: ', err);
    }
  };

  return (
    <div className="mt-4 border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden bg-neutral-50/50 dark:bg-neutral-900/10 backdrop-blur-sm transition-all duration-300">
      {/* Top action bar */}
      <div className="flex justify-between items-center px-4 py-3 bg-neutral-100/50 dark:bg-neutral-900/50 border-b border-neutral-200 dark:border-neutral-800">
        <span className="text-xs font-bold font-mono tracking-wider text-neutral-700 dark:text-neutral-300">
          SECURE_KEY.ASC
        </span>
        <div className="flex items-center gap-3">
          <button
            onClick={copyKey}
            className="text-[11px] font-mono font-semibold text-neutral-500 hover:text-pink-500 dark:text-neutral-400 dark:hover:text-pink-400 transition-colors"
          >
            {copied ? '[copied]' : '[copy]'}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[11px] font-mono font-semibold text-neutral-500 hover:text-pink-500 dark:text-neutral-400 dark:hover:text-pink-400 transition-colors"
          >
            {isOpen ? '[hide]' : '[show]'}
          </button>
        </div>
      </div>

      {/* Main panel */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[350px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 bg-neutral-50 dark:bg-neutral-900/40 font-mono text-[10px] sm:text-xs text-neutral-600 dark:text-neutral-400 select-all overflow-x-auto leading-relaxed border-t border-neutral-200 dark:border-neutral-800">
          <pre className="whitespace-pre">{PGP_KEY}</pre>
        </div>
      </div>
    </div>
  );
}
