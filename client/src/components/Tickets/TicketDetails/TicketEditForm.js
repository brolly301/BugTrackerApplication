import React, { useState } from "react";
import Input from "../../Input";
import Dropdown from "../../Dropdown";
import { dropdownData } from "../../../functions/CreateTicketDropdownData";
import useUserContext from "../../../hooks/useUserContext";
import useProjectContext from "../../../hooks/useProjectContext";
import { validation } from "../../../functions/Validation/ticketValidation";
import useTicketContext from "../../../hooks/useTicketContext";
import { toast } from "react-toastify";

export default function TicketEditForm({ ticket, handleEdit }) {
  const { state: tickets, editTicket } = useTicketContext();
  const { state } = useUserContext();
  const { state: projects } = useProjectContext();

  const [formData, setFormData] = useState({
    _id: ticket?._id || "",
    summary: ticket?.summary || "",
    description: ticket?.description || "",
    project: ticket?.project || "",
    issueType: ticket?.issueType || "",
    priority: ticket?.priority || "",
    status: ticket?.status || "",
    assignee: ticket?.assignee || "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validation(formData);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await editTicket(formData, () => {
          handleEdit();
          setErrors({});
          toast.success("Ticket edited successfully");
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="ticket-details-tile">
      <form onSubmit={handleSubmit}>
        <div className="ticket-details-tile-container">
          <div className="ticket-details-tile-summary-container">
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
          </div>
          <div className="ticket-details-tile-project-container">
            <Dropdown
              label={"Project"}
              values={projects?.map((project) => {
                return { label: project.name, value: project._id };
              })}
              value={
                typeof formData.project === "object"
                  ? formData?.project?.name
                  : projects?.find((p) => p._id === formData?.project)?.name ||
                    ""
              }
              setData={setFormData}
              data={formData}
              errors={errors.project}
            />
            <Dropdown
              label={"Assignee"}
              values={state?.allUsers?.map((user) => {
                return {
                  label: `${user.firstName} ${user.surname}`,
                  value: user._id,
                };
              })}
              value={
                typeof formData.assignee === "object"
                  ? `${formData?.assignee?.firstName} ${formData?.assignee?.surname}`
                  : `${
                      state.allUsers.find((u) => u._id === formData?.assignee)
                        ?.firstName || ""
                    } ${
                      state.allUsers.find((u) => u._id === formData?.assignee)
                        ?.surname || ""
                    }`
              }
              setData={setFormData}
              data={formData}
              errors={errors.assignee}
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
              label={dropdownData.status.label}
              values={dropdownData.status.values}
              value={formData.status}
              setData={setFormData}
              data={formData}
              errors={errors.status}
            />
            <Dropdown
              label={dropdownData.priority.label}
              values={dropdownData.priority.values}
              value={formData.priority}
              setData={setFormData}
              data={formData}
              errors={errors.priority}
            />
          </div>
        </div>
        <div className="ticket-details-tile-button-container">
          <button type="submit">Save</button>
          <button type="button" onClick={handleEdit}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
