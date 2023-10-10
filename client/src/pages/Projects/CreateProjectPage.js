import React from "react";
import CreateProjectForm from "../../components/Projects/CreateProjectForm";
import "../../CSS/Pages/CreateProjectPage.css";

export default function CreateProjectPage() {
  return (
    <div className="create-project-page-container">
      <h1>Create Project</h1>
      <CreateProjectForm />
    </div>
  );
}
