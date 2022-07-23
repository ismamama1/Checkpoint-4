import React from "react";
import { Link } from "react-router-dom";

import MiniLogo from "@assets/MiniLogo.png";
import Button from "./Button";

function Navbar() {
  return (
    <div className="flex flex-row justify-between bg-beige h-[4.5rem] md:h-[6rem] p-3 px-5 md:px-[2.8rem] lg:px-[8rem] xl:px-[13rem]">
      <Link to="/">
        <img src={MiniLogo} alt="logo" className="h-full" />
      </Link>
      <div className="flex justify-between gap-x-10 items-center">
        <Link to="/login">
          <button
            type="button"
            className="text-black font-body font-semibold hover:text-lightblack active:lightblack"
          >
            Login
          </button>
        </Link>
        <Button content="Register" link="/register" />
      </div>
    </div>
  );
}

export default Navbar;
