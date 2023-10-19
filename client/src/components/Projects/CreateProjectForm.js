import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import useProjectContext from "../../hooks/useProjectContext";
import { validation } from "../../functions/Validation/projectValidation";
import Dropdown from "../Dropdown";
import useUserContext from "../../hooks/useUserContext";

export default function CreateProjectForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    projectManager: "",
    teamMembers: [],
  });
  console.log(formData);
  const [errors, setErrors] = useState({});
  const { state } = useUserContext();

  const { createProject } = useProjectContext();

  //   this can be made into a submit handler for every create form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validation(formData);
    if (Object.keys(validationErrors).length === 0) {
      try {
        await createProject(formData);
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
      <h1 className="create-project-title">Enter your project details</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Name"
          setData={setFormData}
          data={formData}
          errors={errors.name}
        />
        <Input
          label="Description"
          setData={setFormData}
          data={formData}
          errors={errors.description}
        />
        <Dropdown
          label="Project Manager"
          setData={setFormData}
          data={formData}
          errors={errors.projectManager}
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
        <Button label="Create" />
      </form>
    </div>
  );
}
