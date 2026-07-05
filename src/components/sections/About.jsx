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
              description="A little about who I am and how I approach software development."
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="space-y-6 text-base leading-8 text-muted-foreground"
          >
            <p>
              I enjoy building modern web applications with clean architecture,
              responsive interfaces, and a strong focus on performance. I like
              transforming ideas into polished products that are intuitive to
              use, scalable, and easy to maintain.
            </p>

            <p>
              Beyond building applications, I continuously refine my
              problem-solving skills through Data Structures & Algorithms and by
              developing real-world projects that challenge me to write better
              software. My goal is to create applications that are not only
              functional, but also fast, accessible, and thoughtfully designed.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
