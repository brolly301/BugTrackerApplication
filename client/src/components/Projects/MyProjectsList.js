import React from "react";
import MyProjectsShow from "./MyProjectsShow";
import "../../CSS/Projects/ProjectList.css";

export default function MyProjectsList({ state }) {
  return (
    <div>
      <table className="all-projects-table">
        <thead className="all-projects-table-header">
          <tr className="all-projects-row">
            <th>Name</th>
            <th>Description</th>
            <th>Project Manager</th>
            <th>Team Members</th>
            <th>Tickets</th>
            <th style={{ backgroundColor: "white", border: 0 }} />
          </tr>
        </thead>
        <tbody>
          {state.map((item, index) => (
            <tr key={index} className="all-projects-row">
              <MyProjectsShow project={item} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
