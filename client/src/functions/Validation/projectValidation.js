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

  if (!values.teamMembers || values.teamMembers.length === 0) {
    errors.teamMembers = "At least one team member is required.";
  }

  return errors;
};
