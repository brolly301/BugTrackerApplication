import React from "react";
import ProfileDetails from "../components/Profile/ProfileDetails";
import HeaderPanel from "../components/HeaderPanel";

export default function ProfilePage() {
  return (
    <HeaderPanel title={"Profile"}>
      <ProfileDetails />
    </HeaderPanel>
  );
}
