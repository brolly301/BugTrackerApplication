import React, { useEffect } from "react";
import useUserContext from "../hooks/useUserContext";
import useTicketContext from "../hooks/useTicketContext";
import useProjectContext from "../hooks/useProjectContext";
import useUserProjectsContext from "../hooks/useUserProjectsContext";
import useUserTicketsContext from "../hooks/useUserTicketsContext";

export default function Layout({ children }) {
  const { getUserDetails, getAllUsers } = useUserContext();
  const { getTickets } = useTicketContext();
  const { getProjects } = useProjectContext();
  const { getUserProjects } = useUserProjectsContext();
  const { getUserTickets } = useUserTicketsContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getUserDetails();
        await getAllUsers();
        await getProjects();
        await getTickets();
        await getUserTickets();
        await getUserProjects();
      } catch (error) {
        // Handle errors here
      }
    };

    fetchData();
  }, []);
  return <>{children}</>;
}
