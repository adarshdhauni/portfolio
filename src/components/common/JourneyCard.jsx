const JourneyCard = ({ item }) => {
  const { title, description, icon: Icon } = item;

  return (
    <article
      className="
    group
    h-full
    rounded-3xl
    border
    border-border/50
    bg-card
    p-4
    sm:p-6
    transition-all
    duration-300
    hover:-translate-y-2
    hover:bg-card/95
    hover:border-primary/30
    shadow-sm
    hover:shadow-[0_18px_50px_rgb(0_0_0/0.08)]
  "
    >
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

      <h3 className="mt-6 text-2xl font-semibold tracking-tight">{title}</h3>

      <p className="mt-5 text-[17px] leading-8 text-muted-foreground">
        {description}
      </p>
    </article>
  );
};

export default JourneyCard;
