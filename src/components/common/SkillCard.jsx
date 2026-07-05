const SkillCard = ({ title, skills }) => {
  return (
    <article
      className="
        group
        rounded-2xl
        border
        border-border/50
        bg-card
        p-7
        shadow-sm
        transition-all
        duration-200
        hover:-translate-y-1
        hover:border-primary/20
        hover:shadow-lg
      "
    >
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>

      <div className="mt-6 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill.name}
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
              transition-colors
              duration-200
              group-hover:border-primary/20
            "
          >
            {skill.name}
          </span>
        ))}
      </div>
    </article>
  );
};

export default SkillCard;
