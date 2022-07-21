import React from "react";

import Button from "@components/Button";

function Home() {
  return (
    <div className="h-max bg-black">
      <section className="flex flex-col justify-between gap-y-28 p-16">
        <img
          src=""
          alt="vinyl"
          className="absolute inset-y-60 left-3 md:inset-y-80 md:left-20 xl:inset-y-80 xl:left-40"
        />
        <h1 className="text-left font-heading text-grey text-3xl md:text-4xl lg:text-4xl md:mr-[26rem] md:ml-[6rem] lg:mr-[46rem] lg:ml-[16rem] pt-6 md:pt-16">
          Let's contribute together and bring alive what is missing with
          streaming platforms.
        </h1>
        <img
          src=""
          alt="cd"
          className="absolute inset-y-[33rem] right-3 md:inset-y-[39rem] md:right-20 xl:inset-y-[39rem] xl:right-40"
        />
        <h2 className="text-right font-heading text-grey text-3xl md:text-4xl lg:text-4xl md:ml-[28rem] md:mr-[6rem] lg:ml-[46rem] lg:mr-[16rem] pb-6 md:pb-16">
          Get the magic back to what it was.
        </h2>

        <div className="flex justify-center mb-9 md:mb-20">
          <Button content="Discover" link="/list" />
        </div>
      </section>
    </div>
  );
}

export default Home;
