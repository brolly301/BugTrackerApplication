import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import useProjectContext from "../../hooks/useProjectContext";
import { validation } from "../../functions/Validation/projectValidation";

export default function CreateProjectForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    projectManager: "",
  });
  const [errors, setErrors] = useState({});

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
        <Input
          label="Project Manager"
          setData={setFormData}
          data={formData}
          errors={errors.projectManager}
        />
        <Button label="Create" />
      </form>
    </div>
  );
}
