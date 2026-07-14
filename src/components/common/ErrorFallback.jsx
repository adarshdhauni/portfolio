import { AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/button";

const ErrorFallback = ({ resetErrorBoundary }) => {
  const handleRetry = () => {
    resetErrorBoundary?.();
  };

  const handleReturnHome = () => {
    window.location.replace("/");
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div
        className="
          w-full
          max-w-lg
          rounded-3xl
          border
          border-border/50
          bg-card
          p-10
          text-center
          shadow-sm
        "
      >
        <div
          className="
            mx-auto
            flex
            size-16
            items-center
            justify-center
            rounded-2xl
            border
            border-primary/15
            bg-primary/10
            text-primary
          "
        >
          <AlertTriangle className="size-7" />
        </div>

        <h1 className="mt-8 text-3xl font-bold tracking-tight">
          Something went wrong
        </h1>

        <p className="mx-auto mt-4 max-w-sm text-[17px] leading-8 text-muted-foreground">
          An unexpected error occurred while rendering this page. Please try
          again or return to the homepage.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button size="lg" onClick={handleRetry} className="sm:min-w-44">
            Try Again
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={handleReturnHome}
            className="sm:min-w-44"
          >
            Back Home
          </Button>
        </div>
      </div>
    </main>
  );
};

export default ErrorFallback;
