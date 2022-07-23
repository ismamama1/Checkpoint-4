import React from "react";

function ListCards({ image, name, house }) {
  return (
    <div className="w-[45%] md:w-[22%] lg:w-[18%] xl:w-[18%] flex flex-col flex-wrap rounded-lg shadow-lg bg-beige overflow-hidden m-4 h-auto">
      {/* <div className="w-[45%] h-[80%] md:w-[22%] lg:h-[50%] lg:w-[90%] xl:w-[15%] bg-beige rounded overflow-hidden m-8 p-2 text center"> */}
      <img
        className="object-contain w-15 h-30 pb-4"
        src={image}
        alt={name}
        loading="lazy"
      />
      <div className="bg-grey rounded shadow-lg px-6 py-4 mx-2">
        <div className="text-black font-heading font-semibold text-xl mb-2">
          Title
        </div>
        <div className="text-black font-heading text-lg mb-2 ">
          Artist: {name}
        </div>
        <p className="text-black text-body">Genre: {house}</p>
        <p className="text-black text-body">Year</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block rounded shadow px-3 py-1 text-sm font-semibold text-body text-black mr-2 mb-2">
          Media
        </span>
      </div>
    </div>
  );
}

export default ListCards;
