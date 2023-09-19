import React from "react";
import { SignUpInput } from "../../../styles/inputs.styled";
import { useState } from "react";
import { validateLogIn } from "../validation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormSignUp, FormRow } from "../../../styles/forms.styled";
import { logIn } from "../../../components/API/profile";
import { BtnPrimary } from "../../../styles/buttons.styled";
import { useNavigate } from "react-router-dom";
function LogInForm() {
  const navigate = useNavigate();
  const [errorApi, setErrorApi] = useState("");
  //initial form values
  const initialValues = {
    email: "",
    password: "",
  };
  const submitForm = (values) => {
    console.log("LOL");
    logIn(values, navigate);
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validateLogIn}
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

                <BtnPrimary type="submit">Sign In</BtnPrimary>
              </FormSignUp>
            </>
          );
        }}
      </Formik>
    </>
  );
}

export default LogInForm;
