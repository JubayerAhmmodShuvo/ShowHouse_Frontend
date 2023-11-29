import LoginPage from "@/components/Login/Login";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Shoe House | Login",
};
const page = () => {
  return (
    <div className="max-w-7xl w-full mx-auto ">
      <LoginPage />
    </div>
  );
};

export default page;
