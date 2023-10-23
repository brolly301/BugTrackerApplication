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

  const labels = ["Open", "In Progress", "Testing", "Closed"];

  const handleEndDrag = (event) => {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }
    editTicket({ _id: active.id, status: over.id });
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

      <DndContext onDragEnd={handleEndDrag} collisionDetection={closestCenter}>
        <div className="kanban-board-board-container">
          <KanbanColumn
            label={labels[0]}
            tickets={state.filter((ticket) => {
              return (
                ticket.status === labels[0] && ticket.project?.name === project
              );
            })}
          />
          <KanbanColumn
            label={labels[1]}
            tickets={state.filter((ticket) => {
              return (
                ticket.status === labels[1] && ticket.project?.name === project
              );
            })}
          />
          <KanbanColumn
            label={labels[2]}
            tickets={state.filter((ticket) => {
              return (
                ticket.status === labels[2] && ticket.project?.name === project
              );
            })}
          />
          <KanbanColumn
            label={labels[3]}
            tickets={state.filter((ticket) => {
              return (
                ticket.status === labels[3] && ticket.project?.name === project
              );
            })}
          />
        </div>
      </DndContext>
    </div>
  );
}
