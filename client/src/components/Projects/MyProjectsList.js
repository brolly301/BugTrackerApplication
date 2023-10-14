import React from "react";
import useUserProjectsContext from "../../hooks/useUserProjectsContext";
import MyProjectsShow from "./MyProjectsShow";

export default function MyProjectsList() {
  const { state } = useUserProjectsContext();
  const renderedList = state.map((project) => {
    return <MyProjectsShow key={project._id} project={project} />;
  });
  return <div>{renderedList}</div>;
}
