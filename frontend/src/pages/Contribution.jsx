import React from "react";

import MiniLogo from "@assets/MiniLogo.png";
import Upload from "@assets/Upload.png";
import Button from "@components/Button";

function Contribution({ name, house, species, yearOfBirth }) {
  return (
    <div className="flex flex-col items-center h-full w-full bg-black">
      <h1 className="text-grey text-4xl font-heading mt-14">Contribute</h1>
      {/* Background Card */}
      <div className="flex flex-col h-[90%] w-[80%] md:w-[22%] lg:w-[18%] xl:w-[40%] rounded-md shadow-lg bg-beige m-6 xl:m-12">
        {/* First Card */}
        <div className="flex flex-col md:flex-row bg-grey rounded shadow-lg px-6 py-4 m-4">
          <img
            className=" h-40 w-sm object-cover pb-4"
            src={MiniLogo}
            alt={name}
            loading="lazy"
          />
          <div className="flex flex-col md:pl-16 ">
            <div className="text-black font-heading font-semibold text-xl mb-2">
              Title
            </div>
            <div className="text-black font-heading text-lg mb-2 ">
              Artist: {name}
            </div>
            <p className="text-black text-body">Genre: {house}</p>
            <p className="text-black text-body">Year: {yearOfBirth}</p>
            <div className="px-1 pt-4 pb-2">
              <span className="inline-block bg-beige rounded shadow px-3 py-1 text-sm font-semibold text-body text-black mr-2 mb-2">
                Media: {species}
              </span>
            </div>
          </div>
        </div>
        {/* Second Card */}
        <div className="flex flex-col bg-black rounded shadow-lg px-6 py-4 m-4">
          <div className="flex justify-center text-grey font-heading text-xl mb-2">
            Upload your photos
          </div>
          <div className="flex justify-center text-grey font-heading text-xl mb-2">
            <button type="button">
              <img
                className="h-20 w-sm object-cover pb-4 pt-4 "
                src={Upload}
                alt={name}
                loading="lazy"
              />
            </button>
          </div>
        </div>
        <div className="flex justify-end mt-7 mr-14 mb-7">
          <Button content="Submit" link="" />
        </div>
      </div>
    </div>
  );
}

export default Contribution;
