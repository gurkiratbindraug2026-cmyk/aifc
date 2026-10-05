import type { Metadata } from "next";
import JoinForm from "@/components/JoinForm";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Join Us" };

export default function Page() {
  return (
    <PageShell
      name="join_us"
      className="font-body-md selection:bg-primary selection:text-white overflow-x-hidden bg-surface text-on-surface"
    >
      <main className="pt-20">
        <section className="relative py-24 px-container-padding max-w-container-max mx-auto overflow-hidden">
          <div className="absolute -right-20 top-20 pointer-events-none select-none z-0">
            <span className="font-watermark text-watermark text-on-surface opacity-[0.03] uppercase tracking-tighter">
              IMPACT
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative z-10">
            <div className="md:col-span-8 lg:col-span-7">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-forest-brand"></div>
                <span className="font-label-lg text-forest-brand uppercase tracking-widest">
                  Admissions &amp; Partnerships
                </span>
              </div>
              <h1 className="font-display-lg text-5xl md:text-6xl text-navy-brand mb-8 leading-[1.1] font-extrabold tracking-tighter">
                Forge the Future of Finance.
              </h1>
              <p className="font-body-lg text-on-surface-variant max-w-xl mb-12 leading-relaxed">
                We are seeking intellectuals, visionaries, and social architects
                ready to bridge the gap between traditional capital and
                sustainable development. Join a legacy of academic prestige and
                social responsibility.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-24 border-y border-outline-variant">
          <div className="px-container-padding max-w-container-max mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
              <div className="lg:col-span-5 space-y-12">
                <div>
                  <h2 className="font-display-lg text-3xl font-bold text-on-surface mb-12">
                    Why Join Us?
                  </h2>
                  <div className="space-y-10">
                    <div className="flex gap-6 group">
                      <div className="w-14 h-14 bg-surface flex items-center justify-center rounded-lg border border-outline-variant shadow-sm flex-shrink-0 transition-all group-hover:border-forest-brand/30 group-hover:bg-forest-brand group-hover:text-white">
                        <span className="material-symbols-outlined text-[28px] text-forest-brand group-hover:text-white">
                          account_balance
                        </span>
                      </div>
                      <div>
                        <h3 className="font-headline-sm text-lg mb-2 text-on-surface">
                          Institutional Rigor
                        </h3>
                        <p className="text-on-surface-variant text-sm leading-relaxed">
                          Access to proprietary research and institutional-grade
                          financial modeling frameworks.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-6 group">
                      <div className="w-14 h-14 bg-surface flex items-center justify-center rounded-lg border border-outline-variant shadow-sm flex-shrink-0 transition-all group-hover:border-forest-brand/30 group-hover:bg-forest-brand group-hover:text-white">
                        <span className="material-symbols-outlined text-[28px] text-forest-brand group-hover:text-white">
                          hub
                        </span>
                      </div>
                      <div>
                        <h3 className="font-headline-sm text-lg mb-2 text-on-surface">
                          Elite Network
                        </h3>
                        <p className="text-on-surface-variant text-sm leading-relaxed">
                          Connect with over 200+ partner organizations and
                          academic leaders in the impact space.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-6 group">
                      <div className="w-14 h-14 bg-surface flex items-center justify-center rounded-lg border border-outline-variant shadow-sm flex-shrink-0 transition-all group-hover:border-forest-brand/30 group-hover:bg-forest-brand group-hover:text-white">
                        <span className="material-symbols-outlined text-[28px] text-forest-brand group-hover:text-white">
                          monitoring
                        </span>
                      </div>
                      <div>
                        <h3 className="font-headline-sm text-lg mb-2 text-on-surface">
                          Direct Impact
                        </h3>
                        <p className="text-on-surface-variant text-sm leading-relaxed">
                          Apply financial theory to live advisory projects for
                          social enterprises globally.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-xl border border-outline-variant">
                  <img
                    alt="Professional university interior"
                    className="object-cover w-full h-full scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtl7x9yz2XqRH6aXxjk9jU5xihN4K73fRIbvtXi-t1PRWoBUn-fApKR0ml2gbERal9y9d7KTFqhyx0PZHAzGFhwQ_BQwFhtbGOzsUURgm1TZw3xIETO6oUc-zhUwmmjSyB1JSBbwvvTfipyhVcOdS1pGjD-oxCCr0pXUrYWIAqYYk5JDoMI1HhhwFVVY_sD96UhPDfaRX3DgYQs5zfn0xoMjCWclXiSFMvgk374fY4BEPNl5mH2j1ipjjsVBQJPwEaPpdLg20NDLo"
                  />
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="bg-surface-container-lowest p-8 md:p-14 rounded-xl shadow-2xl border border-outline-variant">
                  <div className="mb-12">
                    <h2 className="font-headline-lg text-on-surface mb-3">
                      Member Application
                    </h2>
                    <p className="text-on-surface-variant font-label-lg uppercase tracking-widest text-xs">
                      Expected completion time: 4 minutes.
                    </p>
                  </div>
                  <JoinForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 border-b border-outline-variant bg-surface">
          <div className="px-container-padding max-w-container-max mx-auto">
            <p className="font-label-lg text-outline text-center mb-16 uppercase tracking-[0.4em]">
              Institutional Partners &amp; Affiliates
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:opacity-50 transition-opacity duration-500">
              <div className="text-xl font-extrabold tracking-tighter text-on-surface">
                FINANCE.CO
              </div>
              <div className="text-xl font-extrabold tracking-tighter text-on-surface">
                IMPACT LABS
              </div>
              <div className="text-xl font-extrabold tracking-tighter text-on-surface">
                GLOBAL GOALS
              </div>
              <div className="text-xl font-extrabold tracking-tighter text-on-surface">
                ASHOKA INST
              </div>
              <div className="text-xl font-extrabold tracking-tighter text-on-surface">
                PRESTIGE GP
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
