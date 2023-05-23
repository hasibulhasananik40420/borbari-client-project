import React from "react";
import Slider from "react-slick";
import "./HomepageSlider.css";
import Typewriter from "typewriter-effect";
import "./SearchBox.css";
import Tracker from "./Tracker";

const HomapageSlider = ({filteredData, setData, setUsers, dataList}) => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="homepage-slide-1 slide-bg lg:h-screen h-[110vh] text-white relative">
          <div class="overlay"></div>
          <div class="carousel-content z-[9999]">
            <span className="text-[15px] mt-44 lg:block hidden">Welcome To</span>

           <div className="lg:block hidden">
           <Typewriter className='lg:text-[20px] !text-[10px]'
              options={{
                strings: ["Biyerful.com"],
                autoStart: true,
                loop: true,
              }}
            />
           </div>

            <span className="lg:text-[15px] text-[10px] lg:block hidden">
              The Largest & Exclusive Community Site For Bengali Singles Across
              The World.
            </span>

            <Tracker filteredData={filteredData} setData={setData}  setUsers={setUsers}   dataList={dataList}/>
          </div>
        </div>





        <div className="homepage-slide-2 slide-bg lg:h-screen h-[110vh] text-white relative">
          <div class="overlay"></div>
          <div class="carousel-content z-[9999]">
            <span className="text-[15px] mt-44 lg:block hidden">Why Join</span>
           <div className="lg:block hidden">
           <Typewriter className='lg:text-[20px] !text-[10px]'
              options={{
                strings: ["Biyerful.com"],
                autoStart: true,
                loop: true,
              }}
            />
           </div>
            <span className="lg:text-[15px] text-[10px] lg:block hidden">
              Thousands of happy marriages happened through us.You could be
              next!
            </span>
            <Tracker filteredData={filteredData} setData={setData}  setUsers={setUsers}   dataList={dataList}/>
            {/* <Tracker/> */}
          </div>

        </div>

      </Slider>



     
    </div>
  );
};

export default HomapageSlider;
