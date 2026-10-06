import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Board" };

export default function Page() {
  return (
    <PageShell
      theme="board"
      name="board"
      className="bg-white font-sans selection:bg-primary selection:text-white overflow-x-hidden"
    >
      <main>
        <header className="pt-44 pb-20 px-container-padding max-w-container-max mx-auto text-center reveal-on-scroll">
          <h1 className="serif-text text-5xl md:text-6xl mb-6 text-on-surface">
            Our Leadership
          </h1>
          <div className="w-20 h-1 bg-forest-brand mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-on-surface-variant leading-relaxed">
            Guided by a commitment to social impact and financial excellence,
            our board members bring together diverse expertise to redefine the
            future of sustainable investing.
          </p>
        </header>

        <section className="mx-auto px-container-padding mb-section-gap reveal-on-scroll max-w-4xl">
          <div className="mb-12 flex items-center gap-4">
            <h3 className="serif-text text-3xl text-forest-brand">
              Founding Board
            </h3>
            <div className="flex-grow h-[1px] bg-outline-variant opacity-30"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/5] bg-surface-container-low mb-6 transition-all duration-500 group-hover:shadow-2xl">
                <img
                  alt="Arjun Malhotra"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6PBZ4HIhJWRnJB2of2edWm_wdCE-eN0i4imOZegaz1O2x5SXs3oIP1t2-Bwxu17I2gzcu-qy7HZjDyYKjc-y5OTm99zqXYxsCkghUl1RCS32pibIQCvw73gl-ltu9xyZ7V3gh1IPD_Ee0W062Gc67IEA7EXbX1CCVQ4u4tjjfLBiI6iK3mInM-tsRKuSKvnRCfi8RhmfHyqepMappv1ygcOCtq9ncl6JC8b-tPWzDnjonHT14wW5drzBrhOc0orq6NRJBZuwffr4"
                />
              </div>
              <h4 className="serif-text text-2xl mb-1 group-hover:text-primary transition-colors">
                Arjun Malhotra
              </h4>
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">
                  President &amp; Co-Founder
                </p>
                <a
                  className="text-primary hover:text-navy-brand transition-colors"
                  href="#"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/5] bg-surface-container-low mb-6 transition-all duration-500 group-hover:shadow-2xl">
                <img
                  alt="Sanya Kapoor"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbaBfubYn1tjZPFNbyp3yvWhwI_Zyen4OviciQK86euYx9Tix8_U4BkmxTFuY9b6kKDEpH8WfZJFpqxWrSWs2u69lFta8wIO8s6tVF-J8qHCwzxojWjWvQqVgAfMjeuiZWU5jzq2vBN-J1WhapPMBeOdHiYZhcRhXLw2rVHGFayUFxtgw36SV5_oSen8k5qsvRed9jeGNjhE90PDlVuUidoiB6hpN58QCdv62NSnFqy_mrgSvPQk0gMvAWN8mJOYh0f6kDh-pcKlQ"
                />
              </div>
              <h4 className="serif-text text-2xl mb-1 group-hover:text-primary transition-colors">
                Sanya Kapoor
              </h4>
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">
                  Vice President &amp; Co-Founder
                </p>
                <a
                  className="text-primary hover:text-navy-brand transition-colors"
                  href="#"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-24 px-container-padding border-y border-outline-variant/30">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-16 reveal-on-scroll">
              <span className="text-forest-brand font-bold tracking-widest uppercase text-xs">
                Current Team
              </span>
              <h3 className="serif-text text-4xl mt-2 text-on-surface">
                Executive Board (2026-27)
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 reveal-on-scroll max-w-4xl mx-auto">
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/5] bg-surface-container-low mb-6 transition-all duration-500 group-hover:shadow-2xl">
                  <img
                    alt="Ananya Desai"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4vFJq5KKFbEuktcFFwZx7x9OUr9bistPqXYUphT-6oU5eBeFoQjlhMoekxSqOaRbD6B1hzNocFkSc9u-IW6ND6bbRqpKSSBdsCe1r4zgGCbYr5feqGnpfEONQDFLPpHH4WfxXkeP6fBengVFcoM4zvGgwLQCVnRzDko3FziBloKtT366I_eaLe2UTZCNNhB0T6iyNmzYtNjg2sCUFLHVONG2ZW56qfqkrVISARQVcUvPrizDMHfUy1IJ_zCuoJzdRE9254rLmXWk"
                  />
                </div>
                <h4 className="serif-text text-2xl mb-1 group-hover:text-primary transition-colors">
                  Ananya Desai
                </h4>
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">
                    Advisory Lead
                  </p>
                  <a
                    className="text-primary hover:text-navy-brand transition-colors"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-sm">
                      link
                    </span>
                  </a>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/5] bg-surface-container-low mb-6 transition-all duration-500 group-hover:shadow-2xl">
                  <img
                    alt="Ishaan Gupta"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL5lZfG6Wlb9lD3kplt4Gdr8W7nZ2KjoDKJ61nB2VguYllnqkKhogFuuXr31m1htaOiToMFlFfsro6Wx7AQtT3vbJOPKT69ASqpRZ5PsItqTHOefV-3GyQRzZT7jTQZrc6q1zxUpDEzNJHoH4ZmYgwb7E88KDWQmDkbJt3lSD-C3nNYJzZsH78ZWsdKTO1oPnmhZyy1w2Tox_K-Z4SfG8K73XKde6asVvciGmzjOMBi68wBleCEZ-0YQ2AJqdT6rqECzoISFcL1DM"
                  />
                </div>
                <h4 className="serif-text text-2xl mb-1 group-hover:text-primary transition-colors">
                  Ishaan Gupta
                </h4>
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">
                    Research Lead
                  </p>
                  <a
                    className="text-primary hover:text-navy-brand transition-colors"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-sm">
                      link
                    </span>
                  </a>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/5] bg-surface-container-low mb-6 transition-all duration-500 group-hover:shadow-2xl">
                  <img
                    alt="Kavita Rao"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC0kEkGbQjTl9hUc3Ho282lOezTWuHc3B3tHHdx5FjNxhrq6Lqutwv3UILHjCcG4LevFf7h3oaTEUOeWTLqk1R0pGyKmuOdefTgn6aSKCVRk9M1AVkRg76zrrw6m5qnNMUj4Ikgq9Vow7SXhFk1QNVgmqLMCr_hcCkQ6cfWY3ekYekGSXNPk9_GoKXl46YIuMWCDzsgv7H6IWCiT9OcwAQsq9mlSA5l7VM91LXCKmsvS5FzJaRCFk8OKCaMzPc4DH_zmuIJ7cGOU4"
                  />
                </div>
                <h4 className="serif-text text-2xl mb-1 group-hover:text-primary transition-colors">
                  Kavita Rao
                </h4>
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">
                    Relations Lead
                  </p>
                  <a
                    className="text-primary hover:text-navy-brand transition-colors"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-sm">
                      link
                    </span>
                  </a>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/5] bg-surface-container-low mb-6 transition-all duration-500 group-hover:shadow-2xl">
                  <img
                    alt="Vikram Singh"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_a_IaJZC-Dhsb3JGdYtjgPM_Y-m80gkOhcDKXpcrQxw0tQR9fQ8cMCRTSXkwA-vPYx6Jze14x1KtSeUIFofV8HlwOd_RTbBoUb7egCl8HzLKnr8VNwIQ7hztP2raCNZPRkp0kkqJgcygpWDrF-Q8UNUPzLlMb2qk_2xKLFewP5GPq5fO1eDkd0hlghtpdsFcJAwZInxrK-t4q6TB4DGQJ8fncpNQ7cDegweHTX3KUircCseUxu_vU_5zu6gnlKZhAzlsYgqJuL5s"
                  />
                </div>
                <h4 className="serif-text text-2xl mb-1 group-hover:text-primary transition-colors">
                  Vikram Singh
                </h4>
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">
                    Operations Lead
                  </p>
                  <a
                    className="text-primary hover:text-navy-brand transition-colors"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-sm">
                      link
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="max-w-container-max mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center reveal-on-scroll">
              <div className="group flex flex-col items-center">
                <div className="aspect-square w-full mb-4 overflow-hidden rounded shadow-sm border border-outline-variant/20 transition-all group-hover:shadow-md">
                  <img
                    alt="Asher Noel"
                    className="w-full h-full object-cover grayscale-img group-hover:grayscale-0"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFrXboKv-krPYs71jk6WfpI0n7bsdn1Fbf53i3u--U7ipuqO7vfbCQ78WW7oCNjgAb4kpGnJ3JdoJUa5l4_w1fbjKU3ebL-gEX-Jitlt6aPoW7vbRoiMcHW0qv3jEFjdGhzGv8Wgogc68ofcDHQFUTDfS014Ei56FmTUgJKktPa44KKpeYCX-pjUcfax0-Nf9VpwSHljLOaWWU47lHoDm_cGOIMRLrlG2Op5n7KTCRhI6kNr7Dr7Pdff2HosSVX5U2emN7C9fLCqo"
                  />
                </div>
                <h6 className="font-bold text-sm text-on-surface">
                  Asher Noel
                </h6>
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-semibold">
                  Associate
                </p>
              </div>
              <div className="group flex flex-col items-center">
                <div className="aspect-square w-full mb-4 overflow-hidden rounded shadow-sm border border-outline-variant/20 transition-all group-hover:shadow-md">
                  <img
                    alt="Patrick Rak"
                    className="w-full h-full object-cover grayscale-img group-hover:grayscale-0"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpK-YTC8bEWNX3PhhowCbOMNUqtJCJENfsaCP7CffXGmfZnSAFmTYpMjlO88JyzYKCOyXb67Li-TzplD6SGcniFs5Er86m2m8VvkQpj43xYAeWmAxan9WzCZR0Sxk-Ds9Vj5IrGt0t4koFxHWGNUjzbY9v9-y9Cngt87JhoWBFRTzjIlTtnZGtBGKu0DLonMSu1y0cNL6AXp5AZNIBLykZ6-hAvv7jY_mKwcWtbfyk77RHmdSfrNJTtJI8hBLGMP0fyM2yKB-VKTw"
                  />
                </div>
                <h6 className="font-bold text-sm text-on-surface">
                  Patrick Rak
                </h6>
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-semibold">
                  Associate
                </p>
              </div>
              <div className="group flex flex-col items-center">
                <div className="aspect-square w-full mb-4 overflow-hidden rounded shadow-sm border border-outline-variant/20 transition-all group-hover:shadow-md">
                  <img
                    alt="Lila Chen"
                    className="w-full h-full object-cover grayscale-img group-hover:grayscale-0"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTdErt-O4mMg5L760JdB_pvix3XrdkIQ04wDx0vfhzthayDjYbX51bPBfUS9aRPgAcxKlLsF-VY2UrSlY92I7I8ik-3a6OAKdI1wmOQbZomFUq7sRrrtf-IspYZ5xK-kYKf1n_bXRag4FVg6-HDWHuME6pE4uzJlXVBNG3vKGfkAZkk4YEnV_-X3wcqOkMeq-OyGhlzUDh4T3HbgNJysgJySzksek1FYKIXeagU6jkcrQz-owwtiOo3Zj6-zPmkqsKtocby4N1gQo"
                  />
                </div>
                <h6 className="font-bold text-sm text-on-surface">Lila Chen</h6>
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-semibold">
                  Analyst
                </p>
              </div>
              <div className="group flex flex-col items-center">
                <div className="aspect-square w-full mb-4 overflow-hidden rounded shadow-sm border border-outline-variant/20 transition-all group-hover:shadow-md">
                  <img
                    alt="Marcus Wong"
                    className="w-full h-full object-cover grayscale-img group-hover:grayscale-0"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAXQWMEDmAp4EEfNT71vGH3CMmmtBmwzh38nr-6LVfofkFhitx2xH6h0n4_zpZClivL504Hfh3j0fu7QkMLlSCyF0fJhq1gBBPyJbX7XqAWlQjGWFNssA2T8tJMMBya5UDAvJCKGyYwiItno7RXNkq5eJ9941KaCP1pXitNthWVgjioct5MFwMjTGGyTqB5bs4nl-gxL_-qYILZWlQ2JKqy4x2gOAsY17jeYrWbL109uCJLomeQME7mWFSPKCpogliPd6cPkRvyOY"
                  />
                </div>
                <h6 className="font-bold text-sm text-on-surface">
                  Marcus Wong
                </h6>
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-semibold">
                  Analyst
                </p>
              </div>
              <div className="group flex flex-col items-center">
                <div className="aspect-square w-full mb-4 overflow-hidden rounded shadow-sm border border-outline-variant/20 transition-all group-hover:shadow-md">
                  <img
                    alt="Sofia Miller"
                    className="w-full h-full object-cover grayscale-img group-hover:grayscale-0"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc6_YPcpmQyr9IUXPA8r-QxbAuTgGwUNeqfrv8OLNi1LLtqiLgLdvFTLdng9W4287kgB3bLe0qADjPE5-mdY-Yu3yn3j1fpgE3O3y_nuMsjmjv9r2avOvBw8HZEKgc1At0cfSEegZ5pFd4D7k8yABSLWW_9-rRE2QxPI1gxScKf-yjMhY-DBKBNhcYZbCSQz74gQIYI3R9ojc3Iks63-Di51aYYZZOSRipLOia7lDRg1VPMSZCtzgQifhyhnsTKxcI8DF7ofZn7t0"
                  />
                </div>
                <h6 className="font-bold text-sm text-on-surface">
                  Sofia Miller
                </h6>
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-semibold">
                  Analyst
                </p>
              </div>
              <div className="group flex flex-col items-center">
                <div className="aspect-square w-full mb-4 overflow-hidden rounded shadow-sm border border-outline-variant/20 transition-all group-hover:shadow-md">
                  <img
                    alt="David Park"
                    className="w-full h-full object-cover grayscale-img group-hover:grayscale-0"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMEUDRvvJS2o6uaNwulkDMvomDEFrbLFE6EXGYZ7rHguL5H4y1AyQ5HB8_RlNM5PDo9h_t1iJBoj-VrCnFld805Qt_eKEond9gamjLICKd6nw369gVIPu3baqkg_2JtvchNjQhHMGItshhNa1Ee5uiMSPEpRRaBxYNleV7PrBj1f-Y3XBFpxYzOovGTV_d8LPlmKs3HSLUBEyt-g6T9YgWuNXm27GfzfKnskiIcjziQPtDn3fEx6xCRO4pBNssvePfvaC3HOCw5SY"
                  />
                </div>
                <h6 className="font-bold text-sm text-on-surface">
                  David Park
                </h6>
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-semibold">
                  Analyst
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-container-max mx-auto px-container-padding py-section-gap bg-white reveal-on-scroll">
          <div className="text-center mb-16">
            <h2 className="serif-text text-4xl text-on-surface mb-4">
              Faculty Advisory Board
            </h2>
            <p className="max-w-2xl mx-auto text-on-surface-variant leading-relaxed">
              Our student-led initiatives are mentored by distinguished faculty
              members who bring decades of expertise in global finance and
              development.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-center gap-6">
              <div className="rounded-full overflow-hidden bg-surface-container-low border border-outline-variant/30 flex-shrink-0 w-20 h-20">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFa2BFt8oe5B06ZXj49WAoPxO64eVJjhNdLEgCg7l37zA499e7taMA51KO9Eahu9rLCC-t38ETTrt2yvSJ_3NGp8loeTEf6Iu8w1vfmiRivX5JQD0HQEf9aL2V4-8BWXOvKR371u3FmkTTA7Fk8noZfQ1OiPYjqSvhdxopFQxRd3Eogb7eDvONxMNkGIYh2t2Nma2bYrC5Z2znfhnzb_crhH41sQ98cPmifiHeR7xlSjq5OZVoYikqGmfgiwGMqNg-nu_4T0BGqSY"
                />
              </div>
              <div>
                <h4 className="font-bold text-lg text-navy-brand">
                  Dr. Amit Bhargava
                </h4>
                <p className="text-[10px] font-bold text-forest-brand uppercase tracking-widest mb-1">
                  Professor of Economics
                </p>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Specializing in Microfinance and Emerging Markets.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="rounded-full overflow-hidden bg-surface-container-low border border-outline-variant/30 flex-shrink-0 w-20 h-20">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGsCVHHXgXehJJKkn5CJGUdBZ0eDwfTPVd9XqtFn5syeuOWaDw_RrF9PTEAHYPaAEXOzp45CjcqLDZO2Fr3_UvFWoz8nHVlN7iqEhwVDsl0_0FXD0T1MfrTerFukVX41GCF34WBy2zmxybRLummCxbT6eYJ2hMJRsLwR3FtJZaCSNInxSwyxin4cyBk77_UnVuEeSAWJSbA0FAe3f-EjNsV4w_CjoVNJsiuAtAMuz5lS5xzQbmHRntegOyHJ2gAYuGm2FcG8Y-tAA"
                />
              </div>
              <div>
                <h4 className="font-bold text-lg text-navy-brand">
                  Dr. Elena Rodriguez
                </h4>
                <p className="text-[10px] font-bold text-forest-brand uppercase tracking-widest mb-1">
                  Chair, Social Ventures
                </p>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Former World Bank consultant with a focus on ESG compliance.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <button className="border-2 border-navy-brand text-navy-brand px-10 py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-navy-brand hover:text-white transition-all">
              View Research Papers
            </button>
          </div>
        </section>

        <section className="bg-[#1a0505] py-24 text-white reveal-on-scroll">
          <div className="max-w-4xl mx-auto px-container-padding text-center">
            <h3 className="serif-text text-5xl mb-20 tracking-wide font-light">
              Past Presidents
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-lg serif-text opacity-80">
              {[
                { year: "2025", names: ["Cassie Liu", "Joey Perriello"] },
                { year: "2026", names: ["Sarah Lao", "Sreetej Digumarthi"] },
                { year: "2023", names: ["Asher Noel", "Patrick Rak"] },
              ].map(({ year, names }) => (
                <div key={year} className="flex flex-col items-center gap-2">
                  <div className="mb-2 font-bold tracking-widest">{year}</div>
                  {names.map((n) => (
                    <div key={n}>{n}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
