import createDataContext from "./createDataContext";
import Server from "../api/Server";

const reducer = (state, action) => {
  switch (action.type) {
    case "register":
      return state;
    default:
      return state;
  }
};

const register = (dispatch) => async (registerDetails) => {
  try {
    const res = await Server.post("/register", { ...registerDetails });
  } catch (error) {
    console.log(error);
  }
};

export const { Provider, Context } = createDataContext(
  reducer,
  { register },
  {}
);
