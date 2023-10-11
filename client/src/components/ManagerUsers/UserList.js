import React from "react";
import useUserContext from "../../hooks/useUserContext";
import UserShow from "./UserShow";

export default function UserList() {
  const { state } = useUserContext();

  const renderedList = state.allUsers.map((user) => {
    return <UserShow key={user.id} user={user} />;
  });

  return <div>{renderedList}</div>;
}
