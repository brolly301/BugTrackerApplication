export const validation = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.description) {
    errors.description = "Description is required";
  }

  if (!values.projectManager) {
    errors.projectManager = "Project Manager is required";
  }

  return errors;
};
