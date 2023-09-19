import React from "react";
import { SignUpInput, InputLabel } from "../../../styles/inputs.styled";
import { useState } from "react";
import { validateSignUp } from "../validation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormSignUp, FormRow } from "../../../styles/forms.styled";
import { registrer } from "../../../components/API/profile";
import { BtnPrimary } from "../../../styles/buttons.styled";
import { useNavigate } from "react-router-dom";
function SignUpForm() {
  const [errorApi, setErrorApi] = useState("");
  //initial form values
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const submitForm = (values) => {
    registrer(values, navigate);
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validateSignUp}
        onSubmit={submitForm}
      >
        {(formik) => {
          const { values, handleChange, handleSubmit, errors, touched } =
            formik;
          return (
            <>
              <FormSignUp onSubmit={handleSubmit}>
                <FormRow>
                  <InputLabel htmlFor="name">Name</InputLabel>
                  <SignUpInput
                    id="name"
                    placeholder="Enter your name."
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                  {errors.name && touched.name && (
                    <span className="error">{errors.name}</span>
                  )}
                </FormRow>
                <FormRow>
                  {errorApi ? (
                    <span className="error margin-error">{errorApi}</span>
                  ) : (
                    ""
                  )}
                  <InputLabel htmlFor="name">Email</InputLabel>
                  <SignUpInput
                    id="email"
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && touched.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </FormRow>

                <FormRow>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <SignUpInput
                    id="password"
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  {errors.password && touched.password && (
                    <span className="error">{errors.password}</span>
                  )}
                </FormRow>

                <BtnPrimary className="btnSignUp" type="submit">
                  Sign In
                </BtnPrimary>
              </FormSignUp>
            </>
          );
        }}
      </Formik>
    </>
  );
}

export default SignUpForm;
