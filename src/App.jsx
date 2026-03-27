import { BrowserRouter, Routes, Route } from "react-router-dom";
import DailyUpdate from "./pages/DailyUpdate";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import AdminLeaves from "./pages/AdminLeaves";
import LeavePage from "./pages/LeavePage";
import EmployeeList from "./pages/EmployeeList";

function App() {
  return (
    <BrowserRouter>
     <Routes>

  <Route path="/" element={<Login />} />
  <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
  <Route path="/admin" element={<AdminDashboard />} />
  <Route path="/register" element={<Register />} />
  <Route path="/daily-update" element={<DailyUpdate />} />
  <Route path="/admin-leaves" element={<AdminLeaves />} />
  <Route path="/leave" element={<LeavePage />} />
  <Route path="/employees" element={<EmployeeList />} />

</Routes>
    </BrowserRouter>
  );
}

export default App;