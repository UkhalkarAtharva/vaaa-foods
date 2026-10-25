"use client";

import React from "react";
import { occasions } from "@/content/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function Occasions() {
  const bulkOrderLink = buildWhatsAppLink({
    note: "Inquiry about festive gift boxes / bulk orders in Pune",
  });

  return (
    <section className="bg-maroon-deep text-[#FFF6E3] px-4 py-8 border-b-2 border-ink flex flex-col gap-4">
      <div className="max-w-xl mx-auto w-full">
        <div className="text-center">
          <span className="font-hand text-xl text-turmeric font-bold">
            Good Times, Greater Snacking
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-0.5">
            Perfect for Every Occasion
          </h2>
          <p className="font-sans text-xs text-[#FFF6E3]/70 mt-1 max-w-xs mx-auto">
            From 4 PM tea-time to grand family celebrations.
          </p>
        </div>

        {/* 4 Occasion Cards */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          {occasions.map((occ, idx) => {
            const rot = idx % 2 === 0 ? "-rotate-1" : "rotate-1";
            return (
              <div
                key={occ.title}
                className={`bg-white rounded-2xl border-2 border-ink p-3.5 shadow-tactile flex flex-col justify-between ${rot}`}
              >
                <div className="text-2xl mb-2 select-none">{occ.emoji}</div>
                <div>
                  <h3 className="font-serif font-bold text-[15px] text-maroon leading-snug">
                    {occ.title}
                  </h3>
                  <p className="font-sans text-[11px] text-ink-muted mt-1 leading-relaxed">
                    {occ.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bulk Banner */}
        <div className="bg-black/30 border border-white/15 rounded-2xl p-3 text-center mt-3">
          <p className="font-sans text-xs text-white/90">
            Need customized gift boxes or festive potlis? <br />
            <a
              href={bulkOrderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold text-turmeric hover:text-turmeric-light transition-colors"
            >
              Chat with us for festive bulk rates →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
