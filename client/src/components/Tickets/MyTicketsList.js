import React from "react";
import MyTicketsShow from "./MyTicketsShow";
import "../../CSS/Tickets/TicketList.css";

export default function MyTicketsList({ state }) {
  return (
    <div>
      <table className="all-tickets-table">
        <thead className="all-tickets-table-header">
          <tr className="my-tickets-row">
            <th>Summary</th>
            <th>Project</th>
            <th>Issue Type</th>
            <th>Priority</th>
            <th>Status</th>
            <th style={{ backgroundColor: "white", border: 0 }} />
          </tr>
        </thead>
        <tbody>
          {state?.map((item, index) => (
            <tr key={index} className="my-tickets-row">
              <MyTicketsShow ticket={item} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
