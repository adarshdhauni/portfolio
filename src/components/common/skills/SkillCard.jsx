import { ArrowUpRight } from "lucide-react";
import SkillChip from "./SkillChip";

const SkillCard = ({ category }) => {
  const Icon = category.icon;

  return (
    <article
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-border/50
        bg-card
        p-8
        transition-all
        duration-500
        ease-out
        hover:-translate-y-2
        shadow-sm
        hover:shadow-[0_18px_50px_rgb(0_0_0/0.08)]
        hover:bg-card/95
        hover:border-primary/30
      "
    >
      <div className="relative z-10 flex items-start justify-between gap-6">
        <div className="flex items-start gap-4">
          <div
            className="
flex
h-14
w-14
shrink-0
items-center
justify-center
rounded-2xl
border
border-primary/10
bg-primary/5
text-primary
transition-all
duration-300
group-hover:scale-105
group-hover:bg-primary/10
group-hover:border-primary/20
"
          >
            <Icon className="h-7 w-7" />
          </div>

          <div className="min-w-0">
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-muted-foreground
                mb-1
              "
            >
              {category.title}
            </p>

            <h3 className="leading-tight mt-1 text-xl font-semibold">
              {category.subtitle}
            </h3>
          </div>
        </div>
      </div>

      <p className="relative z-10 mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
        {category.description}
      </p>

      <div className="relative z-10 mt-8 flex flex-wrap gap-3">
        {category.skills.map((skill) => (
          <SkillChip key={skill} skill={skill} />
        ))}
      </div>

      <div
        className="
  relative
  z-10
  mt-auto
  flex
  items-center
  justify-between
  border-t
  border-border/70
  pt-6
"
      >
        <span className="text-sm text-muted-foreground">
          {category.skills.length} Technologies
        </span>

        <ArrowUpRight
          aria-hidden="true"
          className="
      h-5
      w-5
      text-muted-foreground
      transition-all
      duration-300
      group-hover:translate-x-1
      group-hover:-translate-y-1
      group-hover:text-primary
    "
        />
      </div>
    </article>
  );
};

export default SkillCard;
