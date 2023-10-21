import React from "react";
import "../../../CSS/Projects/ProjectTeamMembersShow.css";
import { useState, useEffect } from "react";

export default function ProjectTeamMembersShow({ teamMember }) {
  const [userRoleColor, setUserRoleColor] = useState("");

  useEffect(() => {
    if (teamMember.role === "Admin") {
      setUserRoleColor("role-admin-pill");
    } else if (teamMember.role === "Project Manager") {
      setUserRoleColor("role-projectManager-pill");
    } else if (teamMember.role === "Developer") {
      setUserRoleColor("role-developer-pill");
    } else if (teamMember.role === "Test Engineer") {
      setUserRoleColor("role-testEngineer-pill");
    } else if (teamMember.role === "Support") {
      setUserRoleColor("role-support-pill");
    }
  }, [teamMember.role]);

  return (
    <>
      <td className="team-members-table-text">{teamMember.firstName}</td>
      <td className="team-members-table-text">{teamMember.surname}</td>
      <td className="team-members-table-text">{teamMember.phoneNumber}</td>
      <td className="team-members-table-text">{teamMember.emailAddress}</td>
      <td>
        <p className={`team-members-list-pill ${userRoleColor}`}>
          {teamMember.role}
        </p>
      </td>
    </>
  );
}
