<<<<<<< HEAD
import { CSSProperties } from "react";
import { ME } from "@/data/content";

const LINES = [
  "ssh guest@portfolio.dev",
  "connection established ✔",
  "loading modules: react · next · typescript ✔",
  "compiling creativity ✔",
];

const SNIPPETS = [
  "const ship = () => deploy();",
  'git commit -m "it works"',
  "SELECT * FROM ideas;",
  "while (alive) { code(); }",
  "npm run build",
  "<Hello world />",
  "async function dream() {}",
  "docker compose up",
];

export default function Gate({
  leaving,
  onEnter,
}: {
  leaving: boolean;
  onEnter: () => void;
}) {
  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-bg p-5 transition duration-700 ${
        leaving
          ? "pointer-events-none scale-[1.08] opacity-0 blur-[10px]"
          : ""
      }`}
    >
      {SNIPPETS.map((s, i) => (
        <span
          key={s}
          className="absolute animate-drift whitespace-nowrap font-mono text-[.85rem] text-mut opacity-[.35]"
          style={{
            left: `${(i * 13) % 90}%`,
            top: `${(i * 29) % 85}%`,
            animationDelay: `${i * -2}s`,
          }}
        >
          {s}
        </span>
      ))}

      <div className="window relative z-[2] w-full max-w-[640px] bg-card/90">
        <div className="window-bar">
          <i />
          <i />
          <i />
          <span>welcome.sh</span>
        </div>

        <div className="min-h-[340px] p-[22px] font-mono text-sm">
          {LINES.map((l, i) => (
            <p key={l} className="mb-1.5">
              <b className="text-accent">$</b>{" "}
              <span
                className="inline-block w-0 animate-typing overflow-hidden whitespace-nowrap align-bottom"
                style={
                  {
                    "--n": l.length,
                    animationDelay: `${i * 0.95}s`,
                  } as CSSProperties
                }
              >
                {l}
              </span>
            </p>
          ))}

          <div className="mt-[22px] animate-fadein opacity-0 [animation-delay:4s] [animation-fill-mode:forwards]">
            <p className="comment">// all systems ready</p>

            <h1 className="my-1 mb-2.5 bg-gradient-to-r from-txt to-accent bg-clip-text text-[clamp(2.2rem,8vw,3.4rem)] font-bold leading-tight text-transparent">
              Hello, world<span className="text-accent">.</span>
            </h1>

            <p className="mb-[18px] font-sans text-base text-mut">
              Welcome to the portfolio of{" "}
              <b className="text-accent">{ME.name}</b>.
              <br />
              Ready to see what I&apos;ve built?
            </p>

            <button className="btn btn-primary" onClick={onEnter}>
              Enter portfolio
              <kbd className="ml-1.5 rounded border border-current px-1.5 font-mono text-xs">
                ⏎
              </kbd>
            </button>
=======
import { ME } from "@/data/content";

const LINES = ["ssh guest@portfolio.dev", "connection established ✔", "loading modules: react · next · typescript ✔", "compiling creativity ✔"];
const SNIPPETS = ["const ship = () => deploy();", "git commit -m \"it works\"", "SELECT * FROM ideas;", "while (alive) { code(); }", "npm run build", "<Hello world />", "async function dream() {}", "docker compose up"];

export default function Gate({ leaving, onEnter }: { leaving: boolean; onEnter: () => void }) {
  return (
    <div className={`gate ${leaving ? "leaving" : ""}`}>
      {SNIPPETS.map((s, i) => (
        <span key={s} className="float-code" style={{ left: `${(i * 13) % 90}%`, top: `${(i * 29) % 85}%`, animationDelay: `${i * -2}s` }}>{s}</span>
      ))}
      <div className="gate-box">
        <div className="term-bar"><i /><i /><i /><span>welcome.sh</span></div>
        <div className="gate-body">
          {LINES.map((l, i) => (
            <p key={l}><b className="g">$</b>{" "}
              <span className="type" style={{ ["--n" as string]: l.length, animationDelay: `${i * 0.95}s` } as React.CSSProperties}>{l}</span>
            </p>
          ))}
          <div className="gate-hello">
            <p className="c">// all systems ready</p>
            <h1>Hello, world<span className="dot">.</span></h1>
            <p className="gate-sub">Welcome to the portfolio of <b>{ME.name}</b>.<br />Ready to see what I&apos;ve built?</p>
            <button className="btn primary" onClick={onEnter}>Enter portfolio <kbd>⏎</kbd></button>
>>>>>>> 5b92ada4064abbda5173245b2a4b66ef7061cace
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 5b92ada4064abbda5173245b2a4b66ef7061cace
