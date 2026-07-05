import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import JourneyCard from "@/components/common/JourneyCard";
import Container from "@/components/layout/Container";

import { LEARNING } from "@/constants/learning";

const Education = () => {
  return (
    <Section id="education">
      <Container>
        <SectionHeading
          eyebrow="Education"
          title="Education & Learning"
          description="My academic background, development journey, and continuous commitment to learning."
        />

        <div className="space-y-6">
          {LEARNING.map((item) => (
            <JourneyCard key={item.title} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Education;
