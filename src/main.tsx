import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { applyLook, readLook } from "./look";
import "./styles.css";

const initialLook = readLook();
applyLook(initialLook);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App initialLook={initialLook} />
  </StrictMode>,
);
