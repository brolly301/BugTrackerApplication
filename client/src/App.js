import RegisterPage from "./pages/Auth/RegisterPage";
import LoginPage from "./pages/Auth/LoginPage";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import Navbar from "./components/Navbar";
import useUserContext from "./hooks/useUserContext";

function App() {
  const { state } = useUserContext();

  return (
    <>
      {state.token ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/adminDashboard" element={<AdminDashboardPage />} />
      </Routes>
    </>
  );
}

export default App;
