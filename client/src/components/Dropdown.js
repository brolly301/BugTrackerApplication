import React from "react";
import "../CSS/Misc/Dropdown.css";
import { handleChange } from "../functions/HandleChange";

export default function Dropdown({
  label,
  values,
  setData,
  data,
  errors,
  multiple,
  value,
}) {
  const field = (string) => {
    const label = string.split(" ");
    let field = label[0].toLowerCase();
    if (label.length > 1) {
      field += label[1];
    }
    return field;
  };

  return (
    <div className="dropdown-container">
      <label className="dropdown-label">{label}</label>
      {errors && <p className="input-error">{errors}</p>}
      <select
        multiple={multiple}
        className="dropdown-select"
        onChange={(e) => {
          if (multiple) {
            const selectedOptions = Array.from(
              e.target.selectedOptions,
              (option) => option.value
            );
            handleChange(setData, data, field(label), selectedOptions);
          } else {
            handleChange(setData, data, field(label), e.target.value);
          }
        }}>
        <option disabled selected>
          {value || "Select..."}
        </option>
        {values?.map((value) => (
          <option value={value.value} key={value}>
            {value.label}
          </option>
        ))}
      </select>
    </div>
  );
}
