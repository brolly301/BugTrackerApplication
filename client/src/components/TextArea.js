import React from "react";
import { handleChange } from "../functions/HandleChange";
import "../CSS/Misc/TextArea.css";

export default function TextArea({ setData, data, label, errors, value }) {
  const field = (string) => {
    const label = string.split(" ");
    let field = label[0].toLowerCase();
    if (label.length > 1) {
      field += label[1];
    }
    return field;
  };

  return (
    <div className='text-area-container'>
      <label className='text-area-label'>{label}</label>
      {errors && <p className='input-error'>{errors}</p>}

      <textarea
        rows={25}
        className='text-area'
        value={value}
        onChange={(e) =>
          handleChange(setData, data, field(label), e.target.value)
        }
      ></textarea>
    </div>
  );
}
