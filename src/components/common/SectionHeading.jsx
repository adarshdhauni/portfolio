import { cn } from "@/lib/utils";
import React, { memo } from "react";

const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="mb-12">
      <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {subtitle}
      </p>

      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
    </div>
  );
};

export default memo(SectionHeading);
