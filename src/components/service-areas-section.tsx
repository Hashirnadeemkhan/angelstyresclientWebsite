import { MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

const areas = [
  "Huddersfield",
  "Halifax",
  "Brighouse",
  "Dewsbury",
  "Holmfirth",
  "Elland",
  "Mirfield",
  "Meltham",
  "Slaithwaite",
  "Marsden",
  "Kirkburton",
  "Golcar",
];

export function ServiceAreasSection() {
  return (
    <section id="areas" className="bg-brand-paper py-20 sm:py-28">
      <div className="container-pad grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <p className="eyebrow text-brand-gold-dark">Coverage</p>
          <h2 className="display mt-5 text-4xl text-brand-ink sm:text-5xl lg:text-6xl">
            Across <span className="text-blue">West Yorkshire</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-brand-ink/70">
            Based at {site.address.street} in {site.address.city}, we cover a
            wide radius across West Yorkshire. If you&apos;re nearby, chances are
            we can reach you — just ask.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {areas.map((a) => (
              <span
                key={a}
                className="inline-flex items-center gap-1.5 border border-brand-ink/20 bg-white/50 px-4 py-2 text-sm font-bold uppercase tracking-wide text-brand-ink transition-colors hover:border-brand-ink hover:bg-brand-ink hover:text-brand-gold"
              >
                <MapPin className="h-3.5 w-3.5 text-brand-gold-dark" /> {a}
              </span>
            ))}
          </div>

          <a
            href={site.phoneHref}
            className="btn-sticker mt-9 bg-brand-ink px-6 py-3.5 text-sm text-white shadow-hard-gold transition-transform hover:-translate-y-0.5"
          >
            Not sure we cover you? Call us
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border-2 border-brand-ink shadow-hard">
            <iframe
              title="West Yorkshire Mobile Mechanic service area map"
              src="https://www.google.com/maps?q=44%20Balmoral%20Ave%2C%20Huddersfield%20HD4%205LJ&output=embed"
              className="h-[380px] w-full grayscale-[0.3] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
