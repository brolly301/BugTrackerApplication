import React from "react";
import { useLocation } from "react-router-dom";
import UserShow from "../../components/ManagerUsers/UserDetails/UserShow";
import useUserContext from "../../hooks/useUserContext";
import HeaderPanel from "../../components/HeaderPanel";

export default function UserDetailsPage() {
  const { state } = useUserContext();
  const location = useLocation();
  const user = state?.allUsers?.find(
    (user) => user._id === location.state.user._id
  );

  return (
    <HeaderPanel title={"User Details"}>
      <UserShow user={user} />
    </HeaderPanel>
  );
}
