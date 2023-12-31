import React, { useState } from "react";
import Input from "../../Input";
import { validation } from "../../../functions/Validation/profileValidation";
import useUserContext from "../../../hooks/useUserContext";
import { toast } from "react-toastify";
import EditSaveModal from "../../Modals/EditSaveModal";
import { useLocation } from "react-router-dom";
import Dropdown from "../../Dropdown";
import { manageUserFilters } from "../../../functions/FilterOptions";
import ImageUpload from "./ImageUpload";

export default function UserEditForm({ user, handleEdit }) {
  const [editForm, setEditForm] = useState({
    userID: user.userID || "",
    firstName: user.firstName || "",
    surname: user.surname || "",
    phoneNumber: user.phoneNumber || "",
    emailAddress: user.emailAddress || "",
    role: user.role || "",
  });
  const [errors, setErrors] = useState({});
  const { editAllUsers, editProfile } = useUserContext();
  const [modalVisible, setModalVisible] = useState(false);

  const { pathname } = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validation(editForm);
    if (Object.keys(validationErrors).length === 0) {
      pathname === "/profile"
        ? await editProfile(editForm, () => {
            handleEdit();
            setErrors({});
            toast.success("Profile Updated Successfully");
          })
        : await editAllUsers(editForm, () => {
            handleEdit();
            setErrors({});
            toast.success("Profile Updated Successfully");
          });
    } else {
      console.log(validationErrors);
    }
    setErrors(validationErrors);
  };

  console.log(editForm);

  return (
    <>
      <EditSaveModal
        onRequestClose={() => setModalVisible(!modalVisible)}
        isOpen={modalVisible}
        onSave={handleSubmit}
      />
      <div className="user-details-tile-container">
        <h3
          className="user-details-tile-title"
          style={{ marginTop: 20, marginBottom: 10 }}>
          Edit Details
        </h3>
        <div className="edit-details-tile-email-container">
          {/* <label htmlFor="" style={{ fontWeight: 600, marginBottom: "5px" }}>
            Profile Image
          </label> */}
          <ImageUpload />
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
          <Dropdown
            label={"Role"}
            value={editForm.role}
            values={manageUserFilters}
            errors={errors.role}
            data={editForm}
            setData={setEditForm}
          />

          <div className="user-details-tile-button-container">
            <button
              onClick={() => setModalVisible(!modalVisible)}
              style={{ width: "100%" }}>
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
      </div>
    </>
  );
}
