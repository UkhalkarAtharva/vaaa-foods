"use client";

import React from "react";
import { siteConfig, deliveryAreas } from "@/content/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { SesameSeed, CurryLeaf, CrumbCluster } from "./Doodles";
import { RotatingBadge } from "./RotatingBadge";
import { MessageCircle, Phone, CheckCircle } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const orderLink = buildWhatsAppLink({ note: "Order inquiry from Hero" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative px-4 pt-5 pb-8 flex flex-col items-center overflow-hidden">
      {/* Background Decorative Doodles */}
      <div className="absolute top-6 left-3 w-8 h-8 opacity-25 pointer-events-none rotate-12">
        <SesameSeed className="w-full h-full" />
      </div>
      <div className="absolute top-28 right-2 w-6 h-6 opacity-30 pointer-events-none -rotate-45">
        <CurryLeaf className="w-full h-full" />
      </div>
      <div className="absolute bottom-16 left-6 w-5 h-5 opacity-25 pointer-events-none rotate-45">
        <CrumbCluster className="w-full h-full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-sm sm:max-w-md flex flex-col items-center"
      >
        {/* Top Handcrafted Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand border-2 border-ink shadow-tactile-sm -rotate-1 mb-4"
        >
          <span className="w-2 h-2 rounded-full bg-coriander" />
          <span className="font-sans text-xs font-bold uppercase tracking-wider text-ink">
            Namaskar! Mother &amp; Daughter Kitchen • Pune
          </span>
        </motion.div>

        {/* Chunky Editorial Serif Headlines */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center text-center mb-5"
        >
          <h1 className="font-serif text-[34px] sm:text-[42px] leading-[1.1] font-bold text-maroon tracking-tight">
            Crunch that feels <br />
            <span className="relative inline-block mt-0.5">
              <span className="relative z-10 font-serif italic text-maroon-deep">
                like home.
              </span>
              <mark className="absolute -bottom-1 left-0 w-full h-3.5 bg-turmeric/60 -rotate-1 rounded-sm -z-0" />
            </span>
          </h1>
          <p className="font-hand text-2xl sm:text-3xl text-maroon font-bold mt-2 -rotate-1">
            &ldquo;{siteConfig.tagline}&rdquo;
          </p>
        </motion.div>

        {/* Hero Polaroid / Tilted Food Photo */}
        <motion.div
          variants={itemVariants}
          className="relative w-full mx-auto my-2"
        >
          {/* Floating Sticker */}
          <div className="absolute -top-3 -right-2 z-20 bg-turmeric text-ink font-extrabold text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-xl border-2 border-ink shadow-tactile rotate-6 flex items-center gap-1">
            <span>✨</span> Single-Use Oil
          </div>

          {/* Rotating Circular Badge */}
          <div className="absolute -bottom-5 -left-3 z-20">
            <RotatingBadge />
          </div>

          {/* Polaroid Frame */}
          <div className="bg-white p-3.5 pb-5 rounded-3xl border-2 border-ink shadow-tactile-lg -rotate-1">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative border-2 border-ink bg-[#FFFBF0] flex items-center justify-center text-center p-4">
              {/* Photo or labeled placeholder */}
              <div className="flex flex-col items-center justify-center gap-1.5">
                <span className="text-3xl">🥟</span>
                <span className="font-serif font-bold text-maroon text-sm">
                  Freshly rolled &amp; fried puris
                </span>
                <span className="font-mono text-[10px] text-ink-muted bg-sand/60 px-2 py-0.5 rounded-full border border-ink/20">
                  TODO_HERO_PHOTO
                </span>
              </div>

              <div className="absolute bottom-2 left-2 bg-[#FFF6E3]/95 border border-ink/30 px-2 py-0.5 rounded-md text-[10px] font-hand font-bold text-maroon shadow-sm">
                Freshly rolled &amp; fried 🌿
              </div>
            </div>

            {/* Handwritten Caption */}
            <div className="mt-3 flex items-center justify-between px-1">
              <span className="font-hand text-lg text-ink font-bold">
                Crispy Ajwain &amp; Methi Puris
              </span>
              <span className="font-mono text-[11px] font-bold text-coriander bg-coriander-light border border-coriander/30 px-2.5 py-0.5 rounded-full">
                Handmade in Pune 💛
              </span>
            </div>
          </div>
        </motion.div>

        {/* Action Stack */}
        <motion.div
          variants={itemVariants}
          className="w-full flex flex-col gap-2.5 mt-5"
        >
          {/* WhatsApp Order Button */}
          <a
            href={orderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[52px] py-3.5 px-5 rounded-2xl bg-whatsapp text-white font-sans font-extrabold text-base tracking-wide flex items-center justify-center gap-2.5 border-2 border-ink shadow-tactile active:translate-y-1 active:shadow-tactile-pressed hover:brightness-105 transition-all"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Order Fresh on WhatsApp</span>
          </a>

          {/* Secondary Call Action */}
          <a
            href={`tel:${siteConfig.phone}`}
            className="w-full min-h-[46px] py-2.5 px-4 rounded-2xl bg-sand text-ink font-sans font-bold text-sm flex items-center justify-center gap-2 border-2 border-ink shadow-tactile-sm active:translate-y-0.5 active:shadow-none hover:bg-sand/80 transition-all"
          >
            <Phone className="w-5 h-5 text-maroon" />
            <span>Call Kitchen: {siteConfig.phone}</span>
          </a>

          {/* Reassurance Strip */}
          <div className="flex items-center justify-center gap-1.5 text-center mt-1">
            <CheckCircle className="w-4 h-4 text-coriander" />
            <span className="font-sans text-xs font-semibold text-ink-muted">
              Delivering across Pune • Freshly Made on Order
            </span>
          </div>

          {/* Delivery areas pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2 pt-1">
            <span className="font-mono text-[10px] font-bold text-maroon uppercase tracking-wide">
              Delivering to:
            </span>
            {deliveryAreas.map((area, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-full bg-sand border border-ink/30 font-sans text-[10px] font-semibold text-ink"
              >
                {area}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
