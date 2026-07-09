import Container from "@/components/layout/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import SkillsGrid from "@/components/common/skills/SkillsGrid";

const Skills = () => {
  return (
    <Section id="skills">
      <Container>
        <div data-aos="fade-up">
          <SectionHeading
            eyebrow="Skills"
            title="Technologies & Tools"
            description="The technologies and tools I use to build modern full-stack web applications."
          />
        </div>

        <SkillsGrid />
      </Container>
    </Section>
  );
};

export default Skills;
