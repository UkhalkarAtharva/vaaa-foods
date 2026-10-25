import React from "react";
import Image from "next/image";
import { siteConfig } from "@/content/site";
import { Phone } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#FFF6E3]/95 backdrop-blur-md border-b-2 border-ink/15 shadow-[0_2px_12px_rgba(43,24,16,0.04)] pt-safe">
      <div className="max-w-4xl mx-auto h-16 px-4 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="relative w-10 h-10 shrink-0 rounded-full overflow-hidden border border-ink/30 bg-cream shadow-sm flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Vaaa Foods Brand Logo"
              width={40}
              height={40}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col truncate">
            <span className="font-serif font-bold text-lg text-maroon leading-tight tracking-tight">
              {siteConfig.name}
            </span>
            <span className="font-sans text-[11px] font-extrabold uppercase tracking-widest text-[#B45309]">
              Puris &amp; Namkeen
            </span>
          </div>
        </div>

        {/* Action Badges & Quick Call */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="hidden sm:inline-flex items-center gap-1.5 bg-coriander-light text-coriander border border-coriander/30 px-3 py-1 rounded-full text-xs font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-coriander animate-pulse" />
            Fresh Batches Daily
          </span>

          <a
            href={`tel:${siteConfig.phone}`}
            aria-label="Call Kitchen"
            className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-sand border-2 border-ink flex items-center justify-center text-maroon shadow-tactile-sm active:translate-y-0.5 active:shadow-none transition-all focus:outline-none focus:ring-2 focus:ring-maroon"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
