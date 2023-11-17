import * as yup from "yup";

export const signupSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(32, "Password can't exceed 32 characters")
    .required("Password is required"),
});
