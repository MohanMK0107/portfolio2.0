"use client";
import { FormEvent, useState } from "react";
import { ME } from "@/data/content";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setStatus("Message sent successfully!");
      form.reset();
    } catch (error) {
      setStatus(
        error instanceof Error ? error.message : "Failed to send message.",
      );
    } finally {
      setLoading(false);
    }
  }

  const label = "grid gap-1.5";
  return (
    <form className="window reveal" onSubmit={handleSubmit}>
      <div className="window-bar">
        <i />
        <i />
        <i />
        <span>message.ts</span>
      </div>
      <div className="grid gap-4 bg-bg p-5 font-mono text-[.9rem]">
        <label className={label}>
          <span>
            <span className="text-kw">const</span> name{" "}
            <span className="text-mut">=</span>
          </span>
          <input
            className="field"
            name="name"
            required
            placeholder='"Your name"'
            autoComplete="name"
          />
        </label>
        <label className={label}>
          <span>
            <span className="text-kw">const</span> email{" "}
            <span className="text-mut">=</span>
          </span>
          <input
            className="field"
            name="email"
            type="email"
            required
            placeholder='"you@company.com"'
            autoComplete="email"
          />
        </label>
        <label className={label}>
          <span>
            <span className="text-kw">const</span> message{" "}
            <span className="text-mut">=</span>
          </span>
          <textarea
            className="field"
            name="message"
            required
            rows={5}
            placeholder="`Tell me about your idea…`"
          />
        </label>
        <button className={`btn btn-primary ${loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`} type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
        {status && (
          <p className="comment">
             {status}
          </p>
        )}
      </div>
    </form>
  );
}
