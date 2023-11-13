import React, { useState } from "react";
import useTicketContext from "../../hooks/useTicketContext";
import KanbanColumn from "./KanbanColumn";
import "../../CSS/Kanban/KanbanBoard.css";
import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import Dropdown from "../Dropdown";
import useProjectContext from "../../hooks/useProjectContext";
import { ProjectDetails } from "../../functions/ObjectData";

export default function KanbanBoard() {
  const { state, editTicket } = useTicketContext();
  const { state: projects } = useProjectContext();
  const [project, setProject] = useState(
    projects.map((project) => project.name)[0]
  );
  const [isDragging, setIsDragging] = useState(false);

  const labels = ["Open", "In Progress", "Testing", "Closed"];

  const handleEndDrag = (event) => {
    setIsDragging(false);
    const { active, over } = event;
    console.log(active, over);
    if (active.id === over.id) {
      return;
    }
    editTicket({ ticketID: active.id, status: over.id });
  };

  const handleStartDrag = () => {
    setIsDragging(true);
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { delay: 2 },
    })
  );

  return (
    <div className="kanban-board-container">
      <div className="kanban-board-title-container">
        <h2>{project}</h2>

        <Dropdown
          sensor={sensors}
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
              isDragging={isDragging}
              tickets={state.filter((ticket) => {
                const ticket_project = ProjectDetails(ticket.projectid);
                return (
                  ticket.status === label && ticket_project.name === project
                );
              })}
            />
          ))}
        </div>
      </DndContext>
    </div>
  );
}
