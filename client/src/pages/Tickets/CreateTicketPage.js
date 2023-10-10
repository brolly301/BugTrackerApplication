import React from "react";
import CreateTicketForm from "../../components/Tickets/CreateTicketForm";
import "../../CSS/Pages/CreateTicketPage.css";

export default function CreateTicketPage() {
  return (
    <div className='create-ticket-page-container'>
      <h1>Create Ticket</h1>
      <CreateTicketForm />
    </div>
  );
}
