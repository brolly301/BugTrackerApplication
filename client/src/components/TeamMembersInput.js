import React from "react";
import "../CSS/Misc/TeamMembersInput.css";

export default function TeamMembersInput({ data, setData, formData }) {
  const handleChange = (e) => [
    setData({
      ...formData,
      teamMembers: e.target.checked
        ? [...formData.teamMembers, e.target.value]
        : formData.teamMembers.filter(
            (teamMember) => teamMember !== e.target.value
          ),
    }),
  ];

  return (
    <div className='team-members-input-container'>
      <h1>Team Members</h1>
      <div className='team-member-list-container'>
        {data.map((member) => (
          <div key={member.userID} className='team-member-member-container'>
            <p>
              {member?.firstName} {member?.surname}
            </p>
            <input
              onChange={handleChange}
              type='checkbox'
              value={member.userID}
              checked={formData.teamMembers.some(
                (teamMember) => teamMember === member.userID
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
