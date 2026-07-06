import Container from "@/components/layout/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import FeaturedProjectCard from "@/components/common/FeaturedProjectCard";

import { PROJECTS } from "@/constants/projects";

const Projects = () => {
  const featuredProject = PROJECTS.find((project) => project.featured);

  return (
    <Section id="projects">
      <Container>
        <div data-aos="fade-up">
          <SectionHeading
            eyebrow="Projects"
            title="Featured Project"
            description="A featured project that demonstrates my approach to designing, building, and deploying modern full-stack web applications with a strong focus on performance, scalability, and user experience."
          />
        </div>

        {featuredProject && (
          <div className="mt-14" data-aos="fade-up" data-aos-delay="150">
            <FeaturedProjectCard project={featuredProject} />
          </div>
        )}
      </Container>
    </Section>
  );
};

export default Projects;
