import React, { useState } from "react";
import useUserContext from "../../../hooks/useUserContext";
import useProjectContext from "../../../hooks/useProjectContext";
import { validation } from "../../../functions/Validation/projectValidation";
import Input from "../../Input";
import "../../../CSS/Projects/ProjectDetailsEdit.css";
import Dropdown from "../../Dropdown";
import { toast } from "react-toastify";
import EditSaveForm from "../../Modals/EditSaveModal";
import { ProjectManagerDetails } from "../../../functions/ObjectData";
import TeamMembersInput from "../../TeamMembersInput";
import TextArea from "../../TextArea";

export default function ProjectEditForm({ project, handleEdit }) {
  const projectManager = ProjectManagerDetails(project.projectManager);
  const [errors, setErrors] = useState({});
  const { state } = useUserContext();
  const [modalVisible, setModalVisible] = useState(false);
  const { editProject } = useProjectContext();

  const [formData, setFormData] = useState({
    projectID: project.projectID || "",
    name: project.name || "",
    description: project.description || "",
    projectManager: projectManager || "",
    teamMembers: project.teamMembers || [],
  });

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

  console.log(formData);

  return (
    <>
      <EditSaveForm
        onSave={handleSubmit}
        onRequestClose={() => setModalVisible(!modalVisible)}
        isOpen={modalVisible}
      />
      <div className='project-edit-tile-container'>
        <h1>Edit Project Details</h1>
        <div className='project-edit-tile-data-container '>
          <div className='project-edit-tile-details-container '>
            <Input
              label='Name'
              setData={setFormData}
              data={formData}
              errors={errors.name}
              value={formData.name}
            />
            <TextArea
              label='Description'
              setData={setFormData}
              data={formData}
              errors={errors.description}
              value={formData.description}
            />
            <Dropdown
              label='Project Manager'
              setData={setFormData}
              data={formData}
              margin={true}
              errors={errors.projectManager}
              value={`${formData.projectManager.firstName} ${formData.projectManager.surname}`}
              values={state?.allUsers
                ?.filter((user) => user.role === "Project Manager")
                .map((user) => ({
                  label: `${user.firstName} ${user.surname}`,
                  value: user._id,
                }))}
            />
          </div>
          <div className='project-edit-tile-members-container'>
            <TeamMembersInput
              setData={setFormData}
              data={state.allUsers}
              formData={formData}
            />
          </div>
        </div>

        <div className='project-edit-tile-button-container'>
          <button onClick={() => setModalVisible(!modalVisible)}>Save</button>
          <button type='button' onClick={handleEdit}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
