import createDataContext from "./createDataContext";
import Server from "../api/Server";

const reducer = (state, action) => {
  switch (action.type) {
    case "error_message":
      return { ...state, errorMessage: action.payload };
    case "create_project":
      return [...state, { ...action.payload }];
    case "get_projects":
      return action.payload;
    case "delete_project":
      return state.filter((project) => project.projectid !== action.payload);
    case "edit_project":
      return state.map((project) => {
        return project.projectid === action.payload.projectid
          ? { ...project, ...action.payload }
          : project;
      });
    default:
    // return state;
  }
};

const createProject = (dispatch) => async (projectDetails, callback) => {
  try {
    const res = await Server.post("/projects/createProject", {
      ...projectDetails,
    });
    dispatch({ type: "create_project", payload: projectDetails });
    if (callback) {
      callback();
    }
  } catch (e) {
    dispatch({ type: "error_message", payload: e.response.data.error });
  }
};

const getProjects = (dispatch) => async () => {
  try {
    const res = await Server.get("/projects/getProjects");
    dispatch({ type: "get_projects", payload: res.data });
  } catch (e) {
    dispatch({ type: "error_message", payload: e.response.data.error });
  }
};

const deleteProject = (dispatch) => async (projectID, callback) => {
  try {
    await Server.delete(`/projects/deleteProject/${projectID}`);
    dispatch({ type: "delete_project", payload: projectID });
    if (callback) {
      callback();
    }
  } catch (e) {
    dispatch({ type: "error_message", payload: e.response.data.error });
  }
};

const editProject = (dispatch) => async (projectDetails, callback) => {
  try {
    await Server.patch("/projects/editProject", {
      ...projectDetails,
    });
    dispatch({ type: "edit_project", payload: projectDetails });
    if (callback) {
      callback();
    }
  } catch (e) {
    dispatch({ type: "error_message", payload: e.response.data.error });
  }
};

export const { Provider, Context } = createDataContext(
  reducer,
  {
    createProject,
    getProjects,
    deleteProject,
    editProject,
  },
  [{ errorMessage: "" }]
);
