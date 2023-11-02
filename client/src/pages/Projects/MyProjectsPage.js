import React, { useState } from "react";
import MyProjectsList from "../../components/Projects/MyProjectsList";
import SearchBar from "../../components/SearchBar";
import FilterBY from "../../components/FilterBy";
import { ProjectManagerFilters } from "../../functions/FilterOptions";
import HeaderPanel from "../../components/HeaderPanel";
import useUserContext from "../../hooks/useUserContext";
import useProjectContext from "../../hooks/useProjectContext";
import { AssigneeDetails } from "../../functions/ObjectData";
import Placeholder from "../../components/Placeholder";
import { Pagination } from "../../functions/Pagination";

export default function MyProjectsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const { state } = useUserContext();
  const { state: projects } = useProjectContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [ticketsPerPage, setTicketsPerPage] = useState(10);

  const searchBy = projects?.filter((project) => {
    const teamMember = project?.teamMembers?.find((member) => {
      const teamMember = AssigneeDetails(member);
      return teamMember?._id === state?.userDetails._id;
    });
    if (project?.teamMembers?.includes(teamMember)) {
      return (
        (project?.name?.toLowerCase().includes(search?.toLowerCase()) &&
          filter === "") ||
        (project?.name?.toLowerCase().includes(search?.toLowerCase()) &&
          `${project.projectManager?.firstName} ${project.projectManager?.surname}` ===
            filter)
      );
    }
  });
  const { currentTickets, paginate, indexOfLastTicket, indexOfFirstTicket } =
    Pagination(currentPage, setCurrentPage, ticketsPerPage, searchBy);

  return (
    <HeaderPanel title={"My Projects"}>
      <div className="ticket-search-container">
        <SearchBar search={search} setSearch={setSearch} />
        <view style={{ margin: "0px 5px 0px 5px" }} />
        <FilterBY
          setFilter={setFilter}
          filterOptions={ProjectManagerFilters()}
          value={"Project Manager"}
        />
      </div>
      <MyProjectsList state={currentTickets} />
      {searchBy?.length < 1 ? (
        <Placeholder
          type={"project"}
          buttonText={"create"}
          link={"/createProject"}
        />
      ) : null}

      <div className="pagination-container">
        <div className="pagination-previous-button">
          {indexOfFirstTicket === 0 ? null : (
            <button onClick={() => paginate(currentPage - 1)}>Previous</button>
          )}
        </div>
        <div className="pagination-page-number">
          {searchBy.length < ticketsPerPage
            ? null
            : `${currentPage} of ${Math.ceil(
                searchBy.length / ticketsPerPage
              )}`}
        </div>
        <div className="pagination-next-button">
          {indexOfLastTicket >= searchBy.length ? null : (
            <button onClick={() => paginate(currentPage + 1)}>Next</button>
          )}
        </div>
      </div>
    </HeaderPanel>
  );
}
