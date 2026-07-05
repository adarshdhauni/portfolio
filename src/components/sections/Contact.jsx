import Container from "@/components/layout/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import { buttonVariants } from "@/components/ui/button";

import { SITE_CONFIG } from "@/constants/siteConfig";
import { CONTACT_LINKS } from "@/constants/contactLinks";

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Contact"
            title="Let's Build Something Great Together"
            description="I'm currently seeking opportunities where I can contribute, continue learning, and build modern web applications alongside talented teams."
            className="mb-10"
          />

          <div className="space-y-4 rounded-3xl border bg-card p-8">
            {CONTACT_LINKS.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  aria-label={`Open-${link.label}`}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    border
                    p-4
                    transition-colors
                    hover:bg-muted
                  "
                >
                  <div className="flex items-center gap-3">
                    <Icon className="size-5 text-primary" />
                    <span>{link.label}</span>
                  </div>

                  <span className="text-muted-foreground">
                    {link.description}
                  </span>
                </a>
              );
            })}
          </div>

          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className={buttonVariants({
              size: "lg",
              className: "mt-10",
            })}
          >
            Get In Touch
          </a>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
