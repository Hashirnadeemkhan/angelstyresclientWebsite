import { BadgeCheck, CalendarClock, MapPinned, PhoneCall } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Honest & Upfront",
    text: "Clear quotes before any work starts. You always know the price first.",
  },
  {
    icon: MapPinned,
    title: "Comes To You",
    text: "Home or workplace — no lift to arrange, no waiting around in a garage.",
  },
  {
    icon: CalendarClock,
    title: "Fast Turnaround",
    text: "Flexible slots including same-day bookings when you need us most.",
  },
  {
    icon: PhoneCall,
    title: "Proper Local",
    text: "A real local mechanic who answers the phone and cares about your car.",
  },
];

const steps = [
  { title: "Get In Touch", text: "Call or WhatsApp with your car & the problem." },
  { title: "Free Quote", text: "We give you an honest, up-front price." },
  { title: "We Come To You", text: "We arrive at a time that suits you." },
  { title: "Job Done", text: "Repaired on-site — back on the road." },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="bg-brand-paper-2 py-20 sm:py-28">
      <div className="container-pad">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-brand-gold-dark">Why Choose Us</p>
          <h2 className="display mt-5 text-4xl text-brand-ink sm:text-5xl lg:text-6xl">
            Repairs Made <span className="text-blue">Simple</span>
          </h2>
        </Reveal>

        {/* numbered reasons */}
        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 4) * 0.07}>
              <div className="border-t-2 border-brand-ink pt-5">
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl text-outline">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <r.icon className="h-7 w-7 text-brand-ink/70" />
                </div>
                <h3 className="display mt-4 text-xl text-brand-ink">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">
                  {r.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* process band */}
        <Reveal className="mt-16">
          <div className="border-2 border-brand-ink bg-brand-ink p-8 text-white shadow-hard-gold sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h3 className="display text-2xl text-white sm:text-3xl">
                How It <span className="text-gold">Works</span>
              </h3>
              <a
                href={site.phoneHref}
                className="btn-sticker bg-brand-gold px-5 py-2.5 text-sm text-brand-ink"
              >
                Start Now
              </a>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <div
                  key={s.title}
                  className="relative border-l-2 border-brand-gold/40 pl-4"
                >
                  <span className="font-display text-3xl text-brand-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="display mt-1 text-lg text-white">{s.title}</h4>
                  <p className="mt-1 text-sm text-brand-steel">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
