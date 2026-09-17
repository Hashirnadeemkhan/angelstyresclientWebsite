import Image from "next/image";
import { Clock, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-ink text-white">
      {/* big brand watermark */}
      <div className="container-pad relative pt-16">
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/logo.jpeg"
              alt={site.name}
              width={300}
              height={200}
              className="h-16 w-auto object-contain"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-brand-steel">
              Professional mobile car repairs and servicing brought to your door
              across Huddersfield and West Yorkshire.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-brand-gold">
              Explore
            </h4>
            <ul className="mt-4 grid gap-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm font-medium text-brand-steel transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-brand-gold">
              Contact
            </h4>
            <ul className="mt-4 grid gap-3 text-sm text-brand-steel">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-start gap-2.5 hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 text-brand-gold" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 hover:text-white"
                >
                  <FaWhatsapp className="mt-0.5 h-4 w-4 text-green-400" />
                  WhatsApp Chat
                </a>
              </li>
              <li>
                <a
                  href={site.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 hover:text-white"
                >
                  <MapPin className="mt-0.5 h-4 w-4 text-brand-blue-light" />
                  {site.address.full}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 text-brand-blue-light" />
                {site.hours}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-brand-gold">
              Need A Mechanic?
            </h4>
            <p className="mt-4 text-sm text-brand-steel">
              Get an honest quote today — we come to you.
            </p>
            <a
              href={site.phoneHref}
              className="btn-sticker mt-4 bg-brand-gold px-5 py-3 text-sm text-brand-ink"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      </div>

      {/* oversized wordmark strip */}
      <div className="select-none border-t border-white/10 py-6 text-center">
        <span className="font-display text-[13vw] leading-none text-white/[0.04] sm:text-[9vw]">
          MOBILE MECHANIC
        </span>
      </div>

      <div className="border-t border-white/10">
        <div className="container-pad flex flex-col items-center justify-between gap-2 py-5 text-center text-xs text-brand-steel sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Mobile car repairs across Huddersfield &amp; West Yorkshire.</p>
        </div>
      </div>
    </footer>
  );
}
