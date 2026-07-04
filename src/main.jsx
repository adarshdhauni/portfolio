import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@fontsource/geist-sans";
import "@fontsource/geist-mono";
import { Toaster } from "sonner";
import ThemeProvider from "@/components/common/ThemeProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
      <Toaster richColors closeButton position="top-right" />
    </ThemeProvider>
  </StrictMode>,
);
