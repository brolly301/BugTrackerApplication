import React from "react";
import "../CSS/Misc/Input.css";

export default function Input({ label, handleChangeText, errors }) {
  //Converts the label  camelcasing for the field name
  const field = (string) => {
    const label = string.split(" ");
    let field = label[0].toLowerCase();
    if (label.length > 1) {
      field += label[1];
    }
    return field;
  };

  return (
    <div className="input-container">
      {errors && <p className="input-error">{errors}</p>}
      <label className="label">{label}</label>
      <input
        className="input"
        type="text"
        onChange={(e) => handleChangeText(field(label), e)}
      />
    </div>
  );
}
