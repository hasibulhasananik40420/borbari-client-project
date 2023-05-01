import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
import { ToastContainer, toast } from 'react-toastify';
import { API_URL } from '../../Context/API_URL';
import { useForm } from 'react-hook-form';


const RegistrationHome = () => {
    const { user } = useContext(AuthContext)
    const [error, setError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imgageHostKey = process.env.REACT_APP_imgbbAp;
    const { createUserEmailPassword, updateUserInfo } = useContext(AuthContext)

    const min = 100000;
    const max = 999999;
    const profile_randon = Math.floor(Math.random() * (max - min + 1)) + min;
    const profile_id = `BB-${profile_randon}`

    const verified = false

    if (user?.uid) {
        return <Navigate to='/'></Navigate>
    }


    const handleSignUp = (data) => {
        setError('');

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=6a56f720ef5af169c2b3789d5fb3086f`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    createUserEmailPassword(data.email, data.password)
                        .then(result => {
                            const userInfo = {
                                displayName: data.name,
                                photoURL: imgData.data.url


                            }
                            updateUserInfo(userInfo)
                                .then(() => {
                                    saveUser(
                                        data.name,
                                        data.email,
                                        data.religion,
                                        data.gender,
                                        data.password,
                                        { photoURL: imgData?.data?.url }
                                    );
                                })
                                .catch(err => console.log(err));
                        })
                        .catch(error => {
                            setError(error.message)
                        });
                }

            })



        const saveUser = (name, email, religion, gender, password, photoURL) => {
            const notify = () => toast("Registration Successful!");
            const user = { profile_id, name, email, religion, gender, password, photoURL, verified };
            fetch(`${API_URL}users`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    notify()
                    return <Navigate to="/"></Navigate >;
                })
        }

    }
    return (
        <div>
            <ToastContainer />
            <div className=' mt-10 overflow-hidden'>
                <div className='lg:w-4/5  w-full h-full mx-auto border border-red-600 rounded-2xl lg:p-20 p-6'>

                    <h1 className='lg:text-4xl text-2xl font-serif font-bold text-red-500 text-center'>REGISTER NOW FREE</h1>
                    <p className='text-xl font-medium font-sans text-center'>And find your RegistrationHome someone.</p>

                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <div class="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-2">

                            <div>
                                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                                <input
                                    {...register("name", {
                                        required: "Name is required",
                                    })}
                                    type="text" placeholder="Enter bride or groom name" class="block w-full border border-red-400 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white rounded-full dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div>
                                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Gender</label>

                                <select
                                    {...register("gender", {
                                    })}
                                    className="select w-full max-w-xs">
                                    <option disabled selected>Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>

                            <div>
                                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Religion</label>

                                <select
                                    {...register("religion", {
                                    })}
                                    className="select border border-red-400 block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white rounded-full dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40">
                                    <option disabled selected>Islam</option>
                                    <option>Islam</option>
                                    <option>Marge</option>
                                    <option>Bart</option>
                                    <option>Lisa</option>
                                    <option>Maggie</option>
                                </select>
                            </div>

                            <div>
                                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">User ID</label>
                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                    })}
                                    type="text" placeholder="Enter your email" class="block w-full border border-red-400 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white rounded-full dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>



                            <div>
                                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                                <input
                                    {...register("password", {
                                        required: "Password is required",
                                    })}
                                    type="password" placeholder="Password" class="block w-full border border-red-400 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white rounded-full dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>


                            <div>
                                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Profile Picture</label>

                                <input
                                    {...register("image", {
                                    })}
                                    type="file" placeholder="You can't touch this" className="file-input name=''  " />

                            </div>

                            <div className='flex items-center gap-2'>
                            <h1>
                            <input type="checkbox" checked="checked" className="checkbox" />
                            </h1>
                           <h1> I have read and agree to the <span className='text-red-400'>T&C</span> and <span className='text-red-400'>Privacy Policy</span></h1>

                           
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