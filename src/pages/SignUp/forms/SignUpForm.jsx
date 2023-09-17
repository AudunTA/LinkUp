import React from "react";
import { SignUpInput } from "../../../styles/inputs.styled";
import { useState } from "react";
import { validateSignUp } from "../validation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormSignUp, FormRow } from "../../../styles/forms.styled";
function SignUpForm() {
  const [errorApi, setErrorApi] = useState("");
  //initial form values
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const submitForm = (values) => {
    console.log(values);
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
                  <SignUpInput
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
                  <SignUpInput
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
                  <SignUpInput
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

                <button type="submit">Sign In</button>
              </FormSignUp>
            </>
          );
        }}
      </Formik>
    </>
  );
}

export default SignUpForm;
