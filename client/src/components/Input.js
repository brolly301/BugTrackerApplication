import React from "react";
import "../CSS/Misc/Input.css";
import { handleChange } from "../functions/HandleChange";

export default function Input({ label, errors, setData, data, value }) {
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
    <div className='input-container'>
      <label className='label'>{label}</label>
      {errors && <p className='input-error'>{errors}</p>}

      <input
        value={value}
        className='input'
        type='text'
        onChange={(e) =>
          handleChange(setData, data, field(label), e.target.value)
        }
      />
    </div>
  );
}
