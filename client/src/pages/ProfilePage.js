import React from "react";
import HeaderPanel from "../components/HeaderPanel";
import UserDetailsTile from "../components/ManagerUsers/UserDetails/UserTiles/UserDetailsTile";
import UserTicketsTile from "../components/ManagerUsers/UserDetails/UserTiles/UserTicketsTile";
import UserStatisticsTile from "../components/ManagerUsers/UserDetails/UserTiles/UserStatisticsTile";
import useUserContext from "../hooks/useUserContext";

export default function ProfilePage() {
  const {
    state: { userDetails: user },
  } = useUserContext();

  return (
    <HeaderPanel title={"Profile"}>
      <div className="user-details-page-container">
        <div className="user-details-page-non-table">
          <UserDetailsTile user={user} />
        </div>
        <div className="user-details-page-table">
          <UserTicketsTile user={user} />
          <UserTicketsTile user={user} />
        </div>
        <div className="user-details-page-non-table">
          <UserStatisticsTile user={user} />
        </div>
      </div>
    </HeaderPanel>
  );
}
