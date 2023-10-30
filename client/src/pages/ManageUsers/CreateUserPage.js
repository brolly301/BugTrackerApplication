import React from "react";
import CreateUserForm from "../../components/ManagerUsers/CreateUserForm";
import HeaderPanel from "../../components/HeaderPanel";

export default function CreateUserPage() {
  return (
    <HeaderPanel title={"Create User"}>
      <div className="create-ticket-panel">
        <CreateUserForm />
      </div>
    </HeaderPanel>
  );
}
