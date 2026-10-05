import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Advisory Projects" };

export default function Page() {
  return (
    <PageShell
      name="advisory_projects"
      className="font-body-md text-on-surface selection:bg-primary selection:text-white overflow-x-hidden bg-white"
    >
      <main className="pt-20">
        <section className="relative overflow-hidden bg-white py-32 md:py-48">
          <div className="absolute top-0 right-0 watermark-text font-watermark text-[200px] leading-none transform translate-x-1/4 -translate-y-1/4 opacity-[0.02]">
            ADVISORY
          </div>
          <div className="max-w-container-max mx-auto px-container-padding relative z-10">
            <div className="w-full md:w-9/12 lg:w-7/12">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[2px] w-12 bg-forest-brand"></div>
                <span className="font-label-lg text-forest-brand uppercase tracking-[0.2em]">
                  Consulting Excellence
                </span>
              </div>
              <h1 className="font-display-lg text-on-background mb-8 leading-tight text-5xl lg:text-6xl">
                Bridging Finance and Social Impact through Strategic Advisory.
              </h1>
              <p className="font-body-lg text-on-surface-variant mb-12 leading-relaxed max-w-xl">
                We provide data-driven insights and financial structuring
                strategies for social enterprises, non-profits, and impact
                funds, fostering a sustainable ecosystem for purpose-driven
                capital.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="bg-navy-brand text-white px-10 py-4 rounded-lg font-label-lg hover:bg-black transition-all active:scale-95 shadow-md uppercase tracking-wider">
                  Request Proposal
                </button>
                <button className="border border-navy-brand text-navy-brand px-10 py-4 rounded-lg font-label-lg hover:bg-surface-container-low transition-all active:scale-95 uppercase tracking-wider">
                  View Methodology
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section-gap bg-white">
          <div className="max-w-container-max mx-auto px-container-padding">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="p-12 rounded-xl bg-surface-container-low border border-outline-variant hover:border-forest-brand/30 hover:shadow-xl transition-all group reveal-on-scroll">
                <div className="w-14 h-14 bg-surface flex items-center justify-center rounded-lg shadow-sm mb-8 group-hover:bg-forest-brand transition-colors">
                  <span className="material-symbols-outlined text-3xl text-forest-brand group-hover:text-white">
                    account_balance
                  </span>
                </div>
                <h3 className="font-headline-sm text-on-background mb-4">
                  Financial Structuring
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Developing innovative blended finance models and debt-equity
                  structures tailored for impact-first organizations.
                </p>
              </div>

              <div
                className="p-12 rounded-xl bg-surface-container-low border border-outline-variant hover:border-forest-brand/30 hover:shadow-xl transition-all group reveal-on-scroll"
                style={{ transitionDelay: "100ms" }}
              >
                <div className="w-14 h-14 bg-surface flex items-center justify-center rounded-lg shadow-sm mb-8 group-hover:bg-forest-brand transition-colors">
                  <span className="material-symbols-outlined text-3xl text-forest-brand group-hover:text-white">
                    monitoring
                  </span>
                </div>
                <h3 className="font-headline-sm text-on-background mb-4">
                  Impact Assessment
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Rigorous quantitative and qualitative analysis to measure the
                  social and environmental ROI of investment portfolios.
                </p>
              </div>

              <div
                className="p-12 rounded-xl bg-surface-container-low border border-outline-variant hover:border-forest-brand/30 hover:shadow-xl transition-all group reveal-on-scroll"
                style={{ transitionDelay: "200ms" }}
              >
                <div className="w-14 h-14 bg-surface flex items-center justify-center rounded-lg shadow-sm mb-8 group-hover:bg-forest-brand transition-colors">
                  <span className="material-symbols-outlined text-3xl text-forest-brand group-hover:text-white">
                    strategy
                  </span>
                </div>
                <h3 className="font-headline-sm text-on-background mb-4">
                  Growth Strategy
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Market entry analysis and scaling roadmaps for enterprises
                  operating at the intersection of profit and purpose.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section-gap bg-surface">
          <div className="max-w-container-max mx-auto px-container-padding">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 reveal-on-scroll">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-[2px] w-8 bg-forest-brand"></div>
                  <span className="font-label-lg text-forest-brand uppercase tracking-widest">
                    Featured Portfolios
                  </span>
                </div>
                <h2 className="font-display-lg text-on-background text-4xl lg:text-5xl">
                  Notable Engagements
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="px-6 py-2.5 bg-forest-brand text-white font-label-lg rounded-full shadow-sm">
                  All Projects
                </button>
                <button className="px-6 py-2.5 bg-white text-on-surface-variant border border-outline-variant font-label-lg rounded-full hover:bg-surface-container-low transition-colors">
                  Healthcare
                </button>
                <button className="px-6 py-2.5 bg-white text-on-surface-variant border border-outline-variant font-label-lg rounded-full hover:bg-surface-container-low transition-colors">
                  Sustainability
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="group bg-white rounded-xl overflow-hidden border border-outline-variant hover:shadow-2xl transition-all duration-500 reveal-on-scroll">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    alt="Urban Housing"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgBxsU4kDyQGzgbWhvL1_-UCUezCBLic6s05RRbXnYP42ttiMsRX_TZumBz_KjMaKmFvOlK4WcMM2iXQ4r3zooeL3eXQYGRWMMyBllcD8xES5x_Zp2LzOVzg2beHl147zMk6VTPFIATGG-76nUQI1oOgYrsPbeYDtD2gCymR84UNKW-NoSw0OZBcdOnwYDZG6cm9UhY0INXV0lUIbHR_MbTPf0H4pB5AO6Yufy3MMan9ThAF2gvu887zzeRH_r65cdum033iDNzpw"
                  />
                </div>
                <div className="p-10">
                  <span className="text-[11px] font-bold text-forest-brand uppercase tracking-widest mb-3 block">
                    Sustainable Cities
                  </span>
                  <h3 className="font-headline-sm text-on-background mb-4">
                    Urban Resilience Bonds
                  </h3>
                  <p className="text-on-surface-variant mb-8 line-clamp-2 leading-relaxed">
                    Advised municipal government on a $50M bond for sustainable
                    energy infrastructure.
                  </p>
                  <a
                    className="inline-flex items-center gap-2 font-label-lg text-forest-brand hover:gap-4 transition-all"
                    href="#"
                  >
                    Case Study{" "}
                    <span className="material-symbols-outlined text-base">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>

              <div
                className="group bg-white rounded-xl overflow-hidden border border-outline-variant hover:shadow-2xl transition-all duration-500 reveal-on-scroll"
                style={{ transitionDelay: "100ms" }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    alt="Agritech"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRODYLqZ18AjAaDuW1v4GS3M93eD5aQKEZzC5x9w9J2HgU9tDdCYqd_WBRmyIgXBnxBCJiMM4CTeK5gMAcaUDukayMIOsOE0yVz68ZENuS00sHCPHe0abuEE1lgfOeDsUdBIFi2siQrf-KRttJLLtlZDeR6nndjoSBMewS-_T7gDowfrk0VHXx5hXHWJnzxXGOwJuBrzUdAT4GWe2LGKkSQFYa1HGAdQem28UqwodvELBScckiY1iH1x7ajpS_WFZky9LiTkhKUms"
                  />
                </div>
                <div className="p-10">
                  <span className="text-[11px] font-bold text-forest-brand uppercase tracking-widest mb-3 block">
                    Agritech
                  </span>
                  <h3 className="font-headline-sm text-on-background mb-4">
                    Smallholder Inclusion
                  </h3>
                  <p className="text-on-surface-variant mb-8 line-clamp-2 leading-relaxed">
                    Developing micro-equity models for rural farming
                    cooperatives in South Asia.
                  </p>
                  <a
                    className="inline-flex items-center gap-2 font-label-lg text-forest-brand hover:gap-4 transition-all"
                    href="#"
                  >
                    Case Study{" "}
                    <span className="material-symbols-outlined text-base">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>

              <div
                className="group bg-white rounded-xl overflow-hidden border border-outline-variant hover:shadow-2xl transition-all duration-500 reveal-on-scroll"
                style={{ transitionDelay: "200ms" }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    alt="Clean Energy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC5JdfxbAL5IMj7riD7cpg_hw2ssjj-PrPZskN0V20rEG7S4t3Qsk_phseuw0o8Qz38hr761rxr-VUfADIpp6rZfnfGnnwSQhUEc15jQZrdb_F_IW6MnM8GrXIqDAijfeLN7RtIp5OQ_0Ot71-qrRNaDLQqBNkhVw_PVxsqU7au1sfA5lK4OCAQh1XmiMyyRftPszO_8nGBkWqHk0kk5XLqblwxJhmRj77xfoJGNraF7DYSH2mmKuFDcWH7Ho6iY3N-OonCnj41dc"
                  />
                </div>
                <div className="p-10">
                  <span className="text-[11px] font-bold text-forest-brand uppercase tracking-widest mb-3 block">
                    Clean Energy
                  </span>
                  <h3 className="font-headline-sm text-on-background mb-4">
                    Off-grid Solar Portfolio
                  </h3>
                  <p className="text-on-surface-variant mb-8 line-clamp-2 leading-relaxed">
                    Due diligence for acquiring distributed solar assets in
                    emerging markets.
                  </p>
                  <a
                    className="inline-flex items-center gap-2 font-label-lg text-forest-brand hover:gap-4 transition-all"
                    href="#"
                  >
                    Case Study{" "}
                    <span className="material-symbols-outlined text-base">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section-gap bg-white">
          <div className="max-w-container-max mx-auto px-container-padding">
            <div className="text-center mb-24 reveal-on-scroll">
              <span className="font-label-lg text-forest-brand tracking-widest mb-4 block uppercase">
                Methodology
              </span>
              <h2 className="font-display-lg text-on-background text-4xl lg:text-5xl">
                Our Approach to Impact
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
              <div className="text-center flex flex-col items-center reveal-on-scroll">
                <div className="w-16 h-16 rounded-2xl bg-secondary-container text-navy-brand flex items-center justify-center font-bold text-xl mb-8 shadow-sm">
                  01
                </div>
                <h4 className="font-bold text-on-background text-lg mb-4">
                  Diagnosis
                </h4>
                <p className="text-on-surface-variant text-sm max-w-xs leading-relaxed">
                  Stakeholder mapping and financial health audit.
                </p>
              </div>
              <div
                className="text-center flex flex-col items-center reveal-on-scroll"
                style={{ transitionDelay: "100ms" }}
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary-container text-navy-brand flex items-center justify-center font-bold text-xl mb-8 shadow-sm">
                  02
                </div>
                <h4 className="font-bold text-on-background text-lg mb-4">
                  Modeling
                </h4>
                <p className="text-on-surface-variant text-sm max-w-xs leading-relaxed">
                  Bespoke financial and risk-return calibration.
                </p>
              </div>
              <div
                className="text-center flex flex-col items-center reveal-on-scroll"
                style={{ transitionDelay: "200ms" }}
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary-container text-navy-brand flex items-center justify-center font-bold text-xl mb-8 shadow-sm">
                  03
                </div>
                <h4 className="font-bold text-on-background text-lg mb-4">
                  Execution
                </h4>
                <p className="text-on-surface-variant text-sm max-w-xs leading-relaxed">
                  Strategic implementation and transaction advisory.
                </p>
              </div>
              <div
                className="text-center flex flex-col items-center reveal-on-scroll"
                style={{ transitionDelay: "300ms" }}
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary-container text-navy-brand flex items-center justify-center font-bold text-xl mb-8 shadow-sm">
                  04
                </div>
                <h4 className="font-bold text-on-background text-lg mb-4">
                  Optimization
                </h4>
                <p className="text-on-surface-variant text-sm max-w-xs leading-relaxed">
                  Long-term impact monitoring and capital strategies.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-navy-brand text-white">
          <div className="max-w-4xl mx-auto px-container-padding text-center">
            <div className="mb-10 text-forest-brand">
              <span className="material-symbols-outlined text-6xl opacity-50">
                format_quote
              </span>
            </div>
            <h2 className="font-display-lg mb-10 italic text-3xl lg:text-4xl leading-relaxed">
              &quot;Technical rigor with a deep fundamental understanding of
              social mission.&quot;
            </h2>
            <div className="font-label-lg tracking-[0.2em] opacity-80 uppercase mb-16">
              — Global Impact Fund
            </div>
            <button className="bg-white text-navy-brand px-12 py-5 rounded-lg font-label-lg hover:bg-surface-container-low transition-all active:scale-95 shadow-xl uppercase tracking-widest">
              Contact Our Advisors
            </button>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
