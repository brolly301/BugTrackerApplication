import { Context } from "../context/ProjectContext";
import { useContext } from "react";

export default function useProjectContext() {
  return useContext(Context);
}
