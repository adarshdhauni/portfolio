import Container from "@/components/layout/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import SkillCard from "@/components/common/SkillCard";

import { SKILLS } from "@/constants/skills";

const Skills = () => {
  return (
    <Section id="skills">
      <Container>
        <div data-aos="fade-up">
          <SectionHeading
            eyebrow="Skills"
            title="Technologies & Tools"
            description="The technologies, frameworks, and tools I use to design, build, and deploy modern full-stack web applications."
          />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {SKILLS.map((category, index) => (
            <div
              key={category.category}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="h-full"
            >
              <SkillCard title={category.category} skills={category.skills} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Skills;
