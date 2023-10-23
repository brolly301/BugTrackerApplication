import React from "react";
import HeaderPanel from "../components/HeaderPanel";
import KanbanBoard from "../components/Kanban/KanbanBoard";
import "../CSS/Pages/KanbanPage.css";

export default function KanbanPage() {
  return (
    <HeaderPanel title={"Kanban Board"}>
      <div className="kanban-page-container">
        <KanbanBoard />
      </div>
    </HeaderPanel>
  );
}
