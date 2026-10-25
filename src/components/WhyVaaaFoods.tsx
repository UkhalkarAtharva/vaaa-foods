"use client";

import React from "react";
import { SectionHeading } from "./SectionHeading";
import { Utensils, Home } from "lucide-react";

export function WhyVaaaFoods() {
  return (
    <section className="px-4 py-8 bg-sand border-y-2 border-ink flex flex-col gap-4">
      <div className="max-w-xl mx-auto w-full">
        <SectionHeading
          badge="Uncompromising Standards"
          badgeColor="maroon"
          title="Why Families Love Vaaa Foods"
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          {/* Card 1: Small Batches */}
          <div className="bg-cream p-4 rounded-3xl border-2 border-ink shadow-tactile flex flex-col justify-between -rotate-1">
            <div className="w-8 h-8 rounded-full bg-turmeric border border-ink flex items-center justify-center text-maroon text-sm font-bold">
              🍳
            </div>
            <div className="mt-3">
              <span className="font-serif text-2xl font-extrabold text-maroon leading-tight block">
                Small Batches
              </span>
              <h4 className="font-sans font-bold text-xs text-ink mt-1">
                Fried with Patience
              </h4>
              <p className="font-sans text-[11px] text-ink-muted mt-0.5">
                Prepared in limited home quantities so every puri is evenly crispy.
              </p>
            </div>
          </div>

          {/* Card 2: Zero Reused Oil */}
          <div className="bg-white p-4 rounded-3xl border-2 border-ink shadow-tactile flex flex-col justify-between rotate-1">
            <div className="w-8 h-8 rounded-full bg-coriander-light border border-ink flex items-center justify-center text-coriander text-sm font-bold">
              💧
            </div>
            <div className="mt-3">
              <span className="font-serif text-xl sm:text-2xl font-extrabold text-coriander leading-tight block">
                Zero Reused Oil
              </span>
              <h4 className="font-sans font-bold text-xs text-ink mt-1">
                Single Batch Only
              </h4>
              <p className="font-sans text-[11px] text-ink-muted mt-0.5">
                Clean single-use oil. Never recycled.
              </p>
            </div>
          </div>

          {/* Card 3: Fresh When You Order (Full width) */}
          <div className="col-span-2 bg-[#FFFDF7] p-5 rounded-3xl border-2 border-ink shadow-tactile flex flex-col gap-3">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-1 border-b border-dashed border-ink/15">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-turmeric border-2 border-ink flex items-center justify-center text-maroon shrink-0">
                  <Utensils className="w-5 h-5" />
                </div>
                <span className="font-sans text-xs font-extrabold uppercase tracking-wider text-maroon">
                  Fresh When You Order
                </span>
              </div>
              <span className="font-mono text-[10px] font-extrabold bg-coriander-light text-coriander px-2.5 py-1 rounded-full border border-coriander/30 shrink-0">
                No Supermarket Storage
              </span>
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-maroon-deep leading-snug">
                Dough rolled &amp; crisp-fried only after your ping.
              </h3>
              <p className="font-sans text-xs text-ink-muted leading-relaxed mt-1.5">
                We do not maintain old stock. Dough is rolled, spiced, and fried only after your WhatsApp confirmation so you receive fresh, fragrant namkeen.
              </p>
            </div>
          </div>

          {/* Card 4: Made at home in Pune */}
          <div className="col-span-2 bg-cream p-4 rounded-3xl border-2 border-ink shadow-tactile-sm flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-sand border-2 border-ink flex items-center justify-center text-maroon shrink-0">
              <Home className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-sm text-maroon">
                Made at Home in Pune
              </h4>
              <p className="font-sans text-xs text-ink-muted">
                Authentic, spotless home kitchen in Pune using traditional care &amp; clean ingredients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
