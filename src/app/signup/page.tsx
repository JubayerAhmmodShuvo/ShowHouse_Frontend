import SignupPage from "@/components/SignUp/SignUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Task Management  | SignUp",
};


const SignUp = () => {
  return (
    <div className="max-w-7xl w-full mx-auto p-8">
      <SignupPage />
    </div>
  );
};

export default SignUp;