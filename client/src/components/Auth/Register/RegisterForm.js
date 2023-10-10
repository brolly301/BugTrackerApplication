import React, { useState } from "react";
import Input from "../../Input";
import Button from "../../Button";
import useUserContext from "../../../hooks/useUserContext";
import { validation } from "../../../functions/Validation/registerValidation";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  const { register } = useUserContext();
  const [errors, setErrors] = useState({});

  const [registerDetails, setRegisterDetails] = useState({
    firstName: "",
    surname: "",
    phoneNumber: "",
    emailAddress: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validation(registerDetails);
    if (Object.keys(validationErrors).length === 0) {
      try {
        await register(registerDetails);
        setErrors({});
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className='register-form-container'>
      <form onSubmit={handleSubmit}>
        <Input
          label={"First Name"}
          errors={errors.firstName}
          setData={setRegisterDetails}
          data={registerDetails}
        />
        <Input
          label={"Surname"}
          setData={setRegisterDetails}
          data={registerDetails}
          errors={errors.surname}
        />
        <Input
          label={"Phone Number"}
          setData={setRegisterDetails}
          data={registerDetails}
          errors={errors.phoneNumber}
        />
        <Input
          label={"Email Address"}
          setData={setRegisterDetails}
          data={registerDetails}
          errors={errors.emailAddress}
        />
        <Input
          label={"Password"}
          setData={setRegisterDetails}
          data={registerDetails}
          errors={errors.password}
        />
        <Button type='submit' label={"Register"} />
        <Link to={"/"}>
          <Button type='button' label={"Login"} />
        </Link>
      </form>
    </div>
  );
}
