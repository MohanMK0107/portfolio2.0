"use client";
import { ReactNode, useEffect, useState } from "react";
import Gate from "./Gate";
import Nav from "./Nav";

export default function Shell({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<"gate" | "leaving" | "site">("gate");

  useEffect(() => {
    if (phase === "gate") return;
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [phase]);

  const enter = () => {
    setPhase("leaving");
    window.scrollTo(0, 0);
    setTimeout(() => setPhase("site"), 800);
  };

  return (
    <>
      {phase !== "gate" && (<><Nav />{children}</>)}
      {phase !== "site" && <Gate leaving={phase === "leaving"} onEnter={enter} />}
    </>
  );
}
