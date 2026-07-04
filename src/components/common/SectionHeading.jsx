import { cn } from "@/lib/utils";
import { memo } from "react";

const SectionHeading = ({ eyebrow, title, description, className }) => {
  return (
    <div className={cn("mb-12", className)}>
      {eyebrow && (
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </p>
      )}

      {title && (
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          {title}
        </h2>
      )}

      {description && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
};

export default memo(SectionHeading);
