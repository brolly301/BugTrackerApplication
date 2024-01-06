import React from "react";
import { useParams } from "react-router-dom";
import useTicketContext from "../../hooks/useTicketContext";
import TicketDetailsTile from "../../components/Tickets/TicketDetails/TicketDetailsTile";
import HeaderPanel from "../../components/HeaderPanel";
import "../../CSS/Pages/TicketDetails.css";
import TicketCommentsTile from "../../components/Tickets/TicketDetails/TicketCommentsTile";

export default function TicketDetailsPage() {
  const { state } = useTicketContext();
  const { id } = useParams();
  const ticket = state?.find((ticket) => ticket?.ticketID === id);

  return (
    <HeaderPanel title={"Ticket Details"}>
      <div className="ticket-details-page-container">
        <TicketDetailsTile ticket={ticket} />
        <TicketCommentsTile ticket={ticket} />
      </div>
    </HeaderPanel>
  );
}
