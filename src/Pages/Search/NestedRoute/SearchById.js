import React from 'react'

const SearchById = () => {
  return (
    <div>

      <div className='flex lg:gap-20 gap-4 items-center'>
        <span className='text-[#737373] lg:text-xl text-base'>Search By Id</span>
        <span className='lg:w-[600px] w-[200px] border border-b-red-500'></span>
      </div>

      <div className='lg:flex lg:gap-20 items-center mt-12'>
        <span className='text-[#737373] lg:text-base text-sm'>Enter Profile ID:</span>
        <span className=''>
          <input type="text" placeholder="EX:BB 00000" className="input input-bordered input-secondary w-full max-w-xs lg:mt-0 mt-2" />

        </span>
      </div>
      
       <div className='flex lg:gap-20 gap-4 items-center mt-12'>
         <button className='w-28 h-10 rounded-full bg-red-500 text-white font-medium duration-500 hover:bg-red-800'>Submit</button>
         
         <button className='w-24 h-10 rounded-full bg-red-500 text-white font-medium duration-500 hover:bg-red-800'>Reset</button>
      </div>

    </div>
  )
}

export default SearchById