import React, { useState, useEffect } from "react";
import AdminSidebar from "./layout/dashboard-layout/SidebarWrapper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/admin-routes/appRoutes";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              exact={route.exact}
            />
          ))}
        </Routes>
      </Router>{" "}
    </>
  );
}
