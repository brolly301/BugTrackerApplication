import React, { useEffect, useState } from "react";
import Input from "../Input";
import Button from "../Button";
import Dropdown from "../Dropdown";
import useTicketContext from "../../hooks/useTicketContext";
import { validation } from "../../functions/Validation/ticketValidation";
import useUserContext from "../../hooks/useUserContext";
import { dropdownData } from "../../functions/CreateTicketDropdownData";
import useProjectContext from "../../hooks/useProjectContext";
import { toast } from "react-toastify";

export default function CreateTicketForm() {
  const { state } = useUserContext();
  const [formData, setFormData] = useState({
    ticketID: `${state.userDetails._id}${Math.floor(
      Math.random() * 100
    )}${Date.now()}`,
    summary: "",
    description: "",
    project: "",
    issueType: "",
    priority: "",
    status: "",
    assignee: "",
  });
  const [errors, setErrors] = useState({});
  const { state: projects } = useProjectContext();
  const { createTicket } = useTicketContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validation(formData);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await createTicket(formData, () => {
          setErrors({});
          toast.success("Ticket created successfully");
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <h1 className="create-ticket-title">Enter your ticket details</h1>
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
          values={projects?.map((project) => {
            return { label: project.name, value: project._id };
          })}
          setData={setFormData}
          data={formData}
          errors={errors.project}
        />
        <Dropdown
          label={dropdownData.issueType.label}
          values={dropdownData.issueType.values}
          setData={setFormData}
          data={formData}
          errors={errors.issueType}
        />
        <Dropdown
          label={dropdownData.priority.label}
          values={dropdownData.priority.values}
          setData={setFormData}
          data={formData}
          errors={errors.priority}
        />
        <Dropdown
          label={dropdownData.status.label}
          values={dropdownData.status.values}
          setData={setFormData}
          data={formData}
          errors={errors.status}
        />
        <Dropdown
          label={"Assignee"}
          values={state?.allUsers?.map((user) => {
            return { label: user.firstName, value: user._id };
          })}
          setData={setFormData}
          data={formData}
          errors={errors.assignee}
        />
        <Button label="Submit" />
      </form>
    </div>
  );
}
