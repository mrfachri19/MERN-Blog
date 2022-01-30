import React from "react";
import Input from "../../components/atoms/input";
import Button from "../../components/atoms/button";
import Gap from "../../components/atoms/gap";
import Link from "../../components/atoms/link";
import { LoginBg } from "../../assets";

function Login() {
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} className="bg-image" alt="bgimage" />
      </div>
      <div className="right">
        <p className="title">Form Login</p>
        <Input label="Email" placeholder="enter email" />
        <Gap height={18} />
        <Input label="Password" placeholder="enter password" />
        <Gap height={50} />
        <Button title="Register" />
        <Gap height={20} />
        <Link title="Belum punya akun, silahkan daftar" />
      </div>
    </div>
  );
}

export default Login;
