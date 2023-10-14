import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider as UserProvider } from "./context/UserContext";
import { Provider as TicketContext } from "./context/TicketContext";
import { Provider as ProjectContext } from "./context/ProjectContext";
import { Provider as UserTicketsContext } from "./context/UserTicketsContext";
import { Provider as UserProjectsContext } from "./context/UserProjectsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserTicketsContext>
    <UserProjectsContext>
      <TicketContext>
        <ProjectContext>
          <UserProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </UserProvider>
        </ProjectContext>
      </TicketContext>
    </UserProjectsContext>
  </UserTicketsContext>
);
