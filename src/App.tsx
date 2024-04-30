import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./Redux/Hooks/CounterHook";
import { initializeTheme } from "./Redux/Slices/ThemeSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Application/Dashboard";
import Sidebar from "./Pages/Application/Sidebar";
import ForgetPass from "./Pages/ForgetPass";
import LoginPage from "./Pages/LoginPage";
import SendOtp from "./Pages/SentOtp";
import ErrorPage from "./Pages/ErrorPage";
import Navbar from "./Pages/Application/Navbar";
import AllEmp from "./Pages/Application/AllEmp";

const App = () => {
  const theme = useAppSelector((state) => state.ThemeSlice.theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeTheme());
  }, [dispatch]);

  return (
    <div className={`${theme ? "light" : "dark"} dark:bg-slate-950 bg-white`}>
      <Router>
        <React.Fragment>
          <div id="main-content" className="flex ">
            <Sidebar />
            <div className="contendNav w-[100%]  ">
              <Navbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/All-Employee" element={<AllEmp />} />
                <Route path="/*" element={<ErrorPage />} />
              </Routes>
            </div>
          </div>

          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgetpass" element={<ForgetPass />} />
            <Route path="/sendotp" element={<SendOtp />} />
          </Routes>
        </React.Fragment>
      </Router>
    </div>
  );
};

export default App;
