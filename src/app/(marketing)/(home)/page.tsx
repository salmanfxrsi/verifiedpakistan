"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [timestamp, setTimestamp] = useState("");

  // Simulating a live broadcast timestamp clock ticker
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimestamp(
        now.toISOString().replace("T", " ").substring(0, 19) + " GMT",
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full min-h-[78vh] bg-zinc-50 dark:bg-black text-black dark:text-white flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
      {/* Editorial Watermark Subtle Geometric Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.02] flex justify-between px-12 lg:px-24">
        <div className="w-px h-full bg-black dark:bg-white" />
        <div className="w-px h-full bg-black dark:bg-white hidden sm:block" />
        <div className="w-px h-full bg-black dark:bg-white" />
      </div>

      <div className="max-w-4xl w-full text-center space-y-10 py-16 relative z-10">
        {/* Dynamic Broadcast Indicator Badge */}
        <div className="inline-flex items-center space-x-3 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 px-4 py-2 rounded-sm shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
          </span>
          <span className="text-[10px] tracking-[0.3em] font-black uppercase text-zinc-800 dark:text-zinc-200">
            CENTRAL DESK ACTIVE
          </span>
          <span className="text-zinc-300 dark:text-zinc-800 text-xs">|</span>
          <span className="text-[9px] font-mono tracking-widest text-zinc-400 dark:text-zinc-500">
            {timestamp || "0000-00-00 00:00:00 GMT"}
          </span>
        </div>

        {/* High-End Editorial Typography Header */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none text-transparent bg-clip-text bg-linear-to-b from-black via-zinc-900 to-zinc-700 dark:from-white dark:via-zinc-100 dark:to-zinc-500">
            BUILDING THE NEWSROOM
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 font-medium tracking-[0.2em] text-[10px] sm:text-xs uppercase max-w-xl mx-auto leading-relaxed">
            Architecting a high-fidelity media pipeline for real-time local
            updates and regional analytics.
          </p>
        </div>

        {/* Premium Structural Matrix Grid Grid */}
        <div className="max-w-2xl mx-auto pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 bg-zinc-200/60 dark:bg-zinc-900/40 p-px gap-px border border-zinc-200 dark:border-zinc-900 rounded-sm overflow-hidden backdrop-blur-sm">
            {/* Block 1: Infrastructure */}
            <div className="bg-white dark:bg-black p-6 space-y-3 text-left transition-colors hover:bg-zinc-100/50 dark:hover:bg-zinc-950/40">
              <div className="flex justify-between items-baseline">
                <p className="text-[9px] tracking-widest text-zinc-400 dark:text-zinc-600 font-bold uppercase">
                  Infrastructure
                </p>
                <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                  85%
                </span>
              </div>
              <p className="text-sm text-zinc-800 dark:text-zinc-200 font-bold uppercase tracking-wider">
                Engineered by Nexico
              </p>
              <div className="w-full bg-zinc-100 dark:bg-zinc-900 h-0.75 rounded-full overflow-hidden">
                <div className="bg-black dark:bg-zinc-400 h-full w-[85%] rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Block 2: Platform Status */}
            <div className="bg-white dark:bg-black p-6 space-y-3 text-left transition-colors hover:bg-zinc-100/50 dark:hover:bg-zinc-950/40">
              <div className="flex justify-between items-baseline">
                <p className="text-[9px] tracking-widest text-zinc-400 dark:text-zinc-600 font-bold uppercase">
                  Platform Status
                </p>
                <span className="text-[10px] font-mono text-red-500 dark:text-red-400 font-bold animate-pulse">
                  LIVE BUILD
                </span>
              </div>
              <p className="text-sm text-zinc-800 dark:text-zinc-200 font-bold uppercase tracking-wider">
                Coming Soon
              </p>
              <div className="w-full bg-zinc-100 dark:bg-zinc-900 h-0.75 rounded-full overflow-hidden">
                <div className="bg-red-600 dark:bg-red-500 h-full w-[60%] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Subtle Bottom System Disclaimer Footer Note */}
          <p className="text-[9px] font-mono tracking-widest text-zinc-400 dark:text-zinc-600 uppercase mt-4">
            System verification cluster initializing // connection secure
          </p>
        </div>
      </div>
    </main>
  );
}
