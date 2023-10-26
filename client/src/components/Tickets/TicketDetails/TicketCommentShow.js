import React from "react";

export default function TicketCommentShow({ comment, state }) {
  const user = state?.allUsers?.find((user) => user._id === comment.userID);

  return (
    <div className="ticket-comment-show">
      <div>
        <div className="ticket-comment-name-container">
          <h5>{`${user?.firstName} ${user?.surname}`}</h5>
          <h6>{comment.date}</h6>
        </div>
        <p className="ticket-comment-comment">{comment.comment}</p>
      </div>
      <div className="ticket-comment-button-container">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}
