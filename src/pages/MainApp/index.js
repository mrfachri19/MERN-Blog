import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Header } from "../../components/molecules";
// import CreateBlog from "../CreateBlog";
// import DetailBlog from "../DetailBlog";
// import Home from "../Home";
import "./mainApp.scss";

const MainApp = () => {
  return (
    <div className="main-app-wrapper">
      <Header />
      <div className="content-wrapper">
        <p>content</p>
      </div>

      {/* <Router>
        <Routes>
          <Route exact path="/create-blog" element={<CreateBlog />} />
          <Route exact path="/detail-blog" element={<DetailBlog />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router> */}

      <Footer />
    </div>
  );
};

export default MainApp;
