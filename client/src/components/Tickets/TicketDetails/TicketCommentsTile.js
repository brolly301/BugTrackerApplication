import React, { useState } from "react";
import TicketCommentShow from "./TicketCommentShow";
import "../../../CSS/Tickets/TicketCommentTile.css";
import useTicketContext from "../../../hooks/useTicketContext";
import useUserContext from "../../../hooks/useUserContext";

export default function TicketCommentsTile({ ticket }) {
  const { createComment } = useTicketContext();
  const { state } = useUserContext();
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async () => {
    await createComment({
      _id: ticket?._id,
      comment: comment,
      userID: state.userDetails._id,
      date: new Date(Date.now()).toLocaleString(),
    });
  };

  return (
    <div className="ticket-details-tile">
      <h1>Ticket Comments</h1>
      <div className="ticket-comment-input-container">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter comment.."
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <h5 className="ticket-comments-header">All Comments</h5>
      {ticket?.comments?.map((comment) => {
        return <TicketCommentShow comment={comment} state={state} />;
      })}
    </div>
  );
}
