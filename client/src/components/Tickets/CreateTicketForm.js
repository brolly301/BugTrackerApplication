import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import Dropdown from "../Dropdown";
import useTicketContext from "../../hooks/useTicketContext";

export default function CreateTicketForm() {
  const [formData, setFormData] = useState({
    summary: "",
    description: "",
    project: "",
    issueType: "",
    priority: "",
    status: "",
    assignee: "",
  });

  const { createTicket } = useTicketContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTicket(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input label='Summary' setData={setFormData} data={formData} />
        <Input label='Description' setData={setFormData} data={formData} />
        <Dropdown
          label={"Project"}
          values={["Project 1", "Project 2"]}
          setData={setFormData}
          data={formData}
        />
        <Dropdown
          label={"Issue Type"}
          values={["Bug", "Feature Request", "Design Request"]}
          setData={setFormData}
          data={formData}
        />
        <Dropdown
          label={"Priority"}
          values={["Low", "Medium", "High"]}
          setData={setFormData}
          data={formData}
        />
        <Dropdown
          label={"Status"}
          values={["Open", "In Progress", "Closed"]}
          setData={setFormData}
          data={formData}
        />
        <Dropdown
          label={"Assignee"}
          values={["Me Test", "Me Test 2"]}
          setData={setFormData}
          data={formData}
        />
        <Button label='Create' />
      </form>
    </div>
  );
}
