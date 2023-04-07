import React from "react";
import HomapageSlider from "./HomapageSlider";
import Weddings from "./Weddings";
import LatestNews from "./LatestNews";
import Happiness from "./Happiness";
import Special from "./Special";

const Home = () => {
  return (
    <div>
      <HomapageSlider />
      <Special/>
      {/* <Special2 /> */}

      <Weddings />
      <LatestNews />
      <Happiness />
    </div>
  );
};

export default Home;
