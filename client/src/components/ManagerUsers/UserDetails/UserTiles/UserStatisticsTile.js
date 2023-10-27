import React from "react";
import "../../../../CSS/ManageUsers/UserStatisticsTile.css";
import UserStatisticStatTile from "./UserStatisticStatTile";
import useTicketContext from "../../../../hooks/useTicketContext";
import useProjectContext from "../../../../hooks/useProjectContext";

export default function UserStatisticsTile({ user }) {
  const { state } = useTicketContext();
  const { state: project } = useProjectContext();

  const openTickets = state?.filter(
    (ticket) => ticket.assignee?._id === user?._id && ticket.status === "Open"
  ).length;

  const closedTickets = state?.filter(
    (ticket) => ticket.assignee?._id === user?._id && ticket.status === "Closed"
  ).length;

  const assignedProjects = project.map((project) =>
    project.teamMembers?.some((member) => member?._id === user?._id)
  );
  const numberOfAssignedProjects = assignedProjects.filter(
    (isAssigned) => isAssigned
  ).length;

  return (
    <div className="user-statistics-tile-container">
      <h3 className="user-statistics-tile-title">User Statistics</h3>
      <UserStatisticStatTile title={"Open Tickets"} data={openTickets} />
      <UserStatisticStatTile title={"Closed Tickets"} data={closedTickets} />
      <UserStatisticStatTile
        title={"Assigned Projects"}
        data={numberOfAssignedProjects}
      />
    </div>
  );
}
