import React from "react";
import { useLocation } from "react-router-dom";
import useUserContext from "../../hooks/useUserContext";
import HeaderPanel from "../../components/HeaderPanel";
import UserDetailsTile from "../../components/ManagerUsers/UserDetails/UserTiles/UserDetailsTile";
import UserTicketsTile from "../../components/ManagerUsers/UserDetails/UserTiles/UserTicketsTile";
import UserStatisticsTile from "../../components/ManagerUsers/UserDetails/UserTiles/UserStatisticsTile";
import "../../CSS/Pages/UserDetails.css";
import UserProjectsTile from "../../components/ManagerUsers/UserDetails/UserTiles/UserProjectsTile";

export default function UserDetailsPage() {
  const { state } = useUserContext();
  const location = useLocation();
  const user = state?.allUsers?.find(
    (user) => user._id === location.state.user._id
  );

  return (
    <HeaderPanel title={"User Details"}>
      <div className="user-details-page-container">
        <div className="user-details-page-non-table">
          <UserDetailsTile user={user} />
        </div>
        <div className="user-details-page-table">
          <UserTicketsTile user={user} />
          <UserProjectsTile user={user} />
        </div>
        <div className="user-details-page-non-table">
          <UserStatisticsTile user={user} />
        </div>
      </div>
    </HeaderPanel>
  );
}
