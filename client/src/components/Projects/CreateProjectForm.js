import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import useProjectContext from "../../hooks/useProjectContext";
import { validation } from "../../functions/Validation/projectValidation";
import Dropdown from "../Dropdown";
import useUserContext from "../../hooks/useUserContext";
import { toast } from "react-toastify";
import TeamMembersInput from "../TeamMembersInput";
import TextArea from "../TextArea";

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

  console.log(formData);

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
    <div className='project-details-tile-container'>
      <h1>Project Details</h1>
      <form onSubmit={handleSubmit}>
        <div className='project-details-tile-data-container'>
          <div className='project-details-tile-details-container'>
            <Input
              label='Name'
              setData={setFormData}
              data={formData}
              errors={errors.name}
            />
            <TextArea
              label='Description'
              setData={setFormData}
              data={formData}
              errors={errors.description}
            />
            <Dropdown
              label='Project Manager'
              setData={setFormData}
              data={formData}
              margin={true}
              value={"Select.."}
              errors={errors.projectManager}
              values={state?.allUsers
                ?.filter((user) => user.role === "Project Manager")
                .map((user) => ({
                  label: user.firstName,
                  value: user._id,
                }))}
            />
          </div>
          <div className='project-details-tile-members-container'>
            <TeamMembersInput
              setData={setFormData}
              formData={formData}
              data={state.allUsers}
            />
          </div>
        </div>
        <div className='ticket-form-button-container'>
          <Button label='Create' />
        </div>
      </form>
    </div>
  );
}
