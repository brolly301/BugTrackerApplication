import React, { useEffect, useState } from "react";
import KanbanItem from "./KanbanItem";
import "../../CSS/Kanban/KanbanColumn.css";
import { useDroppable } from "@dnd-kit/core";
import Placeholder from "../Placeholder";

export default function KanbanColumn({ label, tickets, isDragging }) {
  const [labelColor, setLabelColor] = useState("");

  const { isOver, setNodeRef } = useDroppable({
    id: label,
  });
  console.log(isOver);

  const style = {
    fontWeight: isOver ? "bold" : undefined,
    backgroundColor: isOver ? "lightgrey" : undefined,
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

  return (
    <div className="kanban-column-container" ref={setNodeRef} style={style}>
      <label className={`kanban-column-label ${labelColor}`}>{label}</label>

      {tickets.map((ticket) => {
        return (
          <KanbanItem
            isDragging={isOver}
            key={ticket.ticketID}
            ticket={ticket}
          />
        );
      })}
    </div>
  );
}
