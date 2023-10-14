import { Context } from "../context/UserProjectsContext";
import { useContext } from "react";

export default function useUserProjectsContext() {
  return useContext(Context);
}
