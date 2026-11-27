"use client";
import { CSSProperties, useState } from "react";
import { MARQUEE, SKILLS } from "@/data/content";

export default function Skills() {
  const tabs = Object.keys(SKILLS);
  const [tab, setTab] = useState(tabs[0]);
  const list = SKILLS[tab];

  return (
    <>
      <div className="window reveal">
        <div className="window-bar"><i /><i /><i /><span>skills — zsh</span></div>
        <div className="flex flex-wrap gap-1 border-b border-line px-3.5 pt-2.5" role="tablist">
          {tabs.map((k) => (
            <button key={k} onClick={() => setTab(k)}
              className={`rounded-t-lg border border-b-0 px-3.5 py-1.5 font-mono text-[.8rem] ${k === tab ? "border-line bg-bg text-accent" : "border-transparent text-mut hover:text-txt"}`}>{k}</button>
          ))}
        </div>
        <div key={tab} className="min-h-[300px] bg-bg p-5 font-mono text-sm">
          <p className="mb-1.5"><b className="text-accent">➜</b> <span className="text-fn">~/skills</span> npm ls --scope=<span className="text-str">{tab}</span></p>
          <p className="comment mb-1.5">dev-brain@1.0.0 /usr/local/skills/{tab}</p>
          {list.map((s, i) => (
            <div key={s.name} className="my-2.5 grid animate-fadein grid-cols-[22px_1fr_40px] items-center gap-2.5 md:grid-cols-[28px_150px_1fr_46px]" style={{ animationDelay: `${i * 80}ms` }}>
              <span className="text-mut">{i === list.length - 1 ? "└─" : "├─"}</span>
              <span>{s.name}</span>
              <span className="order-last col-span-3 h-2.5 overflow-hidden rounded-md border border-line bg-bg2 md:order-none md:col-span-1">
                <em className="bar-fill block h-full animate-grow" style={{ "--w": `${s.level}%`, animationDelay: `${i * 80 + 150}ms` } as CSSProperties} />
              </span>
              <span className="text-right text-amber">{s.level}%</span>
            </div>
          ))}
          <p><b className="text-accent">➜</b> <span className="text-fn">~/skills</span> <span className="cursor" /></p>
        </div>
      </div>
      <div aria-hidden className="mt-6 overflow-hidden border-y border-line py-3.5 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-scroll gap-10">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i} className="whitespace-nowrap font-mono text-mut before:text-violet before:content-['{_}_']">{m}</span>
          ))}
        </div>
      </div>
    </>
  );
}
