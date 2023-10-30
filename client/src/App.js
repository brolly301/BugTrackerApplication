import RegisterPage from "./pages/Auth/RegisterPage";
import LoginPage from "./pages/Auth/LoginPage";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import useUserContext from "./hooks/useUserContext";
import CreateTicketPage from "./pages/Tickets/CreateTicketPage";
import TicketsPage from "./pages/Tickets/TicketsPage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import CreateProjectPage from "./pages/Projects/CreateProjectPage";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./components/Layout";
import MyTicketsPage from "./pages/Tickets/MyTicketsPage";
import MyProjectsPage from "./pages/Projects/MyProjectsPage";
import ManageUsersPage from "./pages/ManageUsers/ManageUsersPage";
import UserDetailsPage from "./pages/ManageUsers/UserDetailsPage";
import ProjectDetailsPage from "./pages/Projects/ProjectDetailsPage";
import TicketDetailsPage from "./pages/Tickets/TicketDetailsPage";
import KanbanPage from "./pages/KanbanPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateUserPage from "./pages/ManageUsers/CreateUserPage";

function App() {
  const { state } = useUserContext();
  const token = localStorage.getItem("token");

  return (
    <Layout>
      <ToastContainer />
      {!token || !state.token ? (
        <>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </>
      ) : (
        <div className="route-container">
          <Sidebar />
          <div style={{ width: "100%", height: "100%" }}>
            <Navbar />
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/kanban" element={<KanbanPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/allTickets" element={<TicketsPage />} />
              <Route
                path="/allTickets/tickets/:id"
                element={<TicketDetailsPage />}
              />
              <Route path="/myTickets" element={<MyTicketsPage />} />
              <Route path="/submitTicket" element={<CreateTicketPage />} />
              <Route path="/allProjects" element={<ProjectsPage />} />
              <Route
                path="/allProjects/projects/:id"
                element={<ProjectDetailsPage />}
              />
              <Route path="/myProjects" element={<MyProjectsPage />} />
              <Route path="/createProject" element={<CreateProjectPage />} />
              <Route path="/manageUsers" element={<ManageUsersPage />} />
              <Route
                path="/manageUsers/createUser"
                element={<CreateUserPage />}
              />
              <Route
                path="/manageUsers/user/:id"
                element={<UserDetailsPage />}
              />
            </Routes>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default App;
