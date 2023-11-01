import React, { useState } from "react";
import TicketEditForm from "./TicketEditForm";
import useTicketContext from "../../../hooks/useTicketContext";
import { useNavigate } from "react-router-dom";
import "../../../CSS/Tickets/TicketDetailsTile.css";
import { toast } from "react-toastify";
import DeleteModal from "../../Modals/DeleteModal";
import { AssigneeDetails, ProjectDetails } from "../../../functions/ObjectData";

export default function TicketShow({ ticket }) {
  const assignee = AssigneeDetails(ticket?.assignee);
  const project = ProjectDetails(ticket?.projectid);

  const [isEdit, setIsEdit] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { deleteTicket } = useTicketContext();
  const redirect = useNavigate();

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await deleteTicket(ticket.ticketID, () => {
      redirect("/allTickets");
      toast.success("Ticket deleted successfully");
      setModalVisible(false);
    });
  };

  let content = (
    <div className='ticket-details-tile'>
      <DeleteModal
        isOpen={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        onDelete={handleSubmit}
        type='Ticket'
      />
      <h1>Ticket Details</h1>
      <div className='ticket-details-tile-container'>
        <div className='ticket-details-tile-summary-container'>
          <label>Summary</label>
          <h4>{ticket?.summary}</h4>
          <label>Description</label>
          <h4>{ticket?.description}</h4>
        </div>
        <div className='ticket-details-tile-project-container'>
          <label>Project</label>
          <h4>{project?.name}</h4>
          <label>Assignee</label>
          <h4>
            {assignee?.firstName} {assignee?.surname}
          </h4>
          <label>Issue Type</label>
          <h4>{ticket?.issueType}</h4>
          <label>Status</label>
          <h4>{ticket?.status}</h4>
          <label>Priority</label>
          <h4>{ticket?.priority}</h4>
        </div>
      </div>
      <div className='ticket-details-tile-button-container'>
        <button type='button' onClick={handleEdit}>
          Edit Ticket
        </button>
        <button onClick={() => setModalVisible(!modalVisible)}>
          Delete Ticket
        </button>
      </div>
    </div>
  );

  if (isEdit)
    content = <TicketEditForm ticket={ticket} handleEdit={handleEdit} />;

  return <div>{content}</div>;
}
