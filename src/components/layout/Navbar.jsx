import React from "react";
import Container from "./Container";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { NAV_LINKS } from "@/constants/navigation";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import ThemeToggle from "../common/ThemeToggle";

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-100">
      <Container>
        <nav
          aria-label="Primary navigation"
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
    font-semibold
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

          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            <Button size="sm">Resume</Button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right">
                <div className="mt-10 flex flex-col gap-6">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium"
                    >
                      {link.label}
                    </a>
                  ))}

                  <Button className="mt-4 w-full">Resume</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
