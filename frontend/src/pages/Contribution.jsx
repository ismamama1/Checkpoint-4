import React from "react";

import Button from "@components/Button";

function Contribution() {
  return (
    <div className="flex flex-col items-center h-screen w-screen bg-black">
      <div className="flex flex-col h-[80%] w-[45%] md:w-[22%] lg:w-[18%] xl:w-[40%] flex-wrap rounded-md shadow-lg bg-beige overflow-hidden m-6">
        blbllb
      </div>
      <div className="flex justify-center mb-20 mt-20 md:mb-20">
        <Button content="Back to list" link="/list" />
      </div>
    </div>
  );
}

export default Contribution;
