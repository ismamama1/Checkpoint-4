import React from "react";

import Button from "@components/Button";
import cd from "@assets/Cd.png";
import vinyl from "@assets/Vinyl.png";

function Home() {
  return (
    <div className="h-max bg-black">
      <section className="flex flex-col justify-between gap-y-20 md:p-16">
        <img
          src={vinyl}
          alt="vinyl"
          className="z-0 w-[13rem] absolute inset-y-[12.5rem] left-0 md:inset-y-80 md:left-20 xl:inset-y-80 xl:left-40"
        />
        <h1 className="flex z-10 text-left font-heading text-grey text-xl md:text-4xl mt-[8rem] ml-[12.5rem] lg:text-4xl md:mr-[26rem] md:ml-[6rem] lg:mr-[46rem] lg:ml-[16rem] md:pt-16">
          Let's contribute together and bring alive what is missing with
          streaming platforms.
        </h1>
        <img
          src={cd}
          alt="cd"
          className="z-0 w-[11rem] absolute inset-y-[32rem] right-0 md:inset-y-[39rem] md:right-20 xl:inset-y-[39rem] xl:right-40"
        />
        <h2 className="flex z-10 text-right font-heading text-grey text-xl md:text-4xl mt-[6rem] mr-[12rem] md:ml-[28rem] md:mr-[6rem] lg:ml-[46rem] lg:mr-[16rem] pb-18 md:pb-16">
          Get the magic back to what it was.
        </h2>

        <div className="flex justify-center mb-20 mt-20 md:mb-20">
          <Button content="Discover" link="/list" />
        </div>
      </section>
    </div>
  );
}

export default Home;
