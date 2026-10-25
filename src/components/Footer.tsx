import React from "react";
import Image from "next/image";
import { siteConfig, founder } from "@/content/site";
import { ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-maroon-deep text-cream px-4 pt-8 pb-28 sm:pb-12 flex flex-col items-center text-center gap-4">
      {/* Brand Logo & Name */}
      <div className="flex flex-col items-center gap-2">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-turmeric bg-cream shadow-md flex items-center justify-center p-0.5">
          <Image
            src="/images/logo.png"
            alt="Vaaa Foods Brand Logo"
            width={64}
            height={64}
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
          {siteConfig.name}
        </h3>
        <p className="font-sans text-xs text-cream/70 italic">
          {siteConfig.taglines.join(" • ")}
        </p>
        <p className="font-sans text-[11px] text-turmeric mt-1 font-semibold">
          {founder.name} • {siteConfig.phone} • {siteConfig.location}
        </p>
        <p className="font-sans text-[11px] text-cream/70 mt-0.5">
          Delivering across Pune (fresh on order)
        </p>
      </div>

      {/* FSSAI Registration Badge */}
      <div className="px-3 py-1 rounded-full bg-black/30 border border-white/20 text-[11px] font-mono text-turmeric flex items-center gap-1.5">
        <ShieldCheck className="w-4 h-4 text-turmeric" />
        <span>FSSAI Lic. No. {siteConfig.fssaiNumber}</span>
      </div>

      <div className="w-full max-w-xl h-px bg-white/15 my-1" />

      <p className="font-sans text-[11px] text-cream/60 max-w-sm">
        © {siteConfig.foundedYear} {siteConfig.name}. All rights reserved. Handcrafted freshly in Pune with motherly love.
      </p>
    </footer>
  );
}
