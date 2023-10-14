import React from "react";
import UserShow from "./UserShow";
import "../../CSS/ManageUsers/UserList.css";

export default function UserList({ state }) {
  const renderedList = state.map((user) => {
    return <UserShow key={user.id} user={user} />;
  });

  return <div className="user-list-container">{renderedList}</div>;
}
