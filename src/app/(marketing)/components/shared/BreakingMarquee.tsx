"use client";

import Marquee from "react-fast-marquee";
import Link from "next/link";

interface NewsTickerItem {
  id: string;
  title: string;
  href: string;
}

export default function BreakingMarquee() {
  const breakingStories: NewsTickerItem[] = [
    {
      id: "1",
      title: "Pakistan Stock Exchange hits record high amid trade surge",
      href: "/article/psx-record-high",
    },
    {
      id: "2",
      title: "National weather center issues monsoon warning for coastal areas",
      href: "/article/weather-warning",
    },
    {
      id: "3",
      title:
        "Tech Hub initiative launched in Islamabad to boost software exports",
      href: "/article/tech-hub-islamabad",
    },
    {
      id: "4",
      title:
        "Pakistan National Cricket Team schedules upcoming series line-ups",
      href: "/article/cricket-updates",
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-900 flex h-11 items-center overflow-hidden transition-colors duration-300">
      {/* Locked Red Breaking Badge */}
      <div className="bg-red-600 text-white font-black text-[11px] tracking-widest px-4 md:px-6 h-full flex items-center shrink-0 uppercase relative z-10 select-none shadow-[4px_0_10px_rgba(0,0,0,0.15)] dark:shadow-[4px_0_10px_rgba(0,0,0,0.5)]">
        <span className="inline-block animate-pulse mr-2 h-1.5 w-1.5 rounded-full bg-white" />
        Breaking News
      </div>

      {/* Fluid Interactive Moving Content */}
      <div className="w-full h-full flex items-center text-xs text-zinc-600 dark:text-zinc-300 font-medium">
        <Marquee speed={45} pauseOnHover={true} gradient={false}>
          {breakingStories.map((story) => (
            <Link
              key={story.id}
              href={story.href}
              className="hover:text-black dark:hover:text-white transition-colors mx-12 flex items-center tracking-wide font-semibold"
            >
              <span className="text-zinc-300 dark:text-zinc-800 mr-4 font-bold select-none">
                •
              </span>
              {story.title}
            </Link>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
