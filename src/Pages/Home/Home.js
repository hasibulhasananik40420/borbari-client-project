import React, { useState } from "react";
import HomapageSlider from "./HomapageSlider";
import Weddings from "./Weddings";
import LatestNews from "./LatestNews";
import Happiness from "./Happiness";
import HighlightedProfile from "../../Components/HighlightedProfile/HighlightedProfile";
import RegistrationHome from "./RegistrationHome";

const Home = () => {


  return (
    <div>
      <HomapageSlider />
      <RegistrationHome/>
      <HighlightedProfile />
      <Weddings />
      <LatestNews />
      <Happiness />
    </div>
  );
};

export default Home;
