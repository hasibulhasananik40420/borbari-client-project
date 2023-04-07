import React from 'react'

const BasicSearch = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex lg:gap-20 gap-4 items-center'>
        <span className='text-[#737373] lg:text-xl text-base'>Search By Id</span>
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



      {/* duble select */}

       
      <div className='lg:flex items-center gap-16'>
        <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Search Age Range</span>
        <span className='w-full flex'>
          <div className='w-[160px]'>
          <select className="select-secondary select w-full max-w-xs rounded-r-none">
            <option disabled selected>Select</option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
          </div>
          <div className='w-[160px]'>
          <select className="select-secondary select w-full max-w-xs rounded-l-none">
            <option disabled selected>Select</option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
          </div>

        </span>
      </div>








      <div className='lg:flex items-center gap-16'>
        <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Religion</span>
        {/* <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Religion</label> */}
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
      <div className='lg:flex items-center gap-16'>
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
      <div className='lg:flex items-center gap-16'>
        <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Marital Status</span>
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

      <div className='flex lg:gap-12 gap-4 items-center '>
        <button className='w-28 h-10 rounded-full bg-red-500 text-white font-medium duration-500 hover:bg-red-800'>Submit</button>

        <button className='w-24 h-10 rounded-full bg-red-500 text-white font-medium duration-500 hover:bg-red-800'>Reset</button>
      </div>
    </div>
  )
}

export default BasicSearch