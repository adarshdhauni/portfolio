import Container from "@/components/layout/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

const About = () => {
  return (
    <Section id="about">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div data-aos="fade-up">
            <SectionHeading
              eyebrow="About"
              title="About Me"
              description="A little about my journey into software development and the way I approach building applications."
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="space-y-7 text-[17px] leading-8 text-muted-foreground"
          >
            <p>
              I didn't start my journey in computer science. While pursuing a{" "}
              <span className="font-medium text-foreground">BBA</span>, I was
              trying to figure out what I wanted to do and ended up discovering
              software development almost by accident. I started building small
              projects out of curiosity, and somewhere along the way it became
              something I genuinely enjoyed.
            </p>

            <p>
              Today, I'm a{" "}
              <span className="font-medium text-foreground">
                self-taught full-stack developer
              </span>{" "}
              who enjoys building web applications from the database to the
              frontend. I like working across the stack, whether it's designing
              APIs, building React interfaces, debugging problems, or improving
              the way an application is structured. Every project teaches me
              something new, and that's what keeps me coming back.
            </p>

            <p>
              Outside of building projects, I spend time solving{" "}
              <span className="font-medium text-foreground">
                Data Structures & Algorithms
              </span>{" "}
              problems and learning more about backend architecture and system
              design. My goal is simple: keep improving, build software I'm
              proud of, and become a better engineer with every project.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
