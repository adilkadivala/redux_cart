import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import Product from "../pages/admin/Product";
import Hero from "../pages/public/Hero";

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
        <Route
          exact
          path="/product"
          element={
            <>
              <Product />
            </>
          }
        ></Route>
        <Route
          exact
          path="/"
          element={
            <>
              <Hero />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default MainAr;
