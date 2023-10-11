import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

export default function UserShow({ user }) {
  return (
    <div>
      <h4>{user.firstName}</h4>
      <h4>{user.surname}</h4>
      <h4>{user.email}</h4>
      <Link to={`/manageUsers/user/${user._id}`} state={{ user: user }}>
        <Button label={"View"} />
      </Link>
    </div>
  );
}
