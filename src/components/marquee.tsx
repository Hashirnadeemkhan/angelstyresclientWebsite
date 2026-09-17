const items = [
  "Car Servicing",
  "Diagnostics",
  "Brakes & Discs",
  "Clutch Replacement",
  "Battery & Electrics",
  "Cambelts & Timing",
  "Pre-MOT Repairs",
  "We Come To You",
];

export function Marquee() {
  return (
    <div className="border-y-2 border-brand-ink bg-brand-gold py-3.5">
      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((dup) => (
            <ul
              key={dup}
              className="flex shrink-0 items-center"
              aria-hidden={dup === 1}
            >
              {items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-6 whitespace-nowrap pr-6"
                >
                  <span className="font-display text-lg uppercase tracking-wide text-brand-ink sm:text-xl">
                    {item}
                  </span>
                  <span className="text-brand-ink/60">✦</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
