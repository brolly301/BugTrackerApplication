import React from "react";
import useProjectContext from "../../hooks/useProjectContext";
import ProjectShow from "./ProjectShow";

export default function ProjectList() {
  const { state } = useProjectContext();

  return (
    <div>
      <table className="all-tickets-table">
        <thead>
          <tr className="all-tickets-row">
            <th>Name</th>
            <th>Description</th>
            <th>Project Manager</th>
            <th>Team Members</th>
            <th>Tickets</th>
          </tr>
        </thead>
        <tbody>
          {state.map((item, index) => (
            <tr key={index} className="all-tickets-row">
              <ProjectShow project={item} />
              <button>View</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
