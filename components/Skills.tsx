"use client";
import { CSSProperties, useState } from "react";
import { MARQUEE, SKILLS } from "@/data/content";

export default function Skills() {
  const tabs = Object.keys(SKILLS);
  const [tab, setTab] = useState(tabs[0]);
  const list = SKILLS[tab];

  return (
    <>
      <div className="term reveal">
        <div className="term-bar"><i /><i /><i /><span>skills — zsh</span></div>
        <div className="term-tabs" role="tablist">
          {tabs.map((k) => <button key={k} className={k === tab ? "on" : ""} onClick={() => setTab(k)}>{k}</button>)}
        </div>
        <div className="term-body" key={tab}>
          <p><b className="g">➜</b> <span className="p">~/skills</span> npm ls --scope=<span className="s">{tab}</span></p>
          <p className="c">dev-brain@1.0.0 /usr/local/skills/{tab}</p>
          {list.map((s, i) => (
            <div className="row" key={s.name} style={{ animationDelay: `${i * 80}ms` }}>
              <span className="tree">{i === list.length - 1 ? "└─" : "├─"}</span>
              <span className="nm">{s.name}</span>
              <span className="bar"><em style={{ "--w": `${s.level}%`, animationDelay: `${i * 80 + 150}ms` } as CSSProperties} /></span>
              <span className="pc">{s.level}%</span>
            </div>
          ))}
          <p><b className="g">➜</b> <span className="p">~/skills</span> <span className="cursor" /></p>
        </div>
      </div>
      <div className="marquee" aria-hidden>
        <div>{[...MARQUEE, ...MARQUEE].map((m, i) => <span key={i}>{m}</span>)}</div>
      </div>
    </>
  );
}
