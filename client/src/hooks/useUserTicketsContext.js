import { Context } from "../context/UserTicketsContext";
import { useContext } from "react";

export default function useUserTicketsContext() {
  return useContext(Context);
}
