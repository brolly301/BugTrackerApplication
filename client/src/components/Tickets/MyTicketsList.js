import React from "react";
import MyTicketsShow from "./MyTicketsShow";
import useTicketContext from "../../hooks/useTicketContext";
import useUserTicketsContext from "../../hooks/useUserTicketsContext";

export default function MyTicketsList() {
  const { state } = useUserTicketsContext();
  const renderedList = state.map((ticket) => {
    return <MyTicketsShow key={ticket._id} ticket={ticket} />;
  });
  return <div>{renderedList}</div>;
}
