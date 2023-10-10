import { Context } from "../context/ProjectContext";
import { useContext } from "react";

export default function useTicketContext() {
  return useContext(Context);
}
