import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/geist-sans";
import "@fontsource/geist-mono";

import "./index.css";

import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";

import App from "./App";
import ThemeProvider from "@/components/common/ThemeProvider";
import ErrorBoundary from "@/components/common/ErrorBoundary";

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
