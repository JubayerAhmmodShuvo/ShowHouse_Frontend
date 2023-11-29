"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler } from "react-hook-form";
import signupImage from "../../assets/signup-image.png";
import { useUserSignUpMutation } from "../../redux/api/authApi";
import { signupSchema } from "../../schemas/signup";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


type FormValues = {
  name: string;
  email: string;
  password: string;
};



const SignupPage = () => {
  const [userSignup] = useUserSignUpMutation();
  const router = useRouter();

 const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
   try {
     const res = await userSignup({ ...data }).unwrap();
    
     toast.success("User registered successfully!");

     router.push("/login");
   } catch (err: any) {
     toast.error(err.message);
   }
 };

  return (
    <div className="flex items-center justify-center min-h-screen overflow-x-hidden ">
      <div className="bg-purple-50    shadow-inherit w-full max-w-md sm:w-full p-8 rounded-lg ">
        <h1 className="text-2xl text-center  font-bold mb-4">
          Sign Up for Your Account
        </h1>
        <div className="mb-4">
          <Form submitHandler={onSubmit} resolver={yupResolver(signupSchema)}>
            <div className="mb-4">
              <FormInput
                name="name"
                type="text"
                size="large"
                label="Your Name"
                disabled={false}
                className="w-full py-3 px-3 bg-white text-sm rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <FormInput
                name="email"
                type="text"
                size="large"
                label="User Email"
                disabled={false}
                className="w-full py-3 px-3 bg-white text-sm rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
                disabled={false}
                className="w-full py-3 px-3 bg-white text-sm rounded-md"
                required
              />
            </div>
            <button
              className="w-full py-3 px-4 bg-purple-500 hover:bg-purple-800 text-white rounded-md font-semibold"
              type="submit"
            >
              Sign Up
            </button>
          </Form>
        </div>
        <p className="text-center text-lg">
          Already have an account? Please{" "}
          <Link href="/login">
            <p className="text-purple-700">Login</p>
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
