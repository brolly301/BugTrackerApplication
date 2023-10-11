import React from "react";
import MyTicketsShow from "./MyTicketsShow";
import useTicketContext from "../../hooks/useTicketContext";

export default function MyTicketsList() {
  const {
    state: { userTickets },
  } = useTicketContext();

  const renderedList = userTickets.map((ticket) => {
    return <MyTicketsShow key={ticket._id} ticket={ticket} />;
  });

  return <div>{renderedList}</div>;
}
