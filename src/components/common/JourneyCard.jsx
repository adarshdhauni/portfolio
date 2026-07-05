import { memo } from "react";

const JourneyCard = ({ item }) => {
  const { title, description, icon: Icon } = item;

  return (
    <article
      className="
        rounded-3xl
        border
        bg-card
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div
        className="
          inline-flex
          rounded-2xl
          border
          bg-primary/10
          p-3
          text-primary
        "
      >
        <Icon className="size-6" />
      </div>

      <h3 className="mt-6 text-2xl font-semibold tracking-tight">{title}</h3>

      <p className="mt-4 leading-7 text-muted-foreground">{description}</p>
    </article>
  );
};

export default memo(JourneyCard);
