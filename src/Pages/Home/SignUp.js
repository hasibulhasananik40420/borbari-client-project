import React from "react";
import SignUpPatternOne from "../../images/signup_pattern-01.webp";
import SignUpPatternTwo from "../../images/success_elements-01.png";
import SignUpPatternThree from "../../images/signup_pattern-03.jpg";
import SignUpPatternFour from "../../images/success_elements-02.png";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signup">
      <div class="signup_patterns">
        <div class="signup_pattern signup_pattern_one">
          <img src={SignUpPatternOne} alt="" />
        </div>
        <div class="signup_pattern signup_pattern_two">
          <img src={SignUpPatternTwo} alt="" />
        </div>
        <div class="signup_pattern signup_pattern_three">
          <img src={SignUpPatternThree} alt="" />
        </div>
        <div class="signup_pattern signup_pattern_four">
          <img src={SignUpPatternFour} alt="" />
        </div>
      </div>



      {/* <div class="signup-container mx-60 ">
        <h2 className="text-center text-[#f17677] text-[45px]">
          REGISTER NOW FREE
        </h2>
        <h4 className="text-center text-[#737373] text-[20px]">
          And find your special someone.
        </h4>
        <form className="registration-form">
          <div class="grid grid-cols-2 my-20">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Gender</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">What is your name?</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">What is your name?</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">What is your name?</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">What is your name?</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Remember me</span>
              <input type="checkbox" checked className="checkbox" />
            </label>
          </div>
        </form>
      </div>  */}
    </div>
  );
};

export default SignUp;
