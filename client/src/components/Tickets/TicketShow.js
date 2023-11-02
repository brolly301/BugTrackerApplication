import React from "react";
import { useState, useEffect } from "react";
import "../../CSS/Tickets/TicketShow.css";
import { Link } from "react-router-dom";
import { AssigneeDetails, ProjectDetails } from "../../functions/ObjectData";

export default function TicketShow({ ticket }) {
  const [issuePillColor, setIssuePillColor] = useState("");
  const [priorityPillColor, setPriorityPillColor] = useState("");
  const [statusPillColor, setStatusPillColor] = useState("");

  const assignee = AssigneeDetails(ticket?.assignee);
  const project = ProjectDetails(ticket?.projectid);

  useEffect(() => {
    if (ticket?.issueType === "Bug") {
      setIssuePillColor("issue-bug-pill");
    } else if (ticket?.issueType === "Feature Request") {
      setIssuePillColor("issue-feature-pill");
    } else if (ticket?.issueType === "Design Request") {
      setIssuePillColor("issue-design-pill");
    }

    if (ticket?.priority === "Low") {
      setPriorityPillColor("priority-low-pill");
    } else if (ticket?.priority === "Medium") {
      setPriorityPillColor("priority-medium-pill");
    } else if (ticket?.priority === "High") {
      setPriorityPillColor("priority-high-pill");
    }

    if (ticket?.status === "Open") {
      setStatusPillColor("status-open-pill");
    } else if (ticket?.status === "In Progress") {
      setStatusPillColor("status-in-progress-pill");
    } else if (ticket?.status === "Testing") {
      setStatusPillColor("status-testing-pill");
    } else if (ticket?.status === "Closed") {
      setStatusPillColor("status-closed-pill");
    }
  }, [ticket?.issueType, ticket?.priority, ticket?.status]);

  return (
    <>
      <td className="ticket--table-text">{ticket?.summary}</td>
      <td className="ticket--table-text">{project?.name}</td>
      <td>
        <p className={`tickets-list-pill ${issuePillColor}`}>
          {ticket?.issueType}
        </p>
      </td>
      <td>
        <p className={`tickets-list-pill ${priorityPillColor}`}>
          {ticket?.priority}
        </p>
      </td>
      <td>
        <p className={`tickets-list-pill ${statusPillColor}`}>
          {ticket?.status}
        </p>
      </td>
      <td className="ticket--table-text">
        {assignee?.firstName} {assignee?.surname}
      </td>

      <td>
        <Link
          to={`/allTickets/tickets/${ticket?.ticketID}`}
          state={{ ticket: ticket }}>
          <button className="ticket-view-button">View</button>
        </Link>
      </td>
    </>
  );
}
