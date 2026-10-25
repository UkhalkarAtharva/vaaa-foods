import React from "react";
import { brandPoints } from "@/content/site";
import { ScrollReveal } from "./ScrollReveal";

export function TrustStrip() {
  return (
    <section className="px-4 py-6 bg-cream flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
      {brandPoints.map((point, index) => {
        const bgClasses = point.highlight
          ? "bg-turmeric text-ink"
          : index === 2
          ? "bg-coriander-light text-coriander"
          : "bg-white text-ink";

        const rotationStyles = {
          transform: `rotate(${point.rotation}deg)`,
        };

        return (
          <ScrollReveal key={point.text} delay={index * 0.1}>
            <div
              style={rotationStyles}
              className={`${bgClasses} border-2 border-ink px-3.5 py-2 rounded-xl shadow-tactile flex items-center gap-2 transition-transform hover:scale-105`}
            >
              <span className="text-base select-none">{point.emoji}</span>
              <span className="font-sans text-xs font-extrabold uppercase tracking-tight">
                {point.text}
              </span>
            </div>
          </ScrollReveal>
        );
      })}
    </section>
  );
}
