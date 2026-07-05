import Container from "@/components/layout/Container";
import { ArrowUp } from "lucide-react";

import { SITE_CONFIG } from "@/constants/siteConfig";
import { SOCIAL_LINKS } from "@/constants/sociallinks";

const Footer = () => {
  return (
    <footer className="mt-24 border-t">
      <Container>
        <div className="flex flex-col items-center gap-8 py-10">
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
                  className="
                    inline-flex
                    size-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-primary/40
                    hover:bg-primary/10
                    hover:text-primary
                  "
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>

          <div className="space-y-2 text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} {SITE_CONFIG.fullName}. All rights
              reserved.
            </p>

            <p>Designed & Built with React, Vite & Tailwind CSS.</p>
          </div>

          <a
            href="#hero"
            aria-label="Back to top"
            className="
              inline-flex
              size-10
              items-center
              justify-center
              rounded-full
              border
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-primary/40
              hover:bg-primary/10
              hover:text-primary
            "
          >
            <ArrowUp className="size-4" />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
