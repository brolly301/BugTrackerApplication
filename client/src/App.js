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

function App() {
  const { state } = useUserContext();

  return (
    <>
      {state.token ? <Navbar /> : null}
      <div className='route-container'>
        {state.token ? <Sidebar /> : null}
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/tickets' element={<TicketsPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/createProject' element={<CreateProjectPage />} />
          <Route path='/createTicket' element={<CreateTicketPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
