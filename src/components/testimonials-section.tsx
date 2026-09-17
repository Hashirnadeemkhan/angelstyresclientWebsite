"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Reveal } from "@/components/reveal";

const reviews = [
  {
    name: "Sarah T.",
    area: "Huddersfield",
    text: "Came out same day and fixed my brakes on the driveway. Cheaper than the garage quote and so much easier — genuinely can't recommend enough.",
  },
  {
    name: "James R.",
    area: "Halifax",
    text: "Car wouldn't start before work. Diagnosed the battery and alternator within the hour and had me sorted. Professional and honest throughout.",
  },
  {
    name: "Priya K.",
    area: "Brighouse",
    text: "Full service done at my house while I worked from home. Talked me through everything and the pricing was completely transparent. Brilliant.",
  },
  {
    name: "Daniel W.",
    area: "Dewsbury",
    text: "Clutch replacement without ever leaving home. Tidy, friendly and clearly knows his stuff. My go-to mechanic from now on.",
  },
  {
    name: "Emma L.",
    area: "Holmfirth",
    text: "Fixed the advisories before my MOT and it passed first time. Reliable, punctual and fairly priced — exactly what you want.",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const count = reviews.length;
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  const r = reviews[index];

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-brand-ink py-20 text-white sm:py-28"
    >
      <span className="pointer-events-none absolute -left-6 top-8 select-none font-display text-[16rem] leading-none text-white/[0.03]">
        “
      </span>
      <div className="container-pad relative">
        <Reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow text-brand-gold">Reviews</p>
            <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-6xl">
              Local Drivers, <span className="text-gold">Real Words</span>
            </h2>
          </div>
          <div className="flex items-center gap-1.5 text-brand-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
            <span className="ml-2 font-display text-2xl text-white">4.9</span>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <blockquote className="max-w-4xl">
            <p className="display min-h-[160px] text-2xl font-normal normal-case leading-[1.25] tracking-normal text-white sm:text-4xl sm:leading-[1.2]">
              {r.text}
            </p>
          </blockquote>

          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-full border-2 border-brand-gold font-display text-2xl text-brand-gold">
                {r.name.charAt(0)}
              </span>
              <div>
                <p className="font-display text-lg uppercase tracking-wide text-white">
                  {r.name}
                </p>
                <p className="text-sm text-brand-steel">{r.area}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                aria-label="Previous review"
                onClick={prev}
                className="grid h-12 w-12 place-items-center border-2 border-white/20 text-white transition-colors hover:border-brand-gold hover:text-brand-gold"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                aria-label="Next review"
                onClick={next}
                className="grid h-12 w-12 place-items-center border-2 border-white/20 text-white transition-colors hover:border-brand-gold hover:text-brand-gold"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to review ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-10 bg-brand-gold" : "w-4 bg-white/20"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
