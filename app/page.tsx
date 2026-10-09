import Image from "next/image";
import {
  ArrowRight,
  Check,
  Download,
  FileText,
  Import,
  Layers3,
  ShieldCheck,
  Sparkles,
  WandSparkles,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Professional resume builder",
    text: "Create a clear, polished resume section by section with a focused editing experience.",
  },
  {
    icon: Import,
    title: "Import your existing resume",
    text: "Start from your current PDF or DOCX instead of rebuilding everything from scratch.",
  },
  {
    icon: Layers3,
    title: "Flexible templates",
    text: "Choose a professional layout and keep your content separate from presentation.",
  },
  {
    icon: Download,
    title: "High-quality PDF export",
    text: "Preview your resume and export a clean PDF when you are ready to apply.",
  },
];

const benefits = [
  "Build and edit your resume in one place",
  "Import PDF and DOCX resumes",
  "Preview before exporting",
  "Create polished PDF resumes",
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f7fbff] text-[#07142e]">
      <header className="relative z-50 border-b border-blue-950/[0.06] bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#" className="flex items-center gap-3" aria-label="Resume With Purpose home">
            <Image src="/resumify-icon.png" alt="Resumify" width={46} height={46} className="h-11 w-11 object-contain" priority />
            <div className="leading-tight">
              <div className="text-[15px] font-extrabold tracking-[-0.03em] text-[#0b1e48] sm:text-[17px]">Resume With Purpose</div>
              <div className="text-[11px] font-semibold tracking-[0.12em] text-blue-600/70">HOME OF RESUMIFY</div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a href="#features" className="transition hover:text-blue-600">Features</a>
            <a href="#how-it-works" className="transition hover:text-blue-600">How it works</a>
            <a href="#about" className="transition hover:text-blue-600">About</a>
          </nav>

          <a
            href="#download"
            className="inline-flex rounded-full bg-[#0b57ef] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_30px_rgba(11,87,239,.24)] transition hover:-translate-y-0.5 hover:bg-[#084bd2]"
          >
            Get Resumify
          </a>
        </div>
      </header>

      <section className="hero-glow relative isolate">
        <div className="grid-fade pointer-events-none absolute inset-0 -z-10" />
        <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.03fr_.97fr] lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/80 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm backdrop-blur">
              <Sparkles size={16} /> Built for better applications
            </div>

            <h1 className="text-[clamp(3.35rem,7vw,6.8rem)] font-black leading-[.89] tracking-[-.07em] text-[#07142e]">
              Your resume should have a <span className="bg-gradient-to-r from-[#1558ff] via-[#06b6e9] to-[#6848ff] bg-clip-text text-transparent">purpose.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              Create, import, refine and export a professional resume designed for the opportunity you actually want.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#download" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0b57ef] px-6 py-4 text-base font-extrabold text-white shadow-[0_18px_45px_rgba(11,87,239,.28)] transition hover:-translate-y-0.5 hover:bg-[#084bd2]">
                Get Resumify <ArrowRight size={18} />
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-4 text-base font-extrabold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700">
                Explore features
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
              <span className="flex items-center gap-2"><Check className="text-emerald-500" size={17} /> Professional layouts</span>
              <span className="flex items-center gap-2"><Check className="text-emerald-500" size={17} /> PDF export</span>
              <span className="flex items-center gap-2"><Check className="text-emerald-500" size={17} /> Resume import</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[590px]">
            <div className="absolute -left-6 top-24 hidden rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600"><Import size={20} /></div>
                <div><p className="text-xs font-bold text-slate-400">START FASTER</p><p className="text-sm font-extrabold">Import your resume</p></div>
              </div>
            </div>
            <div className="absolute -right-4 bottom-24 z-20 hidden rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-violet-50 text-violet-600"><Download size={20} /></div>
                <div><p className="text-xs font-bold text-slate-400">READY TO APPLY</p><p className="text-sm font-extrabold">Export as PDF</p></div>
              </div>
            </div>

            <div className="rounded-[42px] border border-blue-100 bg-gradient-to-b from-white to-blue-50/60 p-3 shadow-[0_40px_100px_rgba(21,65,160,.2)]">
              <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-[#f6f8fc]">
                <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">
                  <div className="flex items-center gap-2.5">
                    <Image src="/resumify-icon.png" alt="Resumify" width={35} height={35} className="h-9 w-9 object-contain" />
                    <span className="font-black tracking-[-.03em] text-blue-700">Resumify</span>
                  </div>
                  <div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-slate-200" /><span className="h-2 w-2 rounded-full bg-slate-200" /><span className="h-2 w-2 rounded-full bg-blue-400" /></div>
                </div>

                <div className="grid grid-cols-4 border-b border-slate-200 bg-white px-3 py-3 text-center text-[11px] font-bold text-slate-500 sm:text-xs">
                  <div className="rounded-xl bg-blue-50 px-2 py-2 text-blue-700">Builder</div>
                  <div className="px-2 py-2">Templates</div>
                  <div className="px-2 py-2">Preview</div>
                  <div className="px-2 py-2">Export</div>
                </div>

                <div className="p-5 sm:p-7">
                  <div className="resume-paper rounded-xl bg-white p-6 text-[#102041] sm:p-8">
                    <div className="flex items-start justify-between gap-5 border-b border-slate-200 pb-5">
                      <div>
                        <h3 className="text-2xl font-black tracking-[-.04em]">Alex Carter</h3>
                        <p className="mt-1 font-bold text-blue-600">Product Manager</p>
                      </div>
                      <div className="space-y-1 text-right text-[8px] font-semibold text-slate-500 sm:text-[9px]">
                        <p>alex.carter@email.com</p><p>San Francisco, CA</p><p>linkedin.com/in/alexcarter</p>
                      </div>
                    </div>

                    <div className="mt-5">
                      <p className="text-[10px] font-black tracking-[.08em]">PROFESSIONAL SUMMARY</p>
                      <p className="mt-2 text-[9px] leading-[1.6] text-slate-500 sm:text-[10px]">Results-driven product manager focused on building useful products, improving customer outcomes and leading cross-functional teams.</p>
                    </div>

                    <div className="mt-5">
                      <p className="text-[10px] font-black tracking-[.08em]">EXPERIENCE</p>
                      <div className="mt-3 border-l-2 border-blue-100 pl-4">
                        <div className="flex justify-between gap-4"><p className="text-[10px] font-extrabold">Senior Product Manager</p><p className="text-[8px] text-slate-400">2022 — Present</p></div>
                        <p className="mt-1 text-[9px] font-bold text-blue-600">TechVision Inc.</p>
                        <div className="mt-2 space-y-1 text-[8px] leading-[1.5] text-slate-500 sm:text-[9px]"><p>• Led product strategy across key customer journeys</p><p>• Improved activation through data-informed iteration</p><p>• Coordinated design and engineering delivery</p></div>
                      </div>
                    </div>

                    <div className="mt-5">
                      <p className="text-[10px] font-black tracking-[.08em]">EDUCATION</p>
                      <div className="mt-2 flex justify-between gap-4"><div><p className="text-[9px] font-extrabold">B.S. Computer Science</p><p className="text-[8px] font-bold text-blue-600">University</p></div><p className="text-[8px] text-slate-400">2016 — 2020</p></div>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-2">
                    {[
                      { label: "Sections", icon: FileText },
                      { label: "Design", icon: WandSparkles },
                      { label: "Preview", icon: ShieldCheck },
                    ].map(({ label, icon: Icon }) => (
                      <div key={label} className="rounded-xl border border-slate-200 bg-white px-2 py-3 text-center text-[11px] font-bold text-slate-600 shadow-sm">
                        <Icon className="mx-auto mb-1.5 text-blue-600" size={17} />{label}
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1955ff] to-[#12c8e9] px-4 py-3 text-sm font-extrabold text-white"><Download size={17} /> Export PDF</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[.16em] text-blue-600">Everything you need to get started</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-.05em] text-[#07142e] sm:text-5xl">From blank page to application-ready.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Resumify keeps resume creation focused, visual and practical so you can spend less time fighting formatting.</p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-[26px] border border-slate-200 bg-[#fbfdff] p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,61,145,.09)]">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600"><Icon size={22} /></div>
                <h3 className="text-lg font-black tracking-[-.025em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-[#07142e] py-24 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[.16em] text-cyan-300">A focused workflow</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-.05em] sm:text-5xl">Bring your experience. We make the resume easier.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">Start fresh or import what you already have, review every section, choose your presentation and export when it looks right.</p>
          </div>
          <div className="space-y-4">
            {["Start a new resume or import PDF / DOCX", "Review and edit your resume sections", "Choose the presentation that fits you", "Preview and export your final PDF"].map((item, index) => (
              <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-sm font-black">{index + 1}</div>
                <p className="font-bold text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="rounded-[34px] border border-blue-100 bg-gradient-to-br from-[#eff8ff] via-white to-[#f2efff] p-7 sm:p-12 lg:p-14">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_.7fr]">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[.16em] text-blue-600">Resume With Purpose</p>
                <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-.05em] sm:text-5xl">A better resume starts with knowing what it is meant to achieve.</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Resume With Purpose builds tools that help job seekers create clearer, more intentional application materials. Resumify is our resume-building product.</p>
              </div>
              <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(35,67,130,.10)]">
                <Image src="/resumify-logo.png" alt="Resumify logo" width={500} height={500} className="mx-auto h-auto w-full max-w-[300px] object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="px-5 pb-24 sm:px-8 sm:pb-28 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[34px] bg-gradient-to-br from-[#114de8] via-[#0b7cf1] to-[#11c7db] px-7 py-14 text-center text-white shadow-[0_30px_80px_rgba(11,87,239,.23)] sm:px-12 sm:py-16">
          <h2 className="mx-auto max-w-3xl text-4xl font-black tracking-[-.05em] sm:text-5xl">Build the resume you want to send.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-50">Resumify is being prepared for Google Play. The Play Store download link will be available here when the public listing is live.</p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white/15 px-5 py-3 text-sm font-bold ring-1 ring-inset ring-white/20"><ShieldCheck size={18} /> Google Play release in progress</div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div className="flex items-center gap-3">
            <Image src="/resumify-icon.png" alt="Resumify" width={38} height={38} className="h-9 w-9 object-contain" />
            <div><p className="font-black tracking-[-.03em]">Resume With Purpose</p><p className="text-xs text-slate-500">Home of Resumify</p></div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-slate-500">
            <a href="#features" className="hover:text-blue-600">Features</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="/privacy" className="hover:text-blue-600">Privacy Policy</a>
          </div>
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} Resume With Purpose.</p>
        </div>
      </footer>
    </main>
  );
}
