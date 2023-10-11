import React, { useState } from "react";
import useUserContext from "../../hooks/useUserContext";
import ProfileEditForm from "./ProfileEditForm";

export default function ProfileDetails() {
  const {
    state: { userDetails: user },
  } = useUserContext();

  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  let editForm = <ProfileEditForm user={user} handleEdit={handleEdit} />;

  if (!isEdit) {
    editForm = (
      <div>
        <h3>{user.firstName}</h3>
        <h3>{user.surname}</h3>
        <h3>{user.phoneNumber}</h3>
        <h3>{user.emailAddress}</h3>
        <button onClick={handleEdit}>Edit</button>
      </div>
    );
  }

  return <div>{editForm}</div>;
}
