"use client";

import { Check, Copy, User, Key } from "lucide-react";
import { useState } from "react";


export function DemoCredentials() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPass, setCopiedPass] = useState(false);

  const copyToClipboard = (text: string, isEmail: boolean) => {
    navigator.clipboard.writeText(text);
    if (isEmail) {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPass(true);
      setTimeout(() => setCopiedPass(false), 2000);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-xs bg-white/5 border border-white/10 px-4 py-3 rounded-xl max-w-fit backdrop-blur-md">
      <span className="text-neutral-400 font-medium whitespace-nowrap flex items-center gap-1.5 mr-1">

        Demo Credentials:
      </span>

      <div className="flex flex-wrap items-center gap-2">
        {/* Email Copy Item */}
        <button
          onClick={() => copyToClipboard("dancely@gmail.com", true)}
          className="group flex items-center gap-1.5 bg-black/40 hover:bg-black/60 border border-white/5 hover:border-white/20 transition-all rounded-md px-2 py-1 cursor-pointer"
          title="Copy Email"
        >
          <User className="w-3 h-3 text-neutral-500 group-hover:text-neutral-300" />
          <code className="font-mono text-neutral-300 group-hover:text-white">dancely@gmail.com</code>
          {copiedEmail ? (
            <Check className="w-3 h-3 text-emerald-500" />
          ) : (
            <Copy className="w-3 h-3 text-neutral-600 group-hover:text-neutral-400" />
          )}
        </button>

        <span className="text-neutral-700 hidden sm:block">|</span>

        {/* Password Copy Item */}
        <button
          onClick={() => copyToClipboard("Dancely@3900", false)}
          className="group flex items-center gap-1.5 bg-black/40 hover:bg-black/60 border border-white/5 hover:border-white/20 transition-all rounded-md px-2 py-1 cursor-pointer"
          title="Copy Password"
        >
          <Key className="w-3 h-3 text-neutral-500 group-hover:text-neutral-300" />
          <code className="font-mono text-neutral-300 group-hover:text-white">Dancely@3900</code>
          {copiedPass ? (
            <Check className="w-3 h-3 text-emerald-500" />
          ) : (
            <Copy className="w-3 h-3 text-neutral-600 group-hover:text-neutral-400" />
          )}
        </button>
      </div>
    </div>
  );
}
