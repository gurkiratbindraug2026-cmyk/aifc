import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Seminars" };

export default function Page() {
  return (
    <PageShell
      name="seminars"
      className="selection:bg-primary selection:text-white overflow-x-hidden bg-white text-on-surface"
    >
      <main className="mt-32">
        <section className="max-w-container-max mx-auto px-container-padding mb-24 reveal-on-scroll">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-b border-outline-variant pb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[2px] w-12 bg-forest-brand"></div>
                <span className="font-label-lg text-forest-brand uppercase tracking-widest">
                  Academic &amp; Professional Development
                </span>
              </div>
              <h1 className="font-display-lg text-4xl md:text-5xl text-on-surface mb-8 leading-tight">
                The Seminar Series
              </h1>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Engaging with the frontiers of impact investing, sustainable
                finance, and development economics through scholarly dialogue
                and practitioner insights.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 border border-navy-brand px-8 py-3 rounded-lg text-xs font-bold uppercase tracking-widest text-navy-brand hover:bg-surface transition-all active:scale-95">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="calendar_today"
                >
                  calendar_today
                </span>
                Subscribe
              </button>
            </div>
          </div>
        </section>

        <section className="max-w-container-max mx-auto px-container-padding mb-section-gap reveal-on-scroll">
          <h2 className="font-bold text-sm uppercase tracking-[0.2em] text-navy-brand mb-12 flex items-center gap-3">
            <span className="w-3 h-3 bg-forest-brand"></span>
            Next Session
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8 bg-white border border-outline-variant rounded-xl p-8 md:p-12 flex flex-col md:flex-row gap-12 relative group transition-all duration-500 hover:shadow-xl">
              <div className="w-full md:w-2/5 aspect-[4/5] overflow-hidden rounded-lg bg-surface">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  data-alt="Professional headshot of a professor"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWF7M9n2Q3oa651omt5yHNUEz6G1FEY0LitH80SD3MaLCQl7W0Drn4ZVy_0b1t8wMmTGF7h9EWAXWgVxG6VbgxvpIYg7jriHIaIOuobNbU_ZR9qfTDlZn706j4f-CNi0EjrUhXnic300sxQsTKY0gQv3w9nD2FB4d3UswQSZsmsDDjQ7C4DK-AGkz2JvLVeq-heHtdcJZDw9vBcVu8G8jgUy184pcQEuVprgEJC2aYYAL7Doayjb06roi7aI4glXqKu_RGzCbAV0c"
                />
              </div>
              <div className="w-full md:w-3/5 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-forest-brand font-bold text-[11px] uppercase tracking-widest mb-6">
                  <span
                    className="material-symbols-outlined text-sm"
                    data-icon="event"
                  >
                    event
                  </span>
                  October 24, 2026 • 18:30 IST
                </div>
                <h3 className="text-3xl font-bold text-on-surface mb-6 leading-tight">
                  The Microeconomics of Social Impact Bonds
                </h3>
                <p className="font-body-md text-on-surface-variant mb-10 leading-relaxed">
                  Dr. Amrita Sen, Visiting Fellow at the Centre for Sustainable
                  Development, explores the mechanism design and risk-sharing
                  frameworks of SIBs in emerging markets.
                </p>
                <div className="flex flex-wrap gap-8 items-center">
                  <button className="bg-navy-brand text-white px-10 py-4 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-black transition-all active:scale-95 shadow-md">
                    RSVP for Session
                  </button>
                  <span className="text-on-surface-variant font-medium text-xs flex items-center gap-2 uppercase tracking-wide">
                    <span
                      className="material-symbols-outlined text-base"
                      data-icon="location_on"
                    >
                      location_on
                    </span>
                    LT-201 &amp; Zoom
                  </span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-8">
              <div className="bg-navy-brand text-white p-10 rounded-xl shadow-lg">
                <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-forest-brand">
                  Seminar Format
                </h4>
                <p className="text-sm opacity-80 leading-relaxed mb-8 font-light">
                  45-minute presentation followed by a moderated 15-minute
                  Q&amp;A session for Ashoka students and faculty.
                </p>
                <div className="pt-8 border-t border-white/10 flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                    Credits: 1.0
                  </span>
                  <span
                    className="material-symbols-outlined text-forest-brand"
                    data-icon="info"
                  >
                    info
                  </span>
                </div>
              </div>
              <div className="bg-surface border border-outline-variant p-10 rounded-xl group hover:border-forest-brand/30 transition-all">
                <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-on-surface">
                  Get Involved
                </h4>
                <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
                  Want to present your research or propose a speaker for the
                  next semester?
                </p>
                <a
                  className="text-forest-brand font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all"
                  href="#"
                >
                  Submit Proposal
                  <span
                    className="material-symbols-outlined text-sm"
                    data-icon="arrow_forward"
                  >
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface py-section-gap">
          <div className="max-w-container-max mx-auto px-container-padding reveal-on-scroll">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
              <div>
                <h2 className="text-4xl font-bold text-on-surface">
                  Upcoming Schedule
                </h2>
                <p className="text-xs font-bold uppercase tracking-widest text-forest-brand mt-4">
                  Autumn Semester 2026
                </p>
              </div>
              <div className="flex bg-white p-1 rounded-lg border border-outline-variant">
                <button className="px-8 py-3 bg-navy-brand text-white text-[10px] rounded-md font-bold uppercase tracking-widest">
                  List
                </button>
                <button className="px-8 py-3 text-on-surface-variant text-[10px] font-bold uppercase tracking-widest hover:text-on-surface">
                  Calendar
                </button>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 group items-center">
                <div className="md:w-32 flex-shrink-0 text-center md:text-left">
                  <div className="text-on-surface font-bold text-2xl">
                    Nov 07
                  </div>
                  <div className="text-forest-brand font-bold text-[10px] uppercase tracking-widest mt-1">
                    Thursday
                  </div>
                </div>
                <div className="flex-grow bg-white border border-outline-variant rounded-xl p-8 flex flex-col md:flex-row justify-between items-center group-hover:border-forest-brand/30 group-hover:shadow-lg transition-all duration-300">
                  <div className="flex gap-8 items-center w-full md:w-auto">
                    <div className="w-14 h-14 bg-navy-brand text-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <span
                        className="material-symbols-outlined text-2xl"
                        data-icon="finance"
                      >
                        finance
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-on-surface uppercase tracking-tight">
                        Institutional VC in Southeast Asia
                      </h4>
                      <p className="text-sm text-on-surface-variant font-light mt-1">
                        Speaker: Arjun Menon (Ex-Sequoia, Impact Partner)
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 flex gap-8 w-full md:w-auto justify-end items-center">
                    <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest border-r border-outline-variant pr-8">
                      Industry Talk
                    </span>
                    <button className="text-forest-brand font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 hover:text-navy-brand transition-colors">
                      Add to Cal{" "}
                      <span
                        className="material-symbols-outlined text-sm"
                        data-icon="add"
                      >
                        add
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 md:gap-16 group items-center">
                <div className="md:w-32 flex-shrink-0 text-center md:text-left">
                  <div className="text-on-surface font-bold text-2xl">
                    Nov 21
                  </div>
                  <div className="text-forest-brand font-bold text-[10px] uppercase tracking-widest mt-1">
                    Thursday
                  </div>
                </div>
                <div className="flex-grow bg-white border border-outline-variant rounded-xl p-8 flex flex-col md:flex-row justify-between items-center group-hover:border-forest-brand/30 group-hover:shadow-lg transition-all duration-300">
                  <div className="flex gap-8 items-center w-full md:w-auto">
                    <div className="w-14 h-14 bg-navy-brand text-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <span
                        className="material-symbols-outlined text-2xl"
                        data-icon="policy"
                      >
                        policy
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-on-surface uppercase tracking-tight">
                        Policy Frameworks for Green Credits
                      </h4>
                      <p className="text-sm text-on-surface-variant font-light mt-1">
                        Faculty Presentation: Dr. Raghav Gupta
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 flex gap-8 w-full md:w-auto justify-end items-center">
                    <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest border-r border-outline-variant pr-8">
                      Academic
                    </span>
                    <button className="text-forest-brand font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 hover:text-navy-brand transition-colors">
                      Add to Cal{" "}
                      <span
                        className="material-symbols-outlined text-sm"
                        data-icon="add"
                      >
                        add
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section-gap max-w-container-max mx-auto px-container-padding reveal-on-scroll">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-8">
            <div>
              <h2 className="text-4xl font-bold text-on-surface">Archive</h2>
              <p className="text-sm text-on-surface-variant font-light mt-2">
                Past session recordings, papers, and slide decks.
              </p>
            </div>
            <div className="relative w-full md:w-80">
              <span
                className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/40 text-lg"
                data-icon="search"
              >
                search
              </span>
              <input
                className="w-full pl-12 pr-4 py-4 rounded-lg border border-outline-variant bg-white text-xs font-medium focus:border-navy-brand focus:ring-0 outline-none uppercase tracking-widest"
                placeholder="Search archives..."
                type="text"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="group cursor-pointer">
              <div className="aspect-video bg-surface mb-8 relative overflow-hidden rounded-xl">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  data-alt="Archive item image"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYKZvbbtEiNKs6j2Xe0pFRiv-doM32YRkbTuDxFoIGv6BpL9-PI7dPueSnjIRKzNX6UxNuC2VtaP_5SvosniqN1RPzkJqM5VgW8OKg2URQ7Ez-XYVoSrmq9SXlVDoFk2ySuoMgeNcKfg5A0vpQ_YUTplqH6onjel199-PHgnZyk-X0CtR9AXuQ_zDxwZ4TmKErrBAWzSnFW8LQwMF8-xjle_rUUFymIdIBTvVzci92IMRNclYbHGasC3JfncII9l63NSs-ifOmgLw"
                />
                <div className="absolute inset-0 bg-navy-brand/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full text-navy-brand flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                    <span
                      className="material-symbols-outlined text-3xl"
                      data-icon="play_arrow"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      play_arrow
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-navy-brand text-white text-[9px] font-bold px-3 py-1.5 rounded uppercase tracking-widest">
                  58:12
                </div>
              </div>
              <div className="flex gap-6 mb-6">
                <span className="text-[10px] font-bold text-forest-brand uppercase tracking-widest">
                  Spring 2026
                </span>
                <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">
                  Impact Measurement
                </span>
              </div>
              <h4 className="text-2xl font-bold text-on-surface group-hover:text-forest-brand transition-colors mb-4 leading-tight uppercase tracking-tight">
                Beyond the ESG Label: A Critique
              </h4>
              <p className="text-sm text-on-surface-variant font-light line-clamp-2 leading-relaxed">
                Prof. Michael Chen discusses the decoupling of ESG ratings from
                actual carbon performance.
              </p>
              <div className="mt-8 flex gap-8 pt-8 border-t border-outline-variant">
                <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-forest-brand transition-colors">
                  <span
                    className="material-symbols-outlined text-sm"
                    data-icon="description"
                  >
                    description
                  </span>
                  Paper
                </button>
                <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-forest-brand transition-colors">
                  <span
                    className="material-symbols-outlined text-sm"
                    data-icon="download"
                  >
                    download
                  </span>
                  Slides
                </button>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-video bg-surface mb-8 relative overflow-hidden rounded-xl">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  data-alt="Archive item image"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIlB8Ir5E4CWoh0O_M-tHX5A6YkMwFakzY-3tr1WY0NXpwe7y_M6RgFPeIMSZ-u1AJZxOgV_BTx0__FSeVRcdfWHbDBqYFtqhuXdLO-rqkknBCoBUCBAvFvOmwzPv3xbLBgpYfzLP7A3ugCwNfK6N1D1__BRMFo0hSd2wBLJh8GfqpZ8iFuODdk8MXHW_ZtEiXqYb8FTMUWjfrS8dCb3NbPW2jPGA-xMYLTVbgShjXgBK0aDCUNGE4gUfH8iRoGbWmWVZNyJbVkzA"
                />
                <div className="absolute inset-0 bg-navy-brand/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full text-navy-brand flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                    <span
                      className="material-symbols-outlined text-3xl"
                      data-icon="play_arrow"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      play_arrow
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-navy-brand text-white text-[9px] font-bold px-3 py-1.5 rounded uppercase tracking-widest">
                  42:05
                </div>
              </div>
              <div className="flex gap-6 mb-6">
                <span className="text-[10px] font-bold text-forest-brand uppercase tracking-widest">
                  Spring 2026
                </span>
                <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">
                  Microfinance
                </span>
              </div>
              <h4 className="text-2xl font-bold text-on-surface group-hover:text-forest-brand transition-colors mb-4 leading-tight uppercase tracking-tight">
                Refining Grameen: New Models
              </h4>
              <p className="text-sm text-on-surface-variant font-light line-clamp-2 leading-relaxed">
                Case studies on hybrid non-profit and for-profit microfinance
                structures in South Asia.
              </p>
              <div className="mt-8 flex gap-8 pt-8 border-t border-outline-variant">
                <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-forest-brand transition-colors">
                  <span
                    className="material-symbols-outlined text-sm"
                    data-icon="description"
                  >
                    description
                  </span>
                  Paper
                </button>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-video bg-surface mb-8 relative overflow-hidden rounded-xl">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  data-alt="Archive item image"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnD1wvnftUBn6bR0oll9UilN-J3kxOBUj7uG4QvQ36a-C7Hc4PBEpRZrXl214nrYQyWp-u4K-LXbm3FBr-J5AxoNGFsN3gDh393ZZiOk0xloI9jtYdK_KD-fgX5CBPKdvxS9l9WrZRld7laKPLuOOFskzY_NTwi_fDyjBUfBi9yCsTqBNECIowW5-jMyJMY6BBLXCieg6TrVJXStHlbNmoMuYuDeP8D37ovHoYhn637RxStcV4Ym53MfZm6KL9AbdSAL7W2bvp5FM"
                />
                <div className="absolute inset-0 bg-navy-brand/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full text-navy-brand flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                    <span
                      className="material-symbols-outlined text-3xl"
                      data-icon="play_arrow"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      play_arrow
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-navy-brand text-white text-[9px] font-bold px-3 py-1.5 rounded uppercase tracking-widest">
                  65:40
                </div>
              </div>
              <div className="flex gap-6 mb-6">
                <span className="text-[10px] font-bold text-forest-brand uppercase tracking-widest">
                  Winter 2023
                </span>
                <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">
                  Carbon Markets
                </span>
              </div>
              <h4 className="text-2xl font-bold text-on-surface group-hover:text-forest-brand transition-colors mb-4 leading-tight uppercase tracking-tight">
                Voluntary Carbon Credits in India
              </h4>
              <p className="text-sm text-on-surface-variant font-light line-clamp-2 leading-relaxed">
                A workshop on the regulatory shifts and transparency challenges
                in the VCM space.
              </p>
              <div className="mt-8 flex gap-8 pt-8 border-t border-outline-variant">
                <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-forest-brand transition-colors">
                  <span
                    className="material-symbols-outlined text-sm"
                    data-icon="download"
                  >
                    download
                  </span>
                  Slides
                </button>
              </div>
            </div>
          </div>
          <div className="mt-20 flex justify-center">
            <button className="px-12 py-5 border-2 border-navy-brand rounded-lg text-navy-brand text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-navy-brand hover:text-white transition-all active:scale-95">
              Load More Sessions
            </button>
          </div>
        </section>

        <section className="max-w-container-max mx-auto px-container-padding mb-section-gap reveal-on-scroll">
          <div className="bg-navy-brand rounded-2xl p-16 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 uppercase tracking-tight">
                Never Miss a Seminar
              </h2>
              <p className="text-white/60 text-sm md:text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Get monthly digests of academic papers, speaker announcements,
                and exclusive invitations to student-only workshops.
              </p>
              <form className="flex flex-col md:flex-row gap-6 max-w-xl mx-auto">
                <input
                  className="flex-grow px-8 py-5 rounded-lg bg-white/5 border border-white/20 text-white text-sm focus:ring-2 focus:ring-forest-brand focus:border-forest-brand outline-none uppercase tracking-widest placeholder:text-white/30"
                  placeholder="University Email"
                  type="email"
                />
                <button
                  className="bg-forest-brand text-white px-12 py-5 rounded-lg text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-navy-brand transition-all active:scale-95 shadow-lg"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-forest-brand/10 rounded-full blur-3xl"></div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
