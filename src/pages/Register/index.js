import React from "react";
import "./Register.scss";
import { RegisterBg } from "../../assets";
import Input from "../../components/atoms/input";

function Register() {
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" alt="bgimage" />
      </div>
      <div className="right">
        <p>Form Registrasi</p>
        <Input />
        <Input />
        <Input />
      </div>
    </div>
  );
}

export default Register;
