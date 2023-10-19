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
        link={"Tickets"}
        color={"#529EAFB3"}
      />

      <DashboardTile
        title="Open Tickets"
        data={tickets.filter((ticket) => ticket.status === "Open").length}
        link={"Tickets"}
        color={"#82B4E2B3"}
      />
      <DashboardTile
        title="In Progress Tickets"
        data={
          tickets.filter((ticket) => ticket.status === "In Progress").length
        }
        link={"Tickets"}
        color={"#8286E2B3"}
      />
      <DashboardTile
        title="Total Projects"
        data={projects.length}
        link={"Projects"}
        color={"#C285D1B3"}
      />
      <DashboardTile
        title="All Users"
        data={state.allUsers?.length}
        link={"Users"}
        color={"#D18585B3"}
      />
    </div>
  );
}
