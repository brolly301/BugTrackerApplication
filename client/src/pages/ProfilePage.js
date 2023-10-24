import React from "react";
import HeaderPanel from "../components/HeaderPanel";
import UserDetailsTile from "../components/ManagerUsers/UserDetails/UserTiles/UserDetailsTile";
import UserTicketsTile from "../components/ManagerUsers/UserDetails/UserTiles/UserTicketsTile";
import UserStatisticsTile from "../components/ManagerUsers/UserDetails/UserTiles/UserStatisticsTile";

export default function ProfilePage() {
  return (
    <HeaderPanel title={"Profile"}>
      <div className="user-details-page-container">
        <div className="user-details-page-non-table">
          <UserDetailsTile />
        </div>
        <div className="user-details-page-table">
          <UserTicketsTile />
          <UserTicketsTile />
        </div>
        <div className="user-details-page-non-table">
          <UserStatisticsTile />
        </div>
      </div>
    </HeaderPanel>
  );
}
