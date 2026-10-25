import React from "react";

interface SectionHeadingProps {
  badge?: string;
  badgeColor?: "maroon" | "coriander" | "turmeric";
  title: string;
  subtitle?: string;
  handwrittenNote?: string;
  centered?: boolean;
}

export function SectionHeading({
  badge,
  badgeColor = "maroon",
  title,
  subtitle,
  handwrittenNote,
  centered = true,
}: SectionHeadingProps) {
  const badgeClasses = {
    maroon: "text-maroon",
    coriander: "text-coriander",
    turmeric: "text-turmeric",
  };

  return (
    <div className={`flex flex-col ${centered ? "items-center text-center" : "items-start text-left"}`}>
      {badge && (
        <span
          className={`font-mono text-xs font-bold uppercase tracking-widest ${badgeClasses[badgeColor]}`}
        >
          {badge}
        </span>
      )}
      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-maroon mt-1 leading-snug">
        {title}
      </h2>
      {subtitle && (
        <p className="font-sans text-xs sm:text-sm text-ink-muted mt-1 max-w-md">
          {subtitle}
        </p>
      )}
      {handwrittenNote && (
        <p className="font-hand text-xl text-maroon font-bold mt-1 -rotate-1">
          {handwrittenNote}
        </p>
      )}
      {centered && (
        <div className="w-12 h-1 bg-turmeric rounded-full mt-2.5 border border-ink" />
      )}
    </div>
  );
}
