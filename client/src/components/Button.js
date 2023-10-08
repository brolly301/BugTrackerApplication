import React from "react";
import "../CSS/Misc/Button.css";

export default function Button({ label, ...rest }) {
  return (
    <button {...rest} className="button">
      {label}
    </button>
  );
}
