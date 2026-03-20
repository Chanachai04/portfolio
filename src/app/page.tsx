import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import dynamic from "next/dynamic";

const Certificates = dynamic(() => import("@/components/Certificates").then(mod => mod.Certificates), {
  loading: () => <div className="py-24 animate-pulse bg-slate-50 dark:bg-slate-900/50 h-[400px]" />,
  ssr: true,
});

const Portfolio = dynamic(() => import("@/components/Portfolio").then(mod => mod.Portfolio), {
  loading: () => <div className="py-24 animate-pulse bg-slate-50 dark:bg-slate-900/50 h-[400px]" />,
  ssr: true,
});

import { Contact } from "@/components/Contact";

export default function Home() {
  // Force HMR recompile
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Certificates />
        <Portfolio />
        <Contact />
      </main>
      
      <footer className="py-8 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 dark:text-slate-400">
        <p>© {new Date().getFullYear()} Chanachai Benmat. All rights reserved.</p>
      </footer>
    </div>
  );
}
