import React from 'react'

const ContactUs = () => {
    return (
        <div className='mt-52 py-12'>

            <div className='lg:flex lg:justify-between items-center max-w-7xl mx-auto lg:w-3/4 w-full lg:px-20 px-4 py-12'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-3xl font-medium font-sans text-[#737373]'>Phone</h1>
                    <p className='w-12 h-0  border border-black mt-5 mb-5'></p>
                    <p>01674 07 07 07</p>
                    <p>01674 07 07 07</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-3xl font-medium font-sans text-[#737373]'>Email</h1>
                    <p className='w-12 h-0  border border-black mt-5 mb-5'></p>
                    <p>support@borbibi.com</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-3xl font-medium font-sans text-[#737373]'>Address</h1>
                    <p className='w-12 h-0  border border-black mt-5 mb-5'></p>
                    <p className='w-52'>BorBibi.com House# 29,
                        Nazim Bhaban, Board Bazar, National university, Gazipur-1704.</p>

                </div>
            </div>



            <div className='bg-[#ffffff] w-full '>
                <div className='lg:px-20 py-16 px-4 lg:w-3/4 max-w-7xl mx-auto '>
                    <div className='lg:flex gap-6'>
                        <div
                            className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 mt-4"
                        >
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none mb-4"
                            />
                        </div>

                        <div
                            className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 mt-4"
                        >
                            <input
                                type="text"
                                placeholder="Email or Password"
                                class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none mb-4"
                            />
                        </div>
                    </div>

                    <div
                        className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 mt-24"
                    >
                        <textarea
                            type="text"
                            placeholder="Tell Us Your Idea"
                            class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none mb-8"
                        />
                    </div>

                   <div className='flex justify-end mt-12'>
                   <button className='h-12 w-36 rounded-full bg-red-600 text-white font-medium duration-500 hover:text-white mt-6'>Submit</button>
                   </div>
                </div>


            </div>

        </div>
    )
}

export default ContactUs