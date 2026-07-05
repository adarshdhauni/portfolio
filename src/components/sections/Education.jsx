import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import JourneyCard from "@/components/common/JourneyCard";
import Container from "@/components/layout/Container";

import { LEARNING } from "@/constants/learning";

const STAGGER_DELAY = 120;

const Education = () => {
  return (
    <Section id="education">
      <Container>
        <div data-aos="fade-up">
          <SectionHeading
            eyebrow="Education"
            title="Education & Learning"
            description="My academic background, development journey, and continuous commitment to learning."
          />
        </div>

        <div className="space-y-6">
          {LEARNING.map((item, index) => (
            <div key={item.title} data-aos="fade-up" data-aos-delay={index * 120}>
              <JourneyCard item={item} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Education;
