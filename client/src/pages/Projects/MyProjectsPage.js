import React, { useState } from "react";
import MyProjectsList from "../../components/Projects/MyProjectsList";
import SearchBar from "../../components/SearchBar";
import FilterBY from "../../components/FilterBy";
import { ProjectManagerFilters } from "../../functions/FilterOptions";
import HeaderPanel from "../../components/HeaderPanel";
import useUserContext from "../../hooks/useUserContext";
import useProjectContext from "../../hooks/useProjectContext";

export default function MyProjectsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const { state } = useUserContext();
  const { state: projects } = useProjectContext();

  const searchBy = projects?.filter((project) => {
    const teamMember = project.teamMembers.find(
      (member) => member._id === state.userDetails._id
    );
    if (project.teamMembers.includes(teamMember)) {
      return (
        (project?.name?.toLowerCase().includes(search?.toLowerCase()) &&
          filter === "") ||
        (project?.name?.toLowerCase().includes(search?.toLowerCase()) &&
          `${project.projectManager?.firstName} ${project.projectManager?.surname}` ===
            filter)
      );
    }
  });

  return (
    <HeaderPanel title={"My Projects"}>
      <div className="ticket-search-container">
        <SearchBar search={search} setSearch={setSearch} />
        <view style={{ margin: "0px 5px 0px 5px" }} />
        <FilterBY
          setFilter={setFilter}
          filterOptions={ProjectManagerFilters()}
        />
      </div>
      <MyProjectsList state={searchBy} />
    </HeaderPanel>
  );
}
