import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "The Review" };

export default function Page() {
  return (
    <PageShell
      name="the_review"
      className="bg-surface text-on-surface selection:bg-primary selection:text-white font-body-md"
    >
      <main className="max-w-container-max mx-auto px-container-padding pt-32 pb-section-gap">
        <section className="pb-10 fade-in">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-outline-variant/60">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-10 bg-forest-brand"></div>
                <span className="font-label-lg text-forest-brand uppercase tracking-widest text-xs font-bold">
                  Dispatches &amp; Research
                </span>
              </div>
              <h1 className="font-display-lg text-on-surface leading-tight text-4xl lg:text-5xl font-bold">
                The Review
              </h1>
              <p className="mt-4 font-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                In-depth commentary, field investigations, and student analyses
                at the nexus of finance, sustainability, and policy.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-label-lg text-on-surface-variant">
              <span className="px-3 py-1.5 rounded-full bg-surface-container border border-outline-variant/50">
                Vol. 04 / Issue 02
              </span>
              <span className="px-3 py-1.5 rounded-full bg-surface-container border border-outline-variant/50">
                ISSN: 2831-9042
              </span>
              <span className="px-3 py-1.5 rounded-full bg-surface-container border border-outline-variant/50">
                Peer-Reviewed &amp; Student Led
              </span>
            </div>
          </div>

          <div className="pt-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 text-sm">
              <button className="px-4 py-2 rounded-full bg-forest-brand text-white font-medium shadow-sm transition-all text-xs tracking-wide whitespace-nowrap">
                All Articles
              </button>
              <button className="px-4 py-2 rounded-full bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-all text-xs tracking-wide whitespace-nowrap border border-outline-variant/40">
                Impact Investing
              </button>
              <button className="px-4 py-2 rounded-full bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-all text-xs tracking-wide whitespace-nowrap border border-outline-variant/40">
                Blended Finance
              </button>
              <button className="px-4 py-2 rounded-full bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-all text-xs tracking-wide whitespace-nowrap border border-outline-variant/40">
                Policy &amp; ESG
              </button>
              <button className="px-4 py-2 rounded-full bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-all text-xs tracking-wide whitespace-nowrap border border-outline-variant/40">
                Student Dispatches
              </button>
              <button className="px-4 py-2 rounded-full bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-all text-xs tracking-wide whitespace-nowrap border border-outline-variant/40">
                Market Briefs
              </button>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="relative flex-1 md:w-64">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">
                  search
                </span>
                <input
                  className="w-full pl-9 pr-4 py-2 rounded-lg bg-white border border-outline-variant text-xs focus:ring-forest-brand focus:border-forest-brand outline-none transition-all"
                  placeholder="Search articles or authors..."
                  type="text"
                />
              </div>
              <div className="flex items-center gap-1.5 px-3 py-2 bg-white border border-outline-variant rounded-lg text-xs text-on-surface-variant cursor-pointer hover:border-forest-brand transition-colors">
                <span className="font-medium">Sort:</span>
                <span className="text-on-surface font-semibold">Latest</span>
                <span className="material-symbols-outlined text-sm">
                  expand_more
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="group bg-white rounded-2xl border border-outline-variant overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 h-[360px] lg:h-[500px] overflow-hidden relative">
                <div
                  className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuALO31WDCKp96t5rYQlAYGWmkaF-R5J21wDEy-qm4m7KpEyL8B6NSRGOFlVrDBxW-suauxMGQBeQpn8ev2hi_YbIQ0WAC9Jkd85BJP09TgEM4_4-2VoqpMkXCYRzpW1fWGj4a6KQbliA__9rlZXvd5TFJrYcQGZdd_GuoBWZVte8aebQIia6fzhTyTDVf9NAzcne_JlJNsgIPF3sabLOFRk5ycqJIvcp-urLH0qO-dYyWJCxlsj-oXyjQbmNZpsdrwkwu6K2P_wkSI')",
                  }}
                ></div>
                <span className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-forest-brand text-white text-xs font-label-lg tracking-wider uppercase font-bold shadow-md">
                  Cover Story
                </span>
              </div>
              <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between bg-surface-container-lowest">
                <div>
                  <div className="flex items-center gap-3 mb-4 text-xs font-label-lg text-forest-brand uppercase tracking-widest font-semibold">
                    <span>FEATURED ESSAY</span>
                    <span>•</span>
                    <span>8 MIN READ</span>
                  </div>
                  <h2 className="font-headline-lg text-on-surface text-2xl lg:text-3xl leading-snug font-bold mb-4 group-hover:text-primary transition-colors">
                    The Evolution of Impact Measurement in Private Equity:
                    Moving Beyond Static ESG Scores
                  </h2>
                  <p className="font-body-md text-on-surface-variant leading-relaxed text-sm lg:text-base mb-6">
                    An in-depth analysis of how institutional allocators are
                    abandoning tick-box ESG checklists in favor of standardized
                    impact-weighted accounting, monetized externality models,
                    and long-term portfolio resiliency in South Asian markets.
                  </p>
                </div>
                <div className="pt-6 border-t border-outline-variant/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full bg-surface-variant bg-cover bg-center border border-outline-variant"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA2-AyBAHDUWJLYBrRnYkJWPNsIf4NGaFU45p7qlLUm-R5HDUOFdyquD3KDTIO6L6KthET_SSxZhMyUjN5IL52ZYaBkRqrAh_bh4-emrqNYXJ3ica4YZMVHE-tqxOUy8TcNsQESKmOi-RXnkTZdWmRLklmM7_EReooyXstIPlvrzn2tBiMpQS9CLuf9fzQnkwqBHSZi629gQG-iXvjkXuQPkpWGQGN7zccQDL5JewCh4ZiJE3zMI3fhKjqBLeBYtybiCFJmzHE74Fk')",
                      }}
                    ></div>
                    <div>
                      <p className="font-label-lg text-on-surface text-xs font-semibold">
                        Dr. Ananya Sharma &amp; Arjun Mehta
                      </p>
                      <p className="text-xs text-on-surface-variant">
                        Oct 14, 2024 • Working Paper No. 19
                      </p>
                    </div>
                  </div>
                  <a
                    className="inline-flex items-center gap-2 bg-navy-brand text-white px-5 py-2.5 rounded-lg text-xs font-label-lg font-medium hover:bg-forest-brand transition-all shadow-sm active:scale-95"
                    href="#"
                  >
                    <span>Read Full Article</span>
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-section-gap">
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant">
              <h3 className="font-headline-sm text-on-surface text-xl font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-forest-brand">
                  article
                </span>
                Recent Publications &amp; Field Notes
              </h3>
              <span className="text-xs text-on-surface-variant font-label-lg">
                Showing 5 of 32 articles
              </span>
            </div>

            <article className="group bg-white p-6 rounded-xl border border-outline-variant hover:border-forest-brand hover:shadow-xl transition-all flex flex-col md:flex-row gap-6 items-start cursor-pointer">
              <div className="w-full md:w-56 h-40 rounded-lg overflow-hidden shrink-0 relative bg-surface-container">
                <img
                  alt="Municipal Green Bonds"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiUuNdGb54e4bzevwjZgUrK0jIFqDTcP5IxLZFiuFSfckCwcfK3IIXxVyJ_w-Om0CZw_QQeMDqS0nZyEjruaEAbyb6V8bzpMRT3VFqSzd8em4C_Kt2v2TUdF8A169-VJaBpwmXKNRZJdDUc-SmlmCtRgCmBi8Ptn5UBOp7rmXzOVkXMCvs-uAAQZ3wGR7Z8BYofTzpCp_1y_GLKVmh_x3At1cVR7hzdfCm4IBH-XnRhWwS3_5XB_HCd-8lwj5o_6lc58x_trIFc8E"
                />
                <span className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-forest-brand/90 text-white text-[10px] font-label-lg uppercase tracking-wider font-semibold">
                  Blended Finance
                </span>
              </div>
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 text-xs text-on-surface-variant mb-2">
                    <span>Oct 11, 2024</span>
                    <span>•</span>
                    <span>5 min read</span>
                    <span>•</span>
                    <span className="text-forest-brand font-medium">
                      Municipal Finance
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-lg font-bold text-on-surface group-hover:text-primary transition-colors leading-snug mb-2">
                    Decarbonizing Emerging Markets: The Role of Municipal Green
                    Bonds
                  </h4>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed line-clamp-2">
                    How tier-2 urban local bodies in India are structuring
                    municipal green bond issuances to finance climate-resilient
                    water grids and clean transit corridors.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-outline-variant/30 text-xs">
                  <span className="text-on-surface font-semibold">
                    Rohan Nambiar • Undergrad Fellow
                  </span>
                  <span className="text-forest-brand font-label-lg group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-semibold">
                    Read Story{" "}
                    <span className="material-symbols-outlined text-sm">
                      chevron_right
                    </span>
                  </span>
                </div>
              </div>
            </article>

            <article className="group bg-white p-6 rounded-xl border border-outline-variant hover:border-forest-brand hover:shadow-xl transition-all flex flex-col md:flex-row gap-6 items-start cursor-pointer">
              <div className="w-full md:w-56 h-40 rounded-lg overflow-hidden shrink-0 relative bg-surface-container">
                <div
                  className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuALO31WDCKp96t5rYQlAYGWmkaF-R5J21wDEy-qm4m7KpEyL8B6NSRGOFlVrDBxW-suauxMGQBeQpn8ev2hi_YbIQ0WAC9Jkd85BJP09TgEM4_4-2VoqpMkXCYRzpW1fWGj4a6KQbliA__9rlZXvd5TFJrYcQGZdd_GuoBWZVte8aebQIia6fzhTyTDVf9NAzcne_JlJNsgIPF3sabLOFRk5ycqJIvcp-urLH0qO-dYyWJCxlsj-oXyjQbmNZpsdrwkwu6K2P_wkSI')",
                  }}
                ></div>
                <span className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-forest-brand/90 text-white text-[10px] font-label-lg uppercase tracking-wider font-semibold">
                  Impact Investing
                </span>
              </div>
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 text-xs text-on-surface-variant mb-2">
                    <span>Oct 04, 2024</span>
                    <span>•</span>
                    <span>7 min read</span>
                    <span>•</span>
                    <span className="text-forest-brand font-medium">
                      Field Study
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-lg font-bold text-on-surface group-hover:text-primary transition-colors leading-snug mb-2">
                    Micro-Equity Models in Rural India: A 5-Year Retrospective
                    on Sustainable Livelihoods
                  </h4>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed line-clamp-2">
                    Evaluating risk-sharing equity contracts versus
                    high-interest micro-loans for agrarian self-help collectives
                    in Uttar Pradesh and Odisha.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-outline-variant/30 text-xs">
                  <span className="text-on-surface font-semibold">
                    Sanya Kothari &amp; Prof. M. Sen
                  </span>
                  <span className="text-forest-brand font-label-lg group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-semibold">
                    Read Story{" "}
                    <span className="material-symbols-outlined text-sm">
                      chevron_right
                    </span>
                  </span>
                </div>
              </div>
            </article>

            <article className="group bg-white p-6 rounded-xl border border-outline-variant hover:border-forest-brand hover:shadow-xl transition-all flex flex-col md:flex-row gap-6 items-start cursor-pointer">
              <div className="w-full md:w-56 h-40 rounded-lg overflow-hidden shrink-0 relative bg-surface-container flex items-center justify-center bg-forest-brand/10 border border-outline-variant/40">
                <span className="material-symbols-outlined text-5xl text-forest-brand group-hover:scale-110 transition-transform">
                  gavel
                </span>
                <span className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-forest-brand/90 text-white text-[10px] font-label-lg uppercase tracking-wider font-semibold">
                  Policy &amp; ESG
                </span>
              </div>
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 text-xs text-on-surface-variant mb-2">
                    <span>Sep 27, 2024</span>
                    <span>•</span>
                    <span>6 min read</span>
                    <span>•</span>
                    <span className="text-forest-brand font-medium">
                      Regulatory Analysis
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-lg font-bold text-on-surface group-hover:text-primary transition-colors leading-snug mb-2">
                    Navigating Global ESG Divergence: Why Uniform Disclosures
                    Matter for Asian Markets
                  </h4>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed line-clamp-2">
                    A comparative critique of SEBI's BRSR Core against the ISSB
                    standards, focusing on supply-chain Scope 3 emission
                    reporting constraints.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-outline-variant/30 text-xs">
                  <span className="text-on-surface font-semibold">
                    Devansh Iyer • Policy Fellow
                  </span>
                  <span className="text-forest-brand font-label-lg group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-semibold">
                    Read Story{" "}
                    <span className="material-symbols-outlined text-sm">
                      chevron_right
                    </span>
                  </span>
                </div>
              </div>
            </article>

            <article className="group bg-white p-6 rounded-xl border border-outline-variant hover:border-forest-brand hover:shadow-xl transition-all flex flex-col md:flex-row gap-6 items-start cursor-pointer">
              <div className="w-full md:w-56 h-40 rounded-lg overflow-hidden shrink-0 relative bg-surface-container flex items-center justify-center bg-navy-brand/10 border border-outline-variant/40">
                <span className="material-symbols-outlined text-5xl text-navy-brand group-hover:scale-110 transition-transform">
                  forum
                </span>
                <span className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-navy-brand/90 text-white text-[10px] font-label-lg uppercase tracking-wider font-semibold">
                  Student Dispatches
                </span>
              </div>
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 text-xs text-on-surface-variant mb-2">
                    <span>Sep 18, 2024</span>
                    <span>•</span>
                    <span>4 min read</span>
                    <span>•</span>
                    <span className="text-forest-brand font-medium">
                      Summit Debrief
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-lg font-bold text-on-surface group-hover:text-primary transition-colors leading-snug mb-2">
                    Inside the Conclave 2024: Takeaways on Capital Allocation in
                    the Global South
                  </h4>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed line-clamp-2">
                    Synthesizing key debates from senior DFIs, venture
                    philanthropists, and student researchers during the flagship
                    Ashoka Conclave.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-outline-variant/30 text-xs">
                  <span className="text-on-surface font-semibold">
                    AIFC Editorial Board
                  </span>
                  <span className="text-forest-brand font-label-lg group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-semibold">
                    Read Story{" "}
                    <span className="material-symbols-outlined text-sm">
                      chevron_right
                    </span>
                  </span>
                </div>
              </div>
            </article>

            <article className="group bg-white p-6 rounded-xl border border-outline-variant hover:border-forest-brand hover:shadow-xl transition-all flex flex-col md:flex-row gap-6 items-start cursor-pointer">
              <div className="w-full md:w-56 h-40 rounded-lg overflow-hidden shrink-0 relative bg-surface-container flex items-center justify-center bg-forest-brand/10 border border-outline-variant/40">
                <span className="material-symbols-outlined text-5xl text-forest-brand group-hover:scale-110 transition-transform">
                  smart_toy
                </span>
                <span className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-forest-brand/90 text-white text-[10px] font-label-lg uppercase tracking-wider font-semibold">
                  Market Briefs
                </span>
              </div>
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 text-xs text-on-surface-variant mb-2">
                    <span>Sep 10, 2024</span>
                    <span>•</span>
                    <span>6 min read</span>
                    <span>•</span>
                    <span className="text-forest-brand font-medium">
                      AI &amp; Finance
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-lg font-bold text-on-surface group-hover:text-primary transition-colors leading-snug mb-2">
                    Algorithmic Philanthropy: Opportunities and Guardrails in
                    Automated Grantmaking
                  </h4>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed line-clamp-2">
                    Scrutinizing automated diligence mechanisms in philanthropic
                    venture funds and their risk of systemic biases against
                    grassroots NGOs.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-outline-variant/30 text-xs">
                  <span className="text-on-surface font-semibold">
                    Tanya Joseph &amp; Kabir Roy
                  </span>
                  <span className="text-forest-brand font-label-lg group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-semibold">
                    Read Story{" "}
                    <span className="material-symbols-outlined text-sm">
                      chevron_right
                    </span>
                  </span>
                </div>
              </div>
            </article>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-outline-variant/60">
              <span className="text-xs text-on-surface-variant font-label-lg">
                Page 1 of 7 (32 total publications)
              </span>
              <div className="flex items-center gap-2">
                <button
                  className="px-4 py-2 rounded-lg border border-outline-variant bg-white text-xs font-label-lg text-on-surface-variant hover:border-forest-brand hover:text-primary transition-colors disabled:opacity-40"
                  disabled
                >
                  Previous
                </button>
                <button className="w-8 h-8 rounded-lg bg-forest-brand text-white text-xs font-bold">
                  1
                </button>
                <button className="w-8 h-8 rounded-lg border border-outline-variant bg-white text-xs text-on-surface-variant hover:border-forest-brand hover:text-primary transition-colors">
                  2
                </button>
                <button className="w-8 h-8 rounded-lg border border-outline-variant bg-white text-xs text-on-surface-variant hover:border-forest-brand hover:text-primary transition-colors">
                  3
                </button>
                <span className="text-xs text-on-surface-variant px-1">
                  ...
                </span>
                <button className="w-8 h-8 rounded-lg border border-outline-variant bg-white text-xs text-on-surface-variant hover:border-forest-brand hover:text-primary transition-colors">
                  7
                </button>
                <button className="px-4 py-2 rounded-lg border border-outline-variant bg-white text-xs font-label-lg text-on-surface-variant hover:border-forest-brand hover:text-primary transition-colors flex items-center gap-1">
                  Next{" "}
                  <span className="material-symbols-outlined text-sm">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 flex flex-col gap-8">
            <div className="bg-white p-6 rounded-xl border border-outline-variant">
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-outline-variant/40">
                <span className="material-symbols-outlined text-forest-brand text-xl">
                  verified
                </span>
                <h3 className="font-label-lg text-on-surface uppercase tracking-wider font-bold text-sm">
                  Editor's Picks
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4 group cursor-pointer">
                  <span className="font-display-lg text-2xl font-bold text-forest-brand opacity-40 group-hover:opacity-100 transition-opacity">
                    01
                  </span>
                  <div>
                    <span className="text-[10px] text-forest-brand uppercase tracking-wider font-label-lg font-semibold">
                      Private Credit
                    </span>
                    <h5 className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors leading-snug">
                      Junior Debt Tranches in Blended Climate Facilities
                    </h5>
                    <p className="text-xs text-on-surface-variant mt-1">
                      Dr. R. Varma • 6 min read
                    </p>
                  </div>
                </div>
                <div className="h-px bg-outline-variant/30"></div>
                <div className="flex gap-4 group cursor-pointer">
                  <span className="font-display-lg text-2xl font-bold text-forest-brand opacity-40 group-hover:opacity-100 transition-opacity">
                    02
                  </span>
                  <div>
                    <span className="text-[10px] text-forest-brand uppercase tracking-wider font-label-lg font-semibold">
                      Policy Brief
                    </span>
                    <h5 className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors leading-snug">
                      Demystifying Carbon Border Adjustments (CBAM) for Indian
                      Exporters
                    </h5>
                    <p className="text-xs text-on-surface-variant mt-1">
                      Pooja Mehra • 8 min read
                    </p>
                  </div>
                </div>
                <div className="h-px bg-outline-variant/30"></div>
                <div className="flex gap-4 group cursor-pointer">
                  <span className="font-display-lg text-2xl font-bold text-forest-brand opacity-40 group-hover:opacity-100 transition-opacity">
                    03
                  </span>
                  <div>
                    <span className="text-[10px] text-forest-brand uppercase tracking-wider font-label-lg font-semibold">
                      Case Study
                    </span>
                    <h5 className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors leading-snug">
                      Rise Capital: Series B Impact Fund Performance Analysis
                    </h5>
                    <p className="text-xs text-on-surface-variant mt-1">
                      AIFC Research Desk • 5 min read
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-outline-variant">
              <h3 className="font-label-lg text-on-surface uppercase tracking-wider font-bold text-xs mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-forest-brand text-base">
                  label
                </span>
                Explore Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                <a
                  className="px-3 py-1.5 rounded-md bg-surface-container hover:bg-surface-variant text-xs text-on-surface-variant hover:text-primary border border-outline-variant/30 transition-colors font-medium"
                  href="#"
                >
                  #CarbonMarkets
                </a>
                <a
                  className="px-3 py-1.5 rounded-md bg-surface-container hover:bg-surface-variant text-xs text-on-surface-variant hover:text-primary border border-outline-variant/30 transition-colors font-medium"
                  href="#"
                >
                  #Microfinance
                </a>
                <a
                  className="px-3 py-1.5 rounded-md bg-surface-container hover:bg-surface-variant text-xs text-on-surface-variant hover:text-primary border border-outline-variant/30 transition-colors font-medium"
                  href="#"
                >
                  #BlendedFinance
                </a>
                <a
                  className="px-3 py-1.5 rounded-md bg-surface-container hover:bg-surface-variant text-xs text-on-surface-variant hover:text-primary border border-outline-variant/30 transition-colors font-medium"
                  href="#"
                >
                  #ESGDisclosure
                </a>
                <a
                  className="px-3 py-1.5 rounded-md bg-surface-container hover:bg-surface-variant text-xs text-on-surface-variant hover:text-primary border border-outline-variant/30 transition-colors font-medium"
                  href="#"
                >
                  #VentureDebt
                </a>
                <a
                  className="px-3 py-1.5 rounded-md bg-surface-container hover:bg-surface-variant text-xs text-on-surface-variant hover:text-primary border border-outline-variant/30 transition-colors font-medium"
                  href="#"
                >
                  #GreenBonds
                </a>
                <a
                  className="px-3 py-1.5 rounded-md bg-surface-container hover:bg-surface-variant text-xs text-on-surface-variant hover:text-primary border border-outline-variant/30 transition-colors font-medium"
                  href="#"
                >
                  #AgriFinance
                </a>
                <a
                  className="px-3 py-1.5 rounded-md bg-surface-container hover:bg-surface-variant text-xs text-on-surface-variant hover:text-primary border border-outline-variant/30 transition-colors font-medium"
                  href="#"
                >
                  #FintechForGood
                </a>
              </div>
            </div>

            <div className="bg-surface-container p-6 rounded-xl border border-outline-variant">
              <div className="w-10 h-10 rounded-lg bg-forest-brand text-white flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-xl">
                  mark_email_read
                </span>
              </div>
              <h3 className="font-headline-sm text-base font-bold text-on-surface mb-2">
                Academic Dispatch
              </h3>
              <p className="font-body-md text-xs text-on-surface-variant mb-4 leading-relaxed">
                Receive weekly curated working papers, empirical datasets, and
                critical student dissertations directly in your inbox.
              </p>
              <form className="space-y-3">
                <input
                  className="w-full px-3.5 py-2.5 rounded-lg border border-outline-variant text-xs bg-white focus:ring-forest-brand focus:border-forest-brand outline-none"
                  placeholder="Institutional email address"
                  type="email"
                />
                <button
                  className="w-full bg-navy-brand text-white py-2.5 rounded-lg text-xs font-label-lg font-medium hover:bg-black transition-all shadow-sm active:scale-95"
                  type="submit"
                >
                  Subscribe to Dispatch
                </button>
              </form>
              <p className="text-[10px] text-on-surface-variant mt-2 text-center">
                No spam. Unsubscribe at any time.
              </p>
            </div>

            <div className="bg-forest-brand text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-[10px] uppercase font-label-lg tracking-widest text-primary-fixed block mb-2 font-bold">
                  Call for Submissions
                </span>
                <h4 className="font-headline-sm text-base font-bold mb-2 leading-snug">
                  Writing for The Review: Volume 05
                </h4>
                <p className="text-xs text-white/85 mb-4 leading-relaxed">
                  Submit student working papers, faculty commentaries, or
                  advisory case studies. Double-blind peer reviews commence
                  November 2024.
                </p>
                <a
                  className="inline-flex items-center gap-1.5 bg-white text-forest-brand px-4 py-2 rounded-lg text-xs font-label-lg font-bold hover:bg-surface-container transition-all"
                  href="#"
                >
                  <span>Submission Guidelines</span>
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-outline-variant bg-white flex items-center justify-between group hover:border-forest-brand transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-forest-brand text-2xl">
                  menu_book
                </span>
                <div>
                  <p className="text-xs font-bold text-on-surface">
                    Past Journal Volumes
                  </p>
                  <p className="text-[10px] text-on-surface-variant">
                    Download 2021-2023 archive PDFs
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-forest-brand group-hover:translate-x-1 transition-all text-lg">
                download
              </span>
            </div>
          </aside>
        </div>
      </main>
    </PageShell>
  );
}
