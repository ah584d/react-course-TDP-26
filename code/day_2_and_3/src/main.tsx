import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import KeysExample from "./pages/KeysExample.tsx";
import ConditionalExample from "./pages/ConditionalExample.tsx";
import UseEffectClock from "./pages/UseEffectClock.tsx";
import UseEffectFetch from "./pages/UseEffectFetch.tsx";
import UseEffectDeps from "./pages/UseEffectDeps.tsx";
import UseEffectBug from "./pages/UseEffectBug.tsx";
import UseRefExample from "./pages/UseRefExample.tsx";
import UseRefCounter from "./pages/UseRefCounter.tsx";
import ReconciliationDemo from "./pages/ReconciliationDemo.tsx";
import StarWarsCharacters from "./pages/StarWarsCharacters.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/keys" element={<KeysExample />} />
        <Route path="/conditional" element={<ConditionalExample />} />
        <Route path="/useeffect1" element={<UseEffectClock />} />
        <Route path="/useeffect2" element={<UseEffectFetch />} />
        <Route path="/useeffect3" element={<UseEffectDeps />} />
        <Route path="/bug1" element={<UseEffectBug />} />
        <Route path="/useref" element={<UseRefExample />} />
        <Route path="/useref-counter" element={<UseRefCounter />} />
        <Route path="/reconciliation" element={<ReconciliationDemo />} />
        <Route path="/starwars" element={<StarWarsCharacters />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
