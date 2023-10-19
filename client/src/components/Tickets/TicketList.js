import React from "react";
import TicketShow from "./TicketShow";
import "../../CSS/Tickets/TicketList.css";
import { Link } from "react-router-dom";

export default function TicketList({ state }) {
  return (
    <div>
      <table className="all-tickets-table">
        <thead className="all-tickets-table-header">
          <tr className="all-tickets-row">
            <th>Summary</th>
            <th>Project</th>
            <th>Issue Type</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Assignee</th>
          </tr>
        </thead>
        <tbody>
          {state?.map((item, index) => (
            <tr key={index} className="all-tickets-row">
              <TicketShow ticket={item} />
              <Link
                to={`/allTickets/tickets/${item._id}`}
                state={{ ticket: item }}></Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
