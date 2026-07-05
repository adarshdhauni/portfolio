const JourneyCard = ({ item }) => {
  const { title, description, icon: Icon } = item;

  return (
    <article
      className="
        group
        rounded-3xl
        border
        border-border/50
        bg-card
        p-8
        shadow-sm
        transition-all
        duration-200
        hover:-translate-y-1
        hover:border-primary/20
        hover:shadow-lg
      "
    >
      <div
        className="
          inline-flex
          rounded-2xl
          border
          border-primary/15
          bg-primary/10
          p-3
          text-primary
          transition-colors
          duration-200
          group-hover:bg-primary
          group-hover:text-primary-foreground
        "
      >
        <Icon className="size-6" />
      </div>

      <h3 className="mt-6 text-2xl font-semibold tracking-tight">{title}</h3>

      <p className="mt-4 text-[17px] leading-8 text-muted-foreground">
        {description}
      </p>
    </article>
  );
};

export default JourneyCard;
