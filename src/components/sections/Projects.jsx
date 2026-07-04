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
        <SectionHeading
          eyebrow="Projects"
          title="Featured Project"
          description="A selection of projects that showcase my approach to building modern, scalable, and user-focused web applications."
        />

        {featuredProject && <FeaturedProjectCard project={featuredProject} />}
      </Container>
    </Section>
  );
};

export default Projects;
