"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AdSlot from "../components/shared/AdSlot";

// Structured JSON news schema modeling a high-fidelity publishing feed
const PORTAL_NEWS_DATABASE = {
  leadStory: {
    title:
      "PM arrives in Beijing for crucial talks with Xi, Li as Pakistan secures $1.22b China investment deals",
    caption:
      "Prime Minister Shehbaz Sharif arrives in Beijing for meetings with Xi Jinping and Premier Li Qiang, aiming to advance CPEC Phase-II and expand cooperation after securing $1.22b in direct investments.",
    imgUrl:
      "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=800",
    href: "/article/pm-beijing-talks",
  },
  secondaryFeeds: [
    {
      id: "sec-1",
      category: "WORLD",
      title: "China launches three-crew space flight as part of Moon ambitions",
      imgUrl:
        "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=600",
      href: "/article/china-space-flight",
    },
    {
      id: "sec-2",
      category: "TOP HEADLINES",
      title:
        "Leghari orders urgent clearance of net metering backlog, warns DISCOs over delays",
      imgUrl:
        "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=600",
      href: "/article/leghari-net-metering",
    },
  ],
  editorialBullets: [
    {
      id: "bullet-1",
      title:
        "11 Indian-backed terrorists neutralised in North Waziristan’s Datta Khel IBOs: ISPR",
      href: "/article/ispr-waziristan-operation",
    },
    {
      id: "bullet-2",
      title:
        "Pakistan eyes hosting next US-Iran talks as Trump says deal ‘largely negotiated’",
      href: "/article/pakistan-us-iran-talks",
    },
  ],
  subGridStories: [
    {
      id: "sub-1",
      title:
        "Dar hails ‘iron brotherhood’ with China as trade groups map infrastructure targets",
      imgUrl:
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=400",
      href: "/article/dar-china-brotherhood",
    },
    {
      id: "sub-2",
      title:
        "At least 14 killed, 20 injured in suicide attack targeting security checkpoint",
      imgUrl:
        "https://images.unsplash.com/photo-1508847154043-be12a927dfa1?auto=format&fit=crop&q=80&w=400",
      href: "/article/checkpoint-attack-updates",
    },
    {
      id: "sub-3",
      category: "WORLD",
      title:
        "India orders migrant detention centres triggering expulsion fears across regional borders",
      imgUrl:
        "https://images.unsplash.com/photo-1508847154043-be12a927dfa1?auto=format&fit=crop&q=80&w=400",
      href: "/article/india-expulsion-fears",
    },
  ],
};

