const SkillChip = ({ skill }) => {
  return (
    <span
      className="
        inline-flex
        select-none
        items-center
        rounded-full
        border
        border-border/60
        bg-muted/50
        px-3.5
        py-2
        text-sm
        font-medium
        text-muted-foreground
        transition-[background-color,border-color,color,transform]
        duration-150
        hover:-translate-y-0.5
        hover:border-primary/20
        hover:bg-primary
        hover:text-primary-foreground
      "
    >
      {skill}
    </span>
  );
};

export default SkillChip;
