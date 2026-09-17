"use client";

import { useState } from "react";
import { Clock, MapPin, Phone, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", car: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New enquiry from ${form.name || "website"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nCar: ${form.car}\n\n${form.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full border-2 border-brand-ink/15 bg-brand-paper px-4 py-3 text-sm font-medium text-brand-ink outline-none transition-colors placeholder:text-brand-ink/40 focus:border-brand-blue";

  const contacts = [
    {
      icon: Phone,
      k: "Call Us",
      v: site.phoneDisplay,
      href: site.phoneHref,
      tone: "bg-brand-gold text-brand-ink",
    },
    {
      icon: FaWhatsapp,
      k: "WhatsApp",
      v: "Message Us",
      href: site.whatsappHref,
      tone: "bg-green-500 text-white",
      external: true,
    },
    {
      icon: MapPin,
      k: "Based In",
      v: site.address.full,
      href: site.mapsHref,
      tone: "bg-brand-blue text-white",
      external: true,
    },
  ];

  return (
    <section id="contact" className="bg-brand-paper-2 py-20 sm:py-28">
      <div className="container-pad">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-brand-gold-dark">Get In Touch</p>
          <h2 className="display mt-5 text-4xl text-brand-ink sm:text-5xl lg:text-6xl">
            Book Your <span className="text-blue">Mechanic</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-brand-ink/70">
            Call, WhatsApp or send an enquiry below and we&apos;ll get you booked
            in — often the same day.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="grid content-start gap-4">
            {contacts.map((c) => (
              <a
                key={c.k}
                href={c.href}
                {...(c.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex items-center gap-4 border-2 border-brand-ink bg-brand-paper p-5 transition-all hover:-translate-y-0.5 hover:shadow-hard"
              >
                <span className={`grid h-12 w-12 place-items-center ${c.tone}`}>
                  <c.icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-ink/50">
                    {c.k}
                  </p>
                  <p className="font-display text-lg uppercase tracking-wide text-brand-ink">
                    {c.v}
                  </p>
                </div>
              </a>
            ))}
            <div className="flex items-center gap-4 border-2 border-brand-ink/20 bg-brand-paper p-5">
              <span className="grid h-12 w-12 place-items-center bg-brand-ink text-brand-gold">
                <Clock className="h-6 w-6" />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-ink/50">
                  Opening Hours
                </p>
                <p className="font-display text-lg uppercase tracking-wide text-brand-ink">
                  {site.hours}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="border-2 border-brand-ink bg-brand-paper p-6 shadow-hard-gold sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-brand-ink/70">
                    Your Name
                  </span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Smith"
                    className={inputClass}
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-brand-ink/70">
                    Phone Number
                  </span>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="07…"
                    className={inputClass}
                  />
                </label>
              </div>
              <label className="mt-4 block">
                <span className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-brand-ink/70">
                  Car Make & Model
                </span>
                <input
                  value={form.car}
                  onChange={(e) => setForm({ ...form, car: e.target.value })}
                  placeholder="e.g. VW Golf 2016"
                  className={inputClass}
                />
              </label>
              <label className="mt-4 block">
                <span className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-brand-ink/70">
                  How Can We Help?
                </span>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Describe the problem or the service you need…"
                  className={`${inputClass} resize-none`}
                />
              </label>
              <button
                type="submit"
                className="btn-sticker mt-5 w-full bg-brand-ink px-6 py-4 text-base text-white transition-transform hover:-translate-y-0.5"
              >
                <Send className="h-5 w-5" /> Send Enquiry
              </button>
              <p className="mt-3 text-center text-xs text-brand-ink/60">
                Prefer to talk? Call{" "}
                <a
                  href={site.phoneHref}
                  className="font-bold text-brand-blue-dark"
                >
                  {site.phoneDisplay}
                </a>
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
