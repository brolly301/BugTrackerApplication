import React, { useState } from "react";
import Input from "../../components/Input";
import useUserContext from "../../hooks/useUserContext";
import { validation } from "../../functions/Validation/registerValidation";
import { toast } from "react-toastify";
import Dropdown from "../Dropdown";
import { manageUserFilters } from "../../functions/FilterOptions";
import Button from "../Button";
import { v4 as uuidv4 } from "uuid";
import "../../CSS/ManageUsers/CreateUserForm.css";

export default function CreateUserForm() {
  const [errors, setErrors] = useState({});
  const { addAllUsers } = useUserContext();

  const [userDetails, setUserDetails] = useState({
    userID: "",
    firstName: "",
    surname: "",
    role: "",
    phoneNumber: "",
    emailAddress: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUserID = uuidv4();
    const validationErrors = validation({
      ...userDetails,
      userID: newUserID,
    });
    if (Object.keys(validationErrors).length === 0) {
      try {
        await addAllUsers(
          {
            ...userDetails,
            userID: newUserID,
          },
          () => {
            setErrors({});
            toast.success(`User successfully created.`);
          }
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="create-user-form">
      <h1 className="create-user-title">Enter all the users details</h1>
      <form onSubmit={handleSubmit}>
        <div className="create-user-details-container">
          <div className="create-user-input-container">
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
          </div>
          <div className="create-user-input-container">
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
          </div>
        </div>
        <div className="create-user-form-button-container">
          <Button label={"Submit"} />
        </div>
      </form>
    </div>
  );
}
