export const validation = (values) => {
  const errors = {};

  if (!values.summary) {
    errors.summary = "Title is required";
  }

  if (!values.description) {
    errors.description = "Description is required";
  }

  if (!values.project) {
    errors.project = "Project is required";
  }

  if (!values.priority) {
    errors.priority = "Priority is required";
  }

  if (!values.status) {
    errors.status = "Status is required";
  }

  if (!values.issueType) {
    errors.issueType = "Type is required";
  }

  if (!values.assignee) {
    errors.assignee = "Assignee is required";
  }

  return errors;
};
