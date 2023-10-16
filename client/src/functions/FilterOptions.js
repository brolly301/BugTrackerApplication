import useProjectContext from "../hooks/useProjectContext";
import useUserContext from "../hooks/useUserContext";

export const manageUserFilters = [
  {
    name: "All Users",
    value: "",
  },
  {
    name: "Admin",
    value: "Admin",
  },
  {
    name: "Project Manager",
    value: "Project Manager",
  },
  {
    name: "Developer",
    value: "Developer",
  },
  {
    name: "Test Engineer",
    value: "Test Engineer",
  },
  {
    name: "Support",
    value: "Support",
  },
];

export const ticketStatusFilters = [
  {
    name: "Open",
    value: "Open",
  },

  {
    name: "In Progress",
    value: "In Progress",
  },
  {
    name: "Closed",
    value: "Closed",
  },
];

export const ticketPriorityFilters = [
  {
    name: "Low",
    value: "Low",
  },
  {
    name: "Medium",
    value: "Medium",
  },
  {
    name: "High",
    value: "High",
  },
];

export const ticketTypeFilters = [
  {
    name: "Bug",
    value: "Bug",
  },
  {
    name: "Feature Request",
    value: "Feature Request",
  },
  {
    name: "Design Request",
    value: "Design Request",
  },
];

export const ProjectManagerFilters = () => {
  const { state } = useProjectContext();
  const projectManager = state.map((project) => {
    return {
      name: `${project.projectManager?.firstName} ${project.projectManager?.surname}`,
      value: `${project.projectManager?.firstName} ${project.projectManager?.surname}`,
    };
  });
  const uniqueProjectManagers = Array.from(
    new Set(projectManager.map((a) => a.value))
  ).map((value) => {
    return projectManager.find((a) => a.value === value);
  });

  return uniqueProjectManagers;
};
