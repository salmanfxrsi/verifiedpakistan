'use client';

import React, { useState, useEffect } from 'react';

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  const [timestamp, setTimestamp] = useState('');

  // Hydration-safe clock stamp render
  useEffect(() => {
    setTimestamp(new Date().toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }));
  }, []);

  return (
    <div className="w-full bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 min-h-screen flex flex-col">
      {/* 2. Primary Page Router Portal Outlet Container */}
      {/* Removed the restrictive spacing blocks. This allows the page.tsx 
        to dictate its inner grid groupings freely while maintaining perfect
        horizontal constraints via standard max-width definitions.
      */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-grow">
        {children}
      </main>

      {/* 3. Global Premium Bottom Operational Disclaimer Strip */}
      <section className="w-full border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-950/20 py-3 px-4 text-center select-none">
        <p className="text-[9px] font-mono tracking-[0.3em] text-zinc-400 dark:text-zinc-600 uppercase">
          Verified Pakistan Media Wire Terminal // Real-Time Analytical Transmission Secured
        </p>
      </section>
      
    </div>
  );
}