import createDataContext from "./createDataContext";
import Server from "../api/Server";

const reducer = (state, action) => {
  switch (action.type) {
    case "error_message":
      return { ...state, errorMessage: action.payload };
    case "create_ticket":
      return { ...state, tickets: [...state.tickets, action.payload] };
    case "get_tickets":
      return { ...state, tickets: action.payload };
    case "get_user_tickets":
      return { ...state, userTickets: action.payload };
    case "delete_ticket":
      return {
        ...state,
        tickets: state.tickets.filter(
          (ticket) => ticket._id !== action.payload
        ),
      };
    case "edit_ticket":
      return {
        ...state,
        tickets: state.tickets.map((ticket) =>
          ticket._id === action.payload._id ? action.payload : ticket
        ),
      };
    default:
      return state;
  }
};

const createTicket = (dispatch) => async (ticketDetails, callback) => {
  try {
    await Server.post("/tickets/createTicket", {
      ...ticketDetails,
    });
    dispatch({ type: "create_ticket", payload: ticketDetails });
    if (callback) {
      callback();
    }
  } catch (e) {
    dispatch({ type: "error_message", payload: e.response.data.error });
  }
};

const getTickets = (dispatch) => async () => {
  try {
    const res = await Server.get("/tickets/getTickets");
    dispatch({ type: "get_tickets", payload: res.data });
  } catch (e) {
    dispatch({ type: "error_message", payload: e.response.data.error });
  }
};

const getUserTickets = (dispatch) => async () => {
  try {
    const res = await Server.get("/tickets/userTickets");
    dispatch({ type: "get_user_tickets", payload: res.data });
  } catch (e) {
    dispatch({ type: "error_message", payload: e.response.data.error });
  }
};

const deleteTicket = (dispatch) => async (id) => {
  try {
    await Server.delete(`/tickets/deleteTicket/${id}`);
    dispatch({ type: "delete_ticket", payload: id });
  } catch (e) {
    dispatch({ type: "error_message", payload: e.response.data.error });
  }
};

const editTicket = (dispatch) => async (ticketDetails, callback) => {
  try {
    const res = await Server.patch("/tickets/editTicket", {
      ...ticketDetails,
    });
    dispatch({ type: "edit_ticket", payload: res.data });
    if (callback) {
      callback();
    }
  } catch (e) {
    dispatch({ type: "error_message", payload: e.response.data.error });
  }
};

export const { Context, Provider } = createDataContext(
  reducer,
  { createTicket, getTickets, deleteTicket, editTicket, getUserTickets },
  { errorMessage: "", userTickets: [], tickets: [] }
);
