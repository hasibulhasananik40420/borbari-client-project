import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const FilterSearch = () => {
    const location = useLocation()
    return (
        <div>
            <div className='flex flex-wrap gap-7 justify-center mt-5 mb-5'>
                <span className="">
                    <button className={`bg-[#737373] w-[120px] h-[50px] rounded-full mx-auto text-white text-sm ${location.pathname==='/search' ? 'bg-red-500 text-white':'bg-[#737373] text-white'}`}>
                        <Link to={""}> Basic Search</Link>
                    </button>
                </span>

                <span className="">
                    <button className={`bg-[#737373] w-[120px] h-[50px] rounded-full mx-auto text-white text-sm ${location.pathname==='/search/advance-search' ? 'bg-red-500 text-white':'bg-[#737373] text-white'}`}>
                        <Link to={"advance-search"}>  Advance Search</Link>
                    </button>
                </span>

                <span className="">
                    <button className={`bg-[#737373] w-[120px] h-[50px] rounded-full mx-auto text-white text-sm ${location.pathname==='/search/search-by-id' ? 'bg-red-500 text-white':'bg-[#737373] text-white'}`}>
                        <Link to={"search-by-id"}>  Search By Id</Link>
                    </button>
                </span>

                <span className="">
                    <button className={`bg-[#737373] w-[120px] h-[50px] rounded-full mx-auto text-white text-sm ${location.pathname==='/search/district-search' ? 'bg-red-500 text-white':'bg-[#737373] text-white'}`}>
                        <Link to={"district-search"}>    District Search</Link>
                    </button>
                </span>

                <span className="">
                    <button className={`bg-[#737373] w-[120px] h-[50px] rounded-full mx-auto text-white text-sm ${location.pathname==='/search/profession-search' ? 'bg-red-500 text-white':'bg-[#737373] text-white'}`}>
                        <Link to={"profession-search"}>  Profession Search</Link>
                    </button>
                </span>

                <span className="">
                    <button className={`bg-[#737373] w-[120px] h-[50px] rounded-full mx-auto text-white text-sm ${location.pathname==='/search/borbibi-search' ? 'bg-red-500 text-white':'bg-[#737373] text-white'}`}>
                        <Link to={"borbibi-search"}>   Borbibi Search</Link>
                    </button>
                </span>


            </div>
        </div>
    )
}

export default FilterSearch