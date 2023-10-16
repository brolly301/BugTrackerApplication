import React from "react";
import Dropdown from "./Dropdown";

export default function FilterBy({ filterOptions, setFilter }) {
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="filter-container">
      {/* <select onChange={handleChange}>
        <option value="" disabled>
          Select..
        </option>
        {filterOptions?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select> */}
      <Dropdown setData={setFilter} values={filterOptions} />
    </div>
  );
}
