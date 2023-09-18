import { json } from "react-router-dom";
import { baseURL } from "./baseURL";
import { userStatus } from "./userstatus";
const endpoint = "/auth/register";

export async function registrer(values) {
  const userInformation = {
    name: values.name,
    email: values.email,
    password: values.password,
  };
  const options = {
    method: "POST",
    body: JSON.stringify(userInformation),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  try {
    const response = await fetch(baseURL + endpoint, options);
    const JSON = await response.json();
    if (response.status !== 400) {
      logIn(values);
    }
  } catch (e) {
    console.log(e);
  }
}

export async function logIn(values) {
  const loginEndpoints = "/auth/login";
  const userInformationLogin = {
    email: values.email,
    password: values.password,
  };
  const options = {
    method: "POST",
    body: JSON.stringify(userInformationLogin),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  try {
    const response = await fetch(baseURL + loginEndpoints, options);
    const JSON = await response.json();
    if (response.status !== 400) {
      localStorage.setItem("name", JSON.name);
      localStorage.setItem("token", JSON.accessToken);
      localStorage.setItem("email", JSON.email);
    } else {
      console.log("error");
    }
  } catch (e) {
    console.log(e);
  }
}
