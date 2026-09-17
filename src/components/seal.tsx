import { Wrench } from "lucide-react";

/** Rotating circular seal badge that echoes the logo's ring motif. */
export function Seal({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-square ${className}`}>
      <svg
        viewBox="0 0 200 200"
        className="h-full w-full animate-spin-slow"
        aria-hidden="true"
      >
        <defs>
          <path
            id="seal-path"
            d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0"
            fill="none"
          />
        </defs>
        <text
          fill="#f2b705"
          className="font-display uppercase"
          style={{ fontSize: "17px", letterSpacing: "3px" }}
        >
          <textPath href="#seal-path" startOffset="0">
            WEST YORKSHIRE • MOBILE MECHANIC • HUDDERSFIELD •
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 grid place-items-center">
        <span className="grid h-14 w-14 place-items-center rounded-full border-2 border-brand-gold/70 text-brand-gold">
          <Wrench className="h-6 w-6" />
        </span>
      </span>
    </div>
  );
}
