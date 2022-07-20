import React from "react";
import { Link } from "react-router-dom";

import Button from "./Button";

function Navbar() {
  return (
    <div className="flex flex-row justify-between bg-beige h-[4.5rem] md:h-[6rem] mb-3 p-3 px-5 md:px-[2.8rem] lg:px-[8rem] xl:px-[13rem]">
      <Link to="/">
        <img src="" alt="logo" className="h-full" />
      </Link>
      <div className="flex justify-between gap-x-10 items-center">
        <button
          type="button"
          className="text-black font-bold hover:text-lightblack active:lightblack"
        >
          Login
        </button>
        <Button content="Register" link="/Page1" />
      </div>
    </div>
  );
}

export default Navbar;
