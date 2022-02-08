import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login, Register, MainApp, CreateBlog, DetailBlog } from "../../pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<MainApp />} />
        <Route exact path="/createblog" element={<CreateBlog />} />
        <Route exact path="/detailblog" element={<DetailBlog />} />
      </Routes>
    </Router>
  );
};

export default App;
