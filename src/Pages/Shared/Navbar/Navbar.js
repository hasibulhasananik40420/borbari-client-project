import React from "react";
import NavigationShape1 from "../../../images/navigation-shape1.png";
import NavigationShape2 from "../../../images/navigation-shape2.png";
import logo from "../../../images/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div class="absolute w-full left-0 top-0 z-50">



      <div className="navbar bg-black p-5 bg-transparent px-8">
        <div className="navbar-start">
         <div className="hidden lg:block">
         <ul class="social-icons flex justify-around ">
            <li
              className="text-white bg-[#ffffff66] inline-flex items-center justify-center w-[30px] h-[30px] rounded-full
             hover:bg-[#f17677] cursor-pointer duration-500 mr-4"
            >
              <a
                href="https://web.facebook.com/borbibimedia/"
                rel="noreferrer"
                target="_blank"
              >
                <FaFacebookF />
              </a>
            </li>
            <li
              className="text-white bg-[#ffffff66] inline-flex items-center justify-center w-[30px] h-[30px] rounded-full
             hover:bg-[#f17677] cursor-pointer duration-500  mr-4"
            >
              <a
                href="https://twitter.com/borbibimedia?fbclid=IwAR2zU5XKDIgKG1kEsXtoMna7D737m1G5Te8chTISfkHYy8XzIoYKYTu9lPo"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li
              className="text-white bg-[#ffffff66] inline-flex items-center justify-center w-[30px] h-[30px] rounded-full
             hover:bg-[#f17677] cursor-pointer duration-500 mr-4"
            >
              <a
                href="https://www.linkedin.com/in/borbibimedia"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li
              className="text-white bg-[#ffffff66] inline-flex items-center justify-center w-[30px] h-[30px] rounded-full
             hover:bg-[#f17677] cursor-pointer duration-500 mr-4"
            >
              <a
                href="https://www.instagram.com/borbibimedia"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li
              className="text-white bg-[#ffffff66] inline-flex items-center justify-center w-[30px] h-[30px] rounded-full
             hover:bg-[#f17677] cursor-pointer duration-500"
            >
              <a
                href="https://www.youtube.com/channel/UCrPZT6oJ-H3xXR2HJaEBbPQ"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube />
              </a>
            </li>
          </ul>
         </div>
        </div>


     
     <div className="navbar-center">
          <div class="logo-section flex items-center justify-center">
            <img class="w-[100px]" src={NavigationShape1} alt="" />
            <a
              class="bg-white rounded-full ml-[25px] mr-[25px] h-[120px] w-[120px] justify-center inline-flex items-center before:absolute  before:border-white before:border-[5px] before:rounded-full before:animate-spin border before:w-[150px] before:h-[150px] before:border-dotted relative before:duration-[5000s]"
              href="/"
            >
              <img src={logo} alt="biyerful-logo" />
            </a>
            <img class="w-[100px]" src={NavigationShape2} alt="" />
          </div>
        </div>

        <div className="lg:navbar-end">
          <button className="text-white px-4 py-2 bg-transparent rounded-full border-2 text-[14px] flex justify-center items-center gap-2 mr-5">
            <FaRegUser />
           <Link to='/login'> Login</Link>
          </button>
          <button className="text-white px-4 py-2 bg-transparent rounded-full border-2 text-[14px] flex justify-center items-center gap-2">
            <FaHeadphonesAlt />
            <Link to='/register'> Register</Link>
          </button>
        </div>
     </div>


      
      







      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div className="w-[360px] bg-gray-600 opacity-70">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-white ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            </div>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-900 rounded-box w-52">
            <li>
                <Link className="text-white font-semibold" to='/'>Home</Link>
              </li>
              <li>
                <Link className="text-white  font-semibold" to='/about'>About Us</Link>
              </li>
              <li>
                <Link className="text-white  font-semibold" to='/service'>Our Service</Link>
              </li>
              <li>
                <Link className="text-white  font-semibold" to='/blog'>Blog</Link>
              </li>
              <li>
                <Link className="text-white l font-semibold" to='/search'>Search</Link>
              </li>
              <li>
                <Link className="text-white font-semibold" to='/contact'>Contact Us</Link>
              </li>
            </ul>
          </div>
          {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li>
                <Link className="text-white font-semibold" to='/'>Home</Link>
              </li>
              <li>
                <Link className="text-white  font-semibold" to='/about'>About Us</Link>
              </li>
              <li>
                <Link className="text-white  font-semibold" to='/service'>Our Service</Link>
              </li>
              <li>
                <Link className="text-white  font-semibold" to='/blog'>Blog</Link>
              </li>
              <li>
                <Link className="text-white l font-semibold" to='/search'>Search</Link>
              </li>
              <li>
                <Link className="text-white font-semibold" to='/contact'>Contact Us</Link>
              </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* <a className="btn">Get started</a> */}
        </div>
      </div>






















    </div>
  );
};

export default Navbar;
