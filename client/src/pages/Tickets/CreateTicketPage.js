import React from "react";
import CreateTicketForm from "../../components/Tickets/CreateTicketForm";
import HeaderPanel from "../../components/HeaderPanel";

export default function CreateTicketPage() {
  return (
    <HeaderPanel title={"Submit Ticket"}>
        <CreateTicketForm />
    </HeaderPanel>
  );
}
