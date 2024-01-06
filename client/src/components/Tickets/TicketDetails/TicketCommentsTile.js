import React, { useState } from "react";
import TicketCommentShow from "./TicketCommentShow";
import "../../../CSS/Tickets/TicketCommentTile.css";
import useTicketContext from "../../../hooks/useTicketContext";
import useUserContext from "../../../hooks/useUserContext";
import { validation } from "../../../functions/Validation/commentValidation";

export default function TicketCommentsTile({ ticket }) {
  const { createComment } = useTicketContext();
  const { state } = useUserContext();
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState({});

  console.log(ticket);

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validation({ comment });
    if (Object.keys(validationErrors).length === 0) {
      try {
        await createComment({
          ticketID: ticket.ticketID,
          commentID: `${state.userDetails._id}${Math.floor(
            Math.random() * 100
          )}${Date.now()}`,
          comment: comment,
          userID: state.userDetails._id,
          date: new Date(Date.now()).toLocaleString(),
        });
      } catch (error) {
        console.log(error);
      }
    }
    setErrors(validationErrors);
  };

  return (
    <div>
      <div className="ticket-details-tile">
        <h1>Ticket Comments</h1>
        {errors.comment && (
          <p className="ticket-comment-error">{errors.comment}</p>
        )}
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
          return (
            <TicketCommentShow
              comment={comment}
              state={state}
              ticket={ticket}
            />
          );
        })}
      </div>
    </div>
  );
}
