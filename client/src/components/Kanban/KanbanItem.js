import React from "react";
import "../../CSS/Kanban/KanbanItem.css";
import { DndContext, closestCenter, useDraggable } from "@dnd-kit/core";

export default function KanbanItem({ ticket }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: ticket._id,
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="kanban-item-container">
      {ticket.summary}
    </div>
  );
}
