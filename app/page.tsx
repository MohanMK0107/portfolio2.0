import Shell from "@/components/Shell";
import Skills from "@/components/Skills";
import ContactForm from "@/components/ContactForm";
import { ME, EXPERIENCE, EDUCATION, PROJECTS } from "@/data/content";

<<<<<<< HEAD
const SECTION = "mx-auto max-w-[1100px] px-5 pb-2.5 pt-[70px] md:pt-[90px]";
const LEAD = "mb-3.5 max-w-[620px] text-[1.05rem] text-mut";

const Title = ({
  n,
  file,
  sub,
}: {
  n: string;
  file: string;
  sub?: boolean;
}) => (
  <h2
    className={`reveal mb-7 font-mono ${sub ? "mt-14 text-xl" : "text-[clamp(1.3rem,3vw,1.8rem)]"}`}
  >
    <span className="text-violet">{n}</span> {file}
  </h2>
);
const Links = () => (
  <div className="my-4 flex flex-wrap gap-2.5">
    {ME.links.map((l) => (
      <a
        key={l.label}
        href={l.href}
        target="_blank"
        rel="noreferrer"
        className="chip"
      >
        ↗ {l.label}
      </a>
    ))}
  </div>
=======
const Title = ({ n, file }: { n: string; file: string }) => (
  <h2 className="title reveal"><span className="c">{n}</span> {file}</h2>
>>>>>>> 5b92ada4064abbda5173245b2a4b66ef7061cace
);

export default function Home() {
  return (
    <Shell>
      <main id="top">
        {/* HERO */}
<<<<<<< HEAD
        <section
          className={`${SECTION} grid items-center gap-10 pb-8 pt-[90px] md:min-h-screen md:grid-cols-[1.1fr_1fr] md:pt-[100px]`}
        >
          <div className="reveal">
            <p className="comment">// hi there, I&apos;m</p>
            <h1 className="my-1.5 mb-3.5 bg-gradient-to-r from-txt to-accent bg-clip-text text-[clamp(2.4rem,6.5vw,4.4rem)] font-bold leading-[1.08] text-transparent">
              {ME.name}
              <span className="cursor" />
            </h1>
            <p className="max-w-[520px] text-lg text-mut">
              I build <b className="text-violet">{ME.role}</b> products that
              feel fast, look sharp and scale well.
            </p>
            <div className="mt-6 flex flex-wrap gap-3.5">
              <a href="#projects" className="btn btn-primary">
                See my work
              </a>
              <a href={ME.resume} download className="btn">
                Download resume ↓
              </a>
            </div>
          </div>
          <div className="window reveal animate-floaty">
            <div className="window-bar">
              <i />
              <i />
              <i />
              <span>developer.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[.78rem] leading-[1.8] md:text-[.88rem]">
              <code>
                <span className="text-kw">const</span>{" "}
                <span className="text-fn">developer</span>{" "}
                <span className="text-mut">=</span> {"{"}
                {"\n"}
                {"  "}name:{" "}
                <span className="text-str">&quot;{ME.name}&quot;</span>,{"\n"}
                {"  "}role:{" "}
                <span className="text-str">&quot;Software Developer&quot;</span>
                ,{"\n"}
                {"  "}location:{" "}
                <span className="text-str">&quot;Bengaluru, India&quot;</span>,
                {"\n"}
                {"  "}mindset:{" "}
                <span className="text-str">&quot;Build with purpose&quot;</span>
                ,{"\n"}
                {"  "}interests: [
                <span className="text-str">&quot;Problem Solving&quot;</span>,{" "}
                <span className="text-str">&quot;Technology&quot;</span>],
                {"\n"}
                {"  "}currently:{" "}
                <span className="text-str">&quot;Learning & Growing&quot;</span>
                ,{"\n"}
                {"  "}available: <span className="text-amber">true</span>
                {"\n"}
                {"}"};
              </code>
            </pre>
=======
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
>>>>>>> 5b92ada4064abbda5173245b2a4b66ef7061cace
          </div>
        </section>

        {/* ABOUT */}
<<<<<<< HEAD
        <section id="about" className={SECTION}>
          <Title n="01" file="about.md" />
          <div className="reveal grid gap-10 md:grid-cols-[1.5fr_1fr]">
            <div>
              {ME.bio.map((p, i) => (
                <p key={i} className={LEAD}>
                  {p}
                </p>
              ))}
              <Links />
            </div>
            <div className="grid grid-cols-2 gap-3.5">
              {ME.facts.map(([k, v]) => (
                <div
                  key={k}
                  className="rounded-[10px] border border-line bg-card p-3.5"
                >
                  <span className="comment">{k}</span>
                  <b className="block text-accent">{v}</b>
                </div>
              ))}
            </div>
=======
        <section id="about">
          <Title n="01" file="about.md" />
          <div className="about reveal">
            <div>{ME.bio.map((p, i) => <p key={i} className="lead">{p}</p>)}
              <div className="links">{ME.links.map((l) => <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="chip">↗ {l.label}</a>)}</div>
            </div>
            <div className="facts">{ME.facts.map(([k, v]) => <div key={k}><span className="c">{k}</span><b>{v}</b></div>)}</div>
>>>>>>> 5b92ada4064abbda5173245b2a4b66ef7061cace
          </div>
        </section>

        {/* SKILLS */}
<<<<<<< HEAD
        <section id="skills" className={SECTION}>
          <Title n="02" file="skills.sh" />
          <p className={`${LEAD} reveal`}>
            Pick a category and run it — this terminal prints my stack.
          </p>
=======
        <section id="skills">
          <Title n="02" file="skills.sh" />
          <p className="lead reveal">Pick a category and run it — this terminal prints my stack.</p>
>>>>>>> 5b92ada4064abbda5173245b2a4b66ef7061cace
          <Skills />
        </section>

        {/* EXPERIENCE + EDUCATION */}
<<<<<<< HEAD
        <section id="experience" className={SECTION}>
          <Title n="03" file="git log --career" />
          <div className="ml-2 grid gap-6 border-l-2 border-dashed border-line pl-5 md:pl-[26px]">
            {EXPERIENCE.map((e) => (
              <div
                key={e.hash}
                className="reveal relative rounded-xl border border-line bg-card p-5 before:absolute before:-left-[30px] before:top-[26px] before:h-4 before:w-4 before:rounded-full before:border-[3px] before:border-accent before:bg-bg before:content-[''] md:before:-left-9"
              >
                <p className="font-mono text-[.82rem] text-amber">
                  <span className="text-kw">commit</span> {e.hash}{" "}
                  <em className="not-italic text-accent">({e.branch})</em>
                </p>
                <h3 className="mb-0.5 mt-1.5 text-lg font-semibold">
                  {e.role} <span className="comment">@ {e.company}</span>
                </h3>
                <p className="comment">Date: {e.date}</p>
                <ul className="ml-5 mt-2 list-disc text-mut">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Title n="03.1" file="education/" sub />
          <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
            {EDUCATION.map((e) => (
              <div
                key={e.file}
                className="reveal rounded-xl border border-line bg-card p-5 transition duration-300 hover:-translate-y-1 hover:border-violet"
              >
                <p className="comment">
                  📄 {e.file} · {e.period}
                </p>
                <h3 className="mt-1 text-lg font-semibold">{e.degree}</h3>
                <p className="text-mut">{e.school}</p>
                <p className="text-accent">{e.note}</p>
=======
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
>>>>>>> 5b92ada4064abbda5173245b2a4b66ef7061cace
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
<<<<<<< HEAD
        <section id="projects" className={SECTION}>
          <Title n="04" file="projects/README.md" />
          <div className="grid gap-5">
            {PROJECTS.map((p) => (
              <article
                key={p.id}
                className="reveal group relative grid gap-7 overflow-hidden rounded-2xl border border-line bg-card p-[22px] transition duration-300 hover:border-accent hover:shadow-glow md:grid-cols-[1fr_2fr] md:gap-8 md:p-7"
              >
                <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-accent to-violet transition duration-500 group-hover:scale-x-100" />
                <div>
                  <span className="font-mono text-[3.2rem] font-extrabold leading-none text-transparent [-webkit-text-stroke:1px_rgb(var(--b))]">
                    {p.id}
                  </span>
                  <h3 className="mb-0.5 mt-1.5 text-[1.7rem] font-semibold">
                    {p.name}
                  </h3>
                  <p className="comment">// {p.kind}</p>
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="chip chip-sm">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-mut">
                  <H>problem</H>
                  <p>{p.problem}</p>
                  <H>solution</H>
                  <p>{p.built}</p>
                  <H>highlights</H>
                  <ul className="ml-5 list-disc">
                    {p.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
=======
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
>>>>>>> 5b92ada4064abbda5173245b2a4b66ef7061cace
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
<<<<<<< HEAD
        <section id="contact" className={SECTION}>
          <Title n="05" file="contact.ts" />
          <div className="grid items-start gap-10 md:grid-cols-[1fr_1.1fr]">
            <div className="reveal">
              <p className={LEAD}>
                Have an idea, an opportunity, or just want to say hi? Drop a
                message — I usually reply within a day.
              </p>
              <Links />
              <a href={ME.resume} download className="btn btn-primary mt-2.5">
                Download resume ↓
              </a>
=======
        <section id="contact">
          <Title n="05" file="contact.ts" />
          <div className="contact">
            <div className="reveal">
              <p className="lead">Have an idea, an opportunity, or just want to say hi? Drop a message — I usually reply within a day.</p>
              <div className="links">{ME.links.map((l) => <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="chip">↗ {l.label}</a>)}</div>
              <a href={ME.resume} download className="btn primary resume-big">Download resume ↓</a>
>>>>>>> 5b92ada4064abbda5173245b2a4b66ef7061cace
            </div>
            <ContactForm />
          </div>
        </section>
<<<<<<< HEAD
        <footer className="px-5 pb-[30px] pt-[50px] text-center font-mono text-[.8rem] text-mut">
          &lt;/&gt; designed &amp; built by {ME.name} · Next.js + TypeScript +
          Tailwind
        </footer>
=======
        <footer>&lt;/&gt; designed &amp; built by {ME.name} · Next.js + TypeScript</footer>
>>>>>>> 5b92ada4064abbda5173245b2a4b66ef7061cace
      </main>
    </Shell>
  );
}
<<<<<<< HEAD

function H({ children }: { children: string }) {
  return (
    <h4 className="mb-1 mt-3.5 font-mono text-[.78rem] uppercase tracking-widest text-kw first:mt-0">
      {children}
    </h4>
  );
}
=======
>>>>>>> 5b92ada4064abbda5173245b2a4b66ef7061cace
