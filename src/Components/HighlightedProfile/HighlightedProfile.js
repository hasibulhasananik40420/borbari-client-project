import React from 'react'
import HighlightedProfileCard from './HighlightedProfileCard'

const HighlightedProfile = () => {
    return (

        <>

            <div className='mt-24 lg:px-8 px-4'>

                <h1 className='lg:text-4xl text-2xl font-bold font-sans text-red-500 text-center'>Highlighted Profile</h1>
                <p className='text-[#737373] font-sans text-center text-xl mt-1'>BorBibi.com</p>

                <div className=' mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4 justify-items-center'>

                    <HighlightedProfileCard />
                    <HighlightedProfileCard />
                    <HighlightedProfileCard />
                    <HighlightedProfileCard />
                    <HighlightedProfileCard />
                    <HighlightedProfileCard />
                    <HighlightedProfileCard />
                    <HighlightedProfileCard />

                </div>

            </div>

        </>
    )
}

export default HighlightedProfile