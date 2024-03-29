import React, { useState } from "react";
import Input from "../../Input";
import Button from "../../Button";
import { Link, useNavigate } from "react-router-dom";
import useUserContext from "../../../hooks/useUserContext";
import useTicketContext from "../../../hooks/useTicketContext";
import useProjectContext from "../../../hooks/useProjectContext";
import { toast } from "react-toastify";

export default function LoginForm() {
  const { login, state: user, getUserDetails, getAllUsers } = useUserContext();
  const { getTickets } = useTicketContext();
  const { getProjects } = useProjectContext();

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
      getAllUsers();
      getProjects();
      getTickets();
      toast.success(`Login successful! Welcome back.`);
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
        <Link to={"/forgotPassword"}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            Forgot Password?
          </div>
        </Link>
        <p className="input-error">{user.errorMessage}</p>
        <Button label={"Login"} />
        <Link to={"/register"}>
          <Button label={"Register"} />
        </Link>
      </form>
    </div>
  );
}
