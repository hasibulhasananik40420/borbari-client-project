import React from 'react'
import { Link } from 'react-router-dom'

function ForgetPassword() {
  return (
    <div className='mt-56 bg-white'>

    <form className="flex justify-center items-center lg:p-28 ">
        <div className='lg:w-[500px] lg:h-[400px] w-full h-full lg:bg-gray-200 rounded-2xl'>

            <div className='flex flex-col justify-center items-center lg:mt-16 mt-6'>
                <div>
                    <label className="block mb-2 text-xl text-gray-600 dark:text-gray-200">User ID:</label>
                    <input type="text" placeholder="Enter your mobile number" className="block lg:w-[400px] w-[250px] px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-red-500 rounded-full dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>



                <button className='w-48 h-12 rounded-full bg-red-500 text-white mt-16'>Submit</button>



                <div className='lg:flex justify-between gap-16 mt-14'>
                    <div>
                        <h1 className='text-sm text-center lg:text-left mt-4 lg:mt-0'>  <Link to='/forget-password' className='text-red-500 ml-1'>Forgot Password</Link></h1>
                    </div>

                    <div>
                        <h1 className='text-sm text-center lg:text-left mt-4 lg:mt-0'>New Here?  <Link to='/register' className='text-red-500 ml-1'> Register Now</Link></h1>
                    </div>


                </div>
            </div>


        </div>



    </form>



</div>
  )
}

export default ForgetPassword