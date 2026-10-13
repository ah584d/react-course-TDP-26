import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import ContextDemo from "./pages/ContextDemo.tsx";
import PropDrillingDemo from "./pages/PropDrillingDemo.tsx";
import TodoList from "./pages/TodoList.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/prop-drilling" element={<PropDrillingDemo />} />
          <Route path="/context" element={<ContextDemo />} />
          <Route path="/zustand-todo" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
