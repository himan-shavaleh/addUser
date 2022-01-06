import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "./ErrorModal";
const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState(null);
  const changeUserAge = (e) => {
    setUserAge(e.target.value);
  };
  const changeUserName = (e) => {
    setUserName(e.target.value);
  };
  const submitFormHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "invalid Input",
        message: "please enter valid age and name inputs",
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: "invalid Input",
        message: "please enter valid age (age>0)",
      });
      return;
    }
    props.onAddUser({ name: userName, age: userAge });
    setError(null);

    setUserName("");
    setUserAge("");
  };
  const errorHandler = () => {
      console.log(error);
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card>
        <form onSubmit={submitFormHandler}>
          <div className="form-control">
            <label htmlFor="name">NAME</label>
            <input
              value={userName}
              onChange={changeUserName}
              type="text"
              id="name"
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">AGE</label>
            <input
              value={userAge}
              onChange={changeUserAge}
              type="number"
              id="age"
            />
          </div>
          <Button type={"submit" || "button"}>ADD USER</Button>
        </form>
      </Card>
    </>
  );
};
export default AddUser;
