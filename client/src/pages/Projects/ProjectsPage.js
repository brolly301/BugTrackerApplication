import React, { useState } from "react";
import ProjectList from "../../components/Projects/ProjectList";
import useProjectContext from "../../hooks/useProjectContext";
import SearchBar from "../../components/SearchBar";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const { state } = useProjectContext();

  const searchBy = state?.filter((project) => {
    return project.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <h1>Projects</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <ProjectList state={searchBy} />
    </div>
  );
}
