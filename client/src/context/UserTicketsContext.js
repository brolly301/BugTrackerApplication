import createDataContext from "./createDataContext";
import Server from "../api/Server";

const reducer = (state, action) => {
  switch (action.type) {
    case "get_user_tickets":
      return action.payload;
    default:
      return state;
  }
};

const getUserTickets = (dispatch) => async () => {
  try {
    const res = await Server.get("/userData/userTickets");
    dispatch({ type: "get_user_tickets", payload: res.data });
  } catch (e) {
    dispatch({ type: "error_message", payload: e.response.data.error });
  }
};

export const { Provider, Context } = createDataContext(
  reducer,
  { getUserTickets },
  [{}]
);
