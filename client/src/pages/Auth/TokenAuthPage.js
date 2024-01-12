import React, { useState } from "react";
import Fly from "../../images/fly.png";
import Input from "../../components/Input";
import Button from "../../components/Button";
import useUserContext from "../../hooks/useUserContext";
import { useNavigate, useParams } from "react-router-dom";

export default function TokenAuthPage() {
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const { newUserPassword } = useUserContext();
  const { token, id } = useParams();
  const redirect = useNavigate();

  const handleSubmit = () => {
    newUserPassword({ password, token, id }, () => {
      redirect("/");
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
        <Input label={"Password"} setData={setPassword} data={password} />
        <Input
          label={"Confirm Password"}
          setData={setConfirmPassword}
          data={confirmPassword}
        />
        <Button label={"Reset Password"} onClick={handleSubmit} />
      </div>
    </div>
  );
}
