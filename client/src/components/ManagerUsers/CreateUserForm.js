import React, { useState } from "react";
import Input from "../../components/Input";
import useUserContext from "../../hooks/useUserContext";
import { validation } from "../../functions/Validation/registerValidation";
import { toast } from "react-toastify";
import Dropdown from "../Dropdown";
import { manageUserFilters } from "../../functions/FilterOptions";
import Button from "../Button";

export default function CreateUserForm() {
  const [errors, setErrors] = useState({});
  const { register, state, addAllUsers } = useUserContext();

  const [userDetails, setUserDetails] = useState({
    userID: "user" + Math.floor(Math.random() * 1000000) + 1,
    firstName: "",
    surname: "",
    role: "",
    phoneNumber: "",
    emailAddress: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validation(userDetails);
    if (Object.keys(validationErrors).length === 0) {
      try {
        await addAllUsers(userDetails, () => {
          setErrors({});
          toast.success(`User successfully created.`);
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <h1 className="create-ticket-title">Enter all the user details</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label={"First Name"}
          errors={errors.firstName}
          setData={setUserDetails}
          data={userDetails}
        />
        <Input
          label={"Surname"}
          setData={setUserDetails}
          data={userDetails}
          errors={errors.surname}
        />
        <Dropdown
          label={"Role"}
          value={"Select.."}
          setData={setUserDetails}
          data={userDetails}
          errors={errors.surname}
          values={manageUserFilters}
        />
        <Input
          label={"Phone Number"}
          setData={setUserDetails}
          data={userDetails}
          errors={errors.phoneNumber}
        />
        <Input
          label={"Email Address"}
          setData={setUserDetails}
          data={userDetails}
          errors={errors.emailAddress}
        />
        <Input
          label={"Password"}
          setData={setUserDetails}
          data={userDetails}
          errors={errors.password}
        />
        <Button label={"Submit"} />
      </form>
    </div>
  );
}
