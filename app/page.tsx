import Shell from "@/components/Shell";
import Skills from "@/components/Skills";
import ContactForm from "@/components/ContactForm";
import { ME, EXPERIENCE, EDUCATION, PROJECTS } from "@/data/content";

const Title = ({ n, file }: { n: string; file: string }) => (
  <h2 className="title reveal"><span className="c">{n}</span> {file}</h2>
);

export default function Home() {
  return (
    <Shell>
      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero-text reveal">
            <p className="c">// hi there, I&apos;m</p>
            <h1>{ME.name}<span className="cursor" /></h1>
            <p className="role">I build <b>{ME.role}</b> products that feel fast, look sharp and scale well.</p>
            <div className="cta">
              <a href="#projects" className="btn primary">See my work</a>
              <a href={ME.resume} download className="btn">Download resume ↓</a>
            </div>
          </div>
          <div className="codecard reveal">
            <div className="term-bar"><i /><i /><i /><span>developer.ts</span></div>
<pre><code><span className="k">const</span> <span className="f">developer</span> <span className="o">=</span> {"{"}{"\n"}
{"  "}name: <span className="s">&quot;{ME.name}&quot;</span>,{"\n"}
{"  "}role: <span className="s">&quot;{ME.role}&quot;</span>,{"\n"}
{"  "}stack: [<span className="s">&quot;React&quot;</span>, <span className="s">&quot;Node&quot;</span>, <span className="s">&quot;TS&quot;</span>],{"\n"}
{"  "}coffee: <span className="n">Infinity</span>,{"\n"}
{"  "}openToWork: <span className="n">true</span>,{"\n"}
{"  "}<span className="f">hire</span>() {"{"} <span className="k">return</span> <span className="s">&quot;great decision&quot;</span>; {"}"}{"\n"}
{"}"};</code></pre>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about">
          <Title n="01" file="about.md" />
          <div className="about reveal">
            <div>{ME.bio.map((p, i) => <p key={i} className="lead">{p}</p>)}
              <div className="links">{ME.links.map((l) => <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="chip">↗ {l.label}</a>)}</div>
            </div>
            <div className="facts">{ME.facts.map(([k, v]) => <div key={k}><span className="c">{k}</span><b>{v}</b></div>)}</div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <Title n="02" file="skills.sh" />
          <p className="lead reveal">Pick a category and run it — this terminal prints my stack.</p>
          <Skills />
        </section>

        {/* EXPERIENCE + EDUCATION */}
        <section id="experience">
          <Title n="03" file="git log --career" />
          <div className="gitlog">
            {EXPERIENCE.map((e) => (
              <div key={e.hash} className="commit reveal">
                <p className="hash"><span className="k">commit</span> {e.hash} <em>({e.branch})</em></p>
                <h3>{e.role} <span className="c">@ {e.company}</span></h3>
                <p className="c">Date: {e.date}</p>
                <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            ))}
          </div>
          <h2 className="title reveal sub"><span className="c">03.1</span> education/</h2>
          <div className="edu">
            {EDUCATION.map((e) => (
              <div key={e.file} className="card reveal">
                <p className="c">📄 {e.file} · {e.period}</p>
                <h3>{e.degree}</h3><p>{e.school}</p><p className="g">{e.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <Title n="04" file="projects/README.md" />
          <div className="projects">
            {PROJECTS.map((p) => (
              <article key={p.id} className="proj reveal">
                <div className="proj-head">
                  <span className="big">{p.id}</span>
                  <h3>{p.name}</h3>
                  <p className="c">// {p.kind}</p>
                  <div className="tags">{p.stack.map((s) => <span key={s} className="chip sm">{s}</span>)}</div>
                </div>
                <div className="proj-body">
                  <h4><span className="k">problem</span></h4><p>{p.problem}</p>
                  <h4><span className="k">solution</span></h4><p>{p.built}</p>
                  <h4><span className="k">highlights</span></h4>
                  <ul>{p.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <Title n="05" file="contact.ts" />
          <div className="contact">
            <div className="reveal">
              <p className="lead">Have an idea, an opportunity, or just want to say hi? Drop a message — I usually reply within a day.</p>
              <div className="links">{ME.links.map((l) => <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="chip">↗ {l.label}</a>)}</div>
              <a href={ME.resume} download className="btn primary resume-big">Download resume ↓</a>
            </div>
            <ContactForm />
          </div>
        </section>
        <footer>&lt;/&gt; designed &amp; built by {ME.name} · Next.js + TypeScript</footer>
      </main>
    </Shell>
  );
}
