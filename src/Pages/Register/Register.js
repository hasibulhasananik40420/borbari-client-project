import React, { useState } from 'react'
import { RxDot } from 'react-icons/rx';
import { BsTelephone } from 'react-icons/bs';
import { Link, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import { API_URL } from "../../Context/API_URL";
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';

const Register = () => {
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
      const user = {profile_id, name, email, religion, gender, password, photoURL, verified };
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
    <div className='mt-72 lg:mx-16 mx-2'>
      <ToastContainer />
      <div className=' lg:flex lg:flex-row-reverse gap-10 w-full border border-red-500 rounded-2xl'>
        <div className='w-full bg-white rounded-2xl  h-full lg:mt-12'>
          <form onSubmit={handleSubmit(handleSignUp)} className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 px-12">
            <div>
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
              <input
                {...register("name", {
                  required: "Name is required",
                })}
                type="text" placeholder="Enter bride or Groom name" className="input input-bordered w-full max-w-xs" />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Gender</label>

              <select
                {...register("gender", {
                  required: "Gender is required",
                })}
                className="select w-full max-w-xs">
                <option disabled selected>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>

            </div>


            <div>
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Religion</label>
              <select
                {...register("religion", {
                  required: "Religion is required",
                })}

                className="select w-full max-w-xs">
                <option disabled selected>Islam</option>
                <option>Islam</option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
              </select>

            </div>




            <div>
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Religion</label>
              <select
                {...register("religion", {
                  required: "Religion is required",
                })}

                className="select w-full max-w-xs">
                <option disabled selected>Islam</option>
                <option>Islam</option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
              </select>

            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">User ID</label>
              <input
                {...register("email", {
                  required: "Email is required",
                })}
                type="email" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
              <input
                {...register("password", {
                  required: "Password is required",
                })}
                type="text" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Profile Picture</label>
              <input
                {...register("image", {
                })}
                type="file" className="file-input w-full max-w-xs" />
            </div>


            <div>
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Age</label>
              <input
                {...register("password", {
                  required: "Password is required",
                })}
                type="text" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
            </div>


            <div>
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Phone</label>
              <input
                {...register("password", {
                  required: "Password is required",
                })}
                type="text" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
            </div>


            <div>
              <h1 className='text-[13px] mt-7'>I have read and agree to the T&C and <span className='text-red-500'>Privacy Policy</span></h1>
            </div>


            <button type='submit' className='w-48 h-12 rounded-full bg-red-500 text-white mt-4'>Submit</button>



            <span className='pt-8'>Already Have Account   <Link to='/login' className='text-red-500 ml-2'>Login</Link></span>

            <span className='pt-8'>Already Registered   <Link to='/active-account' className='text-red-500 ml-2'>Active Account</Link></span>




          </form>



        </div>


        {/* left side */}

        <div className='lg:w-[300px] w-full h-full bg-white p-6 rounded-2xl lg:block hidden'>
          <h1 className='text-2xl font-medium text-red-500'>Why register in borbibi.com?</h1>
          <div className='flex flex-col gap-3 mt-6'>
            <div className='flex gap-1 items-center'>
              <span><RxDot /></span>
              <span className='text-[13px]'>100% Privacy safe and secure.</span>
            </div>

            <div className='flex gap-1 items-center'>
              <span><RxDot /></span>
              <span className='text-[13px]'>100% verify profile.</span>
            </div>

            <div className='flex gap-1 items-center'>
              <span><RxDot /></span>
              <span className='text-[13px]'>100% verify profile.</span>
            </div>

            <div className='flex gap-1 items-center'>
              <span><RxDot /></span>
              <span className='text-[13px]'>Quick response.</span>
            </div>

            <div className='flex gap-1 items-center'>
              <span><RxDot /></span>
              <span className='text-[13px]'>Allow others to see and contact you.</span>
            </div>

            <div className='flex gap-1 items-center'>
              <span><RxDot /></span>
              <span className='text-[13px]'>You can contact other members.</span>
            </div>

            <div className='flex gap-1 items-center'>
              <span><RxDot /></span>
              <span className='text-[13px]'>Save your favorite profiles.</span>
            </div>

            <div className='flex gap-1 items-center'>
              <span><RxDot /></span>
              <span className='text-[13px]'>Save your searches.</span>
            </div>

            <div className='flex gap-1 items-center'>
              <span><RxDot /></span>
              <span className='text-[13px]'>Live chatting</span>
            </div>

            <div className='flex gap-1 items-center'>
              <span><RxDot /></span>
              <span className='text-[13px]'>Refer a friend to borbibi.com you could be earn money.
              </span>
            </div>


          </div>


          <div className='flex flex-col gap-3 ml-5 mt-6'>
            <Link className='text-[15px] font-medium' to='/login'>Login</Link>
            <Link className='text-[15px] font-medium' to='/search'>Search</Link>
            <Link className='text-[15px] font-medium' to='/search'>Advance Search</Link>
            <Link className='text-[15px] font-medium' to='/working-progess'>Working Process</Link>
          </div>


          <div className='flex flex-col ml-5 mt-6 gap-3'>
            <h1 className='text-2xl font-semibold text-red-500'>Need help with Registration?</h1>

            <p className='font-medium text-[17px] text-[#28a745]'>Support Call:</p>

            <div className='flex gap-1 items-center'>
              <span><BsTelephone /></span>
              <span className='text-[13px] text-[#17a2b8]'>01674 07 07 07</span>
            </div>

            <div className='flex gap-1 items-center'>
              <span><BsTelephone /></span>
              <span className='text-[13px] text-[#17a2b8]'>01974 08 08 08</span>
            </div>

            <h1 className='text-[#17a2b8] text-[15px]'><span className='text-black text-[15px]'>E-Mail:</span> info@borbibi.com</h1>
            <h1 className='text-[#17a2b8] text-[15px]'>support@borbibi.com</h1>

            <h1 className='text-2xl font-semibold mt-4 text-red-500'>Office:</h1>
            <p className='text-black text-[15px] mt-4'>BorBibi.com House# 29, Nazim Bhaban, Board Bazar, National university, Gazipur-1704.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
