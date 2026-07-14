import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <section
      aria-labelledby="not-found-title"
      className="flex min-h-[calc(100svh-var(--header-offset))]
pt-(--header-offset) items-center justify-center px-6"
    >
      <div className="w-full max-w-lg rounded-3xl border border-border/50 bg-card p-10 text-center shadow-sm">
        <div className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 text-primary">
          <SearchX className="size-7" />
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          404
        </p>

        <h1
          id="not-found-title"
          className="mt-3 text-3xl font-bold tracking-tight"
        >
          Page Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-sm text-[17px] leading-8 text-muted-foreground">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button size="lg" onClick={() => window.location.assign("/")}>
            Back Home
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
