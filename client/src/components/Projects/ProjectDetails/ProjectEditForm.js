import React, { useState } from "react";
import useUserContext from "../../../hooks/useUserContext";
import useProjectContext from "../../../hooks/useProjectContext";
import { validation } from "../../../functions/Validation/projectValidation";
import Input from "../../Input";
import "../../../CSS/Projects/ProjectDetailsEdit.css";
import Dropdown from "../../Dropdown";
import { toast } from "react-toastify";
import EditSaveForm from "../../Modals/EditSaveModal";

export default function ProjectEditForm({ project, handleEdit }) {
  const [formData, setFormData] = useState({
    _id: project._id || "",
    name: project.name || "",
    description: project.description || "",
    projectManager: project.projectManager || "",
    teamMembers: project.teamMembers || [],
  });
  const [errors, setErrors] = useState({});
  const { state } = useUserContext();
  const [modalVisible, setModalVisible] = useState(false);

  const { editProject } = useProjectContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validation(formData);

    if (Object.keys(validationErrors).length === 0) {
      await editProject(formData, () => {
        handleEdit();
        setErrors({});
        toast.success("Project edited successfully");
      });
    } else {
      console.log(validationErrors);
    }
    setErrors(validationErrors);
  };
  console.log(formData.projectManager);

  return (
    <>
      <EditSaveForm
        onSave={handleSubmit}
        onRequestClose={() => setModalVisible(!modalVisible)}
        isOpen={modalVisible}
      />
      <div className="ticket-details-tile">
        <div className="ticket-details-tile-container">
          <div className="ticket-details-tile-summary-container">
            <Input
              label="Name"
              setData={setFormData}
              data={formData}
              errors={errors.name}
              value={formData.name}
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
              label="Project Manager"
              setData={setFormData}
              data={formData}
              errors={errors.projectManager}
              value={
                typeof formData.projectManager === "object"
                  ? `${formData?.projectManager?.firstName} ${formData?.projectManager?.surname}`
                  : `${
                      state?.allUsers?.find(
                        (u) => u._id === formData?.projectManager
                      )?.firstName || ""
                    } ${
                      state?.allUsers?.find(
                        (u) => u._id === formData?.projectManager
                      )?.surname || ""
                    }`
              }
              values={state?.allUsers
                ?.filter((user) => user.role === "Project Manager")
                .map((user) => ({
                  label: user.firstName,
                  value: user._id,
                }))}
            />
            <Dropdown
              label="Team Members"
              setData={setFormData}
              data={formData}
              errors={errors.teamMembers}
              values={state?.allUsers?.map((user) => {
                return { label: user.firstName, value: user._id };
              })}
              multiple={true}
            />
          </div>
          <div className="ticket-details-tile-button-container">
            <button onClick={() => setModalVisible(!modalVisible)}>Save</button>
            <button type="button" onClick={handleEdit}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
