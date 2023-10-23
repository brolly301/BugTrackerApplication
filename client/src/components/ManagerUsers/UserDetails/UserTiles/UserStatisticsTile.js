import React from "react";
import "../../../../CSS/ManageUsers/UserStatisticsTile.css";
import UserStatisticStatTile from "./UserStatisticStatTile";
import useTicketContext from "../../../../hooks/useTicketContext";
import useUserTicketsContext from "../../../../hooks/useUserTicketsContext";

export default function UserStatisticsTile({ user }) {
  const { state } = useUserTicketsContext();
  console.log(state);

  return (
    <div className="user-statistics-tile-container">
      <UserStatisticStatTile title={"Open Tickets"} />
      <UserStatisticStatTile title={"Closed Tickets"} />
      <UserStatisticStatTile title={"Open Tickets"} />
    </div>
  );
}
