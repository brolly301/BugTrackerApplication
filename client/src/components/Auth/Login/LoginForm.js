import React, { useEffect, useState } from "react";
import Input from "../../Input";
import Button from "../../Button";
import { Link, useNavigate } from "react-router-dom";
import useUserContext from "../../../hooks/useUserContext";

export default function LoginForm() {
  const { login, state: user, getUserDetails } = useUserContext();
  const [loginDetails, setLoginDetails] = useState({
    emailAddress: "",
    password: "",
  });

  const redirect = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(loginDetails, () => {
      redirect("/dashboard");
      getUserDetails();
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          label={"Email Address"}
          setData={setLoginDetails}
          data={loginDetails}
        />
        <Input
          label={"Password"}
          setData={setLoginDetails}
          data={loginDetails}
        />
        <p className="input-error">{user.errorMessage}</p>
        <Button label={"Login"} />
        <Link to={"/register"}>
          <Button label={"Register"} />
        </Link>
      </form>
    </div>
  );
}