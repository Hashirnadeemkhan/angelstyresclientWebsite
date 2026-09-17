import { Check, Clock, Home, PoundSterling } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

const points = [
  "Qualified, fully-insured mechanic — 10+ years on the tools",
  "Up-front pricing, quoted before any work begins",
  "Genuine & OE-quality parts on every job",
  "Work done at your home, driveway or workplace",
];

const specs = [
  { icon: Home, k: "Where", v: "Your home, work or roadside" },
  { icon: Clock, k: "When", v: site.hours },
  { icon: PoundSterling, k: "Price", v: "Fair, transparent, no surprises" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative bg-brand-paper py-20 sm:py-28">
      <div className="absolute inset-0 bg-dots-dark opacity-70" />
      <div className="container-pad relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_0.85fr]">
        <Reveal>
          <p className="eyebrow text-brand-gold-dark">About Us</p>
          <h2 className="display mt-5 text-4xl text-brand-ink sm:text-5xl lg:text-6xl">
            The Mechanic
            <br />
            That <span className="text-blue">Comes To You</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-ink/70">
            West Yorkshire Mobile Mechanic brings the full garage experience
            straight to your door. From routine servicing to complex diagnostics
            and repairs, we handle it all on-site — saving you the time, cost and
            stress of a traditional garage visit.
          </p>

          <ul className="mt-8 grid gap-3.5">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-ink text-brand-gold">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-[15px] font-medium text-brand-ink/80">
                  {p}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={site.phoneHref}
              className="btn-sticker bg-brand-ink px-6 py-3.5 text-sm text-white shadow-hard-gold transition-transform hover:-translate-y-0.5"
            >
              Book Your Repair
            </a>
            <a
              href="#services"
              className="btn-sticker border-2 border-brand-ink px-6 py-3.5 text-sm text-brand-ink hover:bg-brand-ink hover:text-white"
            >
              View Services
            </a>
          </div>
        </Reveal>

        {/* Spec-sheet panel */}
        <Reveal delay={0.1}>
          <div className="relative">
            <span className="absolute -right-3 -top-8 font-display text-[7rem] leading-none text-brand-ink/[0.06]">
              WY
            </span>
            <div className="relative border-2 border-brand-ink bg-brand-ink p-7 text-white shadow-hard-gold">
              <p className="eyebrow text-brand-gold">Why It Works</p>
              <div className="mt-6 divide-y divide-white/10">
                {specs.map((s) => (
                  <div key={s.k} className="flex items-center gap-4 py-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-brand-gold/50 text-brand-gold">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-steel">
                        {s.k}
                      </p>
                      <p className="font-display text-lg uppercase tracking-wide text-white">
                        {s.v}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
