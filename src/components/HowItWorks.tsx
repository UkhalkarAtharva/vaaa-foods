"use client";

import React from "react";
import { orderSteps } from "@/content/site";
import { SectionHeading } from "./SectionHeading";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Send, CheckCheck } from "lucide-react";

export function HowItWorks() {
  const sampleOrderLink = buildWhatsAppLink({
    product: "Masala Puri",
    pack: "500g",
    note: "Please deliver to Pune",
  });

  const stepNumberStyles = {
    turmeric: "bg-turmeric text-ink",
    whatsapp: "bg-whatsapp text-white",
    sand: "bg-sand text-maroon",
  };

  return (
    <section className="px-4 py-8 bg-cream flex flex-col gap-5 max-w-xl mx-auto w-full">
      <SectionHeading
        badge="Simple &amp; Personal"
        badgeColor="coriander"
        title="How Ordering Works"
      />

      {/* 3 Steps */}
      <div className="grid grid-cols-1 gap-3">
        {orderSteps.map((step) => (
          <div
            key={step.number}
            className="bg-white p-3.5 rounded-2xl border-2 border-ink shadow-tactile-sm flex items-center gap-3"
          >
            <div
              className={`w-10 h-10 rounded-xl border-2 border-ink flex items-center justify-center font-serif font-black text-lg shrink-0 ${stepNumberStyles[step.variant]}`}
            >
              {step.number}
            </div>
            <div>
              <h4 className="font-sans font-bold text-sm text-maroon">
                {step.title}
              </h4>
              <p className="font-sans text-xs text-ink-muted">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mock WhatsApp Chat Bubble Preview */}
      <div className="bg-[#EFEAE2] p-4 rounded-3xl border-2 border-ink shadow-tactile relative mt-2">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-ink/15">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-whatsapp" />
            <span className="font-sans text-xs font-bold text-ink">
              WhatsApp Pre-filled Order Preview
            </span>
          </div>
          <span className="font-mono text-[10px] text-ink-muted">
            varsha@vaaafoods
          </span>
        </div>

        {/* WhatsApp Sent Message Bubble */}
        <div className="bg-[#D9FDD3] rounded-2xl rounded-tr-none p-3 border border-[#B2D8A7] shadow-sm ml-6 flex flex-col gap-1.5">
          <p className="font-sans text-xs text-[#111B21] leading-relaxed">
            &ldquo;Namaste Varsha ji! I&apos;d like to order{" "}
            <strong>500g Masala Puri</strong> to{" "}
            <strong>Pune</strong>. Please confirm pricing and delivery timing 🙏&rdquo;
          </p>
          <div className="flex items-center justify-end gap-1 text-[10px] text-[#667781]">
            <span>11:42 AM</span>
            <CheckCheck className="w-3.5 h-3.5 text-[#53BDEB]" />
          </div>
        </div>

        <a
          href={sampleOrderLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 w-full min-h-[44px] py-2.5 rounded-xl bg-whatsapp text-white font-sans text-xs font-bold flex items-center justify-center gap-2 border-2 border-ink shadow-tactile-sm active:translate-y-0.5 active:shadow-none hover:brightness-105 transition-all"
        >
          <Send className="w-4 h-4" />
          <span>Send This Order on WhatsApp Now</span>
        </a>
      </div>
    </section>
  );
}
