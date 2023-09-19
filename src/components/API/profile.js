import { baseURL } from "./baseURL";

const endpoint = "/auth/register";
export async function registrer(values, navigate) {
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
      logIn(values, navigate);
    }
  } catch (e) {
    console.log(e);
  }
}

export async function logIn(values, navigate) {
  console.log(navigate);
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
    console.log(response.status);
    if (response.status === 200) {
      localStorage.setItem("name", JSON.name);
      localStorage.setItem("token", JSON.accessToken);
      localStorage.setItem("email", JSON.email);
      navigate("/Feed");
    } else {
      console.log("error");
    }
  } catch (e) {
    console.log(e);
  }
}
