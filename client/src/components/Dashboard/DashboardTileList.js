import React from "react";
import DashboardTile from "./DashboardTile";
import useTicketContext from "../../hooks/useTicketContext";
import useUserContext from "../../hooks/useUserContext";
import useProjectContext from "../../hooks/useProjectContext";
import "../../CSS/Dashboard/DashboardTiles.css";

export default function DashboardTileList() {
  const { state } = useUserContext();
  const { state: projects } = useProjectContext();
  const { state: tickets } = useTicketContext();

  return (
    <div className="dashboard-tile-list-container">
      <DashboardTile
        title="Total Tickets"
        data={tickets.length}
        linkText={"Tickets"}
        color={"#529EAFB3"}
        link={"/allTickets"}
      />

      <DashboardTile
        title="Open Tickets"
        data={tickets.filter((ticket) => ticket.status === "Open").length}
        linkText={"Tickets"}
        link={"/allTickets"}
        color={"#82B4E2B3"}
      />
      <DashboardTile
        title="In Progress Tickets"
        data={
          tickets.filter((ticket) => ticket.status === "In Progress").length
        }
        linkText={"Tickets"}
        link={"/allTickets"}
        color={"#8286E2B3"}
      />
      <DashboardTile
        title="Total Projects"
        data={projects.length}
        linkText={"Projects"}
        link={"/allProjects"}
        color={"#C285D1B3"}
      />
      <DashboardTile
        title="All Users"
        data={state.allUsers?.length}
        linkText={"Users"}
        link={"/manageUsers"}
        color={"#D18585B3"}
      />
    </div>
  );
}
