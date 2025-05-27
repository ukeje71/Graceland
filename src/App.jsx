import React from "react";
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router";
import Login from "./components/Login";
import CreateAcc from "./components/CreateAcc";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/create" element={<CreateAcc/>}/>
      </Routes>
    </div>
  );
};

export default App;
