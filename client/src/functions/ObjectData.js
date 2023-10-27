import useUserContext from "../hooks/useUserContext";
import useProjectContext from "../hooks/useProjectContext";

export const AssigneeDetails = (assignee) => {
  const { state } = useUserContext();
  const user = state.allUsers.find(
    (user) => user._id === assignee || user._id === assignee?._id
  );
  return user;
};

export const ProjectDetails = (project) => {
  const { state } = useProjectContext();
  const projectName = state.find(
    (projectName) =>
      projectName._id === project || projectName._id === project?._id
  );
  return projectName;
};

export const ProjectManagerDetails = (projectManager) => {
  const { state } = useUserContext();
  const user = state.allUsers.find(
    (user) => user._id === projectManager || user._id === projectManager?._id
  );
  return user;
};
