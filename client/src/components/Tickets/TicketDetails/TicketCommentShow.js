import React from "react";

export default function TicketCommentShow() {
  return (
    <div className="ticket-comment-show">
      <div>
        <div className="ticket-comment-name-container">
          <h5>Marc Brolly</h5>
          <h6>October 18th at 8.29pm</h6>
        </div>
        <p className="ticket-comment-comment">
          Comment Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Eveniet, vero veniam! Debitis, rerum quae nulla iste alias tempore
          doloribus deserunt illo at mollitia minima nemo nostrum laudantium sed
          aliquid ullam.
        </p>
      </div>
      <div className="ticket-comment-button-container">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}
