import React from "react";

import Button from "@components/Button";

function Home() {
  return (
    <div className="flex flex-col h-screen bg-black ">
      <section className="flex flex-col justify-between gap-y-28 pt-28">
        <h1 className="flex justify-start text-left font-heading text-grey text-3xl">
          Contribute together and bring alive what is missing with streaming
          platforms.
        </h1>
        <h2 className="flex justify-end text-right font-heading text-grey text-3xl">
          Get the magic back to what it was.
        </h2>
      </section>
      <div className="flex justify-center pt-28">
        <Button content="Discover" link="" />
      </div>
    </div>
  );
}

export default Home;
