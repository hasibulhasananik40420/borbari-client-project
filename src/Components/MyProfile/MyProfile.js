import React, { useContext, useEffect, useState } from 'react'
import { RxDot } from 'react-icons/rx';
import { BsTelephone } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import { API_URL } from '../../Context/API_URL';



const MyProfile = () => {

    const { user } = useContext(AuthContext)
    const [users, setUsers] = useState({})

      

    useEffect(() => {
        const url = `${API_URL}users/${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [user?.email])
    const { profile_id, name, age, religion, gender, photoURL, phone } = users;

    
    function makePhoneCall() {
        window.location.href = 'tel:' + phone;
      }

    return (
        <div className='mt-72 lg:mx-16 mx-2'>

            <div className=' lg:flex lg:flex-row-reverse gap-10 w-full border border-red-500 rounded-2xl'>



                <div className='w-full bg-white rounded-2xl lg:p-10 p-2 h-full lg:mt-12 mt-8'>




                    <div className='lg:flex w-full bg-[#f7f8fc] rounded-2xl'>
                        <div className='lg:w-2/4 w-full p-4 '>
                            <img className='w-[250px] h-[250px] border-2 rounded' src={photoURL?.photoURL} alt="" />
                        </div>

                        <div className='lg:w-[400px] w-full mt-10'>
                            <div className='flex flex-col gap-y-4 p-8'>
                                <div className='flex justify-between'>
                                    <span className='text-base font-medium text-[#737373] font-sans'>Profile ID:</span>
                                    <span className='text-base font-medium text-red-500 font-sans'> {profile_id}</span>
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
                                    <span className='text-base font-medium text-[#737373] font-sans'>Religion:</span>
                                    <span className='text-base font-medium text-red-500 font-sans'>{religion}</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='text-base font-medium text-[#737373] font-sans'>Gender:</span>
                                    <span className='text-base font-medium text-red-500 font-sans'>{gender}</span>
                                </div>

                                <div className='flex justify-between'>
                                    <span className='text-base font-medium text-[#737373] font-sans'>Profession
                                        :</span>
                                    <span className='text-base font-medium text-red-500 font-sans'>Business </span>
                                </div>

                                <div className='flex justify-between'>
                                    <span className='text-base font-medium text-[#737373] font-sans'>Location:</span>
                                    <span className='text-base font-medium text-red-500 font-sans'>Bangladesh</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='text-base font-medium text-[#737373] font-sans'>Profile Complete
                                        :</span>
                                    <span className='text-base font-medium text-red-500 font-sans'>
                                        43%</span>
                                </div>


                            </div>

                        </div>
                    </div>


                    <div className='flex lg:gap-20 gap-4 items-center mt-8 lg:ml-6 ml-2'>
                        <span className='text-[#737373] lg:text-xl text-base'>About Myself</span>
                        <span className='lg:w-[600px] w-[200px] border border-b-red-500'></span>
                    </div>

                    <h1 className='text-2xl font-medium font-sans mt-4 lg:ml-6 ml-2'>Personal Details</h1>

                    <div className='flex flex-col gap-3 lg:ml-6 ml-2 mt-8'>
                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Created By</span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Myself</span>
                            </span>
                        </div>

                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Contact No
                            </span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>
                                    {/* (Verified)Only Paid Member Can See  Sign Up */}
                                    {phone}
                                     <span> <button onClick={()=> makePhoneCall()} className='btn-sm text-blue-300 hover:bg-blue-100 hover:text-blue-600 border'> call</button></span>
                                    </span>
                            </span>
                        </div>

                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '>User ID
                            </span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>
                                    {profile_id}</span>
                            </span>
                        </div>

                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Religion
                            </span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>
                                    {religion}</span>
                            </span>
                        </div>

                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Date Of Birth

                            </span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>
                                    10-10-1985
                                </span>
                            </span>
                        </div>

                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Caste
                            </span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>
                                    Sunni</span>
                            </span>
                        </div>


                        <span className='lg:w-[600px] w-[200px] border border-b-red-500 mt-4'></span>


                        <h1 className='text-2xl font-medium font-sans mt-4'>Physical And Basic Info</h1>

                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '> Marital Status
                            </span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>
                                    Divorced

                                </span>
                            </span>
                        </div>

                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '> Have Children

                            </span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>
                                    Yes. Living Together
                                </span>
                            </span>
                        </div>

                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Height

                            </span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>
                                    5 feet 0 inch


                                </span>
                            </span>
                        </div>
                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Body Type


                            </span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>
                                    Slim


                                </span>
                            </span>
                        </div>
                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Complexion

                            </span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>
                                    Fair


                                </span>
                            </span>
                        </div>



                        <h1 className='text-2xl font-medium font-sans mt-4 '>Education And Occupassion</h1>
                        <h1 className='text-base font-medium font-sans'>Last Education Label
                            BSc Engineering</h1>
                        <h1 className='text-base font-medium font-sans'>Education Institute</h1>
                        <h1 className='text-base font-medium font-sans'>Name</h1>
                        <h1 className='text-base font-medium font-sans'>Designation/Position</h1>

                        <span className='lg:w-[600px] w-[200px] border border-b-red-500 mt-4'></span>

                        <h1 className='text-2xl font-medium font-sans mt-4'>Family Information</h1>

                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Father's Status

                            </span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>
                                    Passed Away
                                </span>
                            </span>
                        </div>

                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Mother's Status


                            </span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>
                                    Homemaker
                                </span>
                            </span>
                        </div>

                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Number Of Brother's


                            </span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>
                                    1
                                </span>
                            </span>
                        </div>

                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Number Of Sister's


                            </span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>
                                    1
                                </span>
                            </span>
                        </div>

                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '>My Position In My Siblings

                            </span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>
                                    Passed Away
                                </span>
                            </span>
                        </div>
                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Family Status

                            </span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>
                                    Religious
                                </span>
                            </span>
                        </div>
                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Family Values


                            </span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>
                                    Passed Away
                                </span>
                            </span>
                        </div>


                        <span className='lg:w-[600px] w-[200px] border border-b-red-500 mt-4'></span>

                        <h1 className='text-2xl font-medium font-sans mt-4'>Address/Location Details</h1>

                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Father's Status

                            </span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>
                                    Passed Away
                                </span>
                            </span>
                        </div>

                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Mother's Status


                            </span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>
                                    Homemaker
                                </span>
                            </span>
                        </div>

                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Number Of Brother's


                            </span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>
                                    1
                                </span>
                            </span>
                        </div>

                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Number Of Sister's


                            </span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>
                                    1
                                </span>
                            </span>
                        </div>

                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '>My Position In My Siblings

                            </span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>
                                    Passed Away
                                </span>
                            </span>
                        </div>
                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Family Status

                            </span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>
                                    Religious
                                </span>
                            </span>
                        </div>
                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Family Values


                            </span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>
                                    Passed Away
                                </span>
                            </span>
                        </div>



                        <span className='lg:w-[600px] w-[200px] border border-b-red-500 mt-4'></span>

                        <h1 className='text-2xl font-medium font-sans mt-4'>Partner Expectations</h1>

                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Father's Status

                            </span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>
                                    Passed Away
                                </span>
                            </span>
                        </div>

                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Mother's Status


                            </span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>
                                    Homemaker
                                </span>
                            </span>
                        </div>

                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Number Of Brother's


                            </span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>
                                    1
                                </span>
                            </span>
                        </div>

                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Number Of Sister's


                            </span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>
                                    1
                                </span>
                            </span>
                        </div>

                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '>My Position In My Siblings

                            </span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>
                                    Passed Away
                                </span>
                            </span>
                        </div>
                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Family Status

                            </span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>
                                    Religious
                                </span>
                            </span>
                        </div>
                        <div className='lg:flex items-center gap-16'>
                            <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Family Values


                            </span>
                            <span className='w-full'>

                                <span className='text-[#737373] lg:text-base text-sm w-[300px] '>
                                    Passed Away
                                </span>
                            </span>
                        </div>





                    </div>

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
                        <Link className='text-[15px] font-medium' to='/search'>Working Process</Link>
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

export default MyProfile