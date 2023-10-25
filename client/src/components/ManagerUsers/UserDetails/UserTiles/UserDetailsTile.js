import React, { useState } from "react";
import UserEditForm from "../UserEditForm";
import useUserContext from "../../../../hooks/useUserContext";
import { useNavigate } from "react-router-dom";
import "../../../../CSS/ManageUsers/UserDetailsTile.css";
import { FaPhone, FaRegEnvelope } from "react-icons/fa";
import DeleteModal from "../../../Modals/DeleteModal";
import { toast } from "react-toastify";

export default function UserShow({ user }) {
  const [isEdit, setIsEdit] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { deleteAllUsers } = useUserContext();
  const redirect = useNavigate();

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await deleteAllUsers(user?._id, () => {
      redirect("/manageUsers");
      setModalVisible(false);
      toast.success("User deleted successfully");
    });
  };

  let content = (
    <div className="user-details-tile-container">
      <DeleteModal
        isOpen={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        onDelete={handleSubmit}
        type="User"
      />
      <h3 className="user-details-tile-title">Personal Details</h3>

      <img
        className="user-details-tile-image"
        src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=1924&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <h3 className="user-details-tile-name">
        {user?.firstName} {user?.surname}
      </h3>
      <h3 className="user-details-tile-role">{user?.role}</h3>
      <div className="user-details-tile-email-container">
        <div className="user-details-tile-icon-container">
          <FaPhone className="user-details-tile-icon" />
          <h4>{user?.phoneNumber}</h4>
        </div>
        <div className="user-details-tile-icon-container">
          <FaRegEnvelope className="user-details-tile-icon" />
          <h4>{user?.emailAddress}</h4>
        </div>
        <hr className="user-details-tile-hr" />
        <div className="user-details-tile-button-container">
          <button type="button" onClick={handleEdit}>
            Edit Profile
          </button>
          <button onClick={() => setModalVisible(!modalVisible)}>
            Delete User
          </button>
        </div>
      </div>
    </div>
  );

  if (isEdit) content = <UserEditForm user={user} handleEdit={handleEdit} />;

  return <>{content}</>;
}
