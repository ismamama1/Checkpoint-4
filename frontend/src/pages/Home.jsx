import React from "react";

import Button from "@components/Button";

function Home() {
  return (
    <div className="h-max bg-black">
      <section className="flex flex-col justify-between gap-y-28 p-16">
        <div className="justify-start">
          <img src="" alt="vinyl" className="h-full" />
          <h1 className="text-left font-heading text-grey text-3xl md:text-4xl lg:text-4xl md:mr-[26rem] md:ml-[6rem] lg:mr-[46rem] lg:ml-[16rem] pt-6 md:pt-16">
            Contribute together and bring alive what is missing with streaming
            platforms.
          </h1>
        </div>
        <div className="justify-end">
          <img src="" alt="cd" className="h-full" />
          <h2 className="text-right font-heading text-grey text-3xl md:text-4xl lg:text-4xl md:ml-[28rem] md:mr-[6rem] lg:ml-[46rem] lg:mr-[16rem] pb-6 md:pb-16">
            Get the magic back to what it was.
          </h2>
        </div>
        <div className="flex justify-center mb-9 md:mb-20">
          <Button content="Discover" link="" />
        </div>
      </section>
    </div>
  );
}

export default Home;
