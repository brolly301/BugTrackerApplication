import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import useProjectContext from "../../hooks/useProjectContext";
import { validation } from "../../functions/Validation/projectValidation";
import Dropdown from "../Dropdown";
import useUserContext from "../../hooks/useUserContext";
import { toast } from "react-toastify";

export default function CreateProjectForm() {
  const { state } = useUserContext();
  const [errors, setErrors] = useState({});
  const { createProject } = useProjectContext();

  const [formData, setFormData] = useState({
    projectID: `${state.userDetails._id}${Math.floor(
      Math.random() * 100
    )}${Date.now()}`,
    name: "",
    description: "",
    projectManager: "",
    teamMembers: [],
  });

  //   this can be made into a submit handler for every create form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validation(formData);
    if (Object.keys(validationErrors).length === 0) {
      try {
        await createProject(formData, () => {
          toast.success("Project created successfully");
          setErrors({});
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
          value={"Select.."}
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
