import React, { useEffect, useState } from "react";
import HomapageSlider from "./HomapageSlider";
import Weddings from "./Weddings";
import LatestNews from "./LatestNews";
import Happiness from "./Happiness";
import HighlightedProfile from "../../Components/HighlightedProfile/HighlightedProfile";
import RegistrationHome from "./RegistrationHome";
import { API_URL } from "../../Context/API_URL";

const Home = () => {
  const [dataList, setDataList] = useState([]);
  // const [data, setData] = useState(dataList);
  // const [user, setUser] = useState([])
  
  useEffect(() => {
    fetch(`${API_URL}users`)
        .then(response => response.json())
        .then(data => setDataList(data))
        .catch(error => console.error(error));
}, []);


  

  return (
    <div>
      <HomapageSlider setData={setDataList} setDataList={setDataList} dataList={dataList} />
      <RegistrationHome />
      <HighlightedProfile data={dataList} />
      <Weddings />
      <LatestNews />
      <Happiness />
    </div>
  );
};

export default Home;
