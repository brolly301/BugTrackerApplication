import React from "react";
import Dropdown from "./Dropdown";

export default function FilterBy({ filterOptions, setFilter, value }) {
  return (
    <div className="filter-container">
      <Dropdown setData={setFilter} values={filterOptions} value={value} />
    </div>
  );
}
