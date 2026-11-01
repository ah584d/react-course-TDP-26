import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import StrictLayout from "./StrictLayout.tsx";
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
import UseQueryDemo from "./pages/UseQueryDemo.tsx";
import UseMutationDemo from "./pages/UseMutationDemo.tsx";

// StrictMode stays on for every page except /usequery: see StrictLayout.tsx.
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<StrictLayout />}>
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
        <Route path="/usemutation" element={<UseMutationDemo />} />
      </Route>
      <Route path="/usequery" element={<UseQueryDemo />} />
    </Routes>
  </BrowserRouter>,
);
