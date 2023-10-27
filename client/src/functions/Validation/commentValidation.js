export const validation = (values) => {
  const errors = {};
  if (!values.comment) {
    errors.comment = "Comment is required";
  }
  return errors;
};
