"use client";

import { useEffect, useState } from "react";
import { SLIDES } from "./content";

const NEXT_KEYS = ["ArrowRight", "ArrowDown", "PageDown", " "];
const PREV_KEYS = ["ArrowLeft", "ArrowUp", "PageUp"];

export default function DeckNav() {
  const [active, setActive] = useState(0);

  // Track which sheet is under the top bar.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = SLIDES.findIndex((s) => s.id === entry.target.id);
          if (index !== -1) setActive(index);
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    for (const s of SLIDES) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  // Arrow, page and space keys jump one sheet at a time.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const step = NEXT_KEYS.includes(e.key) ? 1 : PREV_KEYS.includes(e.key) ? -1 : 0;
      if (!step) return;
      e.preventDefault();
      const target = SLIDES[Math.min(SLIDES.length - 1, Math.max(0, active + step))];
      document.getElementById(target.id)?.scrollIntoView();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <nav className="bar__nav" aria-label="Sheets">
      {SLIDES.map((s, i) => (
        <a key={s.id} href={`#${s.id}`} aria-current={i === active ? "true" : undefined}>
          <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
          <span className="bar__label">{s.label}</span>
        </a>
      ))}
    </nav>
  );
}
