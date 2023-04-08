import React from "react";
import Slider from "react-slick";
import "./HomepageSlider.css";
import Typewriter from "typewriter-effect";
import "./SearchBox.css";

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

            <div className="lg:mt-3 lg:w-[86%] w-full lg:mb-8">


              <div className="lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-6 mt-6 w-full lg:h-[150px] h-full flex flex-col justify-center items-center gap-3 bg-[#00000a] opacity-70  rounded-full ">

                <select className="select select-error lg:w-[220px] max-w-xs bg-white text-black">
                  <option selected>I'm looking for a</option>
                  <option>Strapi</option>
                  <option>Ghost</option>

                </select>

                <div className='lg:flex items-center gap-16'>

                  <span className='lg:w-[240px] w-[270px] flex'>
                    <div className='w-full'>
                      <select className="select-secondary select w-full max-w-xs rounded-r-none bg-white text-black">
                        <option disabled selected>Aged</option>
                        <option>Homer</option>
                        <option>Marge</option>

                      </select>
                    </div>
                    <div className='w-full'>
                      <select className="select-secondary select bg-white text-black w-full max-w-xs rounded-l-none">
                        <option disabled selected>Aged</option>
                        <option>Homer</option>
                        <option>Marge</option>

                      </select>
                    </div>

                  </span>
                </div>


                <select className="select select-error lg:w-[220px] max-w-xs bg-white text-black">
                  <option selected>Religion</option>
                  <option>Strapi</option>
                  <option>Ghost</option>

                </select>

                <select className="select select-error lg:w-[220px] max-w-xs bg-white text-black">
                  <option selected>Marital Status</option>
                  <option>Strapi</option>
                  <option>Ghost</option>

                </select>


              </div>



            </div>
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
            <div className="lg:mt-3 lg:w-[86%] w-full lg:mb-8">


              <div className="lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-6 mt-6 w-full lg:h-[150px] h-full flex flex-col justify-center items-center gap-3 bg-[#00000a] opacity-70  rounded-full ">

                <select className="select select-error lg:w-[220px] max-w-xs bg-white text-black">
                  <option selected>I'm looking for a</option>
                  <option>Strapi</option>
                  <option>Ghost</option>

                </select>

                <div className='lg:flex items-center gap-16'>

                  <span className='lg:w-[240px] w-[270px] flex'>
                    <div className='w-full'>
                      <select className="select-secondary select w-full max-w-xs rounded-r-none bg-white text-black">
                        <option disabled selected>Aged</option>
                        <option>Homer</option>
                        <option>Marge</option>

                      </select>
                    </div>
                    <div className='w-full'>
                      <select className="select-secondary select bg-white text-black w-full max-w-xs rounded-l-none">
                        <option disabled selected>Aged</option>
                        <option>Homer</option>
                        <option>Marge</option>

                      </select>
                    </div>

                  </span>
                </div>


                <select className="select select-error lg:w-[220px] max-w-xs bg-white text-black">
                  <option selected>Religion</option>
                  <option>Strapi</option>
                  <option>Ghost</option>

                </select>

                <select className="select select-error lg:w-[220px] max-w-xs bg-white text-black">
                  <option selected>Marital Status</option>
                  <option>Strapi</option>
                  <option>Ghost</option>

                </select>


              </div>



            </div>
          </div>

        </div>

      </Slider>



      {/* <form class="search-box px-40">
        <div class="grid grid-cols-5">
          <div class="forms grid grid-cols-4 col-span-4 gap-x-4 pl-[70px] pr-2 pt-8 pb-11 border-[#ee2a4f] border border-r-0">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">I'm looking for a</span>
              </label>
              <select className="select select-bordered">
                <option disabled selected>
                  Select...
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Aged</span>
              </label>
              <select className="select select-bordered">
                <option disabled selected>
                  Select...
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Religion</span>
              </label>
              <select className="select select-bordered">
                <option disabled selected>
                  Select...
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Marital Status</span>
              </label>
              <select className="select select-bordered">
                <option disabled selected>
                  Select...
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
              </select>
            </div>
          </div>
          <div class="button bg-white border-[#ee2a4f] border border-l-0">
            <button class="search-btn">Let's Begin</button> <br />
            <a href="/profile-search">Advanced search</a>
          </div>
        </div>
      </form> */}
    </div>
  );
};

export default HomapageSlider;
