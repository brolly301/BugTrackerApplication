import React from "react";
import RegisterForm from "../../components/Auth/Register/RegisterForm";
import "../../CSS/Pages/RegisterPage.css";

export default function RegisterPage() {
  return (
    <div className='register-page-container'>
      <div className='register-page-text-container'>
        <h1>Register</h1>
        <h2>Please enter your details to register.</h2>
      </div>
      <RegisterForm />
    </div>
  );
}
