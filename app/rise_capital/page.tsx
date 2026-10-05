import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "RISE Capital" };

export default function Page() {
  return (
    <PageShell
      name="rise_capital"
      className="bg-white text-on-surface font-body-md antialiased overflow-x-hidden selection:bg-primary selection:text-white"
    >
      <main className="pt-20">
        <section className="relative py-section-gap px-container-padding max-w-container-max mx-auto overflow-hidden bg-white">
          <div className="absolute -right-20 top-20 pointer-events-none opacity-[0.03] select-none">
            <span className="font-watermark text-watermark uppercase leading-none block">
              CAPITAL
            </span>
            <span className="font-watermark text-watermark uppercase leading-none block -mt-4">
              IMPACT
            </span>
          </div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-8">
              <span className="font-label-lg text-forest-brand uppercase mb-4 block tracking-[0.3em]">
                The Investment Arm
              </span>
              <h1 className="font-display-lg text-navy-brand mb-8 leading-tight">
                RISE Capital
              </h1>
              <p className="font-body-lg text-on-surface-variant max-w-2xl">
                A student-led impact venture fund dedicated to identifying and
                supporting early-stage social enterprises that combine scalable
                financial returns with measurable societal progress.
              </p>
              <div className="mt-12 flex flex-wrap gap-4">
                <button className="bg-navy-brand text-white px-8 py-4 rounded-lg font-label-lg uppercase transition-all hover:bg-forest-brand shadow-sm">
                  View Fund Performance
                </button>
                <button className="border border-navy-brand text-navy-brand px-8 py-4 rounded-lg font-label-lg uppercase transition-all hover:bg-surface-container-low">
                  Pitch to Us
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-section-gap border-y border-outline-variant">
          <div className="px-container-padding max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-20">
              <div className="md:col-span-4">
                <h2 className="font-headline-md text-navy-brand">Philosophy</h2>
                <div className="w-16 h-1 bg-forest-brand mt-4 rounded-full"></div>
              </div>
              <div className="md:col-span-8">
                <p className="font-body-lg text-on-surface-variant">
                  Our investment thesis is rooted in the belief that systemic
                  social challenges require market-based solutions. We provide
                  more than just capital; we offer strategic advisory, network
                  access, and the intellectual rigor of Ashoka University.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-12 bg-surface-container-low rounded-xl border border-outline-variant hover:border-forest-brand/30 hover:shadow-xl group transition-all duration-500">
                <span
                  className="material-symbols-outlined text-4xl text-forest-brand mb-8 transition-transform group-hover:scale-110"
                  data-icon="balance"
                >
                  balance
                </span>
                <h3 className="font-headline-sm text-on-surface mb-4">
                  Dual Bottom Line
                </h3>
                <p className="text-on-surface-variant font-body-md leading-relaxed">
                  We measure success by the intersection of risk-adjusted
                  financial returns and validated social impact metrics.
                </p>
              </div>
              <div className="p-12 bg-surface-container-low rounded-xl border border-outline-variant hover:border-forest-brand/30 hover:shadow-xl group transition-all duration-500">
                <span
                  className="material-symbols-outlined text-4xl text-forest-brand mb-8 transition-transform group-hover:scale-110"
                  data-icon="hub"
                >
                  hub
                </span>
                <h3 className="font-headline-sm text-on-surface mb-4">
                  Ecosystem Building
                </h3>
                <p className="text-on-surface-variant font-body-md leading-relaxed">
                  Investment as a catalyst. We connect our portfolio companies
                  with Ashoka's global network of thought leaders.
                </p>
              </div>
              <div className="p-12 bg-surface-container-low rounded-xl border border-outline-variant hover:border-forest-brand/30 hover:shadow-xl group transition-all duration-500">
                <span
                  className="material-symbols-outlined text-4xl text-forest-brand mb-8 transition-transform group-hover:scale-110"
                  data-icon="analytics"
                >
                  analytics
                </span>
                <h3 className="font-headline-sm text-on-surface mb-4">
                  Rigorous Diligence
                </h3>
                <p className="text-on-surface-variant font-body-md leading-relaxed">
                  Every investment undergoes a 12-week comprehensive audit of
                  financial health and operational scalability.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section-gap px-container-padding max-w-container-max mx-auto bg-white">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="font-label-lg text-forest-brand uppercase mb-2 block tracking-widest">
                Active Investments
              </span>
              <h2 className="font-headline-md text-navy-brand">Portfolio</h2>
            </div>
            <div className="hidden md:flex gap-2">
              <span className="bg-surface-container-high text-on-surface-variant px-3 py-1 font-label-lg text-[10px] uppercase rounded-sm">
                Agritech
              </span>
              <span className="bg-surface-container-high text-on-surface-variant px-3 py-1 font-label-lg text-[10px] uppercase rounded-sm">
                EdTech
              </span>
              <span className="bg-surface-container-high text-on-surface-variant px-3 py-1 font-label-lg text-[10px] uppercase rounded-sm">
                Healthcare
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden group border border-outline-variant rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-navy-brand/90 via-navy-brand/20 to-transparent z-10 transition-opacity group-hover:opacity-95"></div>
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDgp7COOOQmuKb7KctZie-nbJ3HUNkBcVfxJwWde398f5v5QX3hQdj6_bATWtOdIAuMWuK6JNkobsImBpS-IAVuGjmAvo8fZaOylQLPpx77zr4HImZxzy-3-N-vYWIucKxB6SozHlCqPWgvpFY1hK-nOkS8KLZgS0T7MaRjtQ9y6PmYt2bN276z5G11W46DXbTQe_NiC7y7NRWUUMUAIJuj56IM3gc00IrsT1hUAgdB04l4kUVYrGIVlxUf_8ZTdqMIctEWvBg0Sko')",
                }}
              ></div>
              <div className="absolute bottom-0 left-0 p-10 z-20 w-full text-white">
                <div className="bg-forest-brand px-3 py-1 inline-block mb-4 font-label-lg text-[10px] uppercase rounded-sm">
                  Agritech
                </div>
                <h3 className="font-headline-md mb-2">TerraFlow Systems</h3>
                <p className="font-body-md text-white/80 max-w-sm">
                  Revolutionizing irrigation through AI-driven water
                  distribution for marginalized farmers.
                </p>
              </div>
            </div>

            <div className="md:col-span-2 md:row-span-1 bg-surface-container-low p-8 border border-outline-variant rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-headline-sm text-on-surface">
                    Lumina Education
                  </h3>
                  <span
                    className="material-symbols-outlined text-forest-brand"
                    data-icon="trending_up"
                  >
                    trending_up
                  </span>
                </div>
                <p className="font-body-md text-on-surface-variant max-w-md">
                  Bridging the vocational gap through low-cost, scalable digital
                  learning platforms in rural districts.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-outline-variant flex justify-between items-center">
                <span className="font-label-lg text-on-surface-variant uppercase text-[11px]">
                  Growth Stage: Series A
                </span>
                <a
                  className="text-forest-brand font-label-lg uppercase flex items-center gap-1 text-[11px] hover:underline"
                  href="#"
                >
                  Case Study{" "}
                  <span
                    className="material-symbols-outlined text-sm"
                    data-icon="north_east"
                  >
                    north_east
                  </span>
                </a>
              </div>
            </div>

            <div className="md:col-span-1 md:row-span-1 bg-forest-brand text-white p-8 rounded-xl flex flex-col justify-between">
              <h3 className="font-headline-sm">Veda Health</h3>
              <p className="font-label-lg text-[11px] opacity-80 uppercase tracking-widest mt-2">
                Preventative Care
              </p>
              <div className="mt-auto">
                <span className="text-3xl font-bold">120K+</span>
                <p className="text-[10px] font-label-lg uppercase">
                  Patients Served
                </p>
              </div>
            </div>

            <div className="md:col-span-1 md:row-span-1 bg-white p-8 border border-outline-variant rounded-xl flex flex-col justify-between">
              <h3 className="font-headline-sm text-on-surface">Ozone Tech</h3>
              <p className="text-on-surface-variant font-body-md text-sm">
                Carbon sequestration solutions for industrial logistics.
              </p>
              <div className="mt-auto">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-surface-container-highest border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-surface-container-high border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-surface-container border-2 border-white flex items-center justify-center text-[10px] text-on-surface-variant font-bold">
                    +4
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-section-gap border-y border-outline-variant relative overflow-hidden">
          <div className="relative z-10 px-container-padding max-w-container-max mx-auto">
            <div className="text-center mb-24">
              <span className="font-label-lg text-forest-brand uppercase mb-4 block tracking-[0.3em]">
                Quantifiable Progress
              </span>
              <h2 className="font-headline-md mb-4 text-navy-brand">
                Impact Dashboard
              </h2>
              <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Tracking our real-time contribution to sustainable development
                goals through our portfolio companies.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
              <div>
                <div className="font-display-lg text-navy-brand block mb-2 opacity-20">
                  $4.2M
                </div>
                <div className="font-label-lg text-on-surface-variant uppercase tracking-widest">
                  Capital Deployed
                </div>
              </div>
              <div>
                <div className="font-display-lg text-navy-brand block mb-2 opacity-20">
                  240k
                </div>
                <div className="font-label-lg text-on-surface-variant uppercase tracking-widest">
                  Lives Impacted
                </div>
              </div>
              <div>
                <div className="font-display-lg text-navy-brand block mb-2 opacity-20">
                  18
                </div>
                <div className="font-label-lg text-on-surface-variant uppercase tracking-widest">
                  Enterprises Funded
                </div>
              </div>
              <div>
                <div className="font-display-lg text-navy-brand block mb-2 opacity-20">
                  08
                </div>
                <div className="font-label-lg text-on-surface-variant uppercase tracking-widest">
                  States Covered
                </div>
              </div>
            </div>
            <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
              <div className="bg-surface-container-low p-12 border border-outline-variant rounded-xl">
                <h3 className="font-headline-sm text-on-surface mb-8">
                  SDG Alignment
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-label-lg text-[11px] uppercase text-on-surface">
                        Goal 4: Quality Education
                      </span>
                      <span className="font-label-lg text-[11px] uppercase text-forest-brand font-bold">
                        45%
                      </span>
                    </div>
                    <div className="w-full h-1 bg-surface-dim rounded-full overflow-hidden">
                      <div className="bg-forest-brand h-full w-[45%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-label-lg text-[11px] uppercase text-on-surface">
                        Goal 13: Climate Action
                      </span>
                      <span className="font-label-lg text-[11px] uppercase text-forest-brand font-bold">
                        30%
                      </span>
                    </div>
                    <div className="w-full h-1 bg-surface-dim rounded-full overflow-hidden">
                      <div className="bg-forest-brand h-full w-[30%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-label-lg text-[11px] uppercase text-on-surface">
                        Goal 8: Decent Work
                      </span>
                      <span className="font-label-lg text-[11px] uppercase text-forest-brand font-bold">
                        25%
                      </span>
                    </div>
                    <div className="w-full h-1 bg-surface-dim rounded-full overflow-hidden">
                      <div className="bg-forest-brand h-full w-[25%]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-12">
                <blockquote className="font-headline-sm text-on-surface italic leading-tight mb-8">
                  &quot;Impact is not an secondary outcome for RISE Capital; it
                  is the fundamental driver of our investment decisions and the
                  core measure of our success.&quot;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden">
                    <span
                      className="material-symbols-outlined text-forest-brand"
                      data-icon="person"
                    >
                      person
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">Ananya Roy</p>
                    <p className="text-[10px] font-label-lg text-forest-brand uppercase tracking-widest">
                      Managing Partner, RISE Capital
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section-gap px-container-padding max-w-container-max mx-auto text-center bg-white">
          <h2 className="font-headline-md text-navy-brand mb-8">
            Invest in the Future of Impact
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
            Join our syndicate or partner with us to fuel the next generation of
            social entrepreneurs in India and beyond.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <input
              className="w-full border border-outline-variant bg-white rounded-lg px-6 py-4 focus:ring-1 focus:ring-forest-brand focus:border-forest-brand outline-none font-body-md"
              placeholder="Your corporate email"
              type="email"
            />
            <button className="w-full md:w-auto whitespace-nowrap bg-navy-brand text-white px-8 py-4 font-label-lg rounded-lg uppercase hover:bg-black transition-all shadow-sm">
              Get Brief
            </button>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
