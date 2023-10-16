import React, { useState } from "react";
import MyProjectsList from "../../components/Projects/MyProjectsList";
import useUserProjectsContext from "../../hooks/useUserProjectsContext";
import SearchBar from "../../components/SearchBar";
import FilterBY from "../../components/FilterBy";
import { ProjectManagerFilters } from "../../functions/FilterOptions";

export default function MyProjectsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const { state } = useUserProjectsContext();

  const searchBy = state?.filter((project) => {
    return (
      (project?.name?.toLowerCase().includes(search?.toLowerCase()) &&
        filter === "") ||
      (project?.name?.toLowerCase().includes(search?.toLowerCase()) &&
        `${project.projectManager?.firstName} ${project.projectManager?.surname}` ===
          filter)
    );
  });

  return (
    <div>
      <h1>My Projects</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <FilterBY setFilter={setFilter} filterOptions={ProjectManagerFilters()} />
      <MyProjectsList state={searchBy} />
    </div>
  );
}
