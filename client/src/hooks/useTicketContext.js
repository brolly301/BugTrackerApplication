import { Context } from "../context/TicketContext";
import { useContext } from "react";

export default function useTicketContext() {
  return useContext(Context);
}
