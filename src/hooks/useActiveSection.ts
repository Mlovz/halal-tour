// src/hooks/useActiveSection.ts
import { useEffect, useState } from "react";

export type SectionId =
  | "hero"
  | "tours"
  | "stories"
  | "benefits"
  | "how-it-works"
  | "reviews"
  | "about"
  | "contacts";

export function useActiveSection(defaultId: SectionId = "hero") {
  const [activeId, setActiveId] = useState<SectionId>(defaultId);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section-id]")
    );

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Берём ту, у которой самая большая видимая часть
        const visible: any = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        const id = visible.target.dataset.sectionId as SectionId | undefined;
        if (id) setActiveId(id);
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: "-10% 0px -20% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  return activeId;
}
