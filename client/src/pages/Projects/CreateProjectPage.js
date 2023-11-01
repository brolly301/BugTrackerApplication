import React from "react";
import CreateProjectForm from "../../components/Projects/CreateProjectForm";
import HeaderPanel from "../../components/HeaderPanel";

export default function CreateProjectPage() {
  return (
    <HeaderPanel title={"Create Project"}>
      <div style={{ height: "25px" }} />
      <CreateProjectForm />
    </HeaderPanel>
  );
}
