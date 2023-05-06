import React from "react";
import { useNavigate } from "react-router-dom";

const LatestNewsDetails = ({news}) => {
    const {imageSrc, description, postDate, comments, _id} = news
    const navigate= useNavigate()


    const handleDetails = (id) => {
        // alert('This is page is comming son', id)
        navigate('../blog/single-blogs')
    }
    
    return (
        <div
            className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-md">
            <a href="#">
                <img className="rounded-t-lg px-5 py-2 rounded-md" src={imageSrc} alt="step3" />
            </a>
            <div className='flex gap-4 justify-center border-b p-1'>
                <p>{postDate}</p>
                <p>|</p>
                <p>{comments} Comments</p>
            </div>

            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">পাত্র/পাত্রী খুঁজতে বরবিবি.ডট কম</h5>
                </a>
                <div className="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">আসসালামু আলাইকুম ওয়া রহমাতুল্লাহি</div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <button onClick={() => handleDetails(_id)}
                    className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#5ab88a] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#5ab88a] dark:focus:ring-blue-800">
                    Read more
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>

        </div>
    );
};

export default LatestNewsDetails;
