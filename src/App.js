import {BrowserRouter, Routes,Route } from "react-router-dom"
import Register from "./pages/register/register"
import Login from "./pages/login/login"
import Dashboard from "./pages/dashboard.js/dashboard";
import Reports from "./pages/reports/reports";
import Userlist from "./pages/user-list/user-list";
import Empprofile from "./pages/emp-profile/emp-profile";
import Adminctrl from "./pages/adminCtrl/adminCtrl";


function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/register" element={<Register />} />
     <Route path="/dashboard" element={<Dashboard />} />
     <Route path="/reports" element={<Reports />} />
     <Route path="/userprofile" element={<Userlist />} />
     <Route path="/empprofile" element={<Empprofile />} />
     <Route path="/adminctrl" element={<Adminctrl />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;

