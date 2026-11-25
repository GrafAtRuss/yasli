import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { YasliApp } from "@/components/yasli/YasliApp";
import "@/styles.css";

const root = document.getElementById("app");
if (root) {
  createRoot(root).render(
    <StrictMode>
      <YasliApp />
    </StrictMode>,
  );
}
