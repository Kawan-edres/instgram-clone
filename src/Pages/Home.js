import React from "react";
import StoryReel from "../Components/StoryReel";

const Home = () => {
  return (
    <section className="w-full h-full flex">

        {/* Left */}
      <div className="w-[70%]">
        <StoryReel />
      </div>




       {/*Right   */}
      <div className="w-[30%]">hellooooo</div>
    </section>
  );
};

export default Home;
