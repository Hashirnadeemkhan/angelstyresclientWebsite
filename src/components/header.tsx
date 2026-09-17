"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-brand-ink/92 py-2 backdrop-blur-xl"
          : "bg-transparent py-3.5"
      }`}
    >
      <div className="container-pad flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <Image
            src="/logo.jpeg"
            alt={site.name}
            width={260}
            height={173}
            priority
            className="h-11 w-auto object-contain sm:h-14"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-[13px] font-bold uppercase tracking-widest text-slate-200 transition-colors hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-brand-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="btn-sticker hidden bg-brand-gold px-6 py-2.5 text-sm text-brand-ink shadow-hard hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_rgba(10,13,20,1)] sm:inline-flex"
          >
            Book Now
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/5 text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-brand-ink/98 backdrop-blur-xl transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[440px]" : "max-h-0"
        }`}
      >
        <nav className="container-pad flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-bold uppercase tracking-widest text-slate-200 transition-colors hover:bg-white/5 hover:text-brand-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-sticker mt-2 bg-brand-gold px-5 py-3 text-base text-brand-ink"
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}
