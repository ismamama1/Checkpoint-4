import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-row justify-between bg-beige h-[4.5rem] md:h-[6rem] mb-3 p-3 px-5 md:px-[2.8rem] lg:px-[8rem] xl:px-[13rem]">
      <Link to="/">
        <img src="" alt="logo" className="h-full" />
      </Link>
      <div className="flex justify-between gap-x-10 items-center">
        <button type="button" className="text-black font-bold">
          Login
        </button>
        <button
          type="button"
          className="bg-green text-black font-bold py-2 px-4 rounded-md drop-shadow-md hover:bg-orange-700"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Navbar;
