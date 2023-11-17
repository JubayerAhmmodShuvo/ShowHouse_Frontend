"use client";

import React from "react";
import wrong from "../assets/something-wrong.png";
import Image from "next/image";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-red-500">
      <div className="text-white text-center">
        <Image src={wrong} width={350} alt="error image" />
      </div>
    </div>
  );
};

export default ErrorPage;
