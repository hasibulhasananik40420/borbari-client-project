import React from 'react'

const DistrictSearch = () => {
  return (
    <div className='flex flex-col gap-8'>
       <div className='flex lg:gap-20 gap-4 items-center'>
          <span className='text-[#737373] lg:text-xl text-base'>District Search</span>
          <span className='lg:w-[600px] w-[200px] border border-b-red-500'></span>
        </div>

      <div className='lg:flex items-center gap-16'>
        <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Looking For</span>
        {/* <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Looking For</label> */}
        <span className='w-full'>
          <select className="select-secondary select w-full max-w-xs ">
            <option disabled selected>Select</option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>

        </span>
      </div>

      <div className='bg-[#f8faff] lg:pl-5 lg:py-16 py-10 p-3 lg:p-0'>
        <h1 className='lg:text-xl text-base font-semibold mb-4'>Religion Information</h1>
        <div className='lg:flex items-center gap-16'>
          <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Religion</span>
          <span className='w-full'>
            <select className="select w-full max-w-xs select-secondary">
              <option disabled selected>Select</option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>

          </span>
        </div>

        <div className='lg:flex items-center gap-16 mt-8'>
          <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Caste</span>
          <span className='w-full'>
            <select className="select w-full max-w-xs select-secondary">
              <option disabled selected>Select</option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>

          </span>
        </div>

      </div>


      <div className=''>
        <h1 className='lg:text-xl text-base font-semibold mb-4'>District/City
        </h1>
        <div className='lg:flex items-center gap-16'>
          <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Country
          </span>
          <span className='w-full'>
            <select className="select w-full max-w-xs select-secondary">
              <option disabled selected>Select</option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>

          </span>
        </div>

        <div className='lg:flex items-center gap-16 mt-8'>
          <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Country / District</span>
          <span className='w-full'>
            <select className="select w-full max-w-xs select-secondary">
              <option disabled selected>Select</option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>

          </span>
        </div>


        <div className='flex lg:gap-12 gap-4 items-center mt-14'>
          <button className='w-28 h-10 rounded-full bg-red-500 text-white font-medium duration-500 hover:bg-red-800'>Submit</button>

          <button className='w-24 h-10 rounded-full bg-red-500 text-white font-medium duration-500 hover:bg-red-800'>Reset</button>
        </div>

      </div>


    </div>
  )
}

export default DistrictSearch