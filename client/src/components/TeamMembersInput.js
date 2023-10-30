import React from "react";
import "../CSS/Misc/TeamMembersInput.css";
import { handleChange } from "../functions/HandleChange";

export default function TeamMembersInput({ data, setData, project, formData }) {
  const handleChange = (e) => [
    setData({
      ...formData,
      teamMembers: [...project.teamMembers, e.target.value],
    }),
  ];

  return (
    <div className="team-members-input-container">
      <h1>Team Members</h1>

      {data.map((member) => {
        const isChecked = project.teamMembers.some(
          (teamMember) => teamMember._id === member._id
        );

        return (
          <div key={member._id} className="team-member-member-container">
            <p>
              {member?.firstName} {member?.surname}
            </p>
            <input
              onChange={handleChange}
              type="checkbox"
              value={member._id}
              checked={isChecked}
            />
          </div>
        );
      })}
    </div>
  );
}
