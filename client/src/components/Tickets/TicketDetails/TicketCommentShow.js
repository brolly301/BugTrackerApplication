import React, { useState } from "react";
import useTicketContext from "../../../hooks/useTicketContext";
import TicketCommentsEditShow from "./TicketCommentsEditShow";

export default function TicketCommentShow({ comment, state, ticket }) {
  const user = state?.allUsers?.find((user) => user._id === comment.userID);
  const { deleteComment } = useTicketContext();

  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = async () => {
    await deleteComment(ticket.ticketID, comment.commentID);
  };

  let content = (
    <div className="ticket-comment-show">
      <div>
        <div className="ticket-comment-name-container">
          <h5>{`${user?.firstName} ${user?.surname}`}</h5>
          <h6>{comment.date}</h6>
        </div>
        <p className="ticket-comment-comment">{comment.comment}</p>
      </div>
      <div className="ticket-comment-button-container">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );

  if (isEdit) {
    content = (
      <TicketCommentsEditShow
        comment={comment}
        ticket={ticket}
        user={user}
        handleEdit={handleEdit}
      />
    );
  }

  return <div>{content}</div>;
}
