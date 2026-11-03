import { useState } from "react";
import type { ReactNode } from "react";
import "./Children.css";

type DrillDownCardProps = {
  title: string;
  children: ReactNode;
};

function DrillDownCard(props: DrillDownCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="drill-card">
      <button className="drill-card-header" onClick={() => setOpen(!open)}>
        <span>{props.title}</span>
        <span>{open ? "▲" : "▼"}</span>
      </button>
      {open && <div className="drill-card-body">{props.children}</div>}
    </div>
  );
}

export default DrillDownCard;
