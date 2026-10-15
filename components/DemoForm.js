"use client";

import { useState } from "react";
import { CheckIcon } from "./icons";
import { whatsappLink } from "@/lib/site";

// Posts to SmartPay's public /api/demo-requests (proxied same-origin by
// next.config.mjs). Phone is required and email optional, matching the
// backend: headteachers here answer the phone far more reliably than email.
const STUDENT_COUNTS = ["Under 100", "100–300", "300–600", "Over 600"];
const EMPTY = { schoolName: "", contactName: "", role: "", phone: "", email: "", studentCount: "", message: "", website: "" };

const inputClass =
  "w-full rounded-xl border border-border bg-paper px-3.5 py-3 text-base text-ink placeholder:text-slate-quiet focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/25";

function Field({ label, optional, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">
        {label} {optional && <span className="font-normal text-slate-quiet">(optional)</span>}
      </span>
      {children}
    </label>
  );
}

export default function DemoForm() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [error, setError] = useState("");

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/demo-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(res.status === 429 ? "You've sent several requests already. Please message us on WhatsApp instead." : data.message || "Something went wrong. Please try again.");
      }
      setStatus("sent");
      setForm(EMPTY);
    } catch (err) {
      setError(err.message === "Failed to fetch" ? "Couldn't reach our server. Check your connection, or message us on WhatsApp." : err.message);
      setStatus("idle");
    }
  }

  if (status === "sent") {
    return (
      <div className="fade-up rounded-2xl border border-border bg-card p-8 text-center shadow-[var(--shadow)]" role="status">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-wash text-green">
          <CheckIcon className="h-6 w-6" />
        </span>
        <h3 className="mt-4 font-display text-xl font-semibold text-ink">Thank you, we&rsquo;ve got it</h3>
        <p className="mt-2 text-slate">We&rsquo;ll be in touch soon to arrange your demo.</p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-5 text-sm font-semibold text-blue hover:underline">
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow)] sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Field label="School name">
            <input required maxLength={150} value={form.schoolName} onChange={set("schoolName")} className={inputClass} autoComplete="organization" />
          </Field>
        </div>
        <Field label="Your name">
          <input required maxLength={100} value={form.contactName} onChange={set("contactName")} className={inputClass} autoComplete="name" />
        </Field>
        <Field label="Your role" optional>
          <input maxLength={50} value={form.role} onChange={set("role")} className={inputClass} placeholder="e.g. Headteacher, Bursar" />
        </Field>
        <Field label="Phone number">
          <input required type="tel" maxLength={30} value={form.phone} onChange={set("phone")} className={inputClass} placeholder="024 123 4567" autoComplete="tel" />
        </Field>
        <Field label="Email" optional>
          <input type="email" maxLength={150} value={form.email} onChange={set("email")} className={inputClass} autoComplete="email" />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Number of students" optional>
            <select value={form.studentCount} onChange={set("studentCount")} className={inputClass}>
              <option value="">Choose one</option>
              {STUDENT_COUNTS.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field label="Anything we should know?" optional>
            <textarea rows={3} maxLength={2000} value={form.message} onChange={set("message")} className={inputClass} placeholder="How do you collect fees today?" />
          </Field>
        </div>
        {/* Honeypot: hidden from people, filled in by simple bots. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label>Website<input tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} /></label>
        </div>
      </div>

      {error && (
        <p className="mt-4 rounded-xl bg-amber-wash px-4 py-3 text-sm text-amber" role="alert">
          {error}{" "}
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-semibold underline">Open WhatsApp</a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-blue px-6 text-base font-semibold text-white transition-colors hover:bg-blue-deep disabled:opacity-60 dark:text-[#0B1120]"
      >
        {status === "sending" ? "Sending…" : "Book my free demo"}
      </button>
      <p className="mt-3 text-center text-xs text-slate-quiet">We only use these details to contact you about SmartPay.</p>
    </form>
  );
}
