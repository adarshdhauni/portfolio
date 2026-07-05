import React from "react";

const PageWrapper = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <div
        className="
          pointer-events-none
          fixed
          inset-0
          -z-10
          overflow-hidden
        "
        aria-hidden="true"
      >
        <div
          className="
            absolute
            left-1/2
            top-0
            h-180
            w-180
            -translate-x-1/2
            rounded-full
            bg-primary/8
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -right-24
            top-[42%]
            h-140
            w-140
            rounded-full
            bg-primary/4
            blur-[110px]
          "
        />

        <div
          className="
            absolute
            -left-20
            -bottom-24
            h-120
            w-120
            rounded-full
            bg-primary/3
            blur-[100px]
          "
        />
      </div>

      {children}
    </div>
  );
};

export default PageWrapper;
