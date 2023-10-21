import React from "react";
import "../../../CSS/Projects/ProjectTeamMembersList.css";
import ProjectTeamMembersShow from "./ProjectTeamMembersShow";

export default function ProjectTeamMembersList({ teamMembers }) {
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
              <ProjectTeamMembersShow teamMember={member} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
