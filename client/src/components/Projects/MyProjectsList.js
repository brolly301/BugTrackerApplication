import React from "react";
import MyProjectsShow from "./MyProjectsShow";
import "../../CSS/Projects/ProjectList.css";
import { Link } from "react-router-dom";

export default function MyProjectsList({ state }) {
  return (
    <div>
      <table className="all-projects-table">
        <thead>
          <tr className="all-projects-row">
            <th>Name</th>
            <th>Description</th>
            <th>Project Manager</th>
            <th>Team Members</th>
            <th>Tickets</th>
          </tr>
        </thead>
        <tbody>
          {state.map((item, index) => (
            <tr key={index} className="all-projects-row">
              <MyProjectsShow project={item} />
              <Link
                to={`/allProjects/projects/${item._id}`}
                state={{ project: item }}>
                <button>View</button>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
