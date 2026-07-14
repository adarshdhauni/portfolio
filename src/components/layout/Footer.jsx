import Container from "@/components/layout/Container";
import { ArrowUp } from "lucide-react";
import { useLocation } from "react-router-dom";

import { SITE_CONFIG } from "@/constants/siteConfig";
import { SOCIAL_LINKS } from "@/constants/sociallinks";

const iconButtonClass = `
  inline-flex
  size-11
  items-center
  justify-center
  rounded-full
  border
  border-border/50
  transition-all
  duration-150
  hover:-translate-y-1
  hover:border-primary/40
  hover:bg-primary/10
  hover:text-primary
  focus-visible:outline-none
  focus-visible:ring-3
  focus-visible:ring-ring/50
`;

const Footer = () => {
  const { pathname } = useLocation();
  const homeHref = pathname === "/" ? "#hero" : "/";

  return (
    <footer className="mt-24 border-t border-border/50">
      <Container>
        <div className="flex flex-col items-center gap-10 py-14">
          <div className="space-y-2 text-center">
            <p className="text-lg font-medium tracking-tight">
              Let's build something great together.
            </p>

            <p className="text-sm leading-6 text-muted-foreground">
              Feel free to reach out if you'd like to collaborate or just say
              hello.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className={iconButtonClass}
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>

          <div className="space-y-1.5 text-center text-sm leading-6 text-muted-foreground">
            <p>
              © {new Date().getFullYear()} {SITE_CONFIG.fullName}. All rights
              reserved.
            </p>

            <p>Designed and built with React, Vite, and Tailwind CSS.</p>
          </div>

          <a
            href={homeHref}
            aria-label="Back to top"
            className={iconButtonClass}
          >
            <ArrowUp className="size-4" />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
