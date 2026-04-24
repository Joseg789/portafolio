import { useState, useEffect } from "react";

export function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState<string>(
    sectionIds[0] ?? "",
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = []; //

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    // Cleanup all observers on unmount
    return () => observers.forEach((obs) => obs.disconnect());
  }, [sectionIds]);

  return activeSection;
}
