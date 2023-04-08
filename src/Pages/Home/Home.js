import React from "react";
import HomapageSlider from "./HomapageSlider";
import Weddings from "./Weddings";
import LatestNews from "./LatestNews";
import Happiness from "./Happiness";
import Special from "./Special";
import HighlightedProfile from "../../Components/HighlightedProfile/HighlightedProfile";

const Home = () => {
  return (
    <div>
      <HomapageSlider />
      <Special/>
      {/* <Special2 /> */}
      <HighlightedProfile/>

      <Weddings />
      <LatestNews />
      <Happiness />
    </div>
  );
};

export default Home;
