import React from "react";
import { useLocation } from "react-router-dom";

export default function UserDetailsPage() {
  const location = useLocation();
  const user = location.state.user;
  return <div>{user.firstName}</div>;
}
