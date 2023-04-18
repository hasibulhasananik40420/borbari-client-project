import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
import { ToastContainer, toast } from 'react-toastify';


const RegistrationHome = () => {

    const { createUserEmailPassword, user } = useContext(AuthContext)
    const handelUserRegistration = e => {
        e.preventDefault()

        const emailUse = () => toast("Email Already Use!");
        const missingPassword = () => toast("Missing Password!");
        const register = () => toast("Sucsessfully Register!");
        const fname = e.target.fname.value
        const email = e.target.email.value
        const password = e.target.password.value
        const photo_url = e.target.profile.value

        createUserEmailPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                const userInfo = userCredential.user;
                if (userInfo.email) {
                    register()
                  }

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === "auth/email-already-in-use") {
                    emailUse()
                  }else if(errorCode === "auth/missing-password") {
                    missingPassword()
                  }
            });

    }
    return (
        <div>
            <ToastContainer />
            <div className=' mt-10 overflow-hidden'>
                <div className='lg:w-4/5  w-full h-full mx-auto border border-red-600 rounded-2xl lg:p-20 p-6'>

                    <h1 className='lg:text-4xl text-2xl font-serif font-bold text-red-500 text-center'>REGISTER NOW FREE</h1>
                    <p className='text-xl font-medium font-sans text-center'>And find your RegistrationHome someone.</p>

                    <form onSubmit={handelUserRegistration}>
                        <div class="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-2">

                            <div>
                                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                                <input name='fname' type="text" placeholder="Enter bride or groom name" class="block w-full border border-red-400 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white rounded-full dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
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
                                <input name='email' type="text" placeholder="Enter your email" class="block w-full border border-red-400 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white rounded-full dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>



                            <div>
                                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                                <input name='password' type="password" placeholder="Password" class="block w-full border border-red-400 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white rounded-full dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>


                            <div>
                                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Profile Picture</label>

                                <input name='profile' type="file" placeholder="You can't touch this" className="file-input name=''  " />

                            </div>

                            <div>

                                I have read and agree to the <span className='text-red-400'>T&C</span> and <span className='text-red-400'>Privacy Policy</span>
                            </div>

                        </div>
                        <div className='w-full mt-16 flex justify-center'>
                            <button type='submit' className='bg-red-500 w-32 h-12 rounded-full duration-500 text-white '>Submit</button>
                        </div>
                    </form>


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

export default RegistrationHome