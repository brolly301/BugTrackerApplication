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
    case "get_user_details":
      return { ...state, userDetails: action.payload };
    default:
      return state;
  }
};

const login = (dispatch) => async (loginDetails, callback) => {
  try {
    const res = await Server.post("/login", { ...loginDetails });
    dispatch({ type: "login", payload: res.data.token });
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

const getUserDetails = (dispatch) => async () => {
  try {
    const res = await Server.get("/userDetails");
    dispatch({ type: "get_user_details", payload: res.data });
  } catch (e) {
    dispatch({ type: "error_message", payload: e.response.data.error });
  }
};

export const { Provider, Context } = createDataContext(
  reducer,
  { login, register, getUserDetails },
  { errorMessage: "", token: null, userDetails: null }
);
