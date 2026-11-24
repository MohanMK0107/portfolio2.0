"use client";
import { FormEvent, useState } from "react";
import { ME } from "@/data/content";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${f.get("name")}`);
    const body = encodeURIComponent(`${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`);
    window.location.href = `mailto:${ME.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form className="form reveal" onSubmit={submit}>
      <div className="term-bar"><i /><i /><i /><span>message.ts</span></div>
      <div className="form-body">
        <label><span className="k">const</span> name <span className="o">=</span>
          <input name="name" required placeholder='"Your name"' autoComplete="name" /></label>
        <label><span className="k">const</span> email <span className="o">=</span>
          <input name="email" type="email" required placeholder='"you@company.com"' autoComplete="email" /></label>
        <label><span className="k">const</span> message <span className="o">=</span>
          <textarea name="message" required rows={5} placeholder="`Tell me about your idea…`" /></label>
        <button className="btn primary" type="submit">send(message) →</button>
        {sent && <p className="c">// opening your mail app… thanks for reaching out!</p>}
      </div>
    </form>
  );
}