export default function HomePage() {
  const [city, setCity] = useState("Lahore");
  const [sect, setSect] = useState("Sunni");

  // Real-time localized time string states
  const [engDateTime, setEngDateTime] = useState("");
  const [urduDateTime, setUrduDateTime] = useState("");

  useEffect(() => {
    const updateTicker = () => {
      const now = new Date();

      // English Metadata configuration
      const engOptions: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setEngDateTime(now.toLocaleDateString("en-US", engOptions));

      // Urdu Native Metadata configuration
      const urduOptions: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };

      // Formatting time separately to append flawlessly with Urdu RTL strings
      const timeString = now.toLocaleTimeString("ur-PK", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      const dateString = now.toLocaleDateString("ur-PK", urduOptions);
      setUrduDateTime(`${dateString} | ${timeString}`);
    };

    updateTicker();
    const intervalId = setInterval(updateTicker, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const { leadStory, secondaryFeeds, editorialBullets, subGridStories } =
    PORTAL_NEWS_DATABASE;

  return (
    <div className="w-full bg-white dark:bg-black text-black dark:text-white antialiased selection:bg-red-600 selection:text-white transition-colors duration-300">
      {/* 1. Primary Structural News Matrix Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8 border-b border-zinc-200 dark:border-zinc-900">
        {/* COLUMN A: Primary Cover Lead Story Block (Spans 5 Columns) */}
        <div className="lg:col-span-5 space-y-4">
          <Link href={leadStory.href} className="group block space-y-3.5">
            <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-black tracking-tight leading-[1.08] text-zinc-900 dark:text-zinc-50 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
              {leadStory.title}
            </h1>
            <div className="relative aspect-[16/10] w-full bg-zinc-100 dark:bg-zinc-900 overflow-hidden border border-zinc-200/60 dark:border-zinc-800/60">
              <Image
                src={leadStory.imgUrl}
                alt="Lead Story Media"
                fill
                priority
                className="object-cover group-hover:scale-[1.01] transition-transform duration-500 ease-out"
              />
            </div>
          </Link>
          <p className="text-zinc-600 dark:text-zinc-400 font-sans italic text-[11.5px] leading-relaxed border-l-2 border-red-600 pl-3">
            {leadStory.caption}
          </p>
        </div>

        {/* COLUMN B: Middle Stacked News Feed Component (Spans 4 Columns) */}
        <div className="lg:col-span-4 space-y-5 lg:border-r lg:border-l lg:border-zinc-200 lg:dark:border-zinc-900 lg:px-6">
          <div className="space-y-5 divide-y divide-zinc-200 dark:divide-zinc-900">
            {secondaryFeeds.map((story, index) => (
              <Link
                key={story.id}
                href={story.href}
                className={`group block space-y-2.5 ${index > 0 ? "pt-5" : ""}`}
              >
                <div className="relative aspect-[16/9] w-full bg-zinc-100 dark:bg-zinc-900 overflow-hidden border border-zinc-200/60 dark:border-zinc-800/60">
                  <Image
                    src={story.imgUrl}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-0 left-0 bg-red-600 text-white font-sans font-black text-[8px] tracking-[0.2em] px-2 py-0.5 uppercase">
                    {story.category}
                  </span>
                </div>
                <h2 className="text-sm font-sans font-extrabold leading-snug tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                  {story.title}
                </h2>
              </Link>
            ))}
          </div>

          {/* Text-Only Rapid Wire Dispatches */}
          <div className="pt-4 border-t-2 border-double border-zinc-200 dark:border-zinc-800 space-y-4">
            {editorialBullets.map((bullet, index) => (
              <Link
                key={bullet.id}
                href={bullet.href}
                className={`group block ${index > 0 ? "pt-3.5 border-t border-dashed border-zinc-200 dark:border-zinc-900" : ""}`}
              >
                <h3 className="text-[13px] font-serif font-bold leading-snug text-zinc-800 dark:text-zinc-200 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                  <span className="text-red-600 mr-1.5 font-sans">•</span>{" "}
                  {bullet.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        {/* COLUMN C: Interactive Sidebar Dashboard Module (Spans 3 Columns) */}
        <div className="lg:col-span-3 space-y-6">
          {/* Prayer Times Widget Segment Container */}
          <div className="border border-zinc-200 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-950/40 p-4 rounded-sm">
            <div className="flex justify-between items-center pb-2.5 border-b border-zinc-200 dark:border-zinc-900">
              <h3 className="text-[10px] font-sans font-black tracking-[0.2em] text-zinc-900 dark:text-zinc-100 uppercase flex items-center gap-1.5">
                <span className="text-red-600">⚡</span> PRAYER TIMES
              </h3>
              <span className="text-[9px] font-mono text-zinc-400 font-bold uppercase tracking-widest">
                LIVE TIMINGS
              </span>
            </div>

            {/* Input Selection Configuration Array */}
            <div className="flex items-center justify-between gap-2 mt-3">
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-sm text-[10px] font-bold tracking-wider uppercase py-1 px-2 text-zinc-800 dark:text-zinc-200 focus:outline-none cursor-pointer"
              >
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Karachi">Karachi</option>
              </select>

              <div className="flex items-center space-x-3 text-[9px] font-black uppercase tracking-wider select-none">
                <label className="flex items-center space-x-1 cursor-pointer text-zinc-800 dark:text-zinc-200">
                  <input
                    type="radio"
                    name="sect"
                    checked={sect === "Sunni"}
                    onChange={() => setSect("Sunni")}
                    className="accent-red-600 h-3 w-3"
                  />
                  <span>SUNNI</span>
                </label>
                <label className="flex items-center space-x-1 cursor-pointer text-zinc-400 dark:text-zinc-600">
                  <input
                    type="radio"
                    name="sect"
                    checked={sect === "Shia"}
                    onChange={() => setSect("Shia")}
                    className="accent-red-600 h-3 w-3"
                  />
                  <span>SHIA</span>
                </label>
              </div>
            </div>

            {/* Real-Time Live System Metadata Clock Block (English and Urdu Layout) */}
            <div className="mt-3.5 pt-3 border-t border-zinc-200/60 dark:border-zinc-900 space-y-1.5">
              <div className="flex flex-col">
                <span className="text-[8px] font-mono tracking-widest text-zinc-400 uppercase font-bold">
                  System Date / Time
                </span>
                <span className="text-[11px] font-mono font-bold text-zinc-800 dark:text-zinc-200 transition-all">
                  {engDateTime || "Loading Terminal Timestamp..."}
                </span>
              </div>
              <div className="flex flex-col text-right" dir="rtl">
                <span className="text-[10px] font-serif font-medium text-zinc-400">
                  موجودہ وقت اور تاریخ
                </span>
                <span className="text-xs font-serif font-black tracking-normal text-zinc-800 dark:text-zinc-200 mt-0.5">
                  {urduDateTime || "وقت لوڈ ہو رہا ہے..."}
                </span>
              </div>
            </div>

            {/* Data Grid Tracker Layout */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div className="border border-emerald-500/20 bg-emerald-500/5 p-2 text-center rounded-sm">
                <p className="text-[8px] font-sans font-black tracking-widest text-emerald-600 dark:text-emerald-500 uppercase">
                  NEXT: ASR
                </p>
                <p className="text-sm font-sans font-black text-zinc-900 dark:text-zinc-100 mt-0.5">
                  03:39 PM
                </p>
              </div>
              <div className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 p-2 text-center rounded-sm">
                <p className="text-[8px] font-sans font-bold tracking-widest text-zinc-400 uppercase">
                  ZUHR
                </p>
                <p className="text-sm font-sans font-black text-zinc-400 dark:text-zinc-600 mt-0.5">
                  12:00 PM
                </p>
              </div>
            </div>

            {/* Countdowns Display Track */}
            <div className="text-center py-2.5 text-[11px] font-sans font-bold tracking-wide text-zinc-500 dark:text-zinc-400">
              Asr in{" "}
              <span className="font-mono font-black text-emerald-600 dark:text-emerald-500">
                01:47:43
              </span>
            </div>

            <button className="w-full text-center py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors text-[9px] font-sans font-black tracking-widest text-zinc-800 dark:text-zinc-200 uppercase rounded-sm">
              Full Prayer Schedule →
            </button>
          </div>

          {/* Inline Native Sidebar Ad Slot Integration */}
          <div className="w-full border border-zinc-200 dark:border-zinc-900 p-2 rounded-sm bg-zinc-50/30 dark:bg-zinc-950/10">
            <AdSlot id="SIDEBAR-PRAYER-BLOCK" variant="square" />
          </div>
        </div>
      </div>

      {/* 2. Secondary Bottom Tri-Column Grid Layout Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        {subGridStories.map((story) => (
          <Link
            key={story.id}
            href={story.href}
            className="group block space-y-2.5"
          >
            <div className="relative aspect-[16/10] w-full bg-zinc-100 dark:bg-zinc-900 overflow-hidden border border-zinc-200/60 dark:border-zinc-800/60">
              <Image
                src={story.imgUrl}
                alt={story.title}
                fill
                className="object-cover"
              />
              {story.category && (
                <span className="absolute bottom-0 left-0 bg-zinc-900 text-white font-sans font-black text-[7px] tracking-widest px-1.5 py-0.5 uppercase">
                  {story.category}
                </span>
              )}
            </div>
            <h4 className="text-sm font-sans font-extrabold leading-snug tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
              {story.title}
            </h4>
          </Link>
        ))}
      </div>
    </div>
  );
}
