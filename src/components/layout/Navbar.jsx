import React from "react";
import Container from "./Container";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { NAV_LINKS } from "@/constants/navigation";
import { Button } from "@base-ui/react";

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-100">
      <Container>
        <nav
          className="
            mt-4
            flex
            h-16
            items-center
            justify-between
            rounded-2xl
            border
            bg-background/80
            px-6
            backdrop-blur-xl
          "
        >
          <a
            href="#"
            className="
    text-xl
    font-bold
    tracking-tight
    transition-colors
    hover:text-primary
  "
          >
            {SITE_CONFIG.name}
            <span className="text-primary">.</span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="
          relative
          text-sm
          font-medium
          text-muted-foreground
          transition-colors
          duration-300
          hover:text-foreground
        "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button size="sm">Resume</Button>
            <Button variant="ghost" size="icon">
              🌙
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
