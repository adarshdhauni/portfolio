import Container from "@/components/layout/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import { buttonVariants } from "@/components/ui/button";

import { SITE_CONFIG } from "@/constants/siteConfig";
import { CONTACT_LINKS } from "@/constants/contactLinks";

const STAGGER_DELAY = 80;

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div data-aos="fade-up">
            <SectionHeading
              eyebrow="Contact"
              title="Let's Build Something Great Together"
              description="I'm currently seeking opportunities where I can contribute, continue learning, and build modern web applications alongside talented teams."
              className="mb-10 text-center"
            />
          </div>

          <div className="rounded-3xl border bg-card p-5 sm:p-6 lg:p-8">
            <div className="space-y-4">
              {CONTACT_LINKS.map((link, index) => {
                const Icon = link.icon;

                return (
                  <div
                    key={link.label}
                    data-aos="fade-up"
                    data-aos-delay={index * 80}
                  >
                    <a
                      href={link.href}
                      aria-label={`Open ${link.label}`}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="
                        flex
                        items-start
                        gap-4
                        rounded-2xl
                        border
                        p-4
                        transition-all
                        duration-300
                        hover:border-primary/30
                        hover:bg-muted
                      "
                    >
                      <div
                        className="
                          flex
                          size-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-primary/10
                          text-primary
                        "
                      >
                        <Icon className="size-5" />
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-medium">{link.label}</h3>

                        <p className="mt-1 break-all text-sm text-muted-foreground">
                          {link.description}
                        </p>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="350">
            <div className="mt-10 flex justify-center">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className={buttonVariants({
                  size: "lg",
                })}
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
