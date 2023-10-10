import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import Dropdown from "../Dropdown";
import useTicketContext from "../../hooks/useTicketContext";
import { validation } from "../../functions/Validation/ticketValidation";

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
  const [errors, setErrors] = useState({});

  const { createTicket } = useTicketContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validation(formData);
    if (Object.keys(validationErrors).length === 0) {
      try {
        await createTicket(formData);
        setErrors({});
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          label="Summary"
          setData={setFormData}
          data={formData}
          errors={errors.summary}
        />
        <Input
          label="Description"
          setData={setFormData}
          data={formData}
          errors={errors.description}
        />
        <Dropdown
          label={"Project"}
          values={["Project 1", "Project 2"]}
          setData={setFormData}
          data={formData}
          errors={errors.project}
        />
        <Dropdown
          label={"Issue Type"}
          values={["Bug", "Feature Request", "Design Request"]}
          setData={setFormData}
          data={formData}
          errors={errors.issueType}
        />
        <Dropdown
          label={"Priority"}
          values={["Low", "Medium", "High"]}
          setData={setFormData}
          data={formData}
          errors={errors.priority}
        />
        <Dropdown
          label={"Status"}
          values={["Open", "In Progress", "Closed"]}
          setData={setFormData}
          data={formData}
          errors={errors.status}
        />
        <Dropdown
          label={"Assignee"}
          values={["Me Test", "Me Test 2"]}
          setData={setFormData}
          data={formData}
          errors={errors.assignee}
        />
        <Button label="Create" />
      </form>
    </div>
  );
}
