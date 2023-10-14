import React, { useState } from "react";
import Input from "../../Input";
import { validation } from "../../../functions/Validation/profileValidation";
import useUserContext from "../../../hooks/useUserContext";

export default function UserEditForm({ user, handleEdit }) {
  const [editForm, setEditForm] = useState({
    _id: user._id || "",
    firstName: user.firstName || "",
    surname: user.surname || "",
    phoneNumber: user.phoneNumber || "",
    emailAddress: user.emailAddress || "",
  });
  const [errors, setErrors] = useState({});
  const { editAllUsers } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validation(editForm);
    if (Object.keys(validationErrors).length === 0) {
      await editAllUsers(editForm);
      handleEdit();
      setErrors({});
    } else {
      console.log(validationErrors);
    }
    setErrors(validationErrors);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          label={"First Name"}
          value={editForm.firstName}
          errors={errors.firstName}
          data={editForm}
          setData={setEditForm}
        />
        <Input
          label={"Surname"}
          value={editForm.surname}
          errors={errors.surname}
          data={editForm}
          setData={setEditForm}
        />
        <Input
          label={"Phone Number"}
          value={editForm.phoneNumber}
          errors={errors.phoneNumber}
          data={editForm}
          setData={setEditForm}
        />
        <Input
          label={"Email Address"}
          value={editForm.emailAddress}
          errors={errors.emailAddress}
          data={editForm}
          setData={setEditForm}
        />
        <button type="submit">Save</button>
        <button onClick={handleEdit} type="button">
          Cancel
        </button>
      </form>
    </div>
  );
}
