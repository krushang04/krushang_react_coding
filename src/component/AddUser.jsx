import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import classes from "./AddUser.module.css";

const AddUser = () => {
  const [isForm, setIsForm] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (emailValue === "" || firstNameValue === "" || lastNameValue === "") {
      setIsError(true);
      return;
    }
    setIsError(false);
  }, [emailValue, firstNameValue, lastNameValue]);

  const addDataHandle = () => {
    setIsForm((state) => !state);
  };

  const emailHandler = (e) => {
    setEmailValue(e.target.value);
  };
  const firstNameHandler = (e) => {
    setFirstNameValue(e.target.value);
  };
  const lastNameHandler = (e) => {
    setLastNameValue(e.target.value);
  };

  const resetField = () => {
    setEmailValue("");
    setFirstNameValue("");
    setLastNameValue("");
  };

  const showSuccessMsg = () => {
    console.log("ods");
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const postData = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", {
        email: emailValue,
        first_name: firstNameValue,
        last_name: lastNameValue,
      })
      .then((response) => showSuccessMsg())
      .catch((err) =>
        toast.error(err, {
          position: toast.POSITION.TOP_RIGHT,
        })
      );
    resetField();
    addDataHandle();
  };

  return (
    <>
      <div className={classes.heading}>
        <h1> Add User </h1>
        <button onClick={addDataHandle}>Add User</button>
      </div>
      {isForm && (
        <form>
          <div className={classes.field}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              onChange={emailHandler}
              value={emailValue}
            ></input>
          </div>
          <div className={classes.field}>
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              onChange={firstNameHandler}
              value={firstNameValue}
            ></input>
          </div>
          <div className={classes.field}>
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              onChange={lastNameHandler}
              value={lastNameValue}
            ></input>
          </div>
          <div className={classes.action}>
            <button type="submit" disabled={isError} onClick={postData}>
              ADD
            </button>
            <button type="reset" onClick={resetField}>
              RESET
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default AddUser;
