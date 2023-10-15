import React, { useState } from "react";
import Input from "../../Input";
import Dropdown from "../../Dropdown";
import { dropdownData } from "../../../functions/CreateTicketDropdownData";
import useUserContext from "../../../hooks/useUserContext";
import useProjectContext from "../../../hooks/useProjectContext";
import { validation } from "../../../functions/Validation/ticketValidation";
import useTicketContext from "../../../hooks/useTicketContext";

export default function TicketEditForm({ ticket, handleEdit }) {
  const [formData, setFormData] = useState({
    _id: ticket._id || "",
    summary: ticket.summary || "",
    description: ticket.description || "",
    project: ticket.project || "",
    issueType: ticket.issueType || "",
    priority: ticket.priority || "",
    status: ticket.status || "",
    assignee: ticket.assignee || "",
  });
  const [errors, setErrors] = useState({});
  const { state } = useUserContext();
  const { state: projects } = useProjectContext();
  const { editTicket } = useTicketContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validation(formData);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await editTicket(formData, () => {
          handleEdit();
        });
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
          value={formData.summary}
        />
        <Input
          label="Description"
          setData={setFormData}
          data={formData}
          errors={errors.description}
          value={formData.description}
        />
        <Dropdown
          label={"Project"}
          values={projects?.map((project) => {
            return { label: project.name, value: project._id };
          })}
          value={formData.project}
          setData={setFormData}
          data={formData}
          errors={errors.project}
        />
        <Dropdown
          label={dropdownData.issueType.label}
          values={dropdownData.issueType.values}
          value={formData.issueType}
          setData={setFormData}
          data={formData}
          errors={errors.issueType}
        />
        <Dropdown
          label={dropdownData.priority.label}
          values={dropdownData.priority.values}
          value={formData.priority}
          setData={setFormData}
          data={formData}
          errors={errors.priority}
        />
        <Dropdown
          label={dropdownData.status.label}
          values={dropdownData.status.values}
          value={formData.status}
          setData={setFormData}
          data={formData}
          errors={errors.status}
        />
        <Dropdown
          label={"Assignee"}
          values={state?.allUsers?.map((user) => {
            return { label: user.firstName, value: user._id };
          })}
          value={formData.assignee}
          setData={setFormData}
          data={formData}
          errors={errors.assignee}
        />
        <button type="submit">Save</button>
        <button type="button" onClick={handleEdit}>
          Cancel
        </button>
      </form>
    </div>
  );
}