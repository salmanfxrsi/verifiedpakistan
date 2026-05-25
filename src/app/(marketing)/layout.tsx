import type { ReactNode } from "react";
import Navbar from "./components/shared/Navbar";
import BreakingMarquee from "./components/shared/BreakingMarquee";
import Footer from "./components/shared/Footer";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
        <Navbar />
        <BreakingMarquee />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
