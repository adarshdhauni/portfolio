import React from "react";
import Container from "../layout/Container";
import Section from "../common/Section";
import { buttonVariants } from "../ui/button";
import profileImage from "@/assets/images/profile.webp";
import { SOCIAL_LINKS } from "@/constants/socialLinks";
import { SITE_CONFIG } from "@/constants/siteConfig";

const Hero = () => {
  return (
    <Section id="hero" className="py-0 flex min-h-svh items-center">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="order-2 max-w-2xl lg:order-1 lg:col-span-7">
            <p
              className="
                mb-3
                text-sm
                font-medium
                text-primary
                md:text-base
              "
            >
              Hi, I'm
            </p>

            <h1
              className="
                text-5xl
                font-bold
                tracking-tight
                md:text-6xl
                lg:text-7xl
              "
            >
              {SITE_CONFIG.name}.
            </h1>

            <h2
              className="
                mt-6
                max-w-xl
                text-xl
                font-medium
                leading-relaxed
                text-foreground
                md:text-2xl
              "
            >
              {SITE_CONFIG.headline}
            </h2>

            <p
              className="
                mt-6
                max-w-xl
                text-base
                leading-7
                text-muted-foreground
              "
            >
              I enjoy building fast, scalable and user-focused web applications
              with clean architecture, thoughtful UI, and great user
              experiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className={buttonVariants({ size: "lg" })}>
                View Projects
              </a>

              <a
                href="#contact"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Contact Me
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5">
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
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        transition-colors
        hover:bg-accent
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
                max-w-sm
                overflow-hidden
                rounded-3xl
                border
                bg-muted
                shadow-xl
              "
            >
              <img
                src={profileImage}
                alt="Adarsh Dhauni"
                width={600}
                height={800}
                loading="eager"
                decoding="async"
                className="h-full w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
