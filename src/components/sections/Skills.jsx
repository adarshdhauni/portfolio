import Container from "@/components/layout/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import SkillCard from "@/components/common/SkillCard";

import { SKILLS } from "@/constants/skills";

const Skills = () => {
  return (
    <Section id="skills">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Technologies & Tools"
          description="Technologies I use to design, build and deploy modern web applications."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {SKILLS.map((category) => (
            <SkillCard
              key={category.category}
              title={category.category}
              skills={category.skills}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Skills;
