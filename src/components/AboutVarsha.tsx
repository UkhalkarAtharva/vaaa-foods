"use client";

import React from "react";
import Image from "next/image";
import { founder } from "@/content/site";

export function AboutVarsha() {
  return (
    <section className="px-4 py-8 bg-cream flex flex-col items-center">
      <div className="w-full max-w-xl bg-[#FFFBF0] rounded-3xl border-2 border-ink shadow-tactile p-5 relative overflow-hidden">
        {/* Top Badges */}
        <div className="flex items-center justify-between mb-3">
          <span className="bg-turmeric text-ink font-extrabold text-[11px] uppercase tracking-wider px-3 py-1 rounded-xl border-2 border-ink shadow-tactile-sm -rotate-1 flex items-center gap-1">
            <span>✨</span> Newly launched
          </span>
          <span className="font-mono text-xs font-bold text-ink-muted">
            Pune Home Kitchen
          </span>
        </div>

        <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-turmeric shadow-tactile my-3 bg-cream relative">
          <Image
            src={founder.imagePath}
            alt={founder.imageAlt}
            fill
            sizes="112px"
            className="object-cover"
          />
        </div>

        {/* Quote */}
        <div className="relative mt-2">
          <span className="font-serif text-5xl text-turmeric/80 leading-none absolute -top-4 -left-1 select-none pointer-events-none">
            “
          </span>
          <p className="font-serif italic text-base text-maroon-deep pt-3 leading-relaxed relative z-10">
            {founder.quote}
          </p>
        </div>

        {/* Signature & Info */}
        <div className="mt-4 pt-3 border-t-2 border-dashed border-ink/15 flex items-center justify-between">
          <div>
            <p className="font-hand text-2xl font-bold text-maroon -rotate-2">
              {founder.name}
            </p>
            <p className="font-sans text-[11px] font-bold text-ink-muted uppercase tracking-wider">
              {founder.title} • {founder.location}
            </p>
          </div>
          <div className="w-11 h-11 rounded-full bg-turmeric border-2 border-ink flex items-center justify-center text-ink font-black shadow-tactile-sm">
            💛
          </div>
        </div>
      </div>
    </section>
  );
}
