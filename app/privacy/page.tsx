import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Database,
  FileCheck2,
  FileText,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Trash2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Resume With Purpose",
  description:
    "Privacy Policy for Resumify, the resume-building application by Resume With Purpose.",
  alternates: {
    canonical: "/privacy",
  },
};

const effectiveDate = "October 9, 2026";

export default function PrivacyPolicyPage() {
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
              <ShieldCheck size={16} /> Resumify privacy
            </div>
            <h1 className="text-4xl font-black tracking-[-.055em] text-[#07142e] sm:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              This Privacy Policy explains how Resumify by Resume With Purpose accesses, uses,
              stores and shares information when you use the Resumify mobile application.
            </p>
            <p className="mt-5 text-sm font-semibold text-slate-500">Effective date: {effectiveDate}</p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:px-10">
          <aside className="hidden lg:block">
            <div className="sticky top-8 rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-extrabold uppercase tracking-[.14em] text-blue-600">On this page</p>
              <nav className="mt-4 space-y-2 text-sm font-semibold text-slate-600">
                <a className="privacy-nav-link" href="#overview">Overview</a>
                <a className="privacy-nav-link" href="#data">Information handled</a>
                <a className="privacy-nav-link" href="#use">How information is used</a>
                <a className="privacy-nav-link" href="#sharing">Sharing</a>
                <a className="privacy-nav-link" href="#security">Security</a>
                <a className="privacy-nav-link" href="#retention">Retention & deletion</a>
                <a className="privacy-nav-link" href="#children">Children</a>
                <a className="privacy-nav-link" href="#changes">Changes</a>
                <a className="privacy-nav-link" href="#contact">Contact</a>
              </nav>
            </div>
          </aside>

          <article className="min-w-0 rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(35,67,130,.07)] sm:p-10">
            <section id="overview" className="privacy-section scroll-mt-8">
              <div className="privacy-icon"><FileCheck2 size={21} /></div>
              <h2>1. Overview</h2>
              <p>
                Resumify is a resume-building application operated under the Resume With Purpose brand.
                The current version is designed to work primarily on your device and does not require you
                to create an online account.
              </p>
              <p>
                Resume content you create or import is processed for the purpose of providing the app's
                resume editing, preview and PDF export features. In the current release, Resume With Purpose
                does not operate a server that receives or stores the content of your resumes.
              </p>
            </section>

            <section id="data" className="privacy-section scroll-mt-8">
              <div className="privacy-icon"><Database size={21} /></div>
              <h2>2. Information Resumify accesses and handles</h2>
              <p>Depending on the features you use, Resumify may access or store the following information on your device:</p>
              <ul>
                <li>
                  <strong>Resume and profile information:</strong> information you enter into your resume,
                  such as your name, contact information, professional summary, work experience, education,
                  projects, skills, certifications and languages.
                </li>
                <li>
                  <strong>Profile images:</strong> an image you choose to add to your profile or resume.
                </li>
                <li>
                  <strong>Imported documents:</strong> PDF or DOCX files that you explicitly select through
                  the device's document picker so Resumify can extract resume content for review.
                </li>
                <li>
                  <strong>Locally generated documents:</strong> PDF files you choose to create or export from
                  your resume.
                </li>
              </ul>
              <p>
                Resumify does not automatically scan your files. Access to an existing resume or image occurs
                when you choose that file using the device's system picker or another user-initiated selection flow.
              </p>
            </section>

            <section id="use" className="privacy-section scroll-mt-8">
              <div className="privacy-icon"><FileText size={21} /></div>
              <h2>3. How information is used</h2>
              <p>Information handled by Resumify is used to provide the features you request, including to:</p>
              <ul>
                <li>create, display and edit resumes;</li>
                <li>populate resume sections from a document you choose to import;</li>
                <li>save resumes and profile information locally for later editing;</li>
                <li>render resume previews and templates; and</li>
                <li>generate PDF resumes when you request an export.</li>
              </ul>
              <p>
                An imported resume remains a review draft until you choose to keep and save it. This gives you
                an opportunity to review extracted content before it becomes part of your saved resume data.
              </p>
            </section>

            <section id="sharing" className="privacy-section scroll-mt-8">
              <div className="privacy-icon"><ShieldCheck size={21} /></div>
              <h2>4. Sharing and disclosure</h2>
              <p>
                Resume With Purpose does not sell your resume information or personal information.
                In the current release, your resume content is not uploaded to Resume With Purpose servers
                or shared by us with third parties for advertising or marketing purposes.
              </p>
              <p>
                If you choose to export, open or share a generated PDF using Android or another installed app,
                the file is provided to the destination you select. Any information handling by that destination
                application or service is governed by its own privacy practices.
              </p>
            </section>

            <section id="security" className="privacy-section scroll-mt-8">
              <div className="privacy-icon"><LockKeyhole size={21} /></div>
              <h2>5. Data security</h2>
              <p>
                We design Resumify to minimize unnecessary transfer of resume information. Saved resume and
                profile data used by the current app are stored in the application's local storage on your device.
                Access to files outside the app is performed through user-initiated Android file-selection mechanisms.
              </p>
              <p>
                No method of electronic storage is completely risk-free. You are responsible for maintaining the
                security of your device, device unlock credentials, backups and any exported resume files after
                they leave Resumify.
              </p>
            </section>

            <section id="retention" className="privacy-section scroll-mt-8">
              <div className="privacy-icon"><Trash2 size={21} /></div>
              <h2>6. Data retention and deletion</h2>
              <p>
                Saved resumes and profile information remain on your device until you delete them through available
                app controls, clear the app's data through Android settings, or uninstall Resumify. Temporary import
                data that has not been saved is intended to remain only for the active import/review flow.
              </p>
              <p>
                Because the current version does not require an online Resumify account and Resume With Purpose does
                not store your resume content on its servers, there is no server-side resume account to delete for
                this release. If you want to request deletion of personal data associated with you and Resumify, you can use our data deletion request page.
              </p>
              <p>
                Exported PDF files may remain in locations you selected outside Resumify until you delete those files yourself.
              </p>
            </section>

            <section id="children" className="privacy-section scroll-mt-8">
              <h2>7. Children's privacy</h2>
              <p>
                Resumify is a career and resume tool intended for people preparing professional or educational
                application materials. It is not directed to children under 13, and we do not knowingly seek to
                collect personal information from children under 13.
              </p>
            </section>

            <section id="changes" className="privacy-section scroll-mt-8">
              <h2>8. Future features and changes to this policy</h2>
              <p>
                Resumify may gain additional features in the future, including optional online or AI-powered services.
                If a future feature changes how user information is accessed, collected, transmitted, stored or shared,
                this Privacy Policy and the Google Play Data safety disclosures will be updated before or when that
                feature is made available, as required.
              </p>
              <p>
                We may also update this Privacy Policy to reflect product, legal or operational changes. The effective
                date at the top of this page will identify the current version.
              </p>
            </section>

            <section id="contact" className="privacy-section scroll-mt-8 border-b-0 pb-0">
              <div className="privacy-icon"><Mail size={21} /></div>
              <h2>9. Developer and privacy contact</h2>
              <p><strong>Product:</strong> Resumify</p>
              <p><strong>Brand / operator:</strong> Resume With Purpose</p>
              <p>
                For privacy questions, requests or concerns, contact us at{" "}
                <a className="font-bold text-blue-700 underline decoration-blue-200 underline-offset-4 hover:text-blue-900" href="mailto:privacy@resumewithpurpose.com">
                  privacy@resumewithpurpose.com
                </a>.
              </p>
            </section>
          </article>
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
            <Link href="/privacy" className="text-blue-700">Privacy Policy</Link>
            <Link href="/data-deletion" className="hover:text-blue-600">Data Deletion</Link>
          </div>
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} Resume With Purpose.</p>
        </div>
      </footer>
    </main>
  );
}
