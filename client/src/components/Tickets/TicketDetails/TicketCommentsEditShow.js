import React, { useState } from "react";
import useTicketContext from "../../../hooks/useTicketContext";

export default function TicketCommentsEditShow({
  comment,
  handleEdit,
  ticket,
  user,
}) {
  const { editComment } = useTicketContext();
  const [updatedComment, setUpdatedComment] = useState(comment.comment);

  const handleSubmit = async () => {
    await editComment(
      {
        commentID: comment.commentID,
        ticketID: ticket.ticketID,
        comment: updatedComment,
      },
      () => {
        handleEdit();
      }
    );
  };

  const handleChange = (e) => {
    setUpdatedComment(e.target.value);
  };

  return (
    <div className="ticket-comment-show">
      <div>
        <div className="ticket-comment-name-container">
          <h5>{`${user?.firstName} ${user?.surname}`}</h5>
          <h6>{comment.date}</h6>
        </div>
        <p className="ticket-comment-comment">
          <input onChange={handleChange} type="text" value={updatedComment} />
        </p>
      </div>
      <div className="ticket-comment-button-container">
        <button onClick={handleSubmit}>Save</button>
        <button onClick={handleEdit}>Cancel</button>
      </div>
    </div>
  );
}
