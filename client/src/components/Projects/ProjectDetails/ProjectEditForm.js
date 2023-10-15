import React, { useState } from "react";
import useUserContext from "../../../hooks/useUserContext";
import useProjectContext from "../../../hooks/useProjectContext";
import { validation } from "../../../functions/Validation/projectValidation";
import Input from "../../Input";
import Dropdown from "../../Dropdown";

export default function ProjectEditForm({ project, handleEdit }) {
  const [formData, setFormData] = useState({
    _id: project._id || "",
    name: project.name || "",
    description: project.description || "",
    projectManager: project.projectManager || "",
  });
  const [errors, setErrors] = useState({});
  const { state } = useUserContext();

  const { editProject } = useProjectContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validation(formData);

    await editProject(formData, () => {
      handleEdit();
      setErrors({});
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        {/* <Dropdown
          label="Project Manager"
          setData={setFormData}
          data={formData}
          errors={errors.projectManager}
          value={formData.projectManager}
          values={state?.allUsers
            ?.filter((user) => user.role === "Project Manager")
            .map((user) => ({
              label: user.firstName,
              value: user._id,
            }))}
        /> */}
        {/* <Dropdown
          label="Team Members"
          setData={setFormData}
          data={formData}
          errors={errors.teamMembers}
          values={state?.allUsers?.map((user) => {
            return { label: user.firstName, value: user._id };
          })}
          multiple={true}
        /> */}
        <button type="submit">Save</button>
        <button type="button" onClick={handleEdit}>
          Cancel
        </button>
      </form>
    </div>
  );
}
