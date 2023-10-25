import React from "react";
import { useLocation } from "react-router-dom";
import useTicketContext from "../../hooks/useTicketContext";
import TicketDetailsTile from "../../components/Tickets/TicketDetails/TicketDetailsTile";
import HeaderPanel from "../../components/HeaderPanel";
import "../../CSS/Pages/TicketDetails.css";
import TicketCommentsTile from "../../components/Tickets/TicketDetails/TicketCommentsTile";

export default function TicketDetailsPage() {
  const { state } = useTicketContext();
  const location = useLocation();
  const ticket = state?.find(
    (ticket) => ticket?._id === location.state?.ticket?._id
  );

  return (
    <HeaderPanel title={"Ticket Details"}>
      <div className="ticket-details-page-container">
        <TicketDetailsTile ticket={ticket} />
        <TicketCommentsTile ticket={ticket} />
      </div>
    </HeaderPanel>
  );
}
