import React from "react";
import CreateProjectForm from "../../components/Projects/CreateProjectForm";
import "../../CSS/Pages/CreateProjectPage.css";
import HeaderPanel from "../../components/HeaderPanel";

export default function CreateProjectPage() {
  return (
    <HeaderPanel title={"Create Project"}>
      <div className="create-project-panel">
        <CreateProjectForm />
      </div>
    </HeaderPanel>
  );
}
