import React from "react";
import "./signup.css";
import { useState } from "react";
import LogInForm from "./forms/LogInForm";
import SignUpForm from "./forms/SignUpForm";

function SignUp() {
  const [form, setForm] = useState(true);
  const changeForm = () => {
    setForm(!form);
  };
  return (
    <div className="signUp-wrapper">
      <div className="signUp-container">
        <h2>Welcome to LinkUp</h2>
        {form ? <SignUpForm /> : <LogInForm />}
        {form ? (
          <div>
            <span>Already got an account?</span>
            <button onClick={changeForm}>Log In</button>
          </div>
        ) : (
          <div>
            <span>Don't have an account?</span>
            <button onClick={changeForm}>Sign Up</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignUp;
