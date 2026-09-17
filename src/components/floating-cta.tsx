import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { site } from "@/lib/site";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
      >
        <FaWhatsapp className="h-7 w-7" />
      </a>
      <a
        href={site.phoneHref}
        aria-label="Call us"
        className="grid h-14 w-14 animate-pulse-ring place-items-center rounded-full bg-brand-gold text-brand-ink shadow-gold transition-transform hover:scale-110"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
