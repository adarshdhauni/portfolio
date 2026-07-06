import Container from "../layout/Container";
import { buttonVariants } from "../ui/button";

import profileImage from "@/assets/images/profile.webp";

import { SOCIAL_LINKS } from "@/constants/sociallinks";
import { SITE_CONFIG } from "@/constants/siteConfig";

const socialButtonClass = `
  inline-flex
  size-11
  items-center
  justify-center
  rounded-full
  border
  border-border/50
  transition-all
  duration-200
  hover:-translate-y-1
  hover:border-primary/40
  hover:bg-primary/10
  hover:text-primary
`;

const Hero = () => {
  return (
    <section
      id="hero"
      className="
        flex
        min-h-[calc(100svh-var(--header-offset))]
        items-start
        pt-10
        lg:items-center
        lg:pt-0
      "
    >
      <Container>
        <div
          className="
            grid
            items-center
            gap-10
            lg:grid-cols-12
            lg:gap-20
          "
        >
          <div className="order-2 max-w-2xl lg:order-1 lg:col-span-7">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Hi, I'm
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl">
              {SITE_CONFIG.name}
              <span className="text-primary">.</span>
            </h1>

            <h2 className="mt-6 max-w-xl text-xl font-medium leading-relaxed text-balance md:text-2xl">
              {SITE_CONFIG.headline}
            </h2>

            <p className="mt-7 max-w-xl text-[17px] leading-8 text-muted-foreground text-pretty">
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
                    className={socialButtonClass}
                  >
                    <Icon className="size-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:col-span-5">
            <div className="relative">
              <div
                aria-hidden="true"
                className="
        absolute
        inset-0
        -z-10
        scale-110
        rounded-full
        bg-primary/8
        blur-3xl
      "
              />

              <div
                className="
        overflow-hidden
        rounded-[2rem]
        border
        border-border/50
        bg-card
        p-2
        shadow-[0_12px_40px_rgba(0,0,0,0.08)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)]
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
          block
          h-full
          w-full
          max-w-72
          rounded-[1.5rem]
          object-cover
          transition-transform
          duration-500
          hover:scale-[1.015]
          sm:max-w-xs
          md:max-w-sm
        "
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
