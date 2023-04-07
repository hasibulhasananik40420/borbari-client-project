import React from 'react'
import { RxDot } from 'react-icons/rx';
import { BsTelephone } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className='mt-72 lg:mx-16 mx-2'>



      <div className=' lg:flex lg:flex-row-reverse gap-10 w-full border border-red-500 rounded-2xl'>



        <div className='w-full bg-white rounded-2xl  h-full lg:mt-12'>



          <form className="flex justify-center items-center lg:p-28 ">
            <div className='lg:w-[500px] lg:h-[400px] w-full h-full lg:bg-gray-200 rounded-2xl'>

              <div className='flex flex-col justify-center items-center lg:mt-16 mt-6'>
                <div>
                  <label className="block mb-2 text-xl text-gray-600 dark:text-gray-200">User ID:</label>
                  <input type="text" placeholder="Enter your mobile number" className="block lg:w-[400px] w-[250px] px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-full dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div className='mt-6'>
                  <label className="block mb-2 text-xl text-gray-600 dark:text-gray-200">Password</label>
                  <input type="text" placeholder="Enter password" className="block lg:w-[400px] w-[250px] px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-full dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <button className='w-48 h-12 rounded-full bg-red-500 text-white mt-8'>Submit</button>
              </div>


            </div>
          </form>

           <div className='lg:flex justify-between lg:mx-8 mb-8'>
             <h1 className='text-sm text-center lg:text-left mt-4 lg:mt-0'>Lost Password?  <Link to='/forget-password' className='text-red-500 ml-1'>Forgot Password</Link></h1>
             
             <h1 className='text-sm text-center lg:text-left mt-4 lg:mt-0'>New Here?  <Link to='/register' className='text-red-500 ml-1'> Register Now</Link></h1>
             
             <h1 className='text-sm text-center lg:text-left mt-4 lg:mt-0'>Didn't Activated?  <Link to='/forget-password' className='text-red-500 ml-1'> Active Account</Link></h1>
           </div>

        </div>


        {/* left side */}

        <div className='lg:w-[300px] w-full h-full bg-white p-6 rounded-2xl lg:block hidden'>
          <h1 className='text-2xl font-medium text-red-500'>Why register in borbibi.com?</h1>
          <div className='flex flex-col gap-3 mt-6'>
            <div className='flex gap-1 items-center'>
              <span><RxDot /></span>
              <span className='text-[13px]'>100% Privacy safe and secure.</span>
            </div>

            <div className='flex gap-1 items-center'>
              <span><RxDot /></span>
              <span className='text-[13px]'>100% verify profile.</span>
            </div>

            <div className='flex gap-1 items-center'>
              <span><RxDot /></span>
              <span className='text-[13px]'>100% verify profile.</span>
            </div>

            <div className='flex gap-1 items-center'>
              <span><RxDot /></span>
              <span className='text-[13px]'>Quick response.</span>
            </div>

            <div className='flex gap-1 items-center'>
              <span><RxDot /></span>
              <span className='text-[13px]'>Allow others to see and contact you.</span>
            </div>

            <div className='flex gap-1 items-center'>
              <span><RxDot /></span>
              <span className='text-[13px]'>You can contact other members.</span>
            </div>

            <div className='flex gap-1 items-center'>
              <span><RxDot /></span>
              <span className='text-[13px]'>Save your favorite profiles.</span>
            </div>

            <div className='flex gap-1 items-center'>
              <span><RxDot /></span>
              <span className='text-[13px]'>Save your searches.</span>
            </div>

            <div className='flex gap-1 items-center'>
              <span><RxDot /></span>
              <span className='text-[13px]'>Live chatting</span>
            </div>

            <div className='flex gap-1 items-center'>
              <span><RxDot /></span>
              <span className='text-[13px]'>Refer a friend to borbibi.com you could be earn money.
              </span>
            </div>


          </div>


          <div className='flex flex-col gap-3 ml-5 mt-6'>
            <Link className='text-[15px] font-medium' to='/login'>Login</Link>
            <Link className='text-[15px] font-medium' to='/search'>Search</Link>
            <Link className='text-[15px] font-medium' to='/search'>Advance Search</Link>
            <Link className='text-[15px] font-medium' to='/search'>Working Process</Link>
          </div>


          <div className='flex flex-col ml-5 mt-6 gap-3'>
            <h1 className='text-2xl font-semibold text-red-500'>Need help with Registration?</h1>

            <p className='font-medium text-[17px] text-[#28a745]'>Support Call:</p>

            <div className='flex gap-1 items-center'>
              <span><BsTelephone /></span>
              <span className='text-[13px] text-[#17a2b8]'>01674 07 07 07</span>
            </div>

            <div className='flex gap-1 items-center'>
              <span><BsTelephone /></span>
              <span className='text-[13px] text-[#17a2b8]'>01974 08 08 08</span>
            </div>

            <h1 className='text-[#17a2b8] text-[15px]'><span className='text-black text-[15px]'>E-Mail:</span> info@borbibi.com</h1>
            <h1 className='text-[#17a2b8] text-[15px]'>support@borbibi.com</h1>

            <h1 className='text-2xl font-semibold mt-4 text-red-500'>Office:</h1>
            <p className='text-black text-[15px] mt-4'>BorBibi.com House# 29, Nazim Bhaban, Board Bazar, National university, Gazipur-1704.</p>
          </div>


        </div>




      </div>









    </div>
  )
}

export default Login