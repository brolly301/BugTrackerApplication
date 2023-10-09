import React, { useState } from "react";
import Input from "../../Input";
import Button from "../../Button";
import { Link, useNavigate } from "react-router-dom";
import useUserContext from "../../../hooks/useUserContext";

export default function LoginForm() {
  const { login, state, getUserDetails } = useUserContext();
  const [loginDetails, setLoginDetails] = useState({
    emailAddress: "",
    password: "",
  });

  const redirect = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(loginDetails, () => {
      redirect("/adminDashboard");
      getUserDetails();
    });
  };

  const handleChangeText = (field, e) => {
    setLoginDetails({
      ...loginDetails,
      [field]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input label={"Email Address"} handleChangeText={handleChangeText} />
        <Input label={"Password"} handleChangeText={handleChangeText} />
        <p className="input-error">{state.errorMessage}</p>
        <Button label={"Login"} />
        <Link to={"/register"}>
          <Button label={"Register"} />
        </Link>
      </form>
    </div>
  );
}
