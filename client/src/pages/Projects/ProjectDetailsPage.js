import React from "react";
import { useLocation } from "react-router-dom";

export default function ProjectDetailsPage() {
  const location = useLocation();
  const project = location.state.project;
  return <div>{project.name}</div>;
}
