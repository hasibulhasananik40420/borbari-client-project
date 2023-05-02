import React from 'react';
import { useNavigate } from 'react-router-dom';
import HighlightedProfileCard from '../../Components/HighlightedProfile/HighlightedProfileCard';
import LatestNewsDetails from './LatestNewsDatails';

const LatestNews = () => {


    const LatestNews =
        [
            {
                _id : "_123",
                imageSrc: "https://img.freepik.com/free-photo/happy-groom-holding-bride-s-veil_1153-1445.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=ais",
                postDate : "January 18, 2019",
                comments : 1,
                description: "OPD Cover Gaining Popularity Among Indian Consumers"
            },
            {
                _id : "_124",
                imageSrc: "https://img.freepik.com/free-photo/happy-groom-holding-bride-s-veil_1153-1445.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=ais",
                postDate : "January 18, 2019",
                comments : 1,
                description: "OPD Cover Gaining Popularity Among Indian Consumers"
            },
            {
                _id : "_125",
                imageSrc: "https://img.freepik.com/free-photo/happy-groom-holding-bride-s-veil_1153-1445.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=ais",
                postDate : "January 18, 2019",
                comments : 1,
                description: "OPD Cover Gaining Popularity Among Indian Consumers"
            }
        ]


    return (
        <div className=''>

            <h1 className='md:text-5xl text-2xl font-mons font-semibold text-center mt-24'>Read Our Latest News And Advices
            </h1>
            <p className='mt-4 text-center text-red-500'>Latest News</p>

            <div className=" mx-auto lg:max-w-7xl mt-3 ">
                <div className="max-w-7xl mx-auto px-2 mb-3">
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        {LatestNews.map(news => (
                            <LatestNewsDetails key={news.id} news={news} />
                            
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;