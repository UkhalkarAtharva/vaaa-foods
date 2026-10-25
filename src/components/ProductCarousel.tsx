"use client";

import React from "react";
import { products } from "@/content/site";
import { ProductCard } from "./ProductCard";

export function ProductCarousel() {
  return (
    <section className="py-7 bg-sand border-y-2 border-ink flex flex-col gap-4">
      <div className="max-w-4xl mx-auto w-full px-4 flex items-end justify-between">
        <div>
          <span className="font-mono text-[11px] font-bold text-maroon tracking-widest uppercase">
            The Menu
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-maroon-deep">
            Our Handcrafted Puris
          </h2>
        </div>
        <span className="font-hand text-lg text-maroon font-bold">
          Swipe 👉
        </span>
      </div>

      {/* Swipeable Container with Snap on mobile, horizontal center on desktop */}
      <div className="max-w-5xl mx-auto w-full overflow-x-auto snap-x flex gap-4 px-4 pb-4 no-scrollbar">
        {products.map((product, idx) => (
          <ProductCard key={product.id} product={product} index={idx} />
        ))}
      </div>
    </section>
  );
}
