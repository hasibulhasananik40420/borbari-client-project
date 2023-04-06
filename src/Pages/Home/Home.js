import React from "react";
import HomapageSlider from "./HomapageSlider";
import SignUp from "./SignUp";
import Weddings from "./Weddings";
import LatestNews from "./LatestNews";
import Happiness from "./Happiness";

const Home = () => {
  return (
    <div>
      <HomapageSlider/>
      <SignUp/>
      <Weddings/>
      <LatestNews/>
      <Happiness/>
    </div>
  );
};

export default Home;
