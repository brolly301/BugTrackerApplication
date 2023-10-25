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
    <div className="user-details-tile-container">
      <h3
        className="user-details-tile-title"
        style={{ marginTop: 20, marginBottom: 10 }}>
        Edit Details
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="edit-details-tile-email-container">
          <label htmlFor="" style={{ fontWeight: 600, marginBottom: "5px" }}>
            Profile Image
          </label>
          <input type="file" placeholder="hey" />
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
            w
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
          <div className="user-details-tile-button-container">
            <button type="submit" style={{ width: "100%" }}>
              Save
            </button>
            <button
              onClick={handleEdit}
              style={{ width: "100%" }}
              type="button">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
