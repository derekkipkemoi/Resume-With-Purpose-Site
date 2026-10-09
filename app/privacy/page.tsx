import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Database,
  FileText,
  ImageIcon,
  LockKeyhole,
  ShieldCheck,
  Smartphone,
  Trash2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Resumify by Resume With Purpose",
  description:
    "Privacy Policy for the Resumify mobile application by Resume With Purpose.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Resumify",
    description:
      "Learn how Resumify accesses, uses, stores, and protects information.",
    url: "https://resumewithpurpose.com/privacy",
    siteName: "Resume With Purpose",
    type: "website",
  },
};

const privacyHighlights = [
  {
    icon: Smartphone,
    title: "Local-first",
    text: "Your resume content is stored on your device in the current version of Resumify.",
  },
  {
    icon: FileText,
    title: "Files you choose",
    text: "PDF or DOCX files are accessed only when you select them for resume import.",
  },
  {
    icon: LockKeyhole,
    title: "No account required",
    text: "The current Resumify release does not require you to create an online account.",
  },
  {
    icon: Trash2,
    title: "You control deletion",
    text: "Delete resumes in the app or uninstall the app to remove app-stored local data.",
  },
];

function PolicySection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-slate-200 py-9 first:border-t-0 first:pt-0">
      <div className="flex gap-4 sm:gap-5">
        <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-50 text-xs font-black text-blue-700">
          {number}
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-black tracking-[-0.025em] text-[#07142e] sm:text-2xl">
            {title}
          </h2>
          <div className="policy-copy mt-4 space-y-4 text-[15px] leading-7 text-slate-600 sm:text-base">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PrivacyPolicy() {
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
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back to home</span>
            <span className="sm:hidden">Home</span>
          </Link>
        </div>
      </header>

      <section className="hero-glow relative overflow-hidden border-b border-blue-100/70">
        <div className="grid-fade pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/80 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm backdrop-blur">
              <ShieldCheck size={16} /> Privacy & data protection
            </div>
            <h1 className="text-4xl font-black tracking-[-.055em] text-[#07142e] sm:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              This policy explains how Resumify by Resume With Purpose accesses, uses, stores, and protects information when you use the mobile app.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-slate-500">
              <span>Effective: October 9, 2026</span>
              <span>•</span>
              <span>Applies to the Resumify mobile app</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {privacyHighlights.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,61,145,.05)]"
            >
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-600">
                <Icon size={20} />
              </div>
              <h2 className="font-black tracking-[-.02em]">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_270px] lg:items-start">
          <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(35,67,130,.06)] sm:p-9 lg:p-10">
            <PolicySection number="1" title="Who this policy applies to">
              <p>
                This Privacy Policy applies to <strong>Resumify</strong>, a resume-building mobile application provided under the <strong>Resume With Purpose</strong> brand. In this policy, “Resumify,” “we,” “our,” and “us” refer to the Resumify product and Resume With Purpose.
              </p>
              <p>
                This policy covers the current mobile app release and the information handled when you create, edit, import, preview, and export resumes.
              </p>
            </PolicySection>

            <PolicySection number="2" title="Information you provide">
              <p>
                Resumify lets you enter information that is normally included in a resume or professional profile. Depending on what you choose to add, this may include your name, contact details, professional summary, work experience, education, projects, skills, certifications, languages, links, and other resume content.
              </p>
              <p>
                You may also choose a profile photo or other image for use in your resume. Resumify only uses information you choose to enter or select for the purpose of creating and managing your resume.
              </p>
            </PolicySection>

            <PolicySection number="3" title="Resume and document import">
              <p>
                Resumify can import resume content from PDF and DOCX documents. The app accesses an imported document only after you actively select it through your device’s document picker.
              </p>
              <p>
                The selected document is processed to extract resume information and present it to you for review and editing. The current version does not upload the contents of your imported resume to a Resume With Purpose server for cloud processing.
              </p>
            </PolicySection>

            <PolicySection number="4" title="Photos and media">
              <p>
                If you choose to add a profile photo, Resumify accesses the image you select through the system-provided picker or other permission flow available on your device. The image is used to display the profile photo in your resume and is stored locally for that purpose.
              </p>
              <p>
                Resumify does not access your photo library simply to browse or collect unrelated images.
              </p>
            </PolicySection>

            <PolicySection number="5" title="How information is used">
              <p>Information you provide to Resumify is used to provide the app’s core functionality, including to:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-blue-500">
                <li>create and edit resumes;</li>
                <li>import resume content that you select;</li>
                <li>display resume previews and templates;</li>
                <li>save your resume drafts on your device;</li>
                <li>generate and export PDF resumes; and</li>
                <li>maintain the settings and content needed for your use of the app.</li>
              </ul>
              <p>
                We do not sell your resume content or personal information.
              </p>
            </PolicySection>

            <PolicySection number="6" title="Where your resume data is stored">
              <p>
                In the current version of Resumify, resume data and app profile information are stored locally on your device. Resumify does not require an online account to create or manage a resume.
              </p>
              <p>
                PDF files that you export are saved to the location you choose or are handed to the Android sharing or document system according to the action you select. Once an exported file leaves Resumify, its storage and sharing are controlled by you and the apps or services you choose to use.
              </p>
            </PolicySection>

            <PolicySection number="7" title="Data sharing">
              <p>
                Resume With Purpose does not sell your personal data. The current Resumify release does not send your resume content, imported document content, or profile photo to our own servers for storage.
              </p>
              <p>
                When you intentionally export or share a resume, information may be provided to the destination, app, cloud storage provider, email service, or other service you select. Those services process information under their own privacy terms.
              </p>
              <p>
                Resumify is distributed through Google Play. Google may process information relating to app downloads, installation, device compatibility, purchases if applicable, security, and Play services under Google’s own terms and privacy practices.
              </p>
            </PolicySection>

            <PolicySection number="8" title="Data retention and deletion">
              <p>
                Resume data saved by Resumify remains on your device until you delete it through the app, clear the app’s storage, or uninstall the app. Exported resume files remain wherever you saved or shared them until you delete them from those locations.
              </p>
              <p>
                Because the current release does not require a Resumify online account and does not keep a server-side copy of your resume content, there is no separate cloud account or cloud resume record that you need to request us to delete.
              </p>
            </PolicySection>

            <PolicySection number="9" title="Security">
              <p>
                We design Resumify to minimize unnecessary transfer of resume information by keeping the current resume workflow local to your device. We use reasonable technical and organizational measures appropriate to the app and the information it handles.
              </p>
              <p>
                No device, application, or storage method can be guaranteed to be completely secure. You should protect access to your device and take care when sharing exported resumes because resumes often contain personal contact and employment information.
              </p>
            </PolicySection>

            <PolicySection number="10" title="Children’s privacy">
              <p>
                Resumify is a career and resume-building product and is not directed to children under 13. We do not knowingly design the service to collect personal information from children under 13. If you believe a child has provided information in circumstances that require our attention, please contact us using the method below.
              </p>
            </PolicySection>

            <PolicySection number="11" title="Website information">
              <p>
                This policy is hosted on ResumeWithPurpose.com so it can be publicly accessed for transparency and Google Play requirements. The current website does not ask you to upload resume content.
              </p>
              <p>
                Like most websites, the hosting infrastructure may process standard technical request information such as IP address, browser or device information, timestamps, and security logs as needed to deliver and protect the website. We do not currently use the public website to sell or profile visitors based on their resume information.
              </p>
            </PolicySection>

            <PolicySection number="12" title="Changes to this policy">
              <p>
                We may update this Privacy Policy when Resumify changes, including if we introduce cloud accounts, AI processing, analytics, advertising, payments, or other features that change how information is handled. When we make material changes, we will update the effective date and the disclosures on this page before or when the relevant functionality is introduced.
              </p>
            </PolicySection>

            <PolicySection number="13" title="Contact us">
              <p>
                For questions, privacy inquiries, or concerns about Resumify, contact Resume With Purpose at{" "}
                <a
                  href="mailto:support@resumewithpurpose.com"
                  className="font-bold text-blue-700 underline decoration-blue-200 underline-offset-4 hover:text-blue-900"
                >
                  support@resumewithpurpose.com
                </a>
                .
              </p>
              <p>
                You can also use the <strong>Help &amp; Support</strong> area in Resumify when available in your installed version.
              </p>
            </PolicySection>
          </article>

          <aside className="space-y-4 lg:sticky lg:top-6">
            <div className="rounded-[24px] border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-5">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-blue-600 shadow-sm">
                <Database size={20} />
              </div>
              <h2 className="mt-4 font-black tracking-[-.025em]">Current data model</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Resumes, profile information, and selected profile images are handled locally in the current app release.
              </p>
            </div>

            <div className="rounded-[24px] border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-5">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-violet-600 shadow-sm">
                <ImageIcon size={20} />
              </div>
              <h2 className="mt-4 font-black tracking-[-.025em]">You choose what to import</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                File and image access happens when you select content for a resume-related action.
              </p>
            </div>

            <div className="rounded-[24px] bg-[#07142e] p-5 text-white">
              <ShieldCheck className="text-cyan-300" size={23} />
              <h2 className="mt-4 font-black tracking-[-.025em]">Policy URL</h2>
              <p className="mt-2 break-all text-sm leading-6 text-slate-300">
                resumewithpurpose.com/privacy
              </p>
              <p className="mt-3 text-xs leading-5 text-slate-400">
                Use the final HTTPS URL in the Google Play Console privacy policy field.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-9 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
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
            <a href="mailto:support@resumewithpurpose.com" className="hover:text-blue-600">Contact</a>
          </div>
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} Resume With Purpose.</p>
        </div>
      </footer>
    </main>
  );
}
