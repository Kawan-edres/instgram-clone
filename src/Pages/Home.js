import React from "react";
import RightSide from "../Components/RightSide";
import StoryReel from "../Components/StoryReel";

const Home = () => {
  return (
    <section className="w-full h-full flex  ">

        {/* Left */}
      <div className="w-[60rem] mt-8">
        <StoryReel />
      </div>




       {/*Right   */}
      <div className="w-[30rem] thousnd:hidden mt-11 mr-28">

      <RightSide />
      
      </div>
    </section>
  );
};

export default Home;
