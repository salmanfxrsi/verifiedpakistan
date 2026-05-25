"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaChevronUp,
} from "react-icons/fa";

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    news: [
      { label: "Pakistan News", href: "/category/pakistan" },
      { label: "International", href: "/category/international" },
      { label: "Sports Coverage", href: "/category/sports" },
      { label: "Technology", href: "/category/tech" },
    ],
    company: [
      { label: "About Editorial", href: "/about" },
      { label: "Contact Bureau", href: "/contact" },
      { label: "Careers", href: "/careers" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-zinc-50 dark:bg-black text-black dark:text-white border-t border-zinc-200 dark:border-zinc-800 pt-16 pb-8 select-none font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Brand Header & Return to Top */}
        <div className="flex justify-between items-start pb-10 border-b border-zinc-200 dark:border-zinc-900">
          <div className="space-y-3">
            <Link
              href="/"
              className="tracking-tighter text-xl font-black uppercase flex items-center"
            >
              <span className="text-black dark:text-white">VERIFIED</span>
              <span className="ml-1.5 bg-black dark:bg-white text-white dark:text-black px-1.5 py-0.5 text-[11px] font-black tracking-widest rounded-sm">
                PAKISTAN
              </span>
            </Link>
            <p className="text-zinc-400 dark:text-zinc-500 text-[11px] tracking-widest uppercase font-bold">
              Independent Journalism & Real-time Analytics
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 text-[10px] tracking-widest text-zinc-400 dark:text-zinc-500 hover:text-black dark:hover:text-white uppercase font-bold transition-colors"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <FaChevronUp
              size={8}
              className="transform group-hover:-translate-y-0.5 transition-transform"
            />
          </button>
        </div>

        {/* Middle Section: Structural Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 py-12 border-b border-zinc-200 dark:border-zinc-900">
          {/* Column 1: Mission Statement */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-[10px] tracking-widest font-black text-zinc-400 dark:text-zinc-600 uppercase">
              Mission
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs tracking-wide leading-relaxed font-medium">
              Verified Pakistan operates under strict editorial verification
              protocols to distribute accurate, non-partisan, high-fidelity
              dispatches across the region.
            </p>
          </div>

          {/* Column 2: Status Desk / Coming Soon Feature */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-[10px] tracking-widest font-black text-zinc-400 dark:text-zinc-600 uppercase">
              Status Desk
            </p>
            <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 rounded p-3 space-y-1.5 shadow-sm dark:shadow-none">
              <div className="flex items-center space-x-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-zinc-500"></span>
                </span>
                <span className="text-[10px] tracking-widest font-black uppercase text-zinc-700 dark:text-zinc-300">
                  SYSTEM UPDATE
                </span>
              </div>
              <p className="text-zinc-500 text-[11px] tracking-wide leading-normal font-medium">
                Our engineering team is actively working on new features. Full
                platform coming soon.
              </p>
            </div>
          </div>

          {/* Column 3: Navigation Links Matrix */}
          <div className="md:col-span-3 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <p className="text-[10px] tracking-widest font-black text-zinc-400 dark:text-zinc-600 uppercase">
                Sections
              </p>
              <ul className="space-y-2.5">
                {footerLinks.news.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`text-xs tracking-wide transition-colors font-medium hover:text-black dark:hover:text-white ${
                          isActive
                            ? "text-black dark:text-white border-b border-black dark:border-white pb-0.5"
                            : "text-zinc-600 dark:text-zinc-400"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="space-y-4">
              <p className="text-[10px] tracking-widest font-black text-zinc-400 dark:text-zinc-600 uppercase">
                Company
              </p>
              <ul className="space-y-2.5">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs tracking-wide font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Editorial Newsletter Subscription Field */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-[10px] tracking-widest font-black text-zinc-400 dark:text-zinc-600 uppercase">
              The Briefing
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs tracking-wide leading-relaxed font-medium">
              Receive daily core briefings direct from our central desk.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center border-b border-zinc-300 dark:border-zinc-700 focus-within:border-black dark:focus-within:border-white transition-colors pb-1"
            >
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full bg-transparent text-xs text-black dark:text-white focus:outline-none placeholder-zinc-400 dark:placeholder-zinc-600 uppercase tracking-wider font-semibold py-1"
                required
              />
              <button
                type="submit"
                className="text-[10px] tracking-widest font-black uppercase text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors ml-2"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section: Copyright, Attributions, and Social Blocks */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest text-zinc-400 dark:text-zinc-500 uppercase font-bold space-y-4 md:space-y-0">
          {/* Copyright Grouping */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center md:text-left">
            <span>© {currentYear} VERIFIED PAKISTAN.</span>
            <div className="hidden sm:inline text-zinc-300 dark:text-zinc-800">
              |
            </div>
            <div className="flex space-x-4">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-black dark:hover:text-zinc-300 transition-colors text-[9px]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Premium Agency Credit Line */}
          <div className="text-[9px] tracking-[0.2em] font-medium text-zinc-400 dark:text-zinc-600">
            DEVELOPED BY{" "}
            <a
              href="https://nexicotech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 dark:text-zinc-400 hover:text-black dark:hover:text-white font-black transition-colors"
            >
              NEXICO TECH
            </a>
          </div>

          {/* Minimalist Corporate Social Channels */}
          <div className="flex items-center space-x-5 text-zinc-400 dark:text-zinc-500">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              <FaFacebookF size={10} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              <FaInstagram size={10} />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              <FaTiktok size={10} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
