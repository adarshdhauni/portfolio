import React, { memo } from "react";

const PageWrapper = ({ children }) => {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <div
        className="
      pointer-events-none
      fixed
      inset-0
      -z-10
      overflow-hidden
    "
      >
        <div
          className="
        absolute
        left-1/2
        top-0
        h-150
        w-150
        -translate-x-1/2
        rounded-full
        bg-primary/8
        blur-3xl
      "
        />

        <div
          className="
        absolute
        right-0
        top-[45%]
        h-125
        w-125
        rounded-full
        bg-primary/4
        blur-3xl
      "
        />

        <div
          className="
        absolute
        bottom-0
        left-0
        h-125
        w-125
        rounded-full
        bg-primary/4
        blur-3xl
      "
        />
      </div>

      {children}
    </main>
  );
};

export default memo(PageWrapper);
