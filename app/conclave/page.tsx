import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Conclave" };

export default function Page() {
  return (
    <PageShell
      name="conclave"
      className="bg-white text-on-surface font-body-md selection:bg-primary selection:text-white overflow-x-hidden"
    >
      <main className="pt-16">
        <section className="pt-24 pb-16 px-container-padding max-w-container-max mx-auto">
          <div className="mb-4">
            <span className="mono-label">
              CREST'26 / CAPITAL FOR RESILIENCE, EQUITY AND SUSTAINABLE
              TRANSITION
            </span>
          </div>
          <h1 className="text-on-surface mb-12 uppercase text-9xl leading-none">
            The Conclave <br /> 2026
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <p className="font-title-lg text-on-surface leading-snug mb-8">
                Two days. November 13 and 14, 2026. Day One online and open. Day
                Two in person in Delhi. Hosted with Ashoka University.
              </p>
              <div className="mb-10">
                <p className="mono-label text-forest-brand mb-4">
                  Day One registration is open. Free, and online.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#274102] text-white px-6 py-3 rounded-sm mono-label hover:bg-black transition-all">
                    Register for Day One →
                  </button>
                  <button className="border border-outline text-on-surface px-6 py-3 rounded-sm mono-label hover:bg-surface transition-all">
                    Become a partner
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t border-outline-variant pt-8"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-outline-variant">
            <div className="p-6 border-r border-outline-variant">
              <span className="mono-label block mb-2">Dates</span>
              <p className="font-bold">November 13 and 14, 2026</p>
            </div>
            <div className="p-6 border-r border-outline-variant">
              <span className="mono-label block mb-2">Format</span>
              <p className="font-bold">Two days. Virtual, then Delhi</p>
            </div>
            <div className="p-6 border-r border-outline-variant">
              <span className="mono-label block mb-2">Day One</span>
              <p className="font-bold">Free. Registration open</p>
            </div>
            <div className="p-6">
              <span className="mono-label block mb-2">Day Two</span>
              <p className="font-bold">In person, Delhi. Panels and dinner</p>
            </div>
          </div>
        </section>

        <section
          className="py-section-gap px-container-padding max-w-container-max mx-auto border-t border-outline-variant"
          id="why-now"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 reveal-on-scroll">
            <div className="md:col-span-4">
              <span className="mono-label block mb-4">01 / WHY NOW</span>
              <h2 className="font-headline-lg text-on-surface leading-tight uppercase">
                The system is being built right now.
              </h2>
            </div>
            <div className="md:col-span-8 space-y-6">
              <p className="text-xl leading-relaxed text-on-surface-variant">
                India's impact finance system is taking shape as we speak. New
                instruments, new institutions, and changing regulation are
                moving capital toward low-carbon infrastructure, and the rules
                are still being written.
              </p>
              <p className="text-xl leading-relaxed text-on-surface-variant">
                That conversation happens at practitioner forums, policy
                consultations, and inside institutions. People early in their
                careers are rarely in the room for it, least of all in India.
              </p>
              <p className="text-xl font-bold text-on-surface">
                The Conclave puts them in the room. Not a simulation of the
                conversation. The conversation itself, while it is still
                unsettled.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-24 reveal-on-scroll">
            <div>
              <h4 className="font-bold mb-4">Why Ashoka convenes it</h4>
              <p className="text-on-surface-variant leading-relaxed">
                Its founders and trustees work across finance, investing,
                entrepreneurship and philanthropy. Its Centre for
                Entrepreneurship and Centre for Climate Change and
                Sustainability{" "}
                <i className="italic">
                  give the subject real footing on campus
                </i>
                . Its place in Indian higher education lets it bring
                policymakers, investors, and practitioners into one room.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">
                An established model, new to India
              </h4>
              <p className="text-on-surface-variant leading-relaxed">
                Oxford and INSEAD run summits in this field, Geneva hosts a
                cluster of events around it, and Mumbai Climate Week held its
                first edition in February 2026. Putting people early in their
                careers directly with senior practitioners works. The Conclave
                is the first attempt to build it for India, and it is meant to
                return.
              </p>
            </div>
          </div>
        </section>

        <section
          className="bg-forest-brand text-white py-24 px-container-padding"
          id="format"
        >
          <div className="max-w-container-max mx-auto">
            <div className="flex justify-between items-start mb-16 reveal-on-scroll">
              <div className="">
                <span className="mono-label text-white/60 block mb-4">
                  02 / FORMAT
                </span>
                <h2 className="font-display-lg text-4xl lg:text-5xl uppercase">
                  Two days, two rooms.
                </h2>
              </div>
              <div className="text-right hidden md:block">
                <p className="mono-label text-white/60">
                  Theme to be announced. Speakers to be confirmed.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/20 border border-white/20 reveal-on-scroll">
              <div className="bg-forest-brand p-10">
                <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                  <span className="mono-label text-white/60">
                    Day One / Online / Open
                  </span>
                  <span className="mono-label text-white/60">Nov 13, 2026</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">Virtual and open</h3>
                <p className="text-white/80 leading-relaxed mb-8">
                  Fully virtual and open to anyone, at no cost. One or two
                  panels of four to five practitioners, convened under this
                  edition's theme, with speakers drawn from India and Europe.
                  The session runs as open questioning, not a one-way address.
                  The recording becomes the club's first published piece.
                </p>
                <span className="mono-label text-white/60">
                  Registration Open / Free to Attend
                </span>
              </div>
              <div className="bg-forest-brand p-10">
                <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                  <span className="mono-label text-white/60">
                    Day Two / In Person / Delhi
                  </span>
                  <span className="mono-label text-white/60">Nov 14, 2026</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">
                  In the room, in Delhi
                </h3>
                <p className="text-white/80 leading-relaxed mb-8">
                  In person at a hotel venue in Delhi. An afternoon programme, 3
                  to 7 PM, of two practitioner panels, followed by an evening
                  dinner for the Ashoka community. The conversation continues
                  off the panel and into the room.
                </p>
              </div>
            </div>
            <div className="mt-16 max-w-2xl reveal-on-scroll">
              <span className="mono-label text-white/60 block mb-4">
                IN THE ROOM
              </span>
              <p className="text-2xl leading-snug">
                Direct conversation with people working at the highest level of
                this field in India today. Not a question from the floor. A
                sustained exchange, across the panels and at the dinner. We are
                also exploring structured time between firms and attendees as
                part of Day Two.
              </p>
            </div>
          </div>
        </section>

        <section
          className="py-24 px-container-padding max-w-container-max mx-auto"
          id="register"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 reveal-on-scroll">
            <div>
              <span className="mono-label block mb-4">03 / REGISTRATION</span>
              <h2 className="font-headline-lg text-on-surface mb-6 uppercase leading-tight">
                Day One registration is open.
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                Day One is virtual and free. Register for the joining link. Day
                Two in Delhi is in person, with registration to follow.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex gap-2 mb-4">
                <input
                  className="flex-1 bg-surface border border-outline-variant px-4 py-3 rounded-sm focus:ring-1 focus:ring-primary outline-none"
                  placeholder="you@email.com"
                  type="email"
                />
                <button className="bg-[#00224d] text-white px-6 py-3 rounded-sm mono-label hover:bg-black transition-all">
                  Register for Day One
                </button>
              </div>
              <p className="mono-label text-[10px]">
                Free to attend. Your joining link and calendar invite arrive by
                email.
              </p>
            </div>
          </div>
        </section>

        <section
          className="bg-[#f2f4f0] py-24 px-container-padding"
          id="partnership"
        >
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 reveal-on-scroll">
              <div>
                <span className="mono-label block mb-4">04 / PARTNERSHIP</span>
                <h2 className="font-headline-lg text-on-surface mb-8 uppercase leading-tight">
                  Funded entirely through sponsorship.
                </h2>
                <p className="text-on-surface-variant leading-relaxed">
                  That is how it is built. We are looking for a small number of
                  partners to be part of the first edition.
                </p>
              </div>
              <div>
                <p className="text-on-surface-variant mb-6 leading-relaxed">
                  A partner is present in front of a room of serious people
                  early in their careers in impact finance, across an open
                  online audience on Day One and an in-person audience in Delhi
                  on Day Two. It is association with the first convening of its
                  kind in India, at the point where it begins.
                </p>
                <p className="text-on-surface-variant leading-relaxed">
                  We would rather build this with people who care about the
                  field than fill a wall of logos. There is room to fund the
                  event, support a single panel, contribute in kind, or partner
                  institutionally. Contribution levels for each tier are shared
                  on request.
                </p>
              </div>
            </div>

            <div className="space-y-12 reveal-on-scroll">
              <div className="border-t border-outline-variant pt-8 flex flex-col md:flex-row justify-between gap-8">
                <div className="md:w-1/2">
                  <span className="mono-label block mb-2">01</span>
                  <h4 className="text-2xl font-bold mb-2">Lead Partner</h4>
                  <p className="text-on-surface-variant max-w-md">
                    Lead billing on the page and in the room in Delhi, named
                    association across both days, and a hand in shaping the
                    programme. One partner only.
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-32 h-16 border-2 border-dashed border-outline-variant rounded flex items-center justify-center mono-label text-[10px]">
                    OPEN
                  </div>
                </div>
              </div>
              <div className="border-t border-outline-variant pt-8 flex flex-col md:flex-row justify-between gap-8">
                <div className="md:w-1/2">
                  <span className="mono-label block mb-2">02</span>
                  <h4 className="text-2xl font-bold mb-2">Convening Partner</h4>
                  <p className="text-on-surface-variant max-w-md">
                    Prominent billing across Day One's open audience and Day Two
                    in Delhi, with a seat at the dinner.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32 h-16 border-2 border-dashed border-outline-variant rounded flex items-center justify-center mono-label text-[10px]">
                    OPEN
                  </div>
                  <div className="w-32 h-16 border-2 border-dashed border-outline-variant rounded flex items-center justify-center mono-label text-[10px]">
                    OPEN
                  </div>
                </div>
              </div>
              <div className="border-t border-outline-variant pt-8 flex flex-col md:flex-row justify-between gap-8">
                <div className="md:w-1/2">
                  <span className="mono-label block mb-2">03</span>
                  <h4 className="text-2xl font-bold mb-2">
                    Supporting Partner
                  </h4>
                  <p className="text-on-surface-variant max-w-md">
                    Brand presence across the Conclave and acknowledgement from
                    the panels on both days.
                  </p>
                </div>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="w-32 h-16 border-2 border-dashed border-outline-variant rounded flex items-center justify-center mono-label text-[10px]">
                    OPEN
                  </div>
                  <div className="w-32 h-16 border-2 border-dashed border-outline-variant rounded flex items-center justify-center mono-label text-[10px]">
                    OPEN
                  </div>
                  <div className="w-32 h-16 border-2 border-dashed border-outline-variant rounded flex items-center justify-center mono-label text-[10px]">
                    OPEN
                  </div>
                </div>
              </div>
              <div className="border-t border-outline-variant pt-8 flex flex-col md:flex-row justify-between gap-8">
                <div className="md:w-1/2">
                  <span className="mono-label block mb-2">04</span>
                  <h4 className="text-2xl font-bold mb-2">In-Kind Partner</h4>
                  <p className="text-on-surface-variant max-w-md">
                    Venue, hospitality, media, or services, recognised alongside
                    funding partners.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32 h-16 border-2 border-dashed border-outline-variant rounded flex items-center justify-center mono-label text-[10px]">
                    OPEN
                  </div>
                  <div className="w-32 h-16 border-2 border-dashed border-outline-variant rounded flex items-center justify-center mono-label text-[10px]">
                    OPEN
                  </div>
                  <span className="mono-label text-[10px]">and more</span>
                </div>
              </div>
            </div>

            <div className="mt-24 pt-24 border-t border-outline-variant flex flex-col md:flex-row justify-between gap-12 reveal-on-scroll">
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold mb-6">Or build it with us</h3>
                <p className="text-on-surface-variant max-w-md">
                  Institutional partnership is open to organisations that want
                  to co-design a session, help shape the theme, or bring their
                  network into the room. If that is interesting, the
                  conversation starts with an email.
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <button className="bg-[#1a3001] text-white px-8 py-4 rounded-sm mono-label hover:bg-black transition-all mb-4">
                  Write to us about partnership →
                </button>
                <p className="mono-label text-brand-forest">
                  impactfinance@ashoka.edu.in
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-forest-brand text-white py-24 px-container-padding">
          <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
            <div>
              <h2 className="font-display-lg text-6xl uppercase mb-8">
                The Conclave
              </h2>
              <p className="max-w-sm text-white/70">
                The Ashoka Impact Finance Conclave. November 13 and 14, 2026.
                Hosted with Ashoka University. Details to follow.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-4 mono-label text-white/60 text-right">
              <a className="hover:text-white transition-colors" href="#">
                ← Return to AIFC
              </a>
              <a className="hover:text-white transition-colors" href="#">
                Register for Day One
              </a>
              <a className="hover:text-white transition-colors" href="#">
                Partnership enquiries
              </a>
              <span className="mt-4">CREST'26 / First edition</span>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
