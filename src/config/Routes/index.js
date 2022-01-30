import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login, Register, MainApp } from "../../pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<MainApp />} />
      </Routes>
    </Router>
  );
};

export default App;
