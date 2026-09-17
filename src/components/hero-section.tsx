"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Phone, ShieldCheck, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { site } from "@/lib/site";
import { Seal } from "@/components/seal";

const stats = [
  { value: "10+", label: "Years On The Tools" },
  { value: "2.5K+", label: "Jobs Completed" },
  { value: "4.9", label: "Average Rating" },
  { value: "7", label: "Days A Week" },
];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-brand-ink text-white"
    >
      {/* atmosphere */}
      <div className="absolute inset-0 bg-dots opacity-60" />
      <div className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-brand-blue/25 blur-[120px]" />
      <div className="absolute -right-32 bottom-10 h-[420px] w-[420px] rounded-full bg-brand-gold/10 blur-[120px]" />
      {/* giant watermark */}
      <span className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 select-none font-display text-[24vw] leading-none text-white/[0.035] sm:text-[20vw]">
        MECHANIC
      </span>

      {/* vertical edge label */}
      <span className="pointer-events-none absolute left-3 top-1/2 hidden -translate-y-1/2 -rotate-90 text-[11px] font-bold uppercase tracking-[0.5em] text-white/30 xl:block">
        Est · Huddersfield · HD4 5LJ
      </span>

      <div className="container-pad relative grid grid-cols-1 items-center gap-12 pb-16 pt-32 sm:pt-36 lg:grid-cols-[1.08fr_0.92fr] lg:pb-20 lg:pt-40">
        {/* Copy */}
        <div className="min-w-0">
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow text-brand-gold"
          >
            <MapPin className="h-3.5 w-3.5" /> Huddersfield · West Yorkshire
          </motion.p>

          <h1 className="mt-6">
            {["We Fix Cars", "At Your Door"].map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08 + i * 0.09, ease }}
                className="display block text-[11.5vw] sm:text-7xl lg:text-8xl"
              >
                {i === 1 ? (
                  <>
                    At Your <span className="text-gold">Door</span>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease }}
            className="mt-6 max-w-lg text-base leading-relaxed text-brand-steel sm:text-lg"
          >
            A fully-equipped mobile mechanic bringing servicing, diagnostics and
            repairs to your home or workplace — dealer-level work, honest
            prices, no garage queues.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={site.phoneHref}
              className="btn-sticker bg-brand-gold px-7 py-4 text-base text-brand-ink shadow-hard transition-transform hover:-translate-y-0.5"
            >
              <Phone className="h-5 w-5" /> Call {site.phoneDisplay}
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sticker border-2 border-white/25 px-7 py-4 text-base text-white hover:border-green-400 hover:bg-green-500/10"
            >
              <FaWhatsapp className="h-5 w-5 text-green-400" /> WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.48 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-brand-steel"
          >
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand-blue-light" /> Fully
              Insured
            </span>
            <span className="inline-flex items-center gap-2">
              <Star className="h-4 w-4 text-brand-gold" /> 5-Star Rated
            </span>
            <span className="inline-flex items-center gap-2">
              <ArrowUpRight className="h-4 w-4 text-brand-blue-light" /> All Makes
              & Models
            </span>
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="relative mx-auto w-full min-w-0 max-w-[440px]"
        >
          <Seal className="absolute -left-8 -top-10 z-20 w-28 sm:w-32" />

          <div className="relative border-2 border-brand-gold bg-brand-night p-2.5 shadow-hard-gold">
            <div className="animate-float">
              <Image
                src="/logo.jpeg"
                alt={`${site.name} logo`}
                width={720}
                height={480}
                priority
                className="w-full"
              />
            </div>
          </div>

          {/* number plate style callout */}
          <div className="absolute -bottom-6 right-4 z-20 flex items-stretch overflow-hidden rounded-md border-2 border-brand-ink shadow-hard">
            <span className="grid place-items-center bg-brand-blue px-2 text-[10px] font-bold text-white">
              GB
            </span>
            <span className="bg-brand-gold px-4 py-2 font-display text-xl uppercase tracking-widest text-brand-ink">
              Same-Day
            </span>
          </div>
        </motion.div>
      </div>

      {/* Stat band */}
      <div className="relative border-t border-white/10">
        <div className="container-pad grid grid-cols-2 divide-x divide-white/10 py-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="px-4 text-center first:pl-0 last:pr-0">
              <p className="font-display text-4xl text-brand-gold sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-brand-steel">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
