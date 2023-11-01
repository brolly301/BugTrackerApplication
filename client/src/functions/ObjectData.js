import useUserContext from "../hooks/useUserContext";
import useProjectContext from "../hooks/useProjectContext";

export const AssigneeDetails = (assignee) => {
  const { state } = useUserContext();
  const user = state?.allUsers?.find(
    (user) => user?.userID === assignee || user?.userID === assignee?.userID
  );
  return user;
};

export const ProjectDetails = (project) => {
  const { state } = useProjectContext();
  const projectName = state.find(
    (projectName) =>
      projectName.projectid === project ||
      projectName.projectid === project?.projectid
  );
  return projectName;
};

export const ProjectManagerDetails = (projectManager) => {
  const { state } = useUserContext();
  const user = state.allUsers.find(
    (user) =>
      user.userID === projectManager || user.userID === projectManager?.userID
  );
  return user;
};
