import React from 'react'
import { useNavigate } from 'react-router-dom'


const HighlightedProfileCard = () => {
    const navigate = useNavigate() 
    const handleDetails =()=>{
        navigate('/single-profile-detail/01')
    }

    return (

        

            <div className='w-[300px] h-full shadow-xl rounded-lg'>

                <img onClick={()=>handleDetails()} className='p-3 rounded w-full h-[300px] cursor-pointer' src="https://admin.borbibi.com/media/profile_image/e4cd13bc-6f33-436e-91b3-c712d2a0062e.jpg" alt="" />

                <div className='flex flex-col gap-y-1 px-4 py-2'>
                    <div className='flex justify-between'>
                        <span className='text-base font-medium text-[#737373] font-sans'>Profile ID:</span>
                        <span className='text-base font-medium text-red-500 font-sans'>BB-00445</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-base font-medium text-[#737373] font-sans'>Name:</span>
                        <span className='text-base font-medium text-red-500 font-sans'>Atik Islam</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-base font-medium text-[#737373] font-sans'>Age:</span>
                        <span className='text-base font-medium text-red-500 font-sans'>35</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-base font-medium text-[#737373] font-sans'>Religion</span>
                        <span className='text-base font-medium text-red-500 font-sans'>Islam</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-base font-medium text-[#737373] font-sans'>Gender</span>
                        <span className='text-base font-medium text-red-500 font-sans'>Muslim</span>
                    </div>

                </div>
                <div className='flex justify-center p-2'>
                    <button className="w-32 h-10 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        View Profile
                    </button>
                </div>
            </div>

     

    )
}

export default HighlightedProfileCard