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
import TextArea from "../TextArea";

export default function CreateTicketForm() {
  const { state } = useUserContext();
  const [formData, setFormData] = useState({
    ticketID: `${state.userDetails._id}${Math.floor(
      Math.random() * 100
    )}${Date.now()}`,
    summary: "",
    description: "",
    projectid: "",
    issueType: "",
    priority: "",
    status: "",
    assignee: "",
    comments: [],
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

  console.log(formData);

  return (
    <div className='ticket-details-tile'>
      <h1>Ticket Details</h1>
      <form onSubmit={handleSubmit}>
        <div className='ticket-details-tile-container'>
          <div className='ticket-details-tile-summary-container'>
            <Input
              label='Summary'
              setData={setFormData}
              data={formData}
              errors={errors.summary}
            />
            <TextArea
              label='Description'
              setData={setFormData}
              data={formData}
              errors={errors.description}
            />
          </div>
          <div className='ticket-details-tile-project-container'>
            <Dropdown
              label={"ProjectID"}
              values={projects?.map((project) => {
                return { label: project.name, value: project.projectid };
              })}
              setData={setFormData}
              data={formData}
              // errors={errors.project}
              margin={true}
              value={"Select.."}
            />
            <Dropdown
              label={dropdownData.issueType.label}
              values={dropdownData.issueType.values}
              setData={setFormData}
              data={formData}
              errors={errors.issueType}
              margin={true}
              value={"Select.."}
            />
            <Dropdown
              label={dropdownData.priority.label}
              values={dropdownData.priority.values}
              setData={setFormData}
              data={formData}
              errors={errors.priority}
              margin={true}
              value={"Select.."}
            />
            <Dropdown
              label={dropdownData.status.label}
              values={dropdownData.status.values}
              setData={setFormData}
              data={formData}
              errors={errors.status}
              margin={true}
              value={"Select.."}
            />
            <Dropdown
              label={"Assignee"}
              values={state?.allUsers?.map((user) => {
                return { label: user.firstName, value: user.userID };
              })}
              setData={setFormData}
              data={formData}
              errors={errors.assignee}
              margin={true}
              value={"Select.."}
            />
          </div>
        </div>
        <div className='ticket-form-button-container'>
          <Button label='Submit' />
        </div>
      </form>
    </div>
  );
}
