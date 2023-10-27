import React, { useState } from "react";
import useTicketContext from "../../../hooks/useTicketContext";
import { validation } from "../../../functions/Validation/commentValidation";

export default function TicketCommentsEditShow({
  comment,
  handleEdit,
  ticket,
  user,
}) {
  const { editComment } = useTicketContext();
  const [updatedComment, setUpdatedComment] = useState(comment.comment);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validation({ comment: updatedComment });
    if (Object.keys(validationError).length === 0) {
      try {
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
      } catch (e) {
        console.log(e);
      }
    }
    setErrors(validationError);
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
        {errors.comment && (
          <p className="ticket-edit-comment-error">{errors.comment}</p>
        )}
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
