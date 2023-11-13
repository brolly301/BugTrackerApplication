import React, { useEffect, useState } from "react";
import "../../CSS/Kanban/KanbanItem.css";
import { useDraggable } from "@dnd-kit/core";
import { Link } from "react-router-dom";

export default function KanbanItem({ ticket, isDragging }) {
  const [priorityColor, setPriorityColor] = useState("");
  const [issueTypeColor, setIssueTypeColor] = useState("");

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: ticket.ticketID,
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  useEffect(() => {
    if (ticket.issueType === "Bug") {
      setIssueTypeColor("issue-bug-pill");
    } else if (ticket.issueType === "Feature Request") {
      setIssueTypeColor("issue-feature-pill");
    } else if (ticket.issueType === "Design Request") {
      setIssueTypeColor("issue-design-pill");
    }

    if (ticket.priority === "Low") {
      setPriorityColor("priority-low-pill");
    } else if (ticket.priority === "Medium") {
      setPriorityColor("priority-medium-pill");
    } else if (ticket.priority === "High") {
      setPriorityColor("priority-high-pill");
    }
  }, [ticket.issueType, ticket.priority]);

  const handleLinkClick = (e) => {
    e.preventDefault(); // Prevent the default link click behavior
    // Your custom logic here (e.g., navigate programmatically)
    // You can use the react-router-dom history for programmatic navigation
  };

  //use 2 different components, one without link and one with link, if is dragging, only use the non linked component

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="kanban-item-container">
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/allTickets/tickets/${ticket.ticketID}`}
        state={{ ticket: ticket }}
        onClick={handleLinkClick}>
        <div className="kanban-item-type-container">
          <p className={issueTypeColor}>{ticket.issueType}</p>
          <p className={priorityColor}>{ticket.priority}</p>
        </div>
        <div className="kanban-item-summary-container"> {ticket.summary}</div>
        <hr style={{ border: 0, borderTop: "0.5px solid grey" }} />
        <div className="kanban-item-assignee-container">
          <p>Assignee:</p>
          <p>
            {ticket.assignee?.firstName} {ticket.assignee?.surname}
          </p>
        </div>
      </Link>
    </div>
  );
}
