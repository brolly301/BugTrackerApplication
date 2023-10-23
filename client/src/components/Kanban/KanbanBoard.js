import React, { useState } from "react";
import useTicketContext from "../../hooks/useTicketContext";
import KanbanColumn from "./KanbanColumn";
import "../../CSS/Kanban/KanbanBoard.css";
import { DndContext, closestCenter } from "@dnd-kit/core";
import Dropdown from "../Dropdown";
import useProjectContext from "../../hooks/useProjectContext";

export default function KanbanBoard() {
  const { state, editTicket } = useTicketContext();
  const { state: projects } = useProjectContext();
  const [project, setProject] = useState("Security Audit");
  const [isDragging, setIsDragging] = useState(false);

  const labels = ["Open", "In Progress", "Testing", "Closed"];

  const handleEndDrag = (event) => {
    setIsDragging(false);
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }
    editTicket({ _id: active.id, status: over.id });
  };

  const handleStartDrag = () => {
    setIsDragging(true);
  };

  return (
    <div className="kanban-board-container">
      <div className="kanban-board-title-container">
        <h2>{project}</h2>

        <Dropdown
          data={project}
          setData={setProject}
          values={projects.map((project) => {
            return { value: project.name, label: project.name };
          })}
        />
      </div>
      <DndContext
        onDragEnd={handleEndDrag}
        onDragStart={handleStartDrag}
        collisionDetection={closestCenter}>
        <div className="kanban-board-board-container">
          {labels.map((label, index) => (
            <KanbanColumn
              key={index}
              label={label}
              tickets={state.filter((ticket) => {
                return (
                  ticket.status === label && ticket.project?.name === project
                );
              })}
            />
          ))}
        </div>
      </DndContext>
    </div>
  );
}
