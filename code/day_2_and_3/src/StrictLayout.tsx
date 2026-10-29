import { StrictMode } from "react";
import { Outlet } from "react-router-dom";

// StrictMode stays on for every page except /usequery: in dev it runs each effect twice,
// which would double the classic-fetch requests that demo is counting.
export default function StrictLayout() {
  return (
    <StrictMode>
      <Outlet />
    </StrictMode>
  );
}
