import React from "react";

import Button from "@components/Button";

function Contribution({ image, name, house, species, yearOfBirth }) {
  return (
    <div className="flex flex-col items-center h-screen w-screen bg-black">
      <div className="flex flex-col h-[80%] w-[45%] md:w-[22%] lg:w-[18%] xl:w-[40%] flex-wrap rounded-md shadow-lg bg-beige overflow-hidden m-6">
        <img
          className="h-80 w-sm object-cover pb-4"
          src={image}
          alt={name}
          loading="lazy"
        />
        <div className="bg-grey bb-52 rounded shadow-lg px-6 py-4 mx-2">
          <div className="text-black font-heading font-semibold text-xl mb-2">
            Title
          </div>
          <div className="text-black font-heading text-lg mb-2 ">
            Artist: {name}
          </div>
          <p className="text-black text-body">Genre: {house}</p>
          <p className="text-black text-body">Year: {yearOfBirth}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-beige rounded shadow px-3 py-1 text-sm font-semibold text-body text-black mr-2 mb-2">
            Media: {species}
          </span>
        </div>
      </div>
      <div className="flex justify-center mb-20 mt-20 md:mb-20">
        <Button content="Back to list" link="/list" />
      </div>
    </div>
  );
}

export default Contribution;
