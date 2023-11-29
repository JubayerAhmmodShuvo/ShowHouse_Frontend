import SignupPage from "@/components/SignUp/SignUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shoe House | SignUp",
};


const SignUp = () => {
  return (
    <div className="max-w-7xl w-full mx-auto">
      <SignupPage />
    </div>
  );
};

export default SignUp;