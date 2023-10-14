import createDataContext from "./createDataContext";
import Server from "../api/Server";

const reducer = (state, action) => {
  switch (action.type) {
    case "get_user_projects":
      return action.payload;
    default:
      return state;
  }
};

const getUserProjects = (dispatch) => async () => {
  try {
    const res = await Server.get("/userData/userProjects");
    dispatch({ type: "get_user_projects", payload: res.data });
  } catch (e) {
    dispatch({ type: "error_message", payload: e.response.data.error });
  }
};

export const { Provider, Context } = createDataContext(
  reducer,
  { getUserProjects },
  [{}]
);
