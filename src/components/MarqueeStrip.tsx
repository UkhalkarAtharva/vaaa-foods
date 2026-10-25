import React from "react";
import { marqueeItems } from "@/content/site";

export function MarqueeStrip() {
  return (
    <div className="w-full bg-sand border-y-2 border-ink py-2.5 overflow-hidden flex whitespace-nowrap select-none">
      <div className="inline-flex gap-4 animate-[marquee_16s_linear_infinite] font-serif font-bold text-sm sm:text-base text-maroon items-center uppercase tracking-wider">
        {marqueeItems.map((item, idx) => (
          <React.Fragment key={`marquee-1-${idx}`}>
            <span className={idx % 2 === 1 ? "italic font-normal" : ""}>
              {item}
            </span>
            <span className="text-turmeric text-lg sm:text-xl" aria-hidden="true">
              •
            </span>
          </React.Fragment>
        ))}
        {/* Duplicated for seamless marquee loop */}
        {marqueeItems.map((item, idx) => (
          <React.Fragment key={`marquee-2-${idx}`}>
            <span className={idx % 2 === 1 ? "italic font-normal" : ""}>
              {item}
            </span>
            <span className="text-turmeric text-lg sm:text-xl" aria-hidden="true">
              •
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
