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
    case "add_all_users":
      return { ...state, allUsers: [...state.allUsers, action.payload] };
    case "get_all_users":
      return { ...state, allUsers: action.payload };
    case "edit_all_users":
      return {
        ...state,
        allUsers: state.allUsers.map((user) => {
          return user.userID === action.payload.userID ? action.payload : user;
        }),
      };
    case "delete_all_users":
      return {
        ...state,
        allUsers: state.allUsers.filter(
          (user) => user.userID !== action.payload
        ),
      };
    default:
      return state;
  }
};

const login = (dispatch) => async (loginDetails, callback) => {
  try {
    const res = await Server.post("/login", { ...loginDetails });
    localStorage.setItem("token", res.data);
    dispatch({ type: "login", payload: res.data });
    if (callback) {
      callback();
    }
  } catch (e) {
    dispatch({ type: "error_message", payload: e.response.data.error });
  }
};

const register = (dispatch) => async (registerDetails, callback) => {
  try {
    const res = await Server.post("/register", { ...registerDetails });
    localStorage.setItem("token", res.data);
    dispatch({ type: "register", payload: res.data });
    if (callback) {
      callback();
    }
  } catch (e) {
    dispatch({ type: "error_message", payload: e.response.data.error });
  }
};

const logout = (dispatch) => async (callback) => {
  try {
    await Server.get("/logout");
    localStorage.removeItem("token");
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

const editProfile = (dispatch) => async (userDetails, callback) => {
  try {
    await Server.patch("/editProfile", { ...userDetails });
    dispatch({ type: "edit_profile", payload: userDetails });
    if (callback) {
      callback();
    }
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

const addAllUsers = (dispatch) => async (userDetails, callback) => {
  try {
    await Server.post("/register", { ...userDetails });
    dispatch({ type: "add_all_users", payload: userDetails });
    if (callback) {
      callback();
    }
  } catch (e) {
    dispatch({ type: "error_message", payload: e.response.data.error });
  }
};

const editAllUsers = (dispatch) => async (userDetails, callback) => {
  try {
    await Server.patch("/userData/editUser", { ...userDetails });
    dispatch({ type: "edit_all_users", payload: { ...userDetails } });
    if (callback) {
      callback();
    }
  } catch (e) {
    dispatch({ type: "error_message", payload: e.response.data.error });
  }
};

const deleteAllUsers = (dispatch) => async (id, callback) => {
  try {
    await Server.delete(`/userData/deleteUser/${id}`);
    dispatch({ type: "delete_all_users", payload: id });
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
    login,
    register,
    logout,
    getUserDetails,
    editProfile,
    getAllUsers,
    editAllUsers,
    deleteAllUsers,
    addAllUsers,
  },
  {
    errorMessage: "",
    token: localStorage.getItem("token") || null,
    userDetails: {},
    allUsers: [],
  }
);
