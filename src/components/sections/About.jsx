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
            className="space-y-7 text-[17px] leading-8 text-muted-foreground"
          >
            <p>
              I'm a{" "}
              <span className="font-medium text-foreground">
                frontend-focused full-stack developer
              </span>{" "}
              passionate about building modern web applications that combine{" "}
              <span className="font-medium text-foreground">
                clean architecture
              </span>
              , responsive design, and exceptional user experience.
            </p>

            <p>
              I enjoy turning ideas into polished products that are{" "}
              <span className="font-medium text-foreground">
                fast, accessible, and scalable
              </span>
              . Whether I'm designing reusable React components, optimizing
              performance, or refining small UI details, I believe great
              software comes from thoughtful engineering and continuous
              iteration.
            </p>

            <p>
              Outside of building projects, I continuously strengthen my
              problem-solving skills through Data Structures & Algorithms while
              exploring modern frontend practices. I'm always looking for
              opportunities to learn, improve, and create software that delivers
              real value to its users.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
