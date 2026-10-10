import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// 1️⃣ STEP 1: Create the context (like creating an empty box 📦)
// The default value (undefined) is only used if a component tries to use useTheme()
// outside of the ThemeProvider - which should never happen in our app
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 2️⃣ STEP 2: Create a Provider component that will share the value
export function ThemeProvider({ children }: { children: ReactNode }) {
  // "children" is a special prop that represents all the components/elements
  // wrapped inside <ThemeProvider>...</ThemeProvider>
  // For example: <ThemeProvider><App /></ThemeProvider> → children = <App />

  // This is the actual state - it lives here in the Provider
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    // 2️⃣ STEP 2 (continued): The Provider component makes the value available
    // to all child components. The "value" prop is what gets shared.
    // When theme or toggleTheme changes, all components using useTheme() will re-render
    // {children} renders all the wrapped components here
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3️⃣ STEP 3: Custom hook to consume the context
// This is a helper function that makes it easy to use the context
// and provides error handling if used outside the Provider
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
