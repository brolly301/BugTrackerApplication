import React, { useState } from "react";
import Input from "../../Input";
import Button from "../../Button";
import { Link, useNavigate } from "react-router-dom";
import useUserContext from "../../../hooks/useUserContext";
import useTicketContext from "../../../hooks/useTicketContext";
import useProjectContext from "../../../hooks/useProjectContext";
import useUserProjectsContext from "../../../hooks/useUserProjectsContext";
import useUserTicketsContext from "../../../hooks/useUserTicketsContext";
import { toast } from "react-toastify";

export default function LoginForm() {
  const { login, state: user, getUserDetails, getAllUsers } = useUserContext();
  const { getTickets } = useTicketContext();
  const { getProjects } = useProjectContext();
  const { getUserProjects } = useUserProjectsContext();
  const { getUserTickets } = useUserTicketsContext();

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
      getUserTickets();
      getUserProjects();
      toast.success(
        `Login successful! Welcome back, ${user.userDetails.firstName}`
      );
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
