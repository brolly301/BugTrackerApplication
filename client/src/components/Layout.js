import React, { useEffect } from "react";
import useUserContext from "../hooks/useUserContext";
import useTicketContext from "../hooks/useTicketContext";
import useProjectContext from "../hooks/useProjectContext";

export default function Layout({ children }) {
  const { getUserDetails, getAllUsers } = useUserContext();
  const { getTickets } = useTicketContext();
  const { getProjects } = useProjectContext();

  useEffect(() => {
    const fetchData = async () => {
      await getUserDetails();
      await getAllUsers();
      await getProjects();
      await getTickets();
    };

    fetchData();
  }, []);
  return <>{children}</>;
}
