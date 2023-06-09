import React from 'react'
import { RxDot } from 'react-icons/rx';
import { BsTelephone } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import { API_URL } from "../../Context/API_URL";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const imgageHostKey = process.env.REACT_APP_imgbbAp;
  const { createUserEmailPassword } = useContext(AuthContext)
  const emailUse = () => toast("Email Already Use!");
  const missingPassword = () => toast("Missing Password!");
  const register = () => toast("Sucsessfully Register!");



  const handelUserRegistration = e => {
    e.preventDefault()
    const name = e.target.fname.value
    const email = e.target.email.value
    const password = e.target.password.value
    const gender = e.target.gender.value
    const religion = e.target.religion.value

    const min = 100000; 
    const max = 999999; 
    const profile_randon = Math.floor(Math.random() * (max - min + 1)) + min;

    const addUser = {
      profile_id: `BB-${profile_randon}`,
      name,
      email,
      gender,
      religion,
      password,
    }
    fetch(`${API_URL}users`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(addUser)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));

    createUserEmailPassword(email, password)
      .then((userCredential) => {
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
        } else if (errorCode === "auth/missing-password") {
          missingPassword()
        }

      });


  }

  return (
    <div className='mt-72 lg:mx-16 mx-2'>
      <ToastContainer />
      <div className=' lg:flex lg:flex-row-reverse gap-10 w-full border border-red-500 rounded-2xl'>
        <div className='w-full bg-white rounded-2xl  h-full lg:mt-12'>
          <form onSubmit={handelUserRegistration} className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 px-12">
            <div>
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
              <input name='fname' type="text" placeholder="Enter bride or Groom name" className="input input-bordered w-full max-w-xs" />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Gender</label>

              <select name='gender' className="select w-full max-w-xs">
                <option disabled selected>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>

            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Religion</label>
              <select name='religion' className="select w-full max-w-xs">
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
              <input name='email' type="email" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
              <input name='password' type="text" placeholder="Password" className="input input-bordered w-full max-w-xs" />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Profile Picture</label>
              <input
                {...register("image", {
                })}
                type="file" className="file-input w-full max-w-xs" />
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