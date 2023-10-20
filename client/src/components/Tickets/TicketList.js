import React from "react";
import TicketShow from "./TicketShow";
import "../../CSS/Tickets/TicketList.css";

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
            <th style={{ backgroundColor: "white", border: 0 }} />
          </tr>
        </thead>
        <tbody>
          {state?.map((item, index) => (
            <tr key={index} className="all-tickets-row">
              <TicketShow ticket={item} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
