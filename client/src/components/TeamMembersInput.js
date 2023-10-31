import React from "react";
import "../CSS/Misc/TeamMembersInput.css";

export default function TeamMembersInput({ data, setData, formData }) {
  const handleChange = (e) => [
    setData({
      ...formData,
      teamMembers: e.target.checked
        ? [...formData.teamMembers, { _id: e.target.value }]
        : formData.teamMembers.filter(
            (teamMember) => teamMember._id !== e.target.value
          ),
    }),
  ];

  return (
    <div className="team-members-input-container">
      <h1>Team Members</h1>
      <div className="team-member-list-container">
        {data.map((member) => (
          <div key={member._id} className="team-member-member-container">
            <p>
              {member?.firstName} {member?.surname}
            </p>
            <input
              onChange={handleChange}
              type="checkbox"
              value={member._id}
              checked={formData.teamMembers.some(
                (teamMember) => teamMember._id === member._id
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
