"use client";
import { useEffect, useState } from "react";
import { ME } from "@/data/content";

const LINKS = ["about", "skills", "experience", "projects", "contact"];

export default function Nav() {
  const [theme, setTheme] = useState("dark");
  const [open, setOpen] = useState(false);

  useEffect(() => { setTheme(document.documentElement.dataset.theme || "dark"); }, []);

  const toggle = () => {
    const t = theme === "dark" ? "light" : "dark";
    setTheme(t);
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem("theme", t); } catch {}
  };

  const link = "w-full border-t border-line px-5 py-3.5 font-mono text-[.82rem] text-mut transition hover:text-accent md:w-auto md:border-0 md:p-0";
  const iconBtn = "h-[38px] w-[38px] rounded-lg border border-line bg-card text-base text-txt hover:border-accent";

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-[60px] items-center justify-between border-b border-line bg-bg/80 px-5 backdrop-blur-md">
      <a href="#top" className="font-mono text-mut">&lt;<b className="text-accent">{ME.handle}</b> /&gt;</a>
      <nav className={`fixed inset-x-0 top-[60px] flex flex-col overflow-hidden bg-bg transition-[max-height] duration-300 md:static md:max-h-none md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent ${open ? "max-h-[420px] border-b border-line" : "max-h-0"}`}>
        {LINKS.map((l) => <a key={l} href={`#${l}`} className={link} onClick={() => setOpen(false)}>{l}</a>)}
        <a href={ME.resume} download className={`${link} !text-accent md:rounded-md md:border md:border-accent md:px-3 md:py-1`}>resume ↓</a>
      </nav>
      <div className="flex gap-2">
        <button className={iconBtn} onClick={toggle} aria-label="Toggle theme">{theme === "dark" ? "☀" : "☾"}</button>
        <button className={`${iconBtn} md:hidden`} onClick={() => setOpen(!open)} aria-label="Menu">{open ? "✕" : "☰"}</button>
      </div>
    </header>
  );
}
