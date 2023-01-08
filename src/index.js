import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { inject } from '@vercel/analytics';

// to enable analytics
inject();

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
