"use client";

import { useState } from "react";

const filters = [
  "All Members",
  "Investment Pod",
  "Advisory Group",
  "Partnerships",
  "Operations",
];

export default function MemberFilters() {
  const [active, setActive] = useState(filters[0]);

  return (
    <div className="flex flex-wrap gap-3 reveal-on-scroll">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setActive(f)}
          className={`px-6 py-2 rounded-full font-label-lg transition-all ${
            active === f
              ? "bg-forest-brand text-white shadow-sm"
              : "bg-surface-container-high text-on-surface-variant hover:bg-forest-brand/10 hover:text-forest-brand"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
