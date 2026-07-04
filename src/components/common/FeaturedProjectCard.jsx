import { CircleCheck, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import React, { memo } from "react";
import { buttonVariants } from "@/components/ui/button";

const FeaturedProjectCard = ({ project }) => {
  const { title, description, image, github, live, technologies, highlights } =
    project;

  return (
    <article
      className="
      group 
    overflow-hidden
    rounded-3xl
    border
    bg-card
    shadow-sm
    transition-all duration-300
hover:shadow-lg
hover:-translate-y-1
  "
    >
      <div className="grid lg:grid-cols-2">
        <div
          className="relative min-h-80 lg:min-h-full bg-muted group
overflow-hidden"
        >
          <a
            aria-label={`View ${title} live demo`}
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden block h-full"
          >
            <img
              src={image}
              alt={`${title} project screenshot`}
              width={1200}
              height={771}
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500
            group-hover:scale-105"
            />
          </a>
        </div>
        <div className="flex flex-col justify-center p-8 lg:p-10">
          <h3 className="text-3xl font-bold tracking-tight">{title}</h3>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            {description}
          </p>
          <div className="mt-8">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Highlights
            </h4>

            <div className="grid gap-3 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3">
                  <CircleCheck className="size-5 shrink-0 text-primary" />

                  <span className="text-sm text-muted-foreground">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Technologies
              </h4>

              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
          rounded-full
          border
          bg-muted/50
          px-3
          py-1
          text-sm
          font-medium
          text-muted-foreground
          transition-all
hover:bg-primary
hover:text-primary-foreground
        "
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                aria-label={`View ${title} live demo`}
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ size: "lg" })}
              >
                <ExternalLink className="size-4" />
                Live Demo
              </a>

              <a
                aria-label={`View ${title} source code on GitHub`}
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                })}
              >
                <SiGithub className="size-4" />
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default memo(FeaturedProjectCard);
