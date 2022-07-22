import React from "react";

function ListCards() {
  return (
    <div className="flex h-screen w-screen justify-between bg-black">
      <div className="flex flex-row w-[45%] h-[40%] md:w-[22%] lg:w-[18%] lg:h-[40%] xl:w-[15%] bg-beige rounded overflow-hidden shadow-lg p-8 text center">
        <img className="w-full" src="" alt="cover" />
        <div className="px-6 py-4">
          <div className="text-black font-heading font-semibold text-xl mb-2">
            Title
          </div>
          <div className="text-black font-heading text-xl mb-2">Artist</div>
          <p className="text-black text-body">Genre</p>
          <p className="text-black text-body">Year</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-body text-black mr-2 mb-2">
            Media
          </span>
        </div>
      </div>
    </div>
  );
}

export default ListCards;
