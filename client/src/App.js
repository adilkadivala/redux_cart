import React from "react";
import { BrowserRouter } from "react-router-dom";
import DashboardRoute from "./routes/admin/DashboardRoute";
import ProductRoute from "./routes/admin/ProductRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <DashboardRoute />
        <ProductRoute />
      </BrowserRouter>
    </>
  );
};

export default App;
