import React from 'react'
import { RxDot } from 'react-icons/rx';
import { BsTelephone } from 'react-icons/bs';
import { Link, Outlet } from 'react-router-dom';
import FilterSearch from './FilterSearch';
const Search = () => {
    return (
        <div className='mt-72 lg:mx-16 px-2'>



            <div className=' lg:flex lg:flex-row-reverse lg:gap-10 w-full border border-red-500 rounded-2xl'>



                <div className='w-full bg-white rounded-2xl  h-full lg:mt-12'>
               {/* filter search outlet hare */}
                    <div>
                        <FilterSearch />
                        <div className='px-10 py-7'>
                        <Outlet />
                        </div>
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

export default Search