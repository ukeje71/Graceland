import React from "react";
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router";
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
