"use client";

import React from "react";
import { SectionHeading } from "./SectionHeading";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle, Star } from "lucide-react";

export function Reviews() {
  const tasterOrderLink = buildWhatsAppLink({
    note: "I'd love to be an early taster in Pune!",
  });

  return (
    <section className="px-4 py-8 bg-sand border-y-2 border-ink flex flex-col gap-4">
      <div className="max-w-xl mx-auto w-full">
        <SectionHeading
          badge="Community &amp; Early Tasters"
          badgeColor="coriander"
          title="Be Our First Taster in Pune"
        />

        <div className="flex flex-col gap-3.5 mt-4">
          {/* Card 1: Honest feedback callout */}
          <div className="bg-white p-4 rounded-3xl border-2 border-ink shadow-tactile flex flex-col gap-2.5 -rotate-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="text-base">💌</span>
                <span className="font-sans text-xs font-extrabold text-maroon">
                  Taste &amp; Give Honest Feedback
                </span>
              </div>
              <span className="bg-turmeric text-ink text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-ink/30">
                Early Bird Batch
              </span>
            </div>
            <p className="font-sans text-xs text-ink leading-relaxed">
              As a newly launched home kitchen in Pune, we would be honoured to have you try our very first batches. Taste a fresh pack with your cutting chai, let us know what you love, and help us refine every recipe!
            </p>
            <div className="pt-2 border-t border-dashed border-ink/20 flex items-center justify-between">
              <span className="font-hand text-base text-maroon font-bold">
                Try a box! 💛
              </span>
              <a
                href={tasterOrderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] py-1.5 px-3 rounded-xl bg-whatsapp text-white font-sans text-xs font-bold flex items-center gap-1 border border-ink shadow-tactile-sm active:translate-y-0.5 active:shadow-none hover:brightness-105 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Connect on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 2: Placeholder for real reviews */}
          <div className="bg-cream/70 p-4 rounded-3xl border-2 border-dashed border-maroon/35 flex flex-col items-center justify-center text-center py-6">
            <div className="w-10 h-10 rounded-full bg-sand border border-ink/30 flex items-center justify-center text-maroon mb-2">
              <Star className="w-5 h-5 text-turmeric fill-turmeric" />
            </div>
            <h4 className="font-serif font-bold text-sm text-maroon">
              Customer Reviews Space
            </h4>
            <p className="font-sans text-xs text-ink-muted max-w-xs mt-1">
              Real customer reviews will appear here as you taste &amp; share! No invented reviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
