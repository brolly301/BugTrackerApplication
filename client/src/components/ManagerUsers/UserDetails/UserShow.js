import React, { useState } from "react";
import UserEditForm from "./UserEditForm";
import useUserContext from "../../../hooks/useUserContext";
import { useNavigate } from "react-router-dom";

export default function UserShow({ user }) {
  const [isEdit, setIsEdit] = useState(false);
  const { deleteAllUsers } = useUserContext();
  const redirect = useNavigate();

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await deleteAllUsers(user._id, () => {
      redirect("/manageUsers");
    });
  };

  let content = (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>{user?.firstName}</h3>
        <h3>{user?.surname}</h3>
        <h3>{user?.emailAddress}</h3>
        <h3>{user?.phoneNumber}</h3>
        <button type="button" onClick={handleEdit}>
          Edit
        </button>
        <button type="submit">Delete</button>
      </form>
    </div>
  );

  if (isEdit) content = <UserEditForm user={user} handleEdit={handleEdit} />;

  return <div>{content}</div>;
}
