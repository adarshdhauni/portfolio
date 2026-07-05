import { useState } from "react";
import { Menu } from "lucide-react";

import Container from "./Container";
import ThemeToggle from "../common/ThemeToggle";
import { Button, buttonVariants } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ChevronRight, Menu } from "lucide-react";

import { SITE_CONFIG } from "@/constants/siteConfig";
import { NAV_LINKS } from "@/constants/navigation";
import useActiveSection from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const activeSection = useActiveSection();
  const [open, setOpen] = useState(false);

  const closeSheet = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4">
      <Container>
        <nav
          aria-label="Primary navigation"
          className="
            flex
            h-15
            md:h-17
            items-center
            justify-between
            rounded-2xl
            border
            border-border/30
            bg-background/80
            px-6
            shadow-[0_8px_30px_rgb(0_0_0/0.04)]
            backdrop-blur-xl
          "
        >
          <a
            href="#hero"
            className="
              text-xl
              font-bold
              tracking-[-0.03em]
              transition-colors
              duration-200
              hover:text-primary
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
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground",
                      isActive && "text-primary",
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-200",
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
                    variant="ghost"
                    size="icon"
                    aria-label="Open navigation menu"
                  />
                }
              >
                <Menu className="size-5" />
              </SheetTrigger>

              <SheetContent side="right" className="w-[360px] p-6 sm:max-w-sm">
                <div className="flex h-full flex-col">
                  <div className="border-b border-border/50 pb-6">
                    <a
                      href="#hero"
                      onClick={closeSheet}
                      className="text-2xl font-bold tracking-[-0.03em]"
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
                            href={link.href}
                            aria-current={isActive ? "page" : undefined}
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
                    duration-200
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
                                "size-4 transition-transform duration-200 group-hover:translate-x-1",
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
