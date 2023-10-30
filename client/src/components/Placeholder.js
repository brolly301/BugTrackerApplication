import React from "react";
import "../CSS/Misc/Placeholder.css";
import { Link } from "react-router-dom";

export default function Placeholder({ type, buttonText, link }) {
  return (
    <div className="placeholder-container">
      <h5>You currently have no {type}s to display.</h5>
      <h6>
        Please click the button below to {buttonText} a new {type}.
      </h6>
      <Link style={{ textDecoration: "none", width: "100%" }} to={link}>
        <button className="placeholder-container-button">
          {buttonText[0].toUpperCase() + buttonText.slice(1)}{" "}
          {type[0].toUpperCase() + type.slice(1)}
        </button>
      </Link>
    </div>
  );
}
