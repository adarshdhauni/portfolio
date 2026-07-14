import { useState } from "react";
import { useLocation } from "react-router-dom";

import Container from "./Container";
import ThemeToggle from "../common/ThemeToggle";
import { Button, buttonVariants } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ChevronRight, Menu } from "lucide-react";

import { SITE_CONFIG } from "@/constants/siteConfig";
import { NAV_LINKS } from "@/constants/navigation";
import useActiveSection from "@/hooks/useActiveSection";
import useScrolled from "@/hooks/useScroll";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const activeSection = useActiveSection();
  const scrolled = useScrolled();
  const { pathname } = useLocation();

  const [open, setOpen] = useState(false);

  const closeSheet = () => setOpen(false);
  const getSectionHref = (href) => (pathname === "/" ? href : `/${href}`);
  const homeHref = pathname === "/" ? "#hero" : "/";

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 md:pt-4">
      <Container>
        <nav
          aria-label="Primary navigation"
          className={cn(
            "flex h-15 md:h-17 items-center justify-between rounded-2xl border px-6 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-150",
            scrolled
              ? "border-border/60 bg-background/90 shadow-[0_12px_40px_rgb(0_0_0/0.08)]"
              : "border-border/30 bg-background/70 shadow-none",
          )}
        >
          <a
            href={homeHref}
            className="
              text-xl
              font-bold
              tracking-[-0.03em]
              transition-colors
              duration-150
              hover:text-primary
              hover:opacity-90
              focus-visible:outline-none
              focus-visible:ring-3
              focus-visible:ring-ring/50
            "
          >
            {SITE_CONFIG.name}
            <span className="text-primary">.</span>
          </a>

          <ul className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <li key={link.id}>
                  <a
                    href={getSectionHref(link.href)}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "relative text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                      isActive && "text-primary",
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full origin-left scale-x-0 bg-primary transition-transform duration-150",
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
              href={SITE_CONFIG.resume}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download resume"
              className={buttonVariants({ className: "px-5" })}
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
                    variant="ghost"
                    size="icon"
                    aria-label="Open navigation menu"
                  />
                }
              >
                <Menu className="size-5" />
              </SheetTrigger>

              <SheetContent side="right" className="w-full max-w-sm p-6">
                <SheetTitle className="sr-only">Mobile navigation</SheetTitle>
                <SheetDescription className="sr-only">
                  Navigate to a portfolio section or download the resume.
                </SheetDescription>
                <div className="flex h-full flex-col overflow-y-auto">
                  <div className="border-b border-border/50 pb-6">
                    <a
                      href={homeHref}
                      onClick={closeSheet}
                      className="text-2xl font-bold tracking-[-0.03em] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                    >
                      {SITE_CONFIG.name}
                      <span className="text-primary">.</span>
                    </a>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {SITE_CONFIG.role}
                    </p>
                  </div>

                  <div className="mt-8">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      Navigation
                    </p>

                    <nav className="space-y-2">
                      {NAV_LINKS.map((link) => {
                        const isActive = activeSection === link.id;

                        return (
                          <a
                            key={link.id}
                            href={getSectionHref(link.href)}
                            aria-current={isActive ? "location" : undefined}
                            onClick={closeSheet}
                            className={cn(
                              `
                    group
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    border-transparent
                    px-4
                    py-3.5
                    transition-all
                    duration-150
                    focus-visible:outline-none
                    focus-visible:ring-3
                    focus-visible:ring-ring/50
                    `,
                              isActive
                                ? "border-primary/20 bg-primary/10 text-primary"
                                : "hover:border-border hover:bg-muted/60",
                            )}
                          >
                            <span className="text-base font-medium">
                              {link.label}
                            </span>

                            <ChevronRight
                              className={cn(
                                "size-4 transition-transform duration-150 group-hover:translate-x-1",
                                isActive
                                  ? "text-primary"
                                  : "text-muted-foreground",
                              )}
                            />
                          </a>
                        );
                      })}
                    </nav>
                  </div>

                  <div className="mt-auto border-t border-border/50 pt-6">
                    <a
                      href={SITE_CONFIG.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Download resume"
                      onClick={closeSheet}
                      className={buttonVariants({
                        className: "w-full",
                      })}
                    >
                      Resume
                    </a>

                    <p className="mt-3 text-center text-xs leading-5 text-muted-foreground">
                      PDF • Opens in a new tab
                    </p>

                    <p className="mt-6 text-center text-sm text-muted-foreground">
                      Open to remote opportunities.
                    </p>
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
