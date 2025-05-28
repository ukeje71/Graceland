import React from "react";
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router";
import Login from "./components/Login";
import CreateAcc from "./components/CreateAcc";
import Error from "./components/Error";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/create" element={<CreateAcc/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
};

export default App;
