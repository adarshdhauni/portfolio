import { cn } from "@/lib/utils";
import React, { memo } from "react";

const Section = ({ children, className, id, ...props }) => {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-[calc(var(--header-offset)+1rem)] py-20 md:py-24",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default memo(Section);
