import React, { useState } from "react";
import ProjectList from "../../components/Projects/ProjectList";
import useProjectContext from "../../hooks/useProjectContext";
import SearchBar from "../../components/SearchBar";
import FilterBy from "../../components/FilterBy";
import { ProjectManagerFilters } from "../../functions/FilterOptions";
import HeaderPanel from "../../components/HeaderPanel";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const { state } = useProjectContext();

  const searchBy = state?.filter((project) => {
    return (
      (project?.name?.toLowerCase().includes(search?.toLowerCase()) &&
        filter === "") ||
      (project?.name?.toLowerCase().includes(search?.toLowerCase()) &&
        `${project.projectManager?.firstName} ${project.projectManager?.surname}` ===
          filter)
    );
  });

  console.log(filter);

  return (
    <HeaderPanel title={"All Projects"}>
      <SearchBar search={search} setSearch={setSearch} />
      <FilterBy filterOptions={ProjectManagerFilters()} setFilter={setFilter} />
      <ProjectList state={searchBy} />
    </HeaderPanel>
  );
}
