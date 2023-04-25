import React from "react";
import Slider from "react-slick";
import "./HomepageSlider.css";
import Typewriter from "typewriter-effect";
import "./SearchBox.css";
import Tracker from "./Tracker";

const HomapageSlider = () => {
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
        <div className="homepage-slide-1 slide-bg h-screen text-white relative">
          <div class="overlay"></div>
          <div class="carousel-content z-[9999]">
            <span className="text-[15px] mt-44 ">Welcome To</span>

            <Typewriter className='text-[20px]'
              options={{
                strings: ["BorBibi.com"],
                autoStart: true,
                loop: true,
              }}
            />

            <span className="text-[15px]">
              The Largest & Exclusive Community Site For Bengali Singles Across
              The World.
            </span>

            <Tracker/>
          </div>
        </div>





        <div className="homepage-slide-2 slide-bg h-screen text-white relative">
          <div class="overlay"></div>
          <div class="carousel-content z-[9999]">
            <span className="text-[15px] mt-44">Why Join</span>
            <Typewriter className='text-[20px]'
              options={{
                strings: ["BorBibi.com", "This Community?"],
                autoStart: true,
                loop: true,
              }}
            />
            <span className="text-[16px]">
              Thousands of happy marriages happened through us.You could be
              next!
            </span>
            <Tracker/>
          </div>

        </div>

      </Slider>



     
    </div>
  );
};

export default HomapageSlider;
