import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import useUserContext from "../../hooks/useUserContext";
import { validation } from "../../functions/Validation/profileValidation";
import { toast } from "react-toastify";

export default function ProfileEditForm({ handleEdit, user }) {
  const { editProfile } = useUserContext();
  const [editForm, setEditForm] = useState({
    firstName: user.firstName || "",
    surname: user.surname || "",
    phoneNumber: user.phoneNumber || "",
    emailAddress: user.emailAddress || "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validation(editForm);
    if (Object.keys(validationErrors).length === 0) {
      await editProfile(editForm, () => {
        handleEdit();
        setErrors({});
        toast.success("Profile updated successfully");
      });
    } else {
      console.log(validationErrors);
    }
    setErrors(validationErrors);
  };

  return (
    <div>
      <h3>Edit Profile</h3>
      <form on onSubmit={handleSubmit}>
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
        <Button label={"Save"} type="submit" />
        <Button label={"Cancel"} type="button" onClick={handleEdit} />
      </form>
    </div>
  );
}
