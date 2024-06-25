import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/admin/Dashboard";

const MainAr = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/dashboard"
          element={
            <>
              <Dashboard />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default MainAr;
