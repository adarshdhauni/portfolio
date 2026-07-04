import { memo } from "react";

const SkillCard = ({ title, skills }) => {
  return (
    <article
      className="
        rounded-2xl
        border
        bg-card
        p-6
      "
    >
      <h3 className="text-xl font-semibold">{title}</h3>

      <div className="mt-6 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="
              rounded-full
              border
              px-3
              py-1.5
              text-sm
              text-muted-foreground
            "
          >
            {skill.name}
          </span>
        ))}
      </div>
    </article>
  );
};

export default memo(SkillCard);
