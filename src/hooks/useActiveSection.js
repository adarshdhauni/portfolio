import { useEffect, useState } from "react";

const OBSERVER_OPTIONS = {
  root: null,
  rootMargin: "-35% 0px -50% 0px",
  threshold: 0,
};

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, OBSERVER_OPTIONS);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return activeSection;
};

export default useActiveSection;
