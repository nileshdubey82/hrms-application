import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Application/Sidebar";

export default function Index() {
  return (
    <React.Fragment>
      <Sidebar />
      <div className="primary-content-area">
        <Outlet />
      </div>
        </React.Fragment>
  );
}
