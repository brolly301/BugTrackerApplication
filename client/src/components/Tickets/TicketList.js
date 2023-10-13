import React from "react";
import useTicketContext from "../../hooks/useTicketContext";
import TicketShow from "./TicketShow";
import "../../CSS/Tickets/TicketList.css";

export default function TicketList() {
  const { state } = useTicketContext();

  // const renderedList = state.tickets.map((ticket) => {
  //   return <TicketShow key={ticket._id} ticket={ticket} />;
  // });

  return (
    <div>
      <table className="all-tickets-table">
        <thead>
          <tr className="all-tickets-row">
            <th>Summary</th>
            <th>Description</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Issue Type</th>
            <th>Project</th>
            <th>Assignee</th>
          </tr>
        </thead>
        <tbody>
          {state.tickets.map((item, index) => (
            <tr key={index} className="all-tickets-row">
              <TicketShow ticket={item} />
              <button>View</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
