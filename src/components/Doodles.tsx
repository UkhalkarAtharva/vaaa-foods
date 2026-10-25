import React from "react";

export function SesameSeed({ className = "" }: { className?: string }) {
  return (
    <svg
      fill="#7A1020"
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C6.5 2 2 6.5 2 12c0 4.5 3 8.3 7.1 9.5-.1-.7-.1-1.5 0-2.2C6 18.2 4 15.4 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8c0 3.3-2 6.1-5 7.2.1.7.1 1.5 0 2.2 4.1-1.2 7-5 7-9.4 0-5.5-4.5-10-10-10z" />
    </svg>
  );
}

export function CurryLeaf({ className = "" }: { className?: string }) {
  return (
    <svg
      fill="#3E7B3F"
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.75V8c3.35 0 6.65 0 8 0z" />
    </svg>
  );
}

export function CrumbCluster({ className = "" }: { className?: string }) {
  return (
    <svg
      fill="#F4B72E"
      viewBox="0 0 20 20"
      className={className}
      aria-hidden="true"
    >
      <circle cx="4" cy="4" r="2.5" />
      <circle cx="14" cy="7" r="1.8" />
      <circle cx="9" cy="15" r="2.2" />
    </svg>
  );
}
