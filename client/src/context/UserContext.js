import createDataContext from "./createDataContext";
import Server from "../api/Server";

const reducer = (state, action) => {
  switch (action.type) {
    case "error_message":
      return { ...state, errorMessage: action.payload };
    case "login":
      return { token: action.payload, errorMessage: "" };
    case "register":
      return { token: action.payload, errorMessage: "" };
    case "edit_profile":
      return { ...state, userDetails: action.payload };
    case "logout":
      return { token: null, errorMessage: "", userDetails: {} };
    case "get_user_details":
      return { ...state, userDetails: action.payload };
    case "get_all_users":
      return { ...state, allUsers: action.payload };
    default:
      return state;
  }
};

const login = (dispatch) => async (loginDetails, callback) => {
  try {
    const res = await Server.post("/login", { ...loginDetails });
    console.log(res.data);

    dispatch({ type: "login", payload: res.data });
    if (callback) {
      callback();
    }
  } catch (e) {
    dispatch({ type: "error_message", payload: e.response.data.error });
  }
};

const register = (dispatch) => async (registerDetails) => {
  try {
    const res = await Server.post("/register", { ...registerDetails });
    dispatch({ type: "register", payload: res.data.token });
  } catch (e) {
    dispatch({ type: "error_message", payload: e.response.data.error });
  }
};

const logout = (dispatch) => async (callback) => {
  try {
    await Server.get("/logout");
    dispatch({ type: "logout" });
    if (callback) {
      callback();
    }
  } catch (e) {
    dispatch({ type: "error_message", payload: e.response.data.error });
  }
};

const getUserDetails = (dispatch) => async () => {
  try {
    const res = await Server.get("/userDetails");
    dispatch({ type: "get_user_details", payload: res.data });
  } catch (e) {
    dispatch({ type: "error_message", payload: e.response.data.error });
  }
};

const editProfile = (dispatch) => async (userDetails) => {
  try {
    await Server.patch("/editProfile", { ...userDetails });
    dispatch({ type: "edit_profile", payload: userDetails });
  } catch (e) {
    dispatch({ type: "error_message", payload: e.response.data.error });
  }
};

const getAllUsers = (dispatch) => async () => {
  try {
    const res = await Server.get("/allUsers");
    dispatch({ type: "get_all_users", payload: res.data });
  } catch (e) {
    dispatch({ type: "error_message", payload: e.response.data.error });
  }
};

export const { Provider, Context } = createDataContext(
  reducer,
  { login, register, logout, getUserDetails, editProfile, getAllUsers },
  { errorMessage: "", token: null, userDetails: {}, allUsers: [] }
);
