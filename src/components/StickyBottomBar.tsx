"use client";

import React, { useEffect, useState } from "react";
import { siteConfig } from "@/content/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle, Phone } from "lucide-react";

export function StickyBottomBar() {
  const [visible, setVisible] = useState(false);
  const orderLink = buildWhatsAppLink({ note: "Order via Sticky Bar" });

  useEffect(() => {
    const handleScroll = () => {
      // Show once user scrolls past 300px
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Quick Actions"
      className={`fixed bottom-0 left-0 w-full z-50 pb-safe bg-cream/95 backdrop-blur-md border-t-2 border-ink shadow-[0_-4px_16px_rgba(43,24,16,0.08)] sm:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center gap-2.5 px-3 py-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${siteConfig.phone}`}
          aria-label="Call Kitchen"
          className="h-12 w-12 shrink-0 flex items-center justify-center rounded-2xl bg-sand text-maroon border-2 border-ink shadow-tactile-sm active:translate-y-0.5 active:shadow-none transition-all focus:outline-none"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Large WhatsApp CTA Button (min 48px height) */}
        <a
          href={orderLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-12 min-h-[48px] flex items-center justify-center gap-2 rounded-2xl bg-whatsapp text-white font-sans font-black text-sm tracking-wide border-2 border-ink shadow-tactile active:translate-y-0.5 active:shadow-tactile-pressed transition-all"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Order on WhatsApp</span>
        </a>
      </div>
    </nav>
  );
}
