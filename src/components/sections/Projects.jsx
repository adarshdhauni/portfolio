import { ArrowUpRight, CircleCheck, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

import Container from "@/components/layout/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import { buttonVariants } from "@/components/ui/button";
import { PROJECTS } from "@/constants/projects";

const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};

const ProjectActions = ({ project, compact = false }) => {
  const { github, live, title } = project;

  if (compact) {
    return (
      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium">
        <a
          href={live}
          {...externalLinkProps}
          className="group/link inline-flex items-center gap-1.5 text-foreground transition-colors duration-150 hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          aria-label={`View ${title} live demo`}
        >
          Live demo
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 transition-transform duration-150 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 motion-reduce:transition-none"
          />
        </a>

        <a
          href={github}
          {...externalLinkProps}
          className="group/link inline-flex items-center gap-1.5 text-muted-foreground transition-colors duration-150 hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          aria-label={`View ${title} source code on GitHub`}
        >
          Source code
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 transition-transform duration-150 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 motion-reduce:transition-none"
          />
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={live}
        {...externalLinkProps}
        className={buttonVariants({
          size: "lg",
          className: "h-11 px-4 sm:px-5",
        })}
        aria-label={`View ${title} live demo`}
      >
        <ExternalLink aria-hidden="true" className="size-4" />
        Live demo
      </a>

      <a
        href={github}
        {...externalLinkProps}
        className={buttonVariants({
          variant: "outline",
          size: "lg",
          className: "h-11 px-4 sm:px-5",
        })}
        aria-label={`View ${title} source code on GitHub`}
      >
        <SiGithub aria-hidden="true" className="size-4" />
        Source code
      </a>
    </div>
  );
};

const ProjectPreview = ({ project, sizes, className = "" }) => {
  const { image600, image900, image1200, live, title } = project;

  return (
    <a
      href={live}
      {...externalLinkProps}
      aria-label={`View ${title} live demo`}
      className={`group block overflow-hidden rounded-[1.75rem] bg-muted ring-1 ring-border/50 transition-shadow duration-300 shadow-sm hover:shadow-[0_18px_50px_rgb(0_0_0/0.08)] hover:ring-primary/20 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 motion-reduce:transition-none ${className}`}
    >
      <img
        src={image1200}
        srcSet={`${image600} 600w, ${image900} 900w, ${image1200} 1200w`}
        sizes={sizes}
        alt={`${title} storefront homepage`}
        width={1200}
        height={771}
        loading="lazy"
        decoding="async"
        className="aspect-1200/771 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.015] motion-reduce:transform-none motion-reduce:transition-none"
      />
    </a>
  );
};

const ProjectHighlights = ({ highlights }) => (
  <div className="border-t border-border/60 pt-7 sm:pt-8">
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
      Engineering focus
    </p>
    <h4 className="mt-3 text-xl font-semibold tracking-tight">
      Built for the details that matter.
    </h4>

    <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
      {highlights.map((highlight) => (
        <li key={highlight} className="flex items-start gap-3">
          <CircleCheck
            aria-hidden="true"
            className="mt-0.5 size-4.5 shrink-0 text-primary"
          />
          <span className="text-sm leading-6 text-muted-foreground">
            {highlight}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const ProjectTechnologies = ({ technologies }) => (
  <section
    aria-labelledby="project-stack-heading"
    className="mt-14 grid gap-6 border-t border-border/60 pt-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-10 lg:mt-16 lg:pt-10"
  >
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        Technical foundation
      </p>
      <h4
        id="project-stack-heading"
        className="mt-3 text-xl font-semibold tracking-tight"
      >
        A stack chosen for long-term velocity.
      </h4>
    </div>

    <ul
      className="flex flex-wrap content-start gap-2.5"
      aria-label="Technologies used"
    >
      {technologies.map((technology) => (
        <li
          key={technology}
          className="rounded-full bg-muted px-3.5 py-2 text-sm font-medium text-muted-foreground"
        >
          {technology}
        </li>
      ))}
    </ul>
  </section>
);

const FeaturedProject = ({ project }) => {
  const { description, highlights, title } = project;
  const headingId = `project-${project.id}-title`;

  return (
    <article aria-labelledby={headingId}>
      <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
        <header className="min-w-0 lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Featured build <span aria-hidden="true">/</span> 01
          </p>

          <h3
            id={headingId}
            className="mt-4 max-w-xl text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.35rem] lg:leading-[1.05]"
          >
            {title}
          </h3>

          <p className="mt-6 max-w-xl text-[17px] leading-8 text-muted-foreground text-pretty">
            {description}
          </p>
        </header>

        <ProjectPreview
          project={project}
          sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(100vw - 3rem), (max-width: 1279px) calc((100vw - 4rem) * 0.58), 710px"
          className="lg:col-span-7 lg:row-span-2 lg:self-start"
        />

        <div className="space-y-9 lg:col-span-5 lg:self-end">
          <ProjectActions project={project} />
          <ProjectHighlights highlights={highlights} />
        </div>
      </div>

      <ProjectTechnologies technologies={project.technologies} />
    </article>
  );
};

const SupportingProjects = ({ projects }) => {
  if (!projects.length) return null;

  return (
    <section
      aria-labelledby="more-projects-heading"
      className="mt-20 border-t border-border/60 pt-10 sm:mt-24 sm:pt-12"
    >
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          More selected work
        </p>
        <h3
          id="more-projects-heading"
          className="mt-3 text-2xl font-semibold tracking-tight"
        >
          More products, built with the same care.
        </h3>
      </div>

      <div className="mt-8 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:mt-10">
        {projects.map((project) => (
          <article key={project.id}>
            <ProjectPreview
              project={project}
              sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) calc(100vw - 3rem), (max-width: 1279px) calc((100vw - 5rem) / 2), 580px"
              className="rounded-2xl"
            />

            <h4 className="mt-5 text-xl font-semibold tracking-tight">
              {project.title}
            </h4>
            <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
              {project.description}
            </p>
            <ProjectActions project={project} compact />
          </article>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  const [featuredProject, ...additionalFeaturedProjects] = PROJECTS.filter(
    (project) => project.featured,
  );
  const supportingProjects = [
    ...additionalFeaturedProjects,
    ...PROJECTS.filter((project) => !project.featured),
  ];

  if (!featuredProject) return null;

  return (
    <Section id="projects">
      <Container>
        <div data-aos="fade-up">
          <SectionHeading
            eyebrow="Projects"
            title="Selected Work"
            description="Production-minded applications shaped around clear user journeys, resilient foundations, and a considered interface."
          />
        </div>

        <div className="mt-14 lg:mt-16" data-aos="fade-up" data-aos-delay="100">
          <FeaturedProject project={featuredProject} />
          <SupportingProjects projects={supportingProjects} />
        </div>
      </Container>
    </Section>
  );
};

export default Projects;
