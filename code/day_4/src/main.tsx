import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import ContextDemo from "./pages/ContextDemo.tsx";
import PropDrillingDemo from "./pages/PropDrillingDemo.tsx";
import ErrorHandlingDemo from "./pages/ErrorHandlingDemo.tsx";
import ChildrenDemo from "./pages/ChildrenDemo.tsx";
import ShopDemo from "./pages/ShopDemo.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/prop-drilling" element={<PropDrillingDemo />} />
          <Route path="/context" element={<ContextDemo />} />
          <Route path="/children" element={<ChildrenDemo />} />
          <Route path="/error-handling" element={<ErrorHandlingDemo />} />
          <Route path="/zustand-shop" element={<ShopDemo />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
