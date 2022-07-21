import React from "react";

import Button from "@components/Button";
import cd from "@assets/Cd.png";
import vinyl from "@assets/Vinyl.png";

function Home() {
  return (
    <div className="h-full w-full bg-black">
      <section className="flex flex-col justify-between gap-y-20 md:gap-y-44 md:p-16">
        <img
          src={vinyl}
          alt="vinyl"
          className="z-0 w-[13rem] md:w-[19rem] absolute inset-y-[12.5rem] left-0 md:inset-y-72 md:left-5 xl:inset-y-80 xl:left-40"
        />
        <h1 className="flex z-10 text-left font-heading text-grey text-xl md:text-4xl mt-[8rem] ml-[12.5rem] md:mt-[8rem] md:mr-[6rem] md:ml-[16rem] xl:mr-[50%] xl:ml-[31%]">
          Let's contribute together and bring alive what is missing with
          streaming platforms.
        </h1>
        <img
          src={cd}
          alt="cd"
          className="z-0 w-[11rem] md:w-[16rem] absolute inset-y-[32rem] right-0 md:inset-y-[44rem] md:right-5 xl:inset-y-[49rem] xl:right-40"
        />
        <h2 className="flex z-10 text-right font-heading text-grey text-xl md:text-4xl mt-[5rem] mr-[11rem] ml-[4rem] md:mt-[2rem] md:mr-[14rem] md:ml-[13rem] xl:ml-[50%] xl:mr-[28%] pb-18 ">
          {/* md:pb-16  */}
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
