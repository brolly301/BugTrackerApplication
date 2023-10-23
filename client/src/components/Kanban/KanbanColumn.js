import React, { useEffect, useState } from "react";
import KanbanItem from "./KanbanItem";
import "../../CSS/Kanban/KanbanColumn.css";
import { useDroppable } from "@dnd-kit/core";

export default function KanbanColumn({ label, tickets }) {
  const [labelColor, setLabelColor] = useState("");

  const { isOver, setNodeRef } = useDroppable({
    id: label,
  });

  const style = {
    color: isOver ? "green" : undefined,
  };

  useEffect(() => {
    if (label === "Open") {
      setLabelColor("kanban-label-open");
    } else if (label === "In Progress") {
      setLabelColor("kanban-label-in-progress");
    } else if (label === "Testing") {
      setLabelColor("kanban-label-testing");
    } else if (label === "Closed") {
      setLabelColor("kanban-label-closed");
    }
  }, [labelColor]);

  const renderedList = tickets.map((ticket) => {
    return <KanbanItem key={ticket.id} ticket={ticket} />;
  });

  return (
    <div className="kanban-column-container" ref={setNodeRef} style={style}>
      <label className={`kanban-column-label ${labelColor}`}>{label}</label>

      {renderedList}
    </div>
  );
}
