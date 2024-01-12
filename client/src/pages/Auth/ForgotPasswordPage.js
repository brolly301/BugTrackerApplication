import React, { useState } from "react";
import Fly from "../../images/fly.png";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useUserContext from "../../hooks/useUserContext";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState();
  const { sendPasswordReset } = useUserContext();
  const redirect = useNavigate();

  const handleSubmit = () => {
    sendPasswordReset(email, () => {
      redirect("/forgotPassword/resetConfirmation");
    });
  };

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
          <h2>Forgot Password?</h2>
          <h3>Please enter your email address below.</h3>
        </div>
        <Input label={"Email"} setData={setEmail} data={email} />
        <Button label={"Reset Password"} onClick={handleSubmit} />
      </div>
    </div>
  );
}
