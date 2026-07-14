import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { HelmetProvider } from "react-helmet-async";

import App from "./App";
import ThemeProvider from "@/components/common/ThemeProvider";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import { Toaster } from "@/components/ui/sonner";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>

        <Toaster richColors closeButton position="top-right" />
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
);
