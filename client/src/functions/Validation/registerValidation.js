export const validation = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "First Name is required";
  }

  if (!values.surname) {
    errors.surname = "Surname is required";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "Phone Number is required";
  }

  if (!values.emailAddress) {
    errors.emailAddress = "Email is required";
  }

  if (!values.password) {
    errors.password = "Password is required";
  }

  return errors;
};
