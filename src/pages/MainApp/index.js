import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateBlog from "../createBlog";
import DetailBlog from "../detailblog";
import Home from "../Home";

const MainApp = () => {
  return (
    <div>
      <p>Header</p>
      <Router>
        <Routes>
          <Route exact path="/create-blog" element={<CreateBlog />} />
          <Route exact path="/detail-blog" element={<DetailBlog />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
      <p>Footer</p>
    </div>
  );
};

export default MainApp;
