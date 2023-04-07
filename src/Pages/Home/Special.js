import React from 'react'
import { Link } from 'react-router-dom'

const Special = () => {
    return (
        <div>


<div className=' mt-10 overflow-hidden'>



<div className='lg:w-4/5  w-full h-full mx-auto border border-red-600 rounded-2xl lg:p-20 p-6'>

    <h1 className='lg:text-4xl text-2xl font-serif font-bold text-red-500 text-center'>REGISTER NOW FREE</h1>
    <p className='text-xl font-medium font-sans text-center'>And find your special someone.</p>

    <form class="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-2">
        <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
            <input type="text" placeholder="Enter bride or groom name" class="block w-full border border-red-400 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white rounded-full dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

        <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Gender</label>

            <select className="select border border-red-400 block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white rounded-full dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40">
                <option disabled selected>Select</option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
            </select>
        </div>

        <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Religion</label>

            <select className="select border border-red-400 block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white rounded-full dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40">
                <option disabled selected>Select</option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
            </select>
        </div>

        <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">User ID</label>
            <input type="text" placeholder="Enter your phone number" class="block w-full border border-red-400 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white rounded-full dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>



        <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
            <input type="password" placeholder="Password" class="block w-full border border-red-400 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white rounded-full dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>


        <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Profile Picture</label>

            <input type="file" placeholder="You can't touch this" className="file-input  " />

        </div>

        <div>

            I have read and agree to the <span className='text-red-400'>T&C</span> and <span className='text-red-400'>Privacy Policy</span>
        </div>



    </form>

    <div className='mt-16 flex justify-center'>
        <button className='bg-red-500 w-32 h-12 rounded-full duration-500 text-white '>Submit</button>
    </div>

    <div className='lg:flex justify-between mt-8'>

        <div>
            <span className='pt-8 text-sm'>Already Have Account   <Link to='/login' className='text-red-500 ml-2'>Login</Link></span>
        </div>

        <div>
            <span className='pt-8 text-sm'>Already Registered <Link to='/active-account' className='text-red-500 ml-2'>Active Account</Link></span>

        </div>

    </div>

</div>
</div>

           

        </div>
    )
}

export default Special