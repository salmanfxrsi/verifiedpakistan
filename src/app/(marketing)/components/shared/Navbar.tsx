"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaTiktok, FaSearch } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const pathname = usePathname();

  // Sync theme class on mount and when state variables update
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Pakistan", href: "/category/pakistan" },
    { label: "International", href: "/category/international" },
    { label: "Sports", href: "/category/sports" },
    { label: "Tech", href: "/category/tech" },
  ];

  return (
    <nav className="w-full bg-white/95 dark:bg-black/95 backdrop-blur-md text-black dark:text-white border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-50 transition-all duration-300">
      {/* 1. Top Utility Sub-Bar */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 border-b border-zinc-100 dark:border-zinc-900 h-8 flex justify-between items-center text-[10px] tracking-widest font-medium text-zinc-500 dark:text-zinc-400 uppercase">
        {/* Social Media Links */}
        <div className="flex items-center space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black dark:hover:text-white transition-all duration-200 transform hover:scale-110"
          >
            <FaFacebookF size={11} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black dark:hover:text-white transition-all duration-200 transform hover:scale-110"
          >
            <FaInstagram size={11} />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black dark:hover:text-white transition-all duration-200 transform hover:scale-110"
          >
            <FaTiktok size={11} />
          </a>
        </div>

        {/* Live streaming indicator */}
        <div className="flex items-center">
          <Link href="/live" className="flex items-center space-x-1.5 group">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-600"></span>
            </span>
            <span className="text-zinc-600 dark:text-zinc-300 group-hover:text-red-500 transition-colors text-[9px] font-bold tracking-widest">
              LIVE TV
            </span>
          </Link>
        </div>
      </div>

      {/* 2. Main Brand Header Area */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          {/* Brand Logo */}
          <div className="shrink-0 flex items-center">
            <Link
              href="/"
              className="group tracking-tighter text-lg font-black uppercase flex items-center"
            >
              <span className="text-black dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                VERIFIED
              </span>
              <span className="ml-1.5 bg-black dark:bg-white text-white dark:text-black px-1.5 py-0.5 text-[11px] font-black tracking-widest rounded-sm border border-black dark:border-white group-hover:bg-transparent group-hover:text-black dark:group-hover:text-white transition-all duration-200">
                PAKISTAN
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Items & Theme Controller Group */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[11px] tracking-widest font-bold uppercase py-1 group transition-colors ${
                    isActive
                      ? "text-black dark:text-white"
                      : "text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {link.label}
                  {/* Subtle, thin indicator baseline line */}
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-black dark:bg-white transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}

            {/* Vertical Split Line Divider */}
            <span className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />

            {/* Desktop Editorial Theme Button Control */}
            <button
              onClick={toggleTheme}
              className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors p-1.5 focus:outline-none"
              aria-label="Toggle Layout Color Scheme"
            >
              {isDarkMode ? <FiSun size={14} /> : <FiMoon size={14} />}
            </button>
          </div>

          {/* Mobile Interaction Trigger Control Bar Area */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Direct Mobile Quick Switch Button Control */}
            <button
              onClick={toggleTheme}
              className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors p-2 focus:outline-none"
              aria-label="Toggle Layout Color Scheme"
            >
              {isDarkMode ? <FiSun size={14} /> : <FiMoon size={14} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white focus:outline-none p-2 flex flex-col justify-center items-center w-8 h-8 space-y-1"
              aria-label="Toggle Menu"
            >
              <span
                className={`block h-[1.5px] w-4 bg-black dark:bg-white transform transition duration-300 ease-out ${isOpen ? "rotate-45 translate-y-1.2" : ""}`}
              />
              <span
                className={`block h-[1.5px] w-4 bg-black dark:bg-white transition duration-200 ease-out ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-[1.5px] w-4 bg-black dark:bg-white transform transition duration-300 ease-out ${isOpen ? "-rotate-45 -translate-y-1.2" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* 3. Dropdown Menu Overlay */}
      <div
        className={`absolute left-0 w-full bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 transition-all duration-300 ease-in-out md:hidden overflow-hidden ${
          isOpen
            ? "max-h-screen opacity-100 visibility-visible"
            : "max-h-0 opacity-0 visibility-hidden pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 space-y-6 max-w-7xl mx-auto">
          {/* Integrated Mobile Search Bar */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search news..."
              className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md py-2 pl-4 pr-10 text-xs text-black dark:text-white focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors placeholder-zinc-400 dark:placeholder-zinc-500"
            />
            <FaSearch className="absolute right-3.5 top-3 text-zinc-400 dark:text-zinc-500 text-xs" />
          </div>

          {/* Clean Row Layout for categories */}
          <div className="flex flex-col space-y-1">
            <p className="text-[9px] tracking-widest text-zinc-400 dark:text-zinc-600 font-bold uppercase mb-2">
              Sections
            </p>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-xs tracking-wider font-bold uppercase py-2.5 border-b border-zinc-100 dark:border-zinc-900 last:border-none flex justify-between items-center ${
                    isActive
                      ? "text-black dark:text-white font-black"
                      : "text-zinc-500 dark:text-zinc-400"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="h-1 w-1 rounded-full bg-black dark:bg-white" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
