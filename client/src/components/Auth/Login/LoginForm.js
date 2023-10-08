import React, { useState } from "react";
import Input from "../../Input";
import Button from "../../Button";

export default function LoginForm() {
  const [loginDetails, setLoginDetails] = useState({
    emailAddress: "",
    password: "",
  });

  const handleChangeText = (field, e) => {
    setLoginDetails({
      ...loginDetails,
      [field]: e.target.value,
    });
  };

  return (
    <div>
      <Input label={"Email"} handleChangeText={handleChangeText} />
      <Input label={"Password"} handleChangeText={handleChangeText} />
      <Button label={"Login"} />
      <Button label={"Register"} />
    </div>
  );
}
