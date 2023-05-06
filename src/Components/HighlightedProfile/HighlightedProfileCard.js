import React from 'react'
// import { LOCAL_URL } from '../../Context/LOCAL_URL';



const HighlightedProfileCard = ({ users }) => {
    const { _id, profile_id, name, age, religion, gender, photoURL } = users;

    const handleDetails = (id) => {
        const url = `http://localhost:3000/user/${id}`;
        window.location.href = url;
      };

    return (

        <div className='w-[300px] h-full shadow-xl rounded-lg'>

            <img className='p-3 rounded w-full h-[300px] cursor-pointer' src={photoURL?.photoURL} alt="" />

            <div className='flex flex-col gap-y-1 px-4 py-2'>
                <div className='flex justify-between'>
                    <span className='text-base font-medium text-[#737373] font-sans'>Profile ID:</span>
                    <span className='text-base font-medium text-red-500 font-sans'>{profile_id}</span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-base font-medium text-[#737373] font-sans'>Name:</span>
                    <span className='text-base font-medium text-red-500 font-sans'>{name}</span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-base font-medium text-[#737373] font-sans'>Age:</span>
                    <span className='text-base font-medium text-red-500 font-sans'>{age}</span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-base font-medium text-[#737373] font-sans'>Religion</span>
                    <span className='text-base font-medium text-red-500 font-sans'>{religion}</span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-base font-medium text-[#737373] font-sans'>Gender</span>
                    <span className='text-base font-medium text-red-500 font-sans'>{gender}</span>
                </div>

            </div>
            <div className='flex justify-center p-2'>
                <button onClick={()=>handleDetails(_id)} className="w-32 h-10 bg-blue-500 text-white rounded-full shadow-md hover:bg-white hover:text-black hover:border hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 duration-300">
                    View Profile
                </button>
            </div>
        </div>



    )
}

export default HighlightedProfileCard