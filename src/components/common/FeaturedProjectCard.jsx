import { CircleCheck, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

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
    border-border/50
    bg-card
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-primary/20
    hover:shadow-[0_20px_60px_rgb(0_0_0/0.08)]
  "
    >
      <div className="grid items-stretch lg:grid-cols-2">
        <div className="p-2 lg:p-3">
          <div
            className="
          aspect-16/10
          overflow-hidden
          rounded-[1.5rem]
          bg-muted
        "
          >
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} live demo`}
              className="block h-full cursor-pointer"
            >
              <img
                src={image}
                alt={`${title} project screenshot`}
                width={1200}
                height={771}
                loading="lazy"
                decoding="async"
                className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-[1.015]
              group-hover:brightness-[1.03]
            "
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center p-8 lg:p-10">
          <h3 className="text-3xl font-bold tracking-tight">{title}</h3>

          <p className="max-w-xl mt-6 text-[17px] leading-8 text-muted-foreground">
            {description}
          </p>

          <div className="mt-8">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Highlights
            </h4>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3">
                  <CircleCheck className="mt-0.5 size-5 shrink-0 text-primary" />

                  <span className="text-sm leading-6 text-muted-foreground">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Technologies
            </h4>

            <div className="flex flex-wrap gap-2.5">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                rounded-full
                border
                border-border/60
                bg-background
                px-3.5
                py-1.5
                text-sm
                font-medium
                text-muted-foreground
                transition-all
                duration-200
                hover:border-primary/20
                hover:bg-primary
                hover:text-primary-foreground
              "
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} live demo`}
              className={buttonVariants({
                size: "lg",
                className: "min-w-44",
              })}
            >
              <ExternalLink className="size-4" />
              Live Demo
            </a>

            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} source code on GitHub`}
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "min-w-44",
              })}
            >
              <SiGithub className="size-4" />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProjectCard;
