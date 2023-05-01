import React, { useEffect, useState } from 'react'
import HighlightedProfileCard from './HighlightedProfileCard'
import { API_URL } from "../../Context/API_URL";


const HighlightedProfile = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}users`)
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error(error));
    }, []);



    return (

        <>

            <div className='mt-24 lg:px-8 px-4'>

                <h1 className='lg:text-4xl text-2xl font-bold font-sans text-red-500 text-center'>Highlighted Profile</h1>
                <p className='text-[#737373] font-sans text-center text-xl mt-1'>BorBibi.com</p>

                <div className=' mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4 justify-items-center'>
                    {users.map(user => (
                        <HighlightedProfileCard key={user.id} users={user} />
                    ))}


                </div>

            </div>

        </>
    )
}

export default HighlightedProfile