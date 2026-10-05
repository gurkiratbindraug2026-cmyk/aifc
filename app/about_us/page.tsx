import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "About Us" };

export default function Page() {
  return (
    <PageShell
      name="about_us"
      className="bg-white text-on-surface font-sans selection:bg-primary selection:text-white overflow-x-hidden"
    >
      <main className="pt-20">
        <section className="relative min-h-[500px] flex flex-col justify-center items-start overflow-hidden py-24 px-container-padding max-w-container-max mx-auto">
          <div className="absolute -top-10 -right-20 watermark-text font-watermark text-watermark text-on-surface opacity-[0.03] pointer-events-none uppercase">
            IMPACT FINANCE
          </div>
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-12 bg-forest-brand"></div>
              <span className="font-label-lg text-forest-brand uppercase tracking-widest">
                Our Foundation
              </span>
            </div>
            <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-on-surface leading-tight mb-8">
              Defining the future of{" "}
              <span className="text-forest-brand">Social Investment</span>.
            </h1>
            <p className="font-body-lg text-on-surface-variant leading-relaxed max-w-2xl">
              The Ashoka Impact Finance Club (AIFC) is a premier student-led
              organization at Ashoka University dedicated to bridging the gap
              between rigorous financial principles and sustainable social
              impact.
            </p>
          </div>
        </section>

        <section className="py-24 px-container-padding max-w-container-max mx-auto border-t border-outline-variant">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-32">
            <div className="reveal-on-scroll">
              <h2 className="font-headline-sm text-primary mb-8 uppercase tracking-wide">
                Our Mission
              </h2>
              <p className="text-on-surface-variant mb-8 leading-relaxed font-body-md">
                To empower the next generation of financial leaders with the
                tools, knowledge, and network required to drive capital towards
                solutions that address the world's most pressing socio-economic
                and environmental challenges.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-surface flex items-center justify-center border border-outline-variant">
                    <span className="material-symbols-outlined text-forest-brand text-xl">
                      school
                    </span>
                  </div>
                  <div>
                    <p className="text-on-surface-variant font-body-md">
                      Democratizing access to impact investing education.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-surface flex items-center justify-center border border-outline-variant">
                    <span className="material-symbols-outlined text-forest-brand text-xl">
                      handshake
                    </span>
                  </div>
                  <div>
                    <p className="text-on-surface-variant font-body-md">
                      Facilitating student-led advisory projects with
                      non-profits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="reveal-on-scroll"
              style={{ transitionDelay: "200ms" }}
            >
              <h2 className="font-headline-sm text-primary mb-8 uppercase tracking-wide">
                Our Vision
              </h2>
              <p className="text-on-surface-variant mb-8 leading-relaxed font-body-md">
                To become a global lighthouse for academic excellence in social
                finance, fostering a community where profit and purpose are
                viewed as inseparable components of a healthy global economy.
              </p>
              <div className="p-8 bg-surface-container-low rounded-xl border border-outline-variant">
                <span className="font-label-lg text-primary uppercase tracking-widest mb-6 block">
                  Core Values
                </span>
                <div className="flex flex-wrap gap-3">
                  <span className="px-5 py-2 bg-surface-container-lowest text-navy-brand text-xs font-bold tracking-widest rounded-lg border border-outline-variant">
                    INTEGRITY
                  </span>
                  <span className="px-5 py-2 bg-surface-container-lowest text-navy-brand text-xs font-bold tracking-widest rounded-lg border border-outline-variant">
                    INNOVATION
                  </span>
                  <span className="px-5 py-2 bg-surface-container-lowest text-navy-brand text-xs font-bold tracking-widest rounded-lg border border-outline-variant">
                    IMPACT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface py-24 border-y border-outline-variant">
          <div className="px-container-padding max-w-container-max mx-auto">
            <div className="text-center mb-24 reveal-on-scroll">
              <h2 className="font-headline-lg text-on-surface mb-4">
                A Journey of Growth
              </h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto uppercase tracking-widest text-xs">
                From a small discussion group to an institutionalized club.
              </p>
            </div>
            <div className="relative space-y-24">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant -translate-x-1/2"></div>

              <div className="relative grid md:grid-cols-2 gap-12 items-center reveal-on-scroll">
                <div className="md:text-right">
                  <h3 className="text-6xl font-black text-forest-brand/10 mb-2">
                    2026
                  </h3>
                  <h4 className="text-xl font-bold text-navy-brand mb-4 uppercase">
                    Expansion &amp; Scale
                  </h4>
                  <p className="text-on-surface-variant max-w-md md:ml-auto">
                    Launched the national &quot;Impact Finance Conclave&quot;
                    bringing together 20+ universities and 5 venture capital
                    firms.
                  </p>
                </div>
                <div className="h-64 rounded-xl overflow-hidden shadow-sm border border-outline-variant">
                  <div
                    className="w-full h-full bg-surface-container-high bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBtbLvWt60EP-tDxGFBlxkDEd7EST23r0n3O87mBCaS_gprLu_B-LyBmTQ4tJLeuxFJurDdl0KDz7jk3NeRd9PtD77EIuimpyeUGzQWASiuRtDv0pZvaoPoHwFzEdUOigy9HqTdwZ2ylE8nYOPWlUSJcaG8Rx3Jt6pybBa173OQ4ZFtFRXfS0OEtbuPhREwLxowGU8uY9num189A5RcV7RtNralqRBKwoIob6dCjL9nGdoRh3FjSwpaAXn-RnUjyTz6BMsQ6A94chI')",
                    }}
                  ></div>
                </div>
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-forest-brand border-4 border-white"></div>
              </div>

              <div className="relative grid md:grid-cols-2 gap-12 items-center reveal-on-scroll">
                <div className="md:order-2">
                  <h3 className="text-6xl font-black text-forest-brand/10 mb-2">
                    2023
                  </h3>
                  <h4 className="text-xl font-bold text-navy-brand mb-4 uppercase">
                    RISE Capital Formation
                  </h4>
                  <p className="text-on-surface-variant max-w-md">
                    Formalized our student-managed impact fund, focusing on
                    early-stage social enterprises in the Indian ecosystem.
                  </p>
                </div>
                <div className="md:order-1 h-64 rounded-xl overflow-hidden shadow-sm border border-outline-variant">
                  <div
                    className="w-full h-full bg-surface-container-high bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBMdOs-j9e5LGPjGoiW827GZhV9r6ghO_MbkLmbz-tFtI3yEdJy3Bx524oc-3atbfwZ8FxNquDt0F0T1TlYBaAI1tV-8sFWdTudiFySE9bn45kMSDlnFcyVqurK9uxguH-uWd-2_u0bzopmtRMlWtjff2cDmJLN33wsALj7D1knY2vJuouY_16hivjfXSL7goEcwbwKAF9aEgQuFoiXSPML533qVOdHOpjuSBTGdVk-NM22d8k8ts2wLJW2XnYaMo-I_z4GghmIdCM')",
                    }}
                  ></div>
                </div>
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-forest-brand border-4 border-white"></div>
              </div>

              <div className="relative grid md:grid-cols-2 gap-12 items-center reveal-on-scroll">
                <div className="md:text-right">
                  <h3 className="text-6xl font-black text-forest-brand/10 mb-2">
                    2022
                  </h3>
                  <h4 className="text-xl font-bold text-navy-brand mb-4 uppercase">
                    The Inception
                  </h4>
                  <p className="text-on-surface-variant max-w-md md:ml-auto">
                    Founded by a group of passionate students at Ashoka
                    University looking to apply classroom theory to social
                    sector challenges.
                  </p>
                </div>
                <div className="h-64 rounded-xl overflow-hidden shadow-sm border border-outline-variant">
                  <div
                    className="w-full h-full bg-surface-container-high bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuPrWBCvihppW21s-p1Akka4SzDPZYGBIHS9sBWYkK-Ar0uj0t26PdDddttsPu5--rGpcbITwvSrXfNm-vseIeT_slM7YXl6-jESpDFpUmJzE3cbMtxF7RmxLaVQpxmsjHOiN6b-GyGg2twy2gJywCpm1MTAWHMvZRZkb6Z-vStras9n-KlGgWYHAyp8ck9qQIoj63MWOucOEnTq20QFKX4pKvKuJbOS-d6d7gFQnEpph8bMhVet4fZ-b5M3KUOuC11m0MBuDe0Hcs')",
                    }}
                  ></div>
                </div>
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-forest-brand border-4 border-white"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-container-padding max-w-container-max mx-auto text-center reveal-on-scroll">
          <span className="text-forest-brand text-5xl mb-8 block font-display-lg opacity-20">
            99
          </span>
          <blockquote className="text-2xl md:text-3xl font-light text-on-surface leading-relaxed max-w-4xl mx-auto italic mb-12">
            &quot;Finance is not just about the accumulation of wealth, but the
            distribution of opportunity.&quot;
          </blockquote>
          <div className="w-16 h-[2px] bg-forest-brand mx-auto mb-6"></div>
          <p className="font-label-lg text-on-surface-variant uppercase tracking-[0.4em]">
            The AIFC Philosophy
          </p>
        </section>
      </main>
    </PageShell>
  );
}
