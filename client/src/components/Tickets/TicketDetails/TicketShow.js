import React, { useState } from "react";
import TicketEditForm from "./TicketEditForm";
import useTicketContext from "../../../hooks/useTicketContext";
import { useNavigate } from "react-router-dom";
import { AssigneeDetails, ProjectDetails } from "../../../functions/ObjectData";

export default function TicketShow({ ticket }) {
  // const assignee = AssigneeDetails(ticket.assignee);
  const project = ProjectDetails(ticket.project);
  const [isEdit, setIsEdit] = useState(false);
  const { deleteTicket } = useTicketContext();
  const redirect = useNavigate();

  console.log(ticket);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await deleteTicket(ticket._id, () => {
      redirect("/allTickets");
    });
  };

  let content = (
    <form onSubmit={handleSubmit}>
      <h4>{ticket?.summary}</h4>
      <h4>{ticket?.description}</h4>
      <h4>{ticket?.priority}</h4>
      <h4>
        {ticket?.assignee?.firstName} {ticket?.assignee?.surname}
      </h4>
      <h4>{project?.name}</h4>
      <h4>{ticket?.status}</h4>
      <h4>{ticket?.issueType}</h4>
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
