import React from "react";
import DashboardTile from "./DashboardTile";
import useTicketContext from "../../hooks/useTicketContext";
import useUserContext from "../../hooks/useUserContext";
import useProjectContext from "../../hooks/useProjectContext";

export default function DashboardTileList() {
  const { state } = useUserContext();
  const { state: projects } = useProjectContext();
  const { state: tickets } = useTicketContext();

  return (
    <div>
      <DashboardTile title="All Projects" data={projects.length} />
      <DashboardTile title="All Tickets" data={tickets.length} />
      <DashboardTile title="All Users" data={state.allUsers?.length} />
      <DashboardTile
        title="Average Tickets Per User"
        data={tickets.length / state.allUsers?.length}
      />
      <DashboardTile
        title="Average Tickets Per Project"
        data={projects.length / tickets.length}
      />
    </div>
  );
}
