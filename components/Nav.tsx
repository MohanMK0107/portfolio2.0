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

  return (
    <header className="nav">
      <a href="#top" className="logo">&lt;<b>{ME.handle}</b> /&gt;</a>
      <nav className={open ? "open" : ""}>
        {LINKS.map((l) => <a key={l} href={`#${l}`} onClick={() => setOpen(false)}>{l}</a>)}
        <a href={ME.resume} download className="nav-resume">resume ↓</a>
      </nav>
      <div className="nav-actions">
        <button className="icon-btn" onClick={toggle} aria-label="Toggle theme">{theme === "dark" ? "☀" : "☾"}</button>
        <button className="icon-btn burger" onClick={() => setOpen(!open)} aria-label="Menu">{open ? "✕" : "☰"}</button>
      </div>
    </header>
  );
}
