import { cn } from "@/lib/utils";

const SectionHeading = ({ eyebrow, title, description, className }) => {
  return (
    <div className={cn("mb-14", className)}>
      {eyebrow && (
        <p
          className="
            mb-3
            text-xs
            font-semibold
            uppercase
            tracking-[0.24em]
            text-primary
          "
        >
          {eyebrow}
        </p>
      )}

      {title && (
        <h2
          className="
            text-3xl
            font-bold
            tracking-tight
            text-balance
            md:text-4xl
          "
        >
          {title}
        </h2>
      )}

      {description && (
        <p
          className="
            mt-5
            max-w-2xl
            text-[17px]
            leading-8
            text-muted-foreground
            text-pretty
          "
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
