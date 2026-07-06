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
              searching for a direction and discovered software development
              almost by chance. What initially felt like learning an entirely
              new language gradually turned into something I genuinely enjoyed.
              The more I built, the more curious I became, and that curiosity
              eventually grew into a passion for creating software.
            </p>

            <p>
              Today, I'm a{" "}
              <span className="font-medium text-foreground">
                self-taught full-stack developer
              </span>{" "}
              who enjoys building complete web applications from frontend
              interfaces to backend systems. I care about writing clean,
              maintainable code and creating software that is fast, accessible,
              and enjoyable to use. Whether I'm designing polished user
              interfaces, integrating APIs, structuring application
              architecture, debugging complex issues, or learning a new
              technology, I genuinely enjoy every part of the development
              process.
            </p>

            <p>
              Beyond building projects, I continuously improve my
              problem-solving skills through{" "}
              <span className="font-medium text-foreground">
                Data Structures & Algorithms
              </span>{" "}
              while exploring modern technologies and development practices. My
              goal is to keep learning, keep improving, and build software that
              delivers meaningful value while growing into an engineer capable
              of taking products from idea to production.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
