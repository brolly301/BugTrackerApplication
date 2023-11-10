import React, { useState } from "react";
import ProjectList from "../../components/Projects/ProjectList";
import useProjectContext from "../../hooks/useProjectContext";
import SearchBar from "../../components/SearchBar";
import FilterBy from "../../components/FilterBy";
import { ProjectManagerFilters } from "../../functions/FilterOptions";
import HeaderPanel from "../../components/HeaderPanel";
import Placeholder from "../../components/Placeholder";
import { Pagination } from "../../functions/Pagination";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const { state } = useProjectContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [ticketsPerPage, setTicketsPerPage] = useState(10);

  const searchBy = state?.filter((project) => {
    return (
      (project?.name?.toLowerCase().includes(search?.toLowerCase()) &&
        filter === "") ||
      (project?.name?.toLowerCase().includes(search?.toLowerCase()) &&
        `${project.projectManager?.firstName} ${project.projectManager?.surname}` ===
          filter)
    );
  });

  const { currentTickets, paginate, indexOfLastTicket, indexOfFirstTicket } =
    Pagination(currentPage, setCurrentPage, ticketsPerPage, searchBy);

  return (
    <HeaderPanel title={"All Projects"}>
      <div className="ticket-search-container">
        <SearchBar search={search} setSearch={setSearch} />
        <view style={{ margin: "0px 5px 0px 5px" }} />
        <FilterBy
          filterOptions={ProjectManagerFilters()}
          setFilter={setFilter}
          value={"Project Manager"}
        />
      </div>
      <ProjectList state={currentTickets} />
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
            <PiCaretLeft onClick={() => paginate(currentPage - 1)} />
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
            <PiCaretRight onClick={() => paginate(currentPage + 1)} />
          )}
        </div>
      </div>
    </HeaderPanel>
  );
}
