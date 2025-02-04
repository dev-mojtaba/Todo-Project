import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./components/Layout";
import "./styles/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout />
  </StrictMode>
);
