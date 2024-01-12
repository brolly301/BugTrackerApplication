import React from "react";
import Fly from "../../images/fly.png";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

export default function ResetConfirmation() {
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
          <h2>Reset Confirmation</h2>
          <h4>
            We have sent you an email with all the details required to reset
            your password.
          </h4>
          <h4>
            Please click on the link provided in the email and you will be taken
            to the password reset page.
          </h4>
          <Link to={"/"}>
            <Button label={"Back to Login Page"} />
          </Link>
        </div>
      </div>
    </div>
  );
}
