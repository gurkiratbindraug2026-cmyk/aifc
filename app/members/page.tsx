import type { Metadata } from "next";
import MemberFilters from "@/components/MemberFilters";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Team" };

export default function Page() {
  return (
    <PageShell
      name="members"
      className="font-body-md selection:bg-primary selection:text-white bg-surface overflow-x-hidden"
    >
      <main className="pt-32 pb-24">
        <section className="max-w-container-max mx-auto px-container-padding mb-section-gap">
          <div className="max-w-3xl reveal-on-scroll">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-12 bg-forest-brand"></div>
              <span className="font-label-lg text-forest-brand uppercase tracking-widest">
                The Team
              </span>
            </div>
            <h1 className="font-display-lg text-navy-brand mb-8 leading-tight text-5xl lg:text-6xl">
              Our Intellectual Capital.
            </h1>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              A diverse cohort of undergraduate and graduate students bridging
              the gap between rigorous financial modeling and meaningful social
              impact. Our team is structured across specialized pods to drive
              excellence in every mandate.
            </p>
          </div>
        </section>

        <section className="max-w-container-max mx-auto px-container-padding mb-16">
          <MemberFilters />
        </section>

        <section className="max-w-container-max mx-auto px-container-padding mb-section-gap">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-16">
            <div className="group cursor-pointer reveal-on-scroll">
              <div className="aspect-[4/5] bg-surface-container mb-6 overflow-hidden rounded-xl shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img
                  alt="Arjun Mehta"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnaqicDPN5PkLwo6akSqckWMUHnbsy5mHkZOvFIeJoCev90MEkgpJkR7oWcP-A-tseV86rNvuKQcohgSiLhQSYKiMSK-rCk2bCicjXUj-n8CkAE5Cz1kKa_7ItTuYlmEItGn5EWU9Qxe3Wvztty-roQPZQZMPm2ysifvQtfzCoHE47JFoqHTdUPuOn79qz1bJ4k5edXJqZJ_vV2-8tic7_PF4xu3fqrXqi1marMPoX4vrGUoCeL1Sbo5jo2HD6F-2HYlyH_INY-As"
                />
              </div>
              <div>
                <p className="font-label-lg text-forest-brand mb-2 tracking-wide uppercase">
                  Investment Pod
                </p>
                <h3 className="font-title-lg text-navy-brand mb-1 group-hover:text-forest-brand transition-colors">
                  Arjun Mehta
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  Lead Analyst
                </p>
              </div>
            </div>

            <div
              className="group cursor-pointer reveal-on-scroll"
              style={{ transitionDelay: "50ms" }}
            >
              <div className="aspect-[4/5] bg-surface-container mb-6 overflow-hidden rounded-xl shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img
                  alt="Sanya Gupta"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb8epALN_Hv6MV3ioRMuiaH0WCy9dZ84eiBSwJEA3gZM4t9jhXGBeA6b4eVSFExauFRDq4zdxVXIgeD2iiKQtgzeogsb0J4WklYCHd38a6YMoN4FWPxSDeYbJpTwI4LqZLOKcn9S9ruE8bZky_eUQ3-AB8XfScl9heZI8l6EvKIaiie_VsfUQt8w1aXPq2I-k5YHXjgmR48jA-JkjxHuH29qy0sGabBIpe-uzhOxz8Ihwiw6Lvqv4AUCLVfcAnZxMs4Mh4Qxm2Y40"
                />
              </div>
              <div>
                <p className="font-label-lg text-forest-brand mb-2 tracking-wide uppercase">
                  Advisory Group
                </p>
                <h3 className="font-title-lg text-navy-brand mb-1 group-hover:text-forest-brand transition-colors">
                  Sanya Gupta
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  Strategy Consultant
                </p>
              </div>
            </div>

            <div
              className="group cursor-pointer reveal-on-scroll"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="aspect-[4/5] bg-surface-container mb-6 overflow-hidden rounded-xl shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img
                  alt="Rohan Varma"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxlumFYp_V0P-QWv_YSevmK5wYnrsEDLri1kUdlkO07Qx7jGCAUMqdxRTmC8jTQ7WHZmBy9fOAPfiwq1DHGLNLx29yA8DxeX32PnUGbQB6GrSR-iuxx-uUAXKYaaAaU1ngCP-AKZNaD2mAtQGOmn9v8r52BlwOMVPr5E4qVpRmz02GRGeVsN_VflTdlu52m3DglnERuIDE7nGUhpLvALj0hQxyRsSphl27a0tjIGXyxrDyHB-Wy6ikV97RL9pneRbRCUkUXQFpt4w"
                />
              </div>
              <div>
                <p className="font-label-lg text-forest-brand mb-2 tracking-wide uppercase">
                  Partnerships
                </p>
                <h3 className="font-title-lg text-navy-brand mb-1 group-hover:text-forest-brand transition-colors">
                  Rohan Varma
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  External Relations
                </p>
              </div>
            </div>

            <div
              className="group cursor-pointer reveal-on-scroll"
              style={{ transitionDelay: "150ms" }}
            >
              <div className="aspect-[4/5] bg-surface-container mb-6 overflow-hidden rounded-xl shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img
                  alt="Anjali Nair"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTEeaRZ5RMTRcCfXXz51mRhFSE_JCcg3f46BJS96CRyIHlXvw1o-gqEsBpuFEDQdgZHnylWDHH_VmsQmRmTYO48c7KlkI4HOaaQW7oT5TG_lley7rd_jx8Pf7TOdJQneRmAZbcJROLETYVfsKUhFZ5A5CoPDIhpWpygq8K0FEGo8SHmjFWL1HC1nEK7Qg9CDE97iz4ZRnsj-5wcwoTL6TSkMaEKl481kTtcKZFckKZCzRIlYFaxeAAam6MZYFR3GfMvVLA_dO5GJ4"
                />
              </div>
              <div>
                <p className="font-label-lg text-forest-brand mb-2 tracking-wide uppercase">
                  Investment Pod
                </p>
                <h3 className="font-title-lg text-navy-brand mb-1 group-hover:text-forest-brand transition-colors">
                  Anjali Nair
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  Equity Researcher
                </p>
              </div>
            </div>

            <div
              className="group cursor-pointer reveal-on-scroll"
              style={{ transitionDelay: "200ms" }}
            >
              <div className="aspect-[4/5] bg-surface-container mb-6 overflow-hidden rounded-xl shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img
                  alt="Kabir Singh"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR9bCe3_1X809UyLeNFzMsJ9_8BAr2yAFdixzLRAAC9EhNCx69zTTM2ZfknEb01sACUlcJEmQQefJ3CzqVS2hVKdp1fQZF4yGsBurVo42sqvrZBpg6GvROzH4R7vLsp_ZgIIjoD-Hidl-J-iC4IXMp58Jkw-ScIJBze4f67HMnIoppn6gJsAtFI1sxu62bquaWMxNxoYtLNn8m8ZzbbgHD4tOvZMMONUsrRzj8N3DMowefJtL2JZZMq_Vz7EUxLUJbmSIeUKx8bfU"
                />
              </div>
              <div>
                <p className="font-label-lg text-forest-brand mb-2 tracking-wide uppercase">
                  Operations
                </p>
                <h3 className="font-title-lg text-navy-brand mb-1 group-hover:text-forest-brand transition-colors">
                  Kabir Singh
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  Operations Associate
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-24 relative overflow-hidden">
          <div className="max-w-container-max mx-auto px-container-padding flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="md:w-3/5 reveal-on-scroll">
              <h2 className="font-headline-md text-navy-brand mb-6 text-3xl lg:text-4xl">
                Shape the Future of Impact Finance.
              </h2>
              <p className="font-body-lg text-on-surface-variant mb-10 leading-relaxed max-w-2xl">
                We are always looking for curious minds who are passionate about
                the intersection of social change and financial rigor.
                Applications for the Spring 2025 cohort open soon.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-forest-brand text-white px-10 py-4 rounded-lg font-label-lg hover:bg-navy-brand transition-all shadow-md uppercase tracking-widest">
                  Apply Now
                </button>
                <button className="border border-outline-variant bg-surface text-on-surface-variant px-10 py-4 rounded-lg font-label-lg hover:border-forest-brand hover:text-forest-brand transition-all uppercase tracking-widest">
                  Member Handbook
                </button>
              </div>
            </div>
            <div
              className="md:w-2/5 relative reveal-on-scroll"
              style={{ transitionDelay: "200ms" }}
            >
              <div className="bg-surface p-12 border border-outline-variant rounded-xl shadow-sm relative z-10 text-center md:text-left group hover:border-forest-brand/30 transition-all duration-500">
                <div className="w-16 h-16 bg-surface-container flex items-center justify-center rounded-lg mb-6 group-hover:bg-forest-brand transition-colors">
                  <span className="material-symbols-outlined text-forest-brand text-4xl group-hover:text-white">
                    groups
                  </span>
                </div>
                <h4 className="font-headline-sm text-navy-brand mb-4">
                  60+ Active Members
                </h4>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  Representing 12 different majors and 5 continents, our team is
                  as diverse as the impact we seek to create.
                </p>
              </div>

              <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-forest-brand/20 rounded-tr-xl"></div>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
