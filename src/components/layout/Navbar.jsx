import React, { useState } from "react";
import Container from "./Container";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { NAV_LINKS } from "@/constants/navigation";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button, buttonVariants } from "../ui/button";
import ThemeToggle from "../common/ThemeToggle";
import useActiveSection from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const activeSection = useActiveSection();

  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4">
      <Container>
        <nav
          aria-label="Primary navigation"
          className="
            flex
            h-14
            md:h-16
            items-center
            justify-between
            rounded-2xl
            border
            border-border/50
            bg-background/90
            px-6
            shadow-sm
            backdrop-blur-xl
          "
        >
          <a
            href="#hero"
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
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <li key={link.id}>
                  <a
                    aria-current={isActive ? "page" : undefined}
                    href={link.href}
                    className={cn(
                      "relative text-sm font-medium transition-colors duration-300 hover:text-foreground",
                      isActive ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-primary transition-transform duration-300",
                        isActive && "scale-x-100",
                      )}
                    />
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle />

            <a
              aria-label="Download resume"
              href={SITE_CONFIG.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants()}
            >
              Resume
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                render={
                  <Button
                    aria-label="Open navigation menu"
                    variant="ghost"
                    size="icon"
                  />
                }
              >
                <Menu className="size-5" />
              </SheetTrigger>

              <SheetContent side="right" className="w-[320px] p-6 sm:w-95">
                <div className="flex h-full flex-col">
                  <div className="border-b pb-6">
                    <a
                      href="#hero"
                      onClick={() => setOpen(false)}
                      className="text-2xl font-bold tracking-tight"
                    >
                      {SITE_CONFIG.name}
                      <span className="text-primary">.</span>
                    </a>

                    <p className="mt-2 text-sm text-muted-foreground">
                      {SITE_CONFIG.role}
                    </p>
                  </div>
                  <nav className="mt-8 flex flex-col gap-1">
                    {NAV_LINKS.map((link) => {
                      const isActive = activeSection === link.id;

                      return (
                        <a
                          key={link.id}
                          aria-current={isActive ? "page" : undefined}
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "rounded-xl px-4 py-3 text-lg font-medium transition-all duration-300",
                            isActive
                              ? "bg-primary/10 text-primary"
                              : "hover:bg-muted",
                          )}
                        >
                          {link.label}
                        </a>
                      );
                    })}
                  </nav>

                  <div className="mt-auto border-t pt-6">
                    <a
                      aria-label="Download resume"
                      href={SITE_CONFIG.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className={buttonVariants({
                        className: "mt-4 w-full",
                      })}
                    >
                      Resume
                    </a>
                  </div>
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
