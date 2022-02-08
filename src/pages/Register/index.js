import React from "react";
import "./Register.scss";
import { RegisterBg } from "../../assets";
import Input from "../../components/atoms/input";
import Button from "../../components/atoms/button";
import Gap from "../../components/atoms/gap";
import Link from "../../components/atoms/link";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" alt="bgimage" />
      </div>
      <div className="right">
        <p className="title">Form Registrasi</p>
        <Input label="Full Name" placeholder="enter full name" />
        <Gap height={18} />
        <Input label="Email" placeholder="enter email" />
        <Gap height={18} />
        <Input label="Password" placeholder="enter password" />
        <Gap height={50} />
        <Button title="Register" onClick={() => navigate("/login")} />
        <Gap height={20} />
        <Link title="kembali ke login" onClick={() => navigate("/login")} />
      </div>
    </div>
  );
}

export default Register;
