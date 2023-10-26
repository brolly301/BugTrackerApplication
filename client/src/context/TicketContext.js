import createDataContext from "./createDataContext";
import Server from "../api/Server";

const reducer = (state, action) => {
  switch (action.type) {
    case "error_message":
      return { ...state, errorMessage: action.payload };
    case "create_ticket":
      return [...state, { ...action.payload }];
    case "get_tickets":
      return action.payload;
    case "get_ticket":
      return { ...state, ticket: action.payload };
    case "delete_ticket":
      return state.filter((ticket) => ticket._id !== action.payload);
    case "edit_ticket":
      return state.map((ticket) => {
        return ticket._id === action.payload._id
          ? { ...ticket, ...action.payload }
          : ticket;
      });
    case "create_comment":
      return state.map((ticket) => {
        if (ticket._id === action.payload._id) {
          return {
            ...ticket,
            comments: [...ticket?.comments, action.payload], // Add the new comment
          };
        } else {
          return ticket;
        }
      });
    case "edit_comment":
      return state.map((ticket) => {
        if (ticket._id === action.payload._id) {
          return {
            ...ticket,
            comments: ticket.comments.map((comment) => {
              return comment._id === action.payload.commentID
                ? { ...comment, ...action.payload }
                : comment;
            }),
          };
        }
      });
    case "delete_comment":
      return state.filter((ticket) => ticket._id !== action.payload);
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

const deleteTicket = (dispatch) => async (id, callback) => {
  try {
    await Server.delete(`/tickets/deleteTicket/${id}`);
    dispatch({ type: "delete_ticket", payload: id });
    if (callback) {
      callback();
    }
  } catch (e) {
    dispatch({ type: "error_message", payload: e.response.data.error });
  }
};

const editTicket = (dispatch) => async (ticketDetails, callback) => {
  try {
    await Server.patch("/tickets/editTicket", {
      ...ticketDetails,
    });
    dispatch({ type: "edit_ticket", payload: ticketDetails });
    if (callback) {
      callback();
    }
  } catch (e) {
    dispatch({ type: "error_message", payload: e.response.data.error });
  }
};

const createComment = (dispatch) => async (ticketDetails, callback) => {
  try {
    await Server.post("/tickets/createComment", {
      ...ticketDetails,
    });
    dispatch({ type: "create_comment", payload: ticketDetails });
    if (callback) {
      callback();
    }
  } catch (e) {
    dispatch({ type: "error_message", payload: e.response.data.error });
  }
};

const editComment = (dispatch) => async (ticketDetails, callback) => {
  try {
    await Server.patch("/tickets/editComment", {
      ...ticketDetails,
    });
    dispatch({ type: "edit_comment", payload: ticketDetails });
    if (callback) {
      callback();
    }
  } catch (e) {
    dispatch({ type: "error_message", payload: e.response.data.error });
  }
};

export const { Context, Provider } = createDataContext(
  reducer,
  {
    createTicket,
    getTickets,
    deleteTicket,
    editTicket,
    createComment,
    editComment,
  },
  [{ errorMessage: "" }, { ticket: {} }]
);
