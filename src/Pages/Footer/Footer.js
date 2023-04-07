import React from 'react'
import NavigationShape1 from '../../images/navigation-shape1.png'
import NavigationShape2 from '../../images/navigation-shape2.png'
import logo from '../../images/logo.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
const Footer = () => {
    return (
        <div className="bg-footer-image bg-no-repeat bg-cover bg-center  flex flex-col justify-center items-center  mt-12">

            <div className='lg:flex lg:flex-row lg:justify-center  lg:items-center lg:gap-16 flex flex-col gap-6 justify-center items-center text-white lg:px-10 px-2 pt-56'>

                <div>
                    <button className='bg-gray-950 rounded-full border h-10 w-36'>HELP & SUPPORT</button>
                </div>

                <div className=''>
                    <div className="navbar-center">
                        <div className="logo-section flex items-center justify-center">
                            <img className="w-[100px]" src={NavigationShape1} alt="" />
                            <div
                                className="bg-white rounded-full ml-[25px] mr-[25px] lg:h-[120px] lg:w-[120px] w-[80px] h-[80px] justify-center inline-flex items-center  "

                            >
                                <img src={logo} alt="" />
                            </div>
                            <img className="w-[100px]" src={NavigationShape2} alt="" />
                        </div>
                    </div>
                </div>


                <div>
                    <button className='bg-gray-950 rounded-full border h-10 w-36'>24X7 LIVE HELP </button>
                </div>




            </div>


             <div>

{/* icon */}
             <div>
            <div className=" ">
              <ul className="social-icons flex justify-center gap-1 mt-16">
                <li
                  className="text-white bg-[#ffffff66] inline-flex items-center justify-center w-[45px] h-[45px] rounded-full
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
                  className="text-white bg-[#ffffff66] inline-flex items-center justify-center w-[45px] h-[45px] rounded-full
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
                  className="text-white bg-[#ffffff66] inline-flex items-center justify-center w-[45px] h-[45px] rounded-full
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
                  className="text-white bg-[#ffffff66] inline-flex items-center justify-center w-[45px] h-[45px] rounded-full
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
                  className="text-white bg-[#ffffff66] inline-flex items-center justify-center w-[45px] h-[45px] rounded-full
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


{/* blog */}
           <div className='lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-8 mt-6 pb-12  flex flex-col gap-4 justify-center items-center '>
             <p className='text-xl font-medium text-white font-sans'>Blog</p>
             <p className='text-xl font-medium text-white font-sans'>Privacy & Policy</p>
             <p className='text-xl font-medium text-white font-sans'>Refund Policy</p>
             <p className='text-xl font-medium text-white font-sans'>Contact us</p>
             <p className='text-xl font-medium text-white font-sans'>Tell a Friend</p>
             <p className='text-xl font-medium text-white font-sans'>FAQ</p>
             <p className='text-xl font-medium text-white font-sans'>Terms & Conditions</p>

           </div>

           <div className="w-full h-[1px] mx-auto border-b border-b-gray-300"></div>

           <p className='text-[#c18b4d] text-sm text-center pb-8 pt-8'>COPYRIGHT ©2015- 2023 BORBIBI.COM . ALL RIGHTS RESERVED</p>



             </div>

        </div>
    )
}

export default Footer