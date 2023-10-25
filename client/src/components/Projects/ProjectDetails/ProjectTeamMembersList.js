import React from "react";
import "../../../CSS/Projects/ProjectTeamMembersList.css";
import ProjectTeamMembersShow from "./ProjectTeamMembersShow";
import useUserContext from "../../../hooks/useUserContext";

export default function ProjectTeamMembersList({ teamMembers }) {
  const { state } = useUserContext();

  return (
    <div>
      <table className="team-members-table">
        <thead className="team-members-table-header">
          <tr className="team-members-row">
            <th>First Name</th>
            <th>Surname</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {teamMembers?.map((member) => (
            <tr key={member._id} className="team-members-row">
              <ProjectTeamMembersShow
                teamMember={
                  typeof member === "object"
                    ? member
                    : state.allUsers.find((u) => u._id === member)
                }
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
