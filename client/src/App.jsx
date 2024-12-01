import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ErrorPage from "./Pages/ErrorPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Todo from "./Pages/Todo";

const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/todo/:id" element={<Todo />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div>
        <ToastContainer position="bottom-center" />
      </div>
    </>
  );
};

export default App;
