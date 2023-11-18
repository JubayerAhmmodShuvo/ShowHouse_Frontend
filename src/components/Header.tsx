import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";



const Header = () => {
  const router = useRouter();


  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  const { role, name } = getUserInfo() as any;


  return (
    <header className="bg-white">
      <div className="flex justify-between items-center h-full">
        <Link
          className="font-bold font-serif text-xl text-purple-700 "
          href="/"
        >
          Home
        </Link>
        <div className="flex items-center"></div>

        <div className="relative group">
          <button
            onClick={logOut}
            className="text-black cursor-pointer bg-transparent hover:bg-purple-700  font-medium  hover:text-white py-2 px-4 border border-black hover:border-transparent rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
