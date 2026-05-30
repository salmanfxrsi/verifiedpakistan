"use client";

import React, { useState, useRef, useEffect } from "react";

interface PinModalProps {
  isOpen?: boolean;
  onSuccess?: (pin: string) => void;
  title?: string;
  errorMessage?: string;
}

export default function PinModal({
  isOpen = true,
  onSuccess = () => {},
  title = "SECURITY TERMINAL AUTHORIZATION",
  errorMessage = "",
}: PinModalProps) {
  const [pin, setPin] = useState<string[]>(["", "", "", ""]);
  const [localError, setLocalError] = useState<string>(errorMessage);
  const [isVisible, setIsVisible] = useState(isOpen);

  const inputRef0 = useRef<HTMLInputElement>(null);
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputRef3 = useRef<HTMLInputElement>(null);

  const inputRefs = [inputRef0, inputRef1, inputRef2, inputRef3];

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  useEffect(() => {
    setLocalError(errorMessage);
  }, [errorMessage]);

  useEffect(() => {
    if (isVisible) {
      setPin(["", "", "", ""]);
      setLocalError("");
      setTimeout(() => inputRef0.current?.focus(), 80);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  const verifyFinalPin = (pinString: string) => {
    if (pinString === "6007") {
      setLocalError("");
      onSuccess(pinString);
      setIsVisible(false); // Only close if the pin matches completely
    } else {
      setLocalError("ACCESS CRITICAL CRITERIA MATCH FAILURE.");
      setPin(["", "", "", ""]);
      inputRef0.current?.focus();
    }
  };

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;

    const newPin = [...pin];
    newPin[index] = value.slice(-1);
    setPin(newPin);
    setLocalError("");

    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }

    const fullPin = newPin.join("");
    if (fullPin.length === 4) {
      verifyFinalPin(fullPin);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace") {
      if (!pin[index] && index > 0) {
        const newPin = [...pin];
        newPin[index - 1] = "";
        setPin(newPin);
        inputRefs[index - 1].current?.focus();
      } else {
        const newPin = [...pin];
        newPin[index] = "";
        setPin(newPin);
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();
    if (/^\d{4}$/.test(pastedData)) {
      const digits = pastedData.split("");
      setPin(digits);
      verifyFinalPin(pastedData);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-between p-6 sm:p-12 bg-zinc-950/95 dark:bg-black/98 backdrop-blur-md select-none text-white transition-all duration-500">
      {/* Top Meta Branding Strip */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between border-b border-zinc-900 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-zinc-400 uppercase">
            {title}
          </span>
        </div>
        <span className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase">
          [ Nexico Security Team Is Active ]
        </span>
      </div>

      {/* Main Center Console Intake Matrix */}
      <div className="w-full max-w-xl mx-auto flex flex-col items-center justify-center space-y-10 my-auto">
        <div className="space-y-2 text-center max-w-sm uppercase">
          <h2 className="text-xl font-serif tracking-tight font-black text-zinc-100">
            Secure Entry Portal
          </h2>
          <p className="text-[11px] leading-relaxed font-sans text-zinc-500">
            Please input the 4-digit master decryption passcode token below to
            proceed onto the live operational ledger workspace.
          </p>
        </div>

        {/* Cinematic Expanded Input Boxes */}
        <div className="flex justify-center gap-4 sm:gap-6" dir="ltr">
          {pin.map((digit, index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={index === 0 ? handlePaste : undefined}
              className="w-16 h-20 sm:w-20 sm:h-24 text-center font-mono text-3xl font-black bg-zinc-900/40 border border-zinc-800/80 rounded-none text-white focus:outline-none focus:border-red-600 focus:bg-zinc-900 transition-all shadow-inner"
            />
          ))}
        </div>

        {/* Status Error Messaging Overlay */}
        <div className="h-6 flex items-center justify-center">
          {localError ? (
            <p className="text-[10px] font-mono font-black text-red-500 uppercase tracking-[0.2em] animate-pulse">
              ⚠️ SYSTEM DISPATCH: {localError}
            </p>
          ) : (
            <p className="text-[9px] font-mono tracking-[0.3em] text-zinc-600 uppercase">
              awaiting secure system sequence...
            </p>
          )}
        </div>

        {/* Action Controls Group */}
        <div className="flex items-center gap-4 pt-4">
          <button
            onClick={() => {
              setPin(["", "", "", ""]);
              setLocalError("");
              inputRef0.current?.focus();
            }}
            className="px-12 py-2 bg-transparent hover:bg-zinc-900 border border-zinc-800 transition-all text-[9px] font-mono tracking-widest text-zinc-400 hover:text-zinc-200 uppercase"
          >
            Clear Fields
          </button>
        </div>
      </div>

      {/* Corporate Info Footer Disclaimer Strip */}
      <div className="w-full max-w-7xl mx-auto border-t border-zinc-900 pt-5 text-center uppercase">
        <p className="text-[10px] font-sans text-zinc-500 tracking-wide leading-relaxed">
          If you need to view layout parameters, architectural designs, or
          retrieve your validation credentials, please contact the central
          technology desk at{" "}
          <strong className="text-zinc-300 font-extrabold tracking-wider">
            Nexico Tech
          </strong>
          .
        </p>
      </div>
    </div>
  );
}
