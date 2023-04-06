import React from 'react'
import { RxDot } from 'react-icons/rx';
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div className='mt-64 mx-16'>



      <div className='border border-red-500'>
        {/* left side */}
        
         <div className='w-[300px] h-full bg-white p-6'>
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

          
          <div className='flex flex-col gap-3'>
            <Link className='text-[13px]' to='/login'>Login</Link>
            <Link className='text-[13px]' to='/search'>Search</Link>
            <Link className='text-[13px]' to='/search'>Advance Search</Link>
            <Link className='text-[13px]' to='/search'>Working Process</Link>
          </div>

          

        </div>
        {/* <span className='w-[400px] h-2 border border-b'></span> */}




        <div>

        </div>

      </div>









    </div>
  )
}

export default Register