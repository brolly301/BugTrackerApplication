import React from "react";
import "../../../../CSS/ManageUsers/UserProjectsTile.css";
import ProjectList from "../../../Projects/ProjectList";
import useProjectContext from "../../../../hooks/useProjectContext";
import SearchBar from "../../../SearchBar";

export default function UserProjectsTile({ user }) {
  const { state } = useProjectContext();
  const userProjects = state.filter((project) => {
    if (project.teamMembers.some((member) => member?._id === user?._id)) {
      return project;
    }
  });

  return (
    <div className="user-projects-tile-container">
      <h3 className="user-projects-tile-title">Recent Projects</h3>
      <SearchBar />
      <div>
        <ProjectList state={userProjects} />
      </div>
    </div>
  );
}
