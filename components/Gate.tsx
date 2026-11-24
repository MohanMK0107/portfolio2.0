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
          </div>
        </div>
      </div>
    </div>
  );
}
