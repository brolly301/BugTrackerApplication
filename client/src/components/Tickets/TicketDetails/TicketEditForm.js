import React, { useState } from "react";
import Input from "../../Input";
import Dropdown from "../../Dropdown";
import { dropdownData } from "../../../functions/CreateTicketDropdownData";
import useUserContext from "../../../hooks/useUserContext";
import useProjectContext from "../../../hooks/useProjectContext";
import { validation } from "../../../functions/Validation/ticketValidation";
import useTicketContext from "../../../hooks/useTicketContext";
import { toast } from "react-toastify";
import EditSaveModal from "../../Modals/EditSaveModal";
import TextArea from "../../TextArea";
import { AssigneeDetails, ProjectDetails } from "../../../functions/ObjectData";

export default function TicketEditForm({ ticket, handleEdit }) {
  const { state: tickets, editTicket } = useTicketContext();
  const { state } = useUserContext();
  const { state: projects } = useProjectContext();
  const [modalVisible, setModalVisible] = useState(false);

  const [formData, setFormData] = useState({
    ticketID: ticket?.ticketID || "",
    summary: ticket?.summary || "",
    description: ticket?.description || "",
    projectid: ticket?.projectid || "",
    issueType: ticket?.issueType || "",
    priority: ticket?.priority || "",
    status: ticket?.status || "",
    assignee: ticket?.assignee || "",
  });

  console.log(formData);

  const [errors, setErrors] = useState({});
  const project = ProjectDetails(ticket?.projectid);
  const assignee = AssigneeDetails(ticket?.assignee);

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

  console.log(formData);

  return (
    <>
      <EditSaveModal
        onRequestClose={() => setModalVisible(!modalVisible)}
        isOpen={modalVisible}
        onSave={handleSubmit}
      />
      <div className='ticket-details-tile'>
        <h1>Edit Ticket Details</h1>
        <div className='ticket-details-tile-container'>
          <div className='ticket-details-tile-summary-container'>
            <Input
              label='Summary'
              setData={setFormData}
              data={formData}
              errors={errors.summary}
              value={formData.summary}
            />
            <TextArea
              label='Description'
              setData={setFormData}
              data={formData}
              errors={errors.description}
              value={formData.description}
            />
          </div>
          <div className='ticket-details-tile-project-container'>
            <Dropdown
              label={"Project"}
              values={projects?.map((project) => {
                return { label: project.name, value: project.projectid };
              })}
              value={project?.name}
              setData={setFormData}
              margin={true}
              data={formData}
              errors={errors.project}
            />
            <Dropdown
              label={"Assignee"}
              values={state?.allUsers?.map((user) => {
                return {
                  label: `${user.firstName} ${user.surname}`,
                  value: user.userID,
                };
              })}
              value={assignee?.firstName}
              setData={setFormData}
              data={formData}
              errors={errors.assignee}
              margin={true}
            />
            <Dropdown
              label={dropdownData.issueType.label}
              values={dropdownData.issueType.values}
              value={formData.issueType}
              setData={setFormData}
              data={formData}
              errors={errors.issueType}
              margin={true}
            />
            <Dropdown
              label={dropdownData.status.label}
              values={dropdownData.status.values}
              value={formData.status}
              setData={setFormData}
              data={formData}
              errors={errors.status}
              margin={true}
            />
            <Dropdown
              label={dropdownData.priority.label}
              values={dropdownData.priority.values}
              value={formData.priority}
              setData={setFormData}
              data={formData}
              errors={errors.priority}
              margin={true}
            />
          </div>
        </div>
        <div className='ticket-details-tile-button-container'>
          <button onClick={() => setModalVisible(!modalVisible)}>Save</button>
          <button type='button' onClick={handleEdit}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
