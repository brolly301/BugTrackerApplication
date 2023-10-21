import React from "react";
import "../../../CSS/Projects/ProjectTicketsShow.css";
import TicketList from "../../Tickets/TicketList";
import SearchBar from "../../SearchBar";
import FilterBy from "../../FilterBy";

export default function ProjectTicketShow({ project }) {
  return (
    <div className="project-tickets-tile-container">
      <h3>Project Tickets</h3>
      <div>
        <SearchBar />
        <FilterBy />
      </div>
      <TicketList state={project?.tickets} />
    </div>
  );
}
