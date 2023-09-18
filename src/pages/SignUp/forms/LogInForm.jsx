import React from "react";
import { SignUpInput } from "../../../styles/inputs.styled";
import { useState } from "react";
import { validateSignUp } from "../validation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormSignUp, FormRow } from "../../../styles/forms.styled";
import { logIn } from "../../../components/API/profile";
function LogInForm() {
  const [errorApi, setErrorApi] = useState("");
  //initial form values
  const initialValues = {
    name: "",
    password: "",
  };
  const submitForm = (values) => {
    logIn(values);
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

export default LogInForm;
