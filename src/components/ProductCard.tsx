"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/content/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const rotation = index % 2 === 0 ? "-rotate-1" : "rotate-1";

  const badgeColors = {
    coriander: "bg-coriander text-white",
    turmeric: "bg-turmeric text-ink",
    maroon: "bg-maroon text-white",
  };

  const orderLink = buildWhatsAppLink({
    product: product.name,
    pack: product.packSizes[0]?.size,
    note: `Inquiry for ${product.name}`,
  });

  return (
    <article
      className={`snap-center shrink-0 w-[285px] sm:w-[310px] bg-[#FFFBF0] rounded-3xl border-2 border-ink shadow-tactile p-4 flex flex-col justify-between ${rotation} transition-all duration-300 hover:-translate-y-1 hover:shadow-tactile-lg`}
    >
      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between mb-2.5">
          <span
            className={`${badgeColors[product.badgeVariant]} text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border border-ink shadow-tactile-sm`}
          >
            {product.badge}
          </span>
          <span className="font-mono text-xs font-bold text-ink-muted">
            {product.serial}
          </span>
        </div>

        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative border-2 border-ink mb-3 bg-[#F8EFE0]">
          <Image
            src={product.imagePath}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 640px) 253px, 278px"
            className="object-cover"
          />

          <span className="absolute top-2 right-2 bg-turmeric text-ink font-hand font-bold text-xs px-2 py-0.5 rounded-md border border-ink shadow-tactile-sm">
            Small Batch
          </span>
        </div>

        {/* Product Details */}
        <h3 className="font-serif text-lg font-bold text-maroon leading-snug">
          {product.name}
        </h3>
        <p className="font-sans text-xs text-ink-muted mt-1 leading-relaxed">
          {product.description}
        </p>

        {/* Pricing & Pack sizes info */}
        <div className="mt-3 pt-2.5 border-t border-dashed border-ink/20 flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <span className="font-sans text-[11px] font-bold text-ink uppercase tracking-wider">
              Price:
            </span>
            <span className="font-sans text-xs font-extrabold text-maroon bg-sand px-2 py-0.5 rounded-full border border-ink/30">
              Ask on WhatsApp
            </span>
          </div>
          <p className="font-sans text-[11px] text-ink-muted">
            Pack sizes:{" "}
            {product.packSizes.map((p) => `${p.size} (${p.price})`).join(" • ")}
          </p>
        </div>
      </div>

      {/* WhatsApp CTA Button */}
      <a
        href={orderLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 w-full min-h-[44px] py-2.5 px-3 rounded-xl bg-whatsapp text-white font-sans text-xs font-bold flex items-center justify-center gap-1.5 border-2 border-ink shadow-tactile-sm active:translate-y-0.5 active:shadow-none hover:brightness-105 transition-all"
      >
        <MessageCircle className="w-4 h-4" />
        <span>Price &amp; Order on WhatsApp</span>
      </a>
    </article>
  );
}
