import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";
import React, { useState } from "react";



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
        <div className="flex items-center"></div>
        {window.innerWidth >= 768 ? <p className="mx-1">{name}</p> : null}
        <div className="relative group">
          <button
            onClick={logOut}
            className="text-red-500 cursor-pointer bg-transparent hover:bg-red-500  font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
