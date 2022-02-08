import React from "react";
import { Footer, Header } from "../../components/molecules";
import Home from "../Home";

import "./mainApp.scss";

const MainApp = () => {
  return (
    <div className="main-app-wrapper">
      <Header />

      <div className="content-wrapper">
        <Home />
      </div>

      <Footer />
    </div>
  );
};

export default MainApp;
