import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

export default function ProjectShow({ project }) {
  return (
    <div>
      <h4>{project.name}</h4>
      <Link
        to={`/allProjects/projects/${project._id}`}
        state={{ project: project }}>
        <Button label={"View"} />
      </Link>
    </div>
  );
}
