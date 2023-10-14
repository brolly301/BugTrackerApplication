import React from "react";
import "../CSS/Misc/SearchBar.css";

export default function SearchBar({ search, setSearch }) {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <input
      className="search-bar-container"
      type="text"
      placeholder="Search.."
      value={search}
      onChange={handleChange}
    />
  );
}
