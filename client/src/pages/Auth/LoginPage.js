import React from "react";
import LoginForm from "../../components/Auth/Login/LoginForm";
import "../../CSS/Pages/LoginPage.css";

export default function LoginPage() {
  return (
    <div className='login-page-container'>
      <div className='login-page-text-container'>
        <h1>Login</h1>
        <h2>Please enter your details to login.</h2>
      </div>
      <LoginForm />
    </div>
  );
}
