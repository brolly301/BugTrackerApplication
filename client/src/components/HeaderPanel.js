import React from "react";
import "../CSS/Misc/HeaderPanel.css";

export default function HeaderPanel({ title, children }) {
  return (
    <div className="header-panel-container">
      <div className="header-panel-title-container">
        <h1>{title}</h1>
      </div>
      <div className="header-panel-children-container">{children}</div>
    </div>
  );
}
