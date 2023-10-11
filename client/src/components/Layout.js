import React, { useEffect } from "react";
import useUserContext from "../hooks/useUserContext";
import useTicketContext from "../hooks/useTicketContext";
import useProjectContext from "../hooks/useProjectContext";

export default function Layout({ children }) {
  const { getUserDetails, getAllUsers, state } = useUserContext();
  const { getTickets } = useTicketContext();
  const { getProjects } = useProjectContext();

  useEffect(() => {
    getUserDetails();
    getAllUsers();
    getTickets();
    getProjects();
  }, []);
  return <>{children}</>;
}
