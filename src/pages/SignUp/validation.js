import * as Yup from "yup";

export const validateSignUp = Yup.object({
  name: Yup.string()
    .required("Name is required.")
    .max(20, "Name must be less than 20 characters."),
  email: Yup.string()
    .required()
    .matches(
      /^[\w\-.]+@(stud\.)?noroff\.no$/,
      "Please enter a valid @stud.noroff email."
    ),
  password: Yup.string()
    .required()
    .min(8, "Password must be more than 8 characters."),
});

export const validateLogIn = Yup.object({
  email: Yup.string()
    .required()
    .matches(
      /^[\w\-.]+@(stud\.)?noroff\.no$/,
      "Please enter a valid @stud.noroff email."
    ),
  password: Yup.string()
    .required()
    .min(8, "Password must be more than 8 characters."),
});
