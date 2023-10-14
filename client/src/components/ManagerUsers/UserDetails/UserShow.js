import React, { useState } from "react";
import UserEditForm from "./UserEditForm";

export default function UserShow({ user }) {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  let content = (
    <div>
      <h3>{user.firstName}</h3>
      <h3>{user.surname}</h3>
      <h3>{user.emailAddress}</h3>
      <h3>{user.phoneNumber}</h3>
      <button onClick={handleEdit}>Edit</button>
      <button>Delete</button>
    </div>
  );

  if (isEdit) content = <UserEditForm user={user} handleEdit={handleEdit} />;

  return <div>{content}</div>;
}
