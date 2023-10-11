import React from "react";
import useTicketContext from "../../hooks/useTicketContext";
import TicketShow from "./TicketShow";

export default function TicketList() {
  const { state } = useTicketContext();

  const renderedList = state.map((ticket) => {
    return <TicketShow key={ticket._id} ticket={ticket} />;
  });

  return <div>{renderedList}</div>;
}
