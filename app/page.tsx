import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell
      theme="mono"
      name="home"
      className="font-body-md selection:bg-black selection:text-white bg-white overflow-x-hidden"
    >
      <header
        className="relative w-full overflow-hidden flex items-center justify-center bg-black"
        style={{ height: "75vh" }}
      >
        <div className="absolute inset-0 w-full h-full grayscale">
          <video
            autoPlay
            className="w-full h-full object-cover opacity-60"
            loop
            muted
            playsInline
            src="https://res.cloudinary.com/gzupxrvd/video/upload/v1787173307/ashokaAerial.mp4"
          ></video>
        </div>
        <div className="relative z-10 text-center px-container-padding max-w-5xl mx-auto">
          <p className="font-label-lg text-white mb-4 tracking-widest uppercase opacity-90">
            Ashoka's Premier club for finance with a social conscience.
          </p>
          <h1
            className="font-display-lg text-white font-black tracking-tight leading-none text-4xl md:text-6xl lg:text-7xl uppercase"
            id="hero-title"
          >
            Ashoka Impact <br />
            Finance Club
          </h1>
        </div>
      </header>
      <main className="w-full bg-white">
        <section
          className="py-24 px-container-padding max-w-container-max mx-auto text-center"
          id="about-section"
        >
          <h2 className="font-display-lg text-on-surface mb-4 text-4xl lg:text-5xl">
            About Us
          </h2>
          <div className="w-24 h-1 bg-outline mb-16 mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-full h-px bg-outline-variant mb-8 opacity-40"></div>
              <h4 className="font-body-md text-primary uppercase tracking-wide mb-4">
                RISE CAPITAL
              </h4>
              <h3 className="font-headline-sm text-on-surface mb-6">
                {" "}
                Asia's First Student-Run Impact Fund
              </h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed mb-10 max-w-xs mx-auto">
                We back early-stage ventures where profitability comes with a
                purpose. Pitch cycles with leading Indian VCs give our analysts
                unparalleled exposre to the the space.
              </p>
              <Link
                href="/rise_capital"
                className="mt-auto inline-flex items-center justify-center bg-navy-brand text-white px-8 py-2.5 rounded-sm font-label-lg uppercase tracking-wide hover:bg-zinc-800 transition-all active:scale-95"
              >
                Know more
              </Link>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full h-px bg-outline-variant mb-8 opacity-40"></div>
              <h4 className="font-body-md text-primary uppercase tracking-wide mb-4">
                Advisory Projects
              </h4>
              <h3 className="font-headline-sm text-on-surface mb-6">
                Real-World Applications
              </h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed mb-10 max-w-xs mx-auto">
                Pro-bono advisory mandates for social enterprises and
                mission-led organisations, end to end, shaped entirely around
                the client.
              </p>
              <Link
                href="/advisory_projects"
                className="mt-auto inline-flex items-center justify-center bg-navy-brand text-white px-8 py-2.5 rounded-sm font-label-lg uppercase tracking-wide hover:bg-zinc-800 transition-all active:scale-95"
              >
                Know more
              </Link>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full h-px bg-outline-variant mb-8 opacity-40"></div>
              <h4 className="font-body-md text-primary uppercase tracking-wide mb-4">
                The Conclave
              </h4>
              <h3 className="font-headline-sm text-on-surface mb-6">
                AIFC’s marquee event
              </h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed mb-10 max-w-xs mx-auto">
                Launching this Monsoon Semester with Ashoka University. We're
                bringing the architects of impact finance together, across two
                days of panels. Further details to follow.
              </p>
              <Link
                href="/conclave"
                className="mt-auto inline-flex items-center justify-center bg-navy-brand text-white px-8 py-2.5 rounded-sm font-label-lg uppercase tracking-wide hover:bg-zinc-800 transition-all active:scale-95"
              >
                Resources
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
