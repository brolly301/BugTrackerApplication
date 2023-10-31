import React from "react";
import "../../../CSS/Projects/ProjectTeamMembersShow.css";
import { useState, useEffect } from "react";
import { AssigneeDetails } from "../../../functions/ObjectData";

export default function ProjectTeamMembersShow({ teamMember }) {
  const [userRoleColor, setUserRoleColor] = useState("");

  const member = AssigneeDetails(teamMember);

  useEffect(() => {
    if (member?.role === "Admin") {
      setUserRoleColor("role-admin-pill");
    } else if (member?.role === "Project Manager") {
      setUserRoleColor("role-projectManager-pill");
    } else if (member?.role === "Developer") {
      setUserRoleColor("role-developer-pill");
    } else if (member?.role === "Test Engineer") {
      setUserRoleColor("role-testEngineer-pill");
    } else if (member?.role === "Support") {
      setUserRoleColor("role-support-pill");
    }
  }, [member?.role]);

  return (
    <>
      <td className="team-members-table-text">{member?.firstName}</td>
      <td className="team-members-table-text">{member?.surname}</td>
      <td className="team-members-table-text">{member?.phoneNumber}</td>
      <td className="team-members-table-text">{member?.emailAddress}</td>
      <td>
        <p className={`team-members-list-pill ${userRoleColor}`}>
          {member?.role}
        </p>
      </td>
    </>
  );
}
