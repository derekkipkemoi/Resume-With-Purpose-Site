"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Mail, Send, ShieldCheck } from "lucide-react";

const privacyEmail = "privacy@resumewithpurpose.com";

export default function DataDeletionForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const fullName = String(form.get("fullName") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const reason = String(form.get("reason") ?? "").trim();
    const details = String(form.get("details") ?? "").trim();

    const subject = `Resumify data deletion request - ${fullName}`;
    const body = [
      "Resumify Data Deletion Request",
      "",
      `Name: ${fullName}`,
      `Reply email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Reason: ${reason}`,
      "",
      "Additional details:",
      details || "None provided",
      "",
      "I confirm that I am requesting deletion of personal data associated with me and understand that identity verification may be required before the request is completed.",
    ].join("\n");

    setSubmitted(true);
    window.location.href = `mailto:${privacyEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(35,67,130,.08)] sm:p-9">
      <div className="mb-7 flex items-start gap-4 rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-blue-600 shadow-sm">
          <ShieldCheck size={20} />
        </div>
        <div>
          <p className="font-extrabold text-slate-900">Your privacy matters</p>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Only provide the information needed for us to identify and respond to your request. Do not include passwords, payment-card details or other highly sensitive information.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="deletion-field">
            <span>Full name <b>*</b></span>
            <input name="fullName" type="text" autoComplete="name" required placeholder="Your full name" />
          </label>

          <label className="deletion-field">
            <span>Email address <b>*</b></span>
            <input name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
          </label>
        </div>

        <label className="deletion-field">
          <span>Phone number <small>(optional)</small></span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="e.g. +254 7XX XXX XXX" />
        </label>

        <label className="deletion-field">
          <span>Why do you want your personal data deleted? <b>*</b></span>
          <select name="reason" required defaultValue="">
            <option value="" disabled>Select a reason</option>
            <option value="I no longer use Resumify">I no longer use Resumify</option>
            <option value="I am concerned about my privacy">I am concerned about my privacy</option>
            <option value="I want my personal data removed">I want my personal data removed</option>
            <option value="I submitted information to support and want it deleted">I submitted information to support and want it deleted</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label className="deletion-field">
          <span>Request details <b>*</b></span>
          <textarea
            name="details"
            required
            rows={6}
            placeholder="Tell us what information you want deleted and any details that can help us identify your request."
          />
        </label>

        <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
          <input name="confirmation" type="checkbox" required className="mt-1 h-4 w-4 accent-blue-600" />
          <span>
            I confirm that I am requesting deletion of personal data associated with me. I understand that Resume With Purpose may contact me to verify my identity before completing the request.
          </span>
        </label>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#1955ff] to-[#12c8e9] px-6 py-4 text-base font-extrabold text-white shadow-[0_14px_30px_rgba(25,85,255,.22)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(25,85,255,.28)]"
        >
          <Send size={19} /> Submit deletion request
        </button>
      </form>

      {submitted && (
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">
          <CheckCircle2 size={20} className="mt-0.5 shrink-0" />
          <p>
            Your email app should open with the request pre-filled. Send that message to complete the request. If no email app opens, email us directly at{" "}
            <a href={`mailto:${privacyEmail}`} className="font-extrabold underline underline-offset-4">{privacyEmail}</a>.
          </p>
        </div>
      )}

      <div className="mt-6 flex items-start gap-3 rounded-2xl border border-slate-200 p-4 text-sm leading-6 text-slate-600">
        <Mail size={19} className="mt-0.5 shrink-0 text-blue-600" />
        <p>
          Prefer email? Send your request directly to{" "}
          <a href={`mailto:${privacyEmail}`} className="font-extrabold text-blue-700 underline decoration-blue-200 underline-offset-4">{privacyEmail}</a>.
        </p>
      </div>
    </div>
  );
}
