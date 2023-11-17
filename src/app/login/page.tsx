import LoginPage from "@/components/Login/Login";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Task Management | Login",
};
const page = () => {
  return (
    <div className="max-w-7xl w-full mx-auto p-8">
      <LoginPage />
    </div>
  );
};

export default page;
