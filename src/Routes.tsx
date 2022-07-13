import React from "react";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./components";
import { TestContainer } from "./containers";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="test" element={<TestContainer />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
