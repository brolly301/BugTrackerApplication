import useProjectContext from "../hooks/useProjectContext";
import useUserContext from "../hooks/useUserContext";

export const manageUserFilters = [
  {
    name: "Admin",
    label: "Admin",
  },
  {
    name: "Project Manager",
    label: "Project Manager",
  },
  {
    name: "Developer",
    label: "Developer",
  },
  {
    name: "Test Engineer",
    label: "Test Engineer",
  },
  {
    name: "Support",
    label: "Support",
  },
];

export const ticketStatusFilters = [
  {
    name: "Open",
    label: "Open",
  },

  {
    name: "In Progress",
    label: "In Progress",
  },
  {
    name: "Testing",
    label: "Testing",
  },
  {
    name: "Closed",
    label: "Closed",
  },
];

export const ticketPriorityFilters = [
  {
    name: "Low",
    label: "Low",
  },
  {
    name: "Medium",
    label: "Medium",
  },
  {
    name: "High",
    label: "High",
  },
];

export const ticketTypeFilters = [
  {
    name: "Bug",
    label: "Bug",
  },
  {
    name: "Feature Request",
    label: "Feature Request",
  },
  {
    name: "Design Request",
    label: "Design Request",
  },
];

export const ProjectManagerFilters = () => {
  const { state } = useProjectContext();
  const projectManager = state.map((project) => {
    return {
      name: `${project.projectManager?.firstName} ${project.projectManager?.surname}`,
      label: `${project.projectManager?.firstName} ${project.projectManager?.surname}`,
    };
  });
  const uniqueProjectManagers = Array.from(
    new Set(projectManager.map((a) => a.label))
  ).map((label) => {
    return projectManager.find((a) => a.label === label);
  });

  return uniqueProjectManagers;
};
