import React, { useState } from "react";
import TicketEditForm from "./TicketEditForm";

export default function TicketShow({ ticket }) {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  let content = (
    <form onSubmit={handleSubmit}>
      <h4>{ticket.summary}</h4>
      <h4>{ticket.description}</h4>
      <h4>{ticket.priority}</h4>
      <h4>{ticket.assignee}</h4>
      <h4>{ticket.project}</h4>
      <h4>{ticket.status}</h4>
      <h4>{ticket.issueType}</h4>
      <button type="button" onClick={handleEdit}>
        Edit
      </button>
      <button type="submit">Delete</button>
    </form>
  );

  if (isEdit)
    content = <TicketEditForm ticket={ticket} handleEdit={handleEdit} />;

  return <div>{content}</div>;
}
