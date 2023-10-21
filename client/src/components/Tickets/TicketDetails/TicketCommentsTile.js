import React, { useState } from "react";
import TicketCommentShow from "./TicketCommentShow";
import "../../../CSS/Tickets/TicketCommentTile.css";

export default function TicketCommentsTile() {
  return (
    <div className="ticket-details-tile">
      <h1>Ticket Comments</h1>
      <div className="ticket-comment-input-container">
        <input type="text" placeholder="Enter comment.." />
        <button>Submit</button>
      </div>
      <h5 className="ticket-comments-header">All Comments</h5>
      <TicketCommentShow />
    </div>
  );
}
