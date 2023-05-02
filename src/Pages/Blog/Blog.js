import React from 'react'
import { Navigate } from 'react-router-dom'

const Blog = () => {

    const handleBlog = () => {
        Navigate('/SingleBlog')
        console.log('click block')
    }


    return (
        <div className='mt-72 py-16 bg-[#ffffff]'>

            <div className='max-w-max mx-auto'>


                <div className='lg:mx-20 mx-4 '>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 pb-12 '>


                        <div className='relative lg::w-[350px] w-full font-san'>
                            <img src="https://img.freepik.com/free-photo/couple-sending-kisses-camera_329181-19339.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=ais" alt="" />

                            <h1 className='text-xl font-semibold text-[#737373] mt-2'>পাত্র/পাত্রী খুঁজতে বরবিবি.ডট কম</h1>
                            <p className='text-base #737373 mt-4'>আসসালামু আলাইকুম ওয়া রহমাতুল্লাহি</p>

                            <button onClick={() => handleBlog()} className='h-12 w-36 rounded-full text-[#737373] font-medium border-2 border-[#737373] hover:border-0 hover:bg-red-600 duration-500 hover:text-white mt-6'>Read More..</button>


                            <div className='absolute left-0 top-0'> <p className='bg-[#000000] opacity-50 text-white p-1 w-32 text-center rounded-sm #737373 font-semibold '>2022-09-01</p></div>
                        </div>

                        <div className='relative lg::w-[350px] w-full font-san'>
                            <img src="https://img.freepik.com/free-photo/happy-groom-holding-bride-s-veil_1153-1445.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=ais" alt="" />

                            <h1 className='text-xl font-semibold text-[#737373] mt-2'>পাত্র/পাত্রী খুঁজতে বরবিবি.ডট কম</h1>
                            <p className='text-base #737373 mt-4'>আসসালামু আলাইকুম ওয়া রহমাতুল্লাহি</p>
                            <button className='h-12 w-36 rounded-full text-[#737373] font-medium border-2 border-[#737373] hover:border-0 hover:bg-red-600 duration-500 hover:text-white mt-6'>Read More..</button>

                            <div className='absolute left-0 top-0'> <p className='bg-[#000000] opacity-50 text-white p-1 w-32 text-center rounded-sm #737373 font-semibold '>2022-09-01</p></div>
                        </div>

                        <div className='relative lg::w-[350px] w-full font-san'>
                            <img src="https://img.freepik.com/free-photo/will-you-be-my-wife_329181-13673.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=ais" alt="" />

                            <h1 className='text-xl font-semibold text-[#737373] mt-2'>পাত্র/পাত্রী খুঁজতে বরবিবি.ডট কম</h1>
                            <p className='text-base #737373 mt-4'>আসসালামু আলাইকুম ওয়া রহমাতুল্লাহি</p>
                            <button className='h-12 w-36 rounded-full text-[#737373] font-medium border-2 border-[#737373] hover:border-0 hover:bg-red-600 duration-500 hover:text-white mt-6'>Read More..</button>

                            <div className='absolute left-0 top-0'> <p className='bg-[#000000] opacity-50 text-white p-1 w-32 text-center rounded-sm #737373 font-semibold '>2022-09-01</p></div>
                        </div>

                        <div className='relative lg::w-[350px] w-full font-san'>
                            <img src="https://t4.ftcdn.net/jpg/03/71/40/23/240_F_371402344_5udNemJWX047MRlj8wt3FsNVGzf7EZNA.jpg" alt="" />

                            <h1 className='text-xl font-semibold text-[#737373] mt-2'>পাত্র/পাত্রী খুঁজতে বরবিবি.ডট কম</h1>
                            <p className='text-base #737373 mt-4'>আসসালামু আলাইকুম ওয়া রহমাতুল্লাহি</p>
                            <button className='h-12 w-36 rounded-full text-[#737373] font-medium border-2 border-[#737373] hover:border-0 hover:bg-red-600 duration-500 hover:text-white mt-6'>Read More..</button>

                            <div className='absolute left-0 top-0'> <p className='bg-[#000000] opacity-50 text-white p-1 w-32 text-center rounded-sm #737373 font-semibold '>2022-09-01</p></div>
                        </div>

                        <div className='relative lg::w-[350px] w-full font-san'>
                            <img src="https://img.freepik.com/premium-photo/man-giving-engagement-ring-his-girlfriend_128929-19.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais" alt="" />

                            <h1 className='text-xl font-semibold text-[#737373] mt-2'>পাত্র/পাত্রী খুঁজতে বরবিবি.ডট কম</h1>
                            <p className='text-base #737373 mt-4'>আসসালামু আলাইকুম ওয়া রহমাতুল্লাহি</p>
                            <button className='h-12 w-36 rounded-full text-[#737373] font-medium border-2 border-[#737373] hover:border-0 hover:bg-red-600 duration-500 hover:text-white mt-6'>Read More..</button>

                            <div className='absolute left-0 top-0'> <p className='bg-[#000000] opacity-50 text-white p-1 w-32 text-center rounded-sm #737373 font-semibold '>2022-09-01</p></div>
                        </div>

                        <div className='relative lg::w-[350px] w-full font-san'>
                            <img src="https://t4.ftcdn.net/jpg/02/98/60/97/240_F_298609761_DsR2KEPHcfM1A4Yuc9exnPhnXIeENWFR.jpg" alt="" />

                            <h1 className='text-xl font-semibold text-[#737373] mt-2'>পাত্র/পাত্রী খুঁজতে বরবিবি.ডট কম</h1>
                            <p className='text-base #737373 mt-4'>আসসালামু আলাইকুম ওয়া রহমাতুল্লাহি</p>
                            <button className='h-12 w-36 rounded-full text-[#737373] font-medium border-2 border-[#737373] hover:border-0 hover:bg-red-600 duration-500 hover:text-white mt-6'>Read More..</button>

                            <div className='absolute left-0 top-0'> <p className='bg-[#000000] opacity-50 text-white p-1 w-32 text-center rounded-sm #737373 font-semibold '>2022-09-01</p></div>
                        </div>




                    </div>

                </div>
            </div>

        </div>
    )
}

export default Blog