import React from "react";
import RegisterForm from "../../components/Auth/Register/RegisterForm";
import Fly from "../../images/fly.png";

export default function RegisterPage() {
  return (
    <div className="login-page-container">
      <div className="login-page-title-container">
        <div className="login-page-title">
          <img src={Fly} />
          <h1>Fly Trap</h1>
        </div>
        <h4>Bug Tracking Application</h4>
      </div>
      <div className="login-page-form-container">
        <div className="login-page-text-container">
          <h2>Register</h2>
          <h3>Please enter your details to register.</h3>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}
