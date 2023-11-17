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
    <div className="flex flex-col md:flex-row justify-center items-center max-w-screen min-h-screen">
      <div className="md:w-full lg:w-1/2  text-center md:text-left p-8">
        <Image src={signupImage} width={400} alt="signup image" />
      </div>
      <div className="md:w-1/2 lg:w-2/3 p-8">
        <h1 className="text-2xl text-center text-blue-500 font-bold mb-4">
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
                className="w-full py-2 px-3 bg-gray-100 text-lg rounded-md"
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
                className="w-full py-2 px-3 bg-gray-100 text-lg rounded-md"
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
                className="w-full py-2 px-3 bg-gray-100 text-lg rounded-md"
                required
              />
            </div>
            <button
              className="w-full py-3 px-4 bg-blue-500 text-white rounded-md font-semibold"
              type="submit"
            >
              Sign Up
            </button>
          </Form>
        </div>
        <p className="text-center text-lg">
          Already have an account? Please{" "}
          <Link href="/login">
            <p className="text-blue-500">Login</p>
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
