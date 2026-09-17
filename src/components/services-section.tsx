import {
  BatteryCharging,
  Car,
  ClipboardCheck,
  Cog,
  Disc3,
  Gauge,
  Thermometer,
  Wrench,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

type Service = {
  icon: typeof Wrench;
  title: string;
  text: string;
  wide?: boolean;
  tone?: "gold" | "blue" | "dark";
};

const services: Service[] = [
  {
    icon: Wrench,
    title: "Car Servicing",
    text: "Interim & full services — oil, filters and a full multi-point inspection.",
    tone: "gold",
  },
  {
    icon: Gauge,
    title: "Diagnostics",
    text: "Engine management & fault-code diagnostics with professional tools.",
  },
  {
    icon: Disc3,
    title: "Brakes & Discs",
    text: "Pads, discs and calipers replaced safely at your location.",
  },
  {
    icon: Cog,
    title: "Clutch & Gearbox",
    text: "Clutch replacement and gearbox repairs on most makes & models.",
  },
  {
    icon: BatteryCharging,
    title: "Battery & Electrics",
    text: "Battery, alternator and starter-motor testing & replacement.",
  },
  {
    icon: Thermometer,
    title: "Cooling & Timing",
    text: "Water pumps, thermostats, cambelts and timing chains.",
  },
  {
    icon: ClipboardCheck,
    title: "Pre-MOT Repairs",
    text: "Fix advisories and failures so your car sails through its MOT first time.",
    wide: true,
    tone: "blue",
  },
  {
    icon: Car,
    title: "General Repairs",
    text: "Suspension, exhausts, sensors and everyday mechanical fixes.",
    wide: true,
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-brand-ink py-20 text-white sm:py-28"
    >
      <div className="absolute inset-0 bg-dots opacity-50" />
      <div className="absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-brand-blue/20 blur-[120px]" />

      <div className="container-pad relative">
        {/* header */}
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-brand-gold">What We Do</p>
            <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-6xl">
              Full-Service
              <br />
              <span className="text-gold">Mobile Repairs</span>
            </h2>
          </div>
          <p className="max-w-sm text-brand-steel">
            Whatever your car needs, we bring the workshop to your driveway —
            every job to dealer standard.{" "}
            <a
              href={site.phoneHref}
              className="font-bold text-brand-gold underline-offset-4 hover:underline"
            >
              Call us →
            </a>
          </p>
        </Reveal>

        {/* bento */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((s, i) => {
            const isGold = s.tone === "gold";
            const isBlue = s.tone === "blue";
            return (
              <Reveal
                key={s.title}
                delay={(i % 3) * 0.06}
                className={s.wide ? "lg:col-span-3" : "lg:col-span-2"}
              >
                <div
                  className={`group relative flex h-full flex-col overflow-hidden border-2 p-6 transition-all duration-300 hover:-translate-y-1 ${
                    isGold
                      ? "border-brand-gold bg-brand-gold text-brand-ink"
                      : isBlue
                        ? "border-brand-blue/60 bg-brand-blue/10 hover:border-brand-blue"
                        : "border-white/12 bg-white/[0.03] hover:border-brand-gold/60"
                  }`}
                >
                  <span
                    className={`absolute right-4 top-3 font-display text-3xl ${
                      isGold ? "text-brand-ink/15" : "text-white/10"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`grid h-14 w-14 place-items-center rounded-full ${
                      isGold
                        ? "bg-brand-ink text-brand-gold"
                        : "bg-white/5 text-brand-gold ring-1 ring-white/10"
                    }`}
                  >
                    <s.icon className="h-7 w-7" />
                  </span>
                  <h3
                    className={`display mt-5 text-xl ${
                      isGold ? "text-brand-ink" : "text-white"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      isGold ? "text-brand-ink/70" : "text-brand-steel"
                    }`}
                  >
                    {s.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
