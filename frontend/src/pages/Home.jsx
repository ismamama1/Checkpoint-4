import React from "react";

import Button from "@components/Button";

function Home() {
  return (
    <div className="h-max bg-black">
      <section className="flex flex-col justify-between gap-y-28 p-16">
        <h1 className="justify-start text-left font-heading text-grey text-3xl md:mr-[35rem] md:ml-[5rem] lg:mr-[50rem] lg:ml-[16rem]">
          Contribute together and bring alive what is missing with streaming
          platforms.
        </h1>
        <h2 className="justify-end text-right font-heading text-grey text-3xl md:ml-[35rem] lg:ml-[50rem] lg:mr-[16rem]">
          Get the magic back to what it was.
        </h2>
        <div className="flex justify-center mb-28">
          <Button content="Discover" link="" />
        </div>
      </section>
    </div>
  );
}

export default Home;
