import React from "react";
import useUserContext from "../../hooks/useUserContext";
import UserShow from "./UserShow";
import "../../CSS/ManageUsers/UserList.css";

export default function UserList() {
  const { state } = useUserContext();

  const renderedList = state.allUsers.map((user) => {
    return <UserShow key={user.id} user={user} />;
  });

  return <div className="user-list-container">{renderedList}</div>;
}
