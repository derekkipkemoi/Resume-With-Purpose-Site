import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Clock3,
  Database,
  FileX2,
  ShieldCheck,
  Trash2,
} from "lucide-react";
import DataDeletionForm from "./DataDeletionForm";

export const metadata: Metadata = {
  title: "Resumify Data Deletion Request Form | Resume With Purpose",
  description:
    "Request deletion of personal data associated with Resumify by Resume With Purpose.",
  alternates: {
    canonical: "/data-deletion",
  },
};

export default function DataDeletionPage() {
  return (
    <main className="min-h-screen bg-[#f7fbff] text-[#07142e]">
      <header className="border-b border-blue-950/[0.06] bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link href="/" className="flex items-center gap-3" aria-label="Resume With Purpose home">
            <Image
              src="/resumify-icon.png"
              alt="Resumify"
              width={46}
              height={46}
              className="h-11 w-11 object-contain"
              priority
            />
            <div className="leading-tight">
              <div className="text-[15px] font-extrabold tracking-[-0.03em] text-[#0b1e48] sm:text-[17px]">
                Resume With Purpose
              </div>
              <div className="text-[11px] font-semibold tracking-[0.12em] text-blue-600/70">
                HOME OF RESUMIFY
              </div>
            </div>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
          >
            <ArrowLeft size={16} /> Back home
          </Link>
        </div>
      </header>

      <section className="privacy-glow relative overflow-hidden border-b border-blue-100/70">
        <div className="grid-fade pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/85 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm backdrop-blur">
              <Trash2 size={16} /> Privacy request
            </div>
            <h1 className="text-4xl font-black tracking-[-.055em] text-[#07142e] sm:text-6xl">
              Resumify Data Deletion Request Form
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Use this page to request deletion of personal data associated with you and Resumify. You do not need to reinstall or open the app to submit a request.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_330px] lg:px-10">
          <div>
            <DataDeletionForm />
          </div>

          <aside className="space-y-5">
            <div className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600">
                <Database size={21} />
              </div>
              <h2 className="mt-4 text-xl font-black tracking-[-.03em]">What can be deleted</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Where applicable, we will identify and delete personal data associated with your request that is held by Resume With Purpose for Resumify, subject to any lawful retention requirements.
              </p>
            </div>

            <div className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-50 text-cyan-700">
                <FileX2 size={21} />
              </div>
              <h2 className="mt-4 text-xl font-black tracking-[-.03em]">Local app data</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                The current Resumify release stores resume and profile content primarily on your device. You can remove locally stored app data by deleting resumes in the app, clearing Resumify storage in Android settings, or uninstalling the app.
              </p>
            </div>

            <div className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-violet-50 text-violet-700">
                <Clock3 size={21} />
              </div>
              <h2 className="mt-4 text-xl font-black tracking-[-.03em]">What happens next</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                We may contact you at the email address you provide to verify the request or clarify which data you want removed. We will then process the request in accordance with our privacy obligations.
              </p>
            </div>

            <div className="rounded-[26px] border border-blue-100 bg-blue-50/60 p-6">
              <div className="flex items-center gap-2 font-extrabold text-blue-900">
                <ShieldCheck size={19} /> Privacy information
              </div>
              <p className="mt-3 text-sm leading-6 text-blue-900/75">
                For more information about how Resumify handles data, read our{" "}
                <Link href="/privacy" className="font-extrabold underline underline-offset-4">Privacy Policy</Link>.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div className="flex items-center gap-3">
            <Image src="/resumify-icon.png" alt="Resumify" width={38} height={38} className="h-9 w-9 object-contain" />
            <div>
              <p className="font-black tracking-[-.03em]">Resume With Purpose</p>
              <p className="text-xs text-slate-500">Home of Resumify</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-slate-500">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link>
            <Link href="/data-deletion" className="text-blue-700">Data Deletion</Link>
          </div>
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} Resume With Purpose.</p>
        </div>
      </footer>
    </main>
  );
}
