import React from "react";

export function RotatingBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-24 h-24 pointer-events-none select-none ${className}`}
    >
      <div className="relative w-full h-full animate-[spin-slow_18s_linear_infinite]">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <path
              d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              fill="none"
              id="circlePath"
            />
          </defs>
          <circle
            cx="50"
            cy="50"
            fill="#F4E2BE"
            r="46"
            stroke="#2B1810"
            strokeWidth="2.5"
          />
          <text
            fill="#7A1020"
            fontFamily="var(--font-jakarta), sans-serif"
            fontSize="7.5"
            fontWeight="800"
            letterSpacing="1.2"
          >
            <textPath href="#circlePath" startOffset="0%">
              • HOMEMADE • CRISPY • FRESH • MADE WITH LOVE
            </textPath>
          </text>
        </svg>
        <div className="absolute inset-0 m-auto w-7 h-7 rounded-full bg-turmeric flex items-center justify-center border-2 border-ink text-maroon font-bold text-xs">
          🌿
        </div>
      </div>
    </div>
  );
}
