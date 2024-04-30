import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import ForgetPass from "../Pages/ForgetPass";
import Sidebar from "../Pages/Application/Sidebar";
import Dashboard from "../Pages/Application/Dashboard";
import SendOtp from "../Pages/SentOtp";
import ErrorPage from "../Pages/ErrorPage";

export const AppRouter = (
  <Router>
    <Routes>
      <Route path="/">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgetpass" element={<ForgetPass />} />
      <Route path="/sendotp" element={<SendOtp />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  </Router>
);
