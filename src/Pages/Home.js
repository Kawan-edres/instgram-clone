import React from "react";
import Posts from "../Components/Posts";
import RightSide from "../Components/RightSide";
import StoryReel from "../Components/StoryReel";

const Home = () => {
  return (
    <section className="w-full h-screen flex  ">

        {/* Left */}
      <div className="w-[65rem] mt-8 ">
        <StoryReel />
        <Posts />
      </div>




       {/*Right   */}
      <div className="w-[25rem] thousnd:hidden mt-11 mr-28">

      <RightSide />
      
      </div>
    </section>
  );
};

export default Home;
