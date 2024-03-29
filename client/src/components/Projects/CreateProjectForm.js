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
import { v4 as uuidv4 } from "uuid";

export default function CreateProjectForm() {
  const { state } = useUserContext();
  const [errors, setErrors] = useState({});
  const { createProject } = useProjectContext();

  const [formData, setFormData] = useState({
    projectid: "",
    name: "",
    description: "",
    projectManager: "",
    teamMembers: [],
  });

  //   this can be made into a submit handler for every create form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProjectID = uuidv4();
    const validationErrors = validation({
      ...formData,
      projectid: newProjectID,
    });
    if (Object.keys(validationErrors).length === 0) {
      try {
        await createProject(
          {
            ...formData,
            projectid: newProjectID,
          },
          () => {
            toast.success("Project created successfully");
            setErrors({});
          }
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="project-details-tile-container">
      <h1>Project Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="project-details-tile-data-container">
          <div className="project-details-tile-details-container">
            <Input
              label="Name"
              setData={setFormData}
              data={formData}
              errors={errors.name}
            />
            <TextArea
              label="Description"
              setData={setFormData}
              data={formData}
              errors={errors.description}
            />
          </div>
          <div className="project-details-tile-members-container">
            <TeamMembersInput
              setData={setFormData}
              formData={formData}
              data={state.allUsers}
            />
            <Dropdown
              label="Project Manager"
              setData={setFormData}
              data={formData}
              margin={true}
              value={"Select.."}
              errors={errors.projectManager}
              values={state?.allUsers
                ?.filter((user) => user.role === "Project Manager")
                .map((user) => ({
                  label: user.firstName,
                  value: user.userID,
                }))}
            />
          </div>
        </div>
        <div className="project-form-button-container">
          <Button label="Create" />
        </div>
      </form>
    </div>
  );
}
