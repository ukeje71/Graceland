import React from "react";
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router";
import Login from "./components/Login";
import CreateAcc from "./components/CreateAcc";
import Error from "./components/Error";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ChatApp from "./components/ChatApp";
import Courses from "./components/Courses";
import Blogs from "./pages/blogs";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/create" element={<CreateAcc />} />
        <Route path="/chat" element={<ChatApp/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default App;
