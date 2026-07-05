import { cn } from "@/lib/utils";

const Section = ({ children, className, id, ...props }) => {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-[calc(var(--header-offset)+1rem)] py-24 md:py-28",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
