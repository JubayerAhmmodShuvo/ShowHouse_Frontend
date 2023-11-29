"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler } from "react-hook-form";

import loginImage from "../../assets/login-image.png";
import { useUserLoginMutation } from "../../redux/api/authApi";

import { loginSchema } from "../../schemas/login";
import { storeUserInfo } from "@/services/auth.service";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormInput from "../Forms/FormInput";
import Form from "../Forms/Form";




type FormValues = {
  email: string;
  password: string;
};
const LoginPage = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();

      if (res?.accessToken) {
        router.push("/home");
        toast.success("User logged in successfully!");
      }
      storeUserInfo({ accessToken: res?.accessToken });
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen overflow-x-hidden ">
      <div className="bg-purple-50   shadow-inherit w-full max-w-md sm:w-full p-8 rounded-lg ">
        <h1 className="text-2xl  font-bold mb-4 text-center">
          First Login In Your Account
        </h1>
        <div className="mb-4">
          <Form submitHandler={onSubmit} resolver={yupResolver(loginSchema)}>
            <div className="mb-4">
              <FormInput
                name="email"
                type="text"
                size="large"
                label="User Email"
                required
                disabled={false}
                className="w-full py-3 px-3 text-black bg-white text-sm rounded-md"
              />
            </div>
            <div className="mb-4 w-full">
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
                required
                disabled={false}
                className="w-full py-3 px-3 bg-white text-sm rounded-md"
              />
            </div>
            <button
              className="w-full py-3 px-4 bg-purple-500 hover:bg-purple-800  text-white rounded-md font-semibold"
              type="submit"
            >
              Login
            </button>
          </Form>
        </div>
        <p style={{ fontSize: "20px" }}>
          Don&rsquo;t have an account? Please{" "}
          <Link href="/signup">
            <span className="text-purple-500 cursor-pointer"> SignUp</span>
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
