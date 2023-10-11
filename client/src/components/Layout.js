import React, { useEffect } from "react";
import useUserContext from "../hooks/useUserContext";
import useTicketContext from "../hooks/useTicketContext";
import useProjectContext from "../hooks/useProjectContext";

export default function Layout({ children }) {
  const { getUserDetails } = useUserContext();
  const { getTickets } = useTicketContext();
  const { getProjects } = useProjectContext();
  useEffect(() => {
    getUserDetails();
    getTickets();
    getProjects();
  }, []);
  return <>{children}</>;
}
