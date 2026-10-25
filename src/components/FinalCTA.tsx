"use client";

import React from "react";
import { siteConfig } from "@/content/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export function FinalCTA() {
  const directOrderLink = buildWhatsAppLink({
    note: "Hi Varsha ji, I'm ready to order fresh puris!",
  });

  return (
    <section className="px-4 py-8 bg-sand border-y-2 border-ink flex flex-col items-center">
      <div className="w-full max-w-xl bg-cream rounded-3xl border-2 border-ink shadow-tactile-lg p-5 flex flex-col items-center text-center">
        {/* Tea / Snack Icon */}
        <div className="w-12 h-12 rounded-2xl bg-turmeric border-2 border-ink flex items-center justify-center text-maroon text-2xl shadow-tactile-sm mb-3">
          🫖
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-black text-maroon">
          Hungry? Let&apos;s chat.
        </h2>
        <p className="font-sans text-xs sm:text-sm text-ink-muted mt-1 max-w-xs">
          Your warm, crispy batch is just one WhatsApp message away.
        </p>

        {/* Big WhatsApp CTA Button */}
        <a
          href={directOrderLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full min-h-[50px] py-3.5 px-5 rounded-2xl bg-whatsapp text-white font-sans font-extrabold text-base flex items-center justify-center gap-2 border-2 border-ink shadow-tactile active:translate-y-1 active:shadow-tactile-pressed hover:brightness-105 transition-all"
        >
          <MessageCircle className="w-6 h-6" />
          <span>Order Directly on WhatsApp</span>
        </a>

        {/* Phone & Location Info */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-3 font-mono text-xs text-ink-muted">
          <span>📞 {siteConfig.phone}</span>
          <span>•</span>
          <span>📍 {siteConfig.location}</span>
        </div>
      </div>
    </section>
  );
}
