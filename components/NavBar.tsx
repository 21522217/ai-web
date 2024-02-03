import React from "react";

import { UserButton } from "@clerk/nextjs";

import MobileSidebar from "./MobileSidebar";

const NavBar = () => {
  return (
    <div className="flex w-full items-center p-4">
      <MobileSidebar /> 
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default NavBar;
