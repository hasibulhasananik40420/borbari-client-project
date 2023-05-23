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

    </div>
  );
};

export default SignUp;
