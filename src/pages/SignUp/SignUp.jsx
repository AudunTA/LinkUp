import React from "react";
import "./signup.css";
import { SignUpInput } from "../../styles/inputs.styled";
function SignUp() {
  return (
    <div className="signUp-wrapper">
      <div className="signUp-container">
        <h2>Welcome to LinkUp</h2>
        <form className="SignUpForm">
          <div className="group-form">
            <label htmlFor="name">Name</label>
            <SignUpInput
              type="text"
              id="name"
              placeholder="Enter your name"
            ></SignUpInput>
          </div>
          <div className="group-form">
            <label htmlFor="email">Email</label>
            <SignUpInput
              type="email"
              id="email"
              placeholder="Enter your Email"
            ></SignUpInput>
          </div>
          <div className="group-form">
            <label htmlFor="password">Password</label>
            <SignUpInput
              type="password"
              id="passwrod"
              placeholder="Enter your Password"
            ></SignUpInput>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
