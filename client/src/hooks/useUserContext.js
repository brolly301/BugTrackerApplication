import { Context } from "../context/UserContext";
import { useContext } from "react";

export default function useUserContext() {
  return useContext(Context);
}
