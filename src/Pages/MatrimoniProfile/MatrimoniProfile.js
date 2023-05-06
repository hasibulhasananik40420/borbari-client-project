import React, { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { Link, Navigate } from "react-router-dom";

const MatrimoniProfile = () => {
  return (
    <div className="mt-72 lg:mx-16 mx-2">
      <div className=" lg:flex lg:flex-row-reverse gap-10 w-full border border-red-500 rounded-2xl">
        <div className="w-full bg-white rounded-2xl  h-full lg:mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-x-3 gap-y-12 mt-12 mb-12">
            <div className="lg:w-[400px] w-full shadow-lg">
              <div className="flex gap-4 items-center">
                <img
                  className="w-24 h-24"
                  src="https://admin.borbibi.com/media/profile_image/4ca69f27-b42d-4399-ba59-b6f2d6b12870.jpg"
                  alt=""
                />
                <span className="flex flex-col gap-1">
                  <h1>Profile ID: BB-0001355</h1>
                  <h1>
                    Name: <span className="text-red-500">Faria akter</span>
                  </h1>
                </span>
              </div>

              <div className="flex flex-col ">
                <span className="flex items-center gap-8 bg-[#f9f6f6] h-11 p-3 border-b">
                  <h1>Age</h1>
                  <h1>27</h1>
                </span>
                <span className="flex items-center gap-8 bg-[#f9f6f6] h-11 p-3 border-b">
                  <h1>Gender</h1>
                  <h1>Female</h1>
                </span>
                <span className="flex items-center gap-8 bg-[#f9f6f6] h-11 p-3 border-b">
                  <h1>Religion</h1>
                  <h1>Muslim</h1>
                </span>
                <span className="flex items-center gap-8 bg-[#f9f6f6] h-11 p-3 border-b">
                  <h1>Profession</h1>
                  <h1></h1>
                </span>
                <span className="flex items-center gap-8 bg-[#f9f6f6] h-11 p-3 border-b">
                  <h1>Location</h1>
                  <h1>Bangladesh</h1>
                </span>
              </div>

               <button className="text-blue-500 bg-[#f9f6f6] h-11 w-full">View Profile </button>
            </div>
          <div className="lg:w-[400px] w-full shadow-lg">
              <div className="flex gap-4 items-center">
                <img
                  className="w-24 h-24"
                  src="https://admin.borbibi.com/media/profile_image/4ca69f27-b42d-4399-ba59-b6f2d6b12870.jpg"
                  alt=""
                />
                <span className="flex flex-col gap-1">
                  <h1>Profile ID: BB-0001355</h1>
                  <h1>
                    Name: <span className="text-red-500">Faria akter</span>
                  </h1>
                </span>
              </div>

              <div className="flex flex-col ">
                <span className="flex items-center gap-8 bg-[#f9f6f6] h-11 p-3 border-b">
                  <h1>Age</h1>
                  <h1>27</h1>
                </span>
                <span className="flex items-center gap-8 bg-[#f9f6f6] h-11 p-3 border-b">
                  <h1>Gender</h1>
                  <h1>Female</h1>
                </span>
                <span className="flex items-center gap-8 bg-[#f9f6f6] h-11 p-3 border-b">
                  <h1>Religion</h1>
                  <h1>Muslim</h1>
                </span>
                <span className="flex items-center gap-8 bg-[#f9f6f6] h-11 p-3 border-b">
                  <h1>Profession</h1>
                  <h1></h1>
                </span>
                <span className="flex items-center gap-8 bg-[#f9f6f6] h-11 p-3 border-b">
                  <h1>Location</h1>
                  <h1>Bangladesh</h1>
                </span>
              </div>

               <button className="text-blue-500 bg-[#f9f6f6] h-11 w-full">View Profile </button>
            </div>
           <div className="lg:w-[400px] w-full shadow-lg">
              <div className="flex gap-4 items-center">
                <img
                  className="w-24 h-24"
                  src="https://admin.borbibi.com/media/profile_image/4ca69f27-b42d-4399-ba59-b6f2d6b12870.jpg"
                  alt=""
                />
                <span className="flex flex-col gap-1">
                  <h1>Profile ID: BB-0001355</h1>
                  <h1>
                    Name: <span className="text-red-500">Faria akter</span>
                  </h1>
                </span>
              </div>

              <div className="flex flex-col ">
                <span className="flex items-center gap-8 bg-[#f9f6f6] h-11 p-3 border-b">
                  <h1>Age</h1>
                  <h1>27</h1>
                </span>
                <span className="flex items-center gap-8 bg-[#f9f6f6] h-11 p-3 border-b">
                  <h1>Gender</h1>
                  <h1>Female</h1>
                </span>
                <span className="flex items-center gap-8 bg-[#f9f6f6] h-11 p-3 border-b">
                  <h1>Religion</h1>
                  <h1>Muslim</h1>
                </span>
                <span className="flex items-center gap-8 bg-[#f9f6f6] h-11 p-3 border-b">
                  <h1>Profession</h1>
                  <h1></h1>
                </span>
                <span className="flex items-center gap-8 bg-[#f9f6f6] h-11 p-3 border-b">
                  <h1>Location</h1>
                  <h1>Bangladesh</h1>
                </span>
              </div>

               <button className="text-blue-500 bg-[#f9f6f6] h-11 w-full">View Profile </button>
            </div>
           <div className="lg:w-[400px] w-full shadow-lg">
              <div className="flex gap-4 items-center">
                <img
                  className="w-24 h-24"
                  src="https://admin.borbibi.com/media/profile_image/4ca69f27-b42d-4399-ba59-b6f2d6b12870.jpg"
                  alt=""
                />
                <span className="flex flex-col gap-1">
                  <h1>Profile ID: BB-0001355</h1>
                  <h1>
                    Name: <span className="text-red-500">Faria akter</span>
                  </h1>
                </span>
              </div>

              <div className="flex flex-col ">
                <span className="flex items-center gap-8 bg-[#f9f6f6] h-11 p-3 border-b">
                  <h1>Age</h1>
                  <h1>27</h1>
                </span>
                <span className="flex items-center gap-8 bg-[#f9f6f6] h-11 p-3 border-b">
                  <h1>Gender</h1>
                  <h1>Female</h1>
                </span>
                <span className="flex items-center gap-8 bg-[#f9f6f6] h-11 p-3 border-b">
                  <h1>Religion</h1>
                  <h1>Muslim</h1>
                </span>
                <span className="flex items-center gap-8 bg-[#f9f6f6] h-11 p-3 border-b">
                  <h1>Profession</h1>
                  <h1></h1>
                </span>
                <span className="flex items-center gap-8 bg-[#f9f6f6] h-11 p-3 border-b">
                  <h1>Location</h1>
                  <h1>Bangladesh</h1>
                </span>
              </div>

               <button className="text-blue-500 bg-[#f9f6f6] h-11 w-full">View Profile </button>
            </div>
         
         
         
          </div>


          <div className="flex justify-center">

	<nav >
		<ul className="inline-flex -space-x-px">
        <li>
				<button
					className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</button>
			</li><li>
				<button
					className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</button>
			</li><li>
				<button
					className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</button>
			</li>
				<li>
				<button
					className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</button>
			</li>
				<li>
				<button
					className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</button>
			</li>
				
			<li>
				<button
					className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
			</li>
		</ul>
	</nav>

	
</div>

        </div>

        {/* left side */}

        <div className="lg:w-[300px] w-full h-full bg-white p-6 rounded-2xl lg:block hidden">
          <button className="bg-[#faf7f7] text-[#f17677] px-4 py-2 rounded-full border w-48 h-11 text-left">
            MY BOX
          </button>
          <div className="flex flex-col gap-3 mt-6">
            <Link to="/working-progess">
              {" "}
              <h1 className="text-black text-sm">Working process</h1>
            </Link>
            <Link to="/working-progess">
              {" "}
              <h1 className="text-black text-sm">Search</h1>
            </Link>
            <Link to="/working-progess">
              {" "}
              <h1 className="text-black text-sm">Matrimoni Profile</h1>
            </Link>
            <Link to="/working-progess">
              {" "}
              <h1 className="text-black text-sm">My Matches</h1>
            </Link>
            <Link to="/working-progess">
              {" "}
              <h1 className="text-black text-sm">My Profile Visitor</h1>
            </Link> 
             <Link to="/working-progess">
              {" "}
              <h1 className="text-black text-sm">Seft Visited Profie</h1>
            </Link>
          </div>
          
          
          
           <button className="bg-[#faf7f7] mt-10 text-[#f17677] px-4 py-2 rounded-full border w-48 h-11 text-left">
            MY PROFILE
          </button>
          <div className="flex flex-col gap-3 mt-6">
            <Link to="/working-progess">
              {" "}
              <h1 className="text-black text-sm">Working process</h1>
            </Link>
            <Link to="/working-progess">
              {" "}
              <h1 className="text-black text-sm">Search</h1>
            </Link>
            <Link to="/working-progess">
              {" "}
              <h1 className="text-black text-sm">Matrimoni Profile</h1>
            </Link>
            <Link to="/working-progess">
              {" "}
              <h1 className="text-black text-sm">My Matches</h1>
            </Link>
            <Link to="/working-progess">
              {" "}
              <h1 className="text-black text-sm">My Profile Visitor</h1>
            </Link> 
             <Link to="/working-progess">
              {" "}
              <h1 className="text-black text-sm">Seft Visited Profie</h1>
            </Link>
          </div>

         

          <div className="flex flex-col  mt-6 gap-3">
            <h1 className="text-2xl font-semibold text-red-500">
              Need help with Registration?
            </h1>

            <p className="font-medium text-[17px] text-[#28a745]">
              Support Call:
            </p>

            <div className="flex gap-1 items-center">
              <span>
                <BsTelephone />
              </span>
              <span className="text-[13px] text-[#17a2b8]">01674 07 07 07</span>
            </div>

            <div className="flex gap-1 items-center">
              <span>
                <BsTelephone />
              </span>
              <span className="text-[13px] text-[#17a2b8]">01974 08 08 08</span>
            </div>

            <h1 className="text-[#17a2b8] text-[15px]">
              <span className="text-black text-[15px]">E-Mail:</span>{" "}
              info@borbibi.com
            </h1>
            <h1 className="text-[#17a2b8] text-[15px]">support@borbibi.com</h1>

            <h1 className="text-2xl font-semibold mt-4 text-red-500">
              Office:
            </h1>
            <p className="text-black text-[15px] mt-4">
              BorBibi.com House# 29, Nazim Bhaban, Board Bazar, National
              university, Gazipur-1704.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatrimoniProfile;
