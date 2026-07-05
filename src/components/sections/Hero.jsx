import React from "react";
import Container from "../layout/Container";
import { buttonVariants } from "../ui/button";
import profileImage from "@/assets/images/profile.webp";
import { SOCIAL_LINKS } from "@/constants/sociallinks";
import { SITE_CONFIG } from "@/constants/siteConfig";

const Hero = () => {
  return (
    <section
      id="hero"
      className="
    flex
    min-h-[calc(100svh-var(--header-offset))]
    items-start
    pt-8
    lg:pt-0
    lg:items-center
  "
    >
      <Container>
        <div
          className="
        grid
        items-center
        gap-8
        lg:grid-cols-12
        lg:gap-16
      "
        >
          <div className="order-2 max-w-2xl lg:order-1 lg:col-span-7">
            <p className="mb-3 text-sm font-medium text-primary md:text-base">
              Hi, I'm
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              {SITE_CONFIG.name}
              <span className="text-primary">.</span>
            </h1>

            <h2 className="mt-6 max-w-xl text-xl font-medium leading-relaxed md:text-2xl">
              {SITE_CONFIG.headline}
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-muted-foreground">
              {SITE_CONFIG.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className={buttonVariants({ size: "lg" })}>
                View Projects
              </a>

              <a
                href="#contact"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                })}
              >
                Contact Me
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4">
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
                  size-11
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
                    <Icon className="size-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:col-span-5">
            <div
              className="
            w-full
            max-w-70
            overflow-hidden
            rounded-3xl
            border
            bg-muted
            shadow-xl
            sm:max-w-xs
            md:max-w-sm
          "
            >
              <img
                src={profileImage}
                alt={SITE_CONFIG.fullName}
                width={600}
                height={800}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              hover:scale-105
            "
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
