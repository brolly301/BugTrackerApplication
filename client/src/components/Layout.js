import React, { useEffect } from "react";
import useUserContext from "../hooks/useUserContext";
import useTicketContext from "../hooks/useTicketContext";
import useProjectContext from "../hooks/useProjectContext";

export default function Layout({ children }) {
  const { getUserDetails, getAllUsers } = useUserContext();
  const { getTickets, getUserTickets } = useTicketContext();
  const { getProjects } = useProjectContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getUserDetails();
        await getAllUsers();
        await getProjects();
        await getTickets();
        await getUserTickets();
      } catch (error) {
        // Handle errors here
      }
    };

    fetchData();
  }, []);
  return <>{children}</>;
}
