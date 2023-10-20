import React from "react";
import LoginForm from "../../components/Auth/Login/LoginForm";
import "../../CSS/Pages/LoginPage.css";
import Fly from "../../images/fly.png";

export default function LoginPage() {
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
          <h2>Login</h2>
          <h3>Please enter your details to login.</h3>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
