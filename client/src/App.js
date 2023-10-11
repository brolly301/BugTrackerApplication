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

function App() {
  const { state } = useUserContext();

  return (
    <>
      <Layout>
        <Navbar />
        <div className="route-container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/tickets" element={<TicketsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/createProject" element={<CreateProjectPage />} />
            <Route path="/createTicket" element={<CreateTicketPage />} />
          </Routes>
        </div>
      </Layout>
    </>
  );
}

export default App;
