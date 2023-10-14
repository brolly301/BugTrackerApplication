import React, { useState } from "react";
import MyProjectsList from "../../components/Projects/MyProjectsList";
import useUserProjectsContext from "../../hooks/useUserProjectsContext";
import SearchBar from "../../components/SearchBar";

export default function MyProjectsPage() {
  const [search, setSearch] = useState("");
  const { state } = useUserProjectsContext();

  const searchBy = state?.filter((project) => {
    return project.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <h1>My Projects</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <MyProjectsList state={searchBy} />
    </div>
  );
}
