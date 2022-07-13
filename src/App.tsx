import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1>App component</h1>
      <Outlet />
    </>
  );
};

export default App;
