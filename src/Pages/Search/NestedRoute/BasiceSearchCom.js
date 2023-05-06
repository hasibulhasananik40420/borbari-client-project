import React from "react";
const BasicSearchCom = ({ users }) => {

    const {photoURL, profile_id, name, age, gender, religion} = users 

    return (
        <div className="lg:w-[350px] w-full shadow-lg">
            <div className="flex gap-4 items-center">
                <img
                    className="w-24 h-24"
                    src={photoURL.photoURL}
                    alt=""
                />
                <span className="flex flex-col gap-1">
                    <h1>Profile ID: {profile_id}</h1>
                    <h1>
                        Name: <span className="text-red-500">{name}</span>
                    </h1>
                </span>
            </div>

            <div className="flex flex-col ">
                <span className="flex items-center gap-8 bg-[#f9f6f6] h-11 p-3 border-b">
                    <h1>Age</h1>
                    <h1>{age}</h1>
                </span>
                <span className="flex items-center gap-8 bg-[#f9f6f6] h-11 p-3 border-b">
                    <h1>Gender</h1>
                    <h1>{gender}</h1>
                </span>
                <span className="flex items-center gap-8 bg-[#f9f6f6] h-11 p-3 border-b">
                    <h1>Religion</h1>
                    <h1>{religion}</h1>
                </span>
                <span className="flex items-center gap-8 bg-[#f9f6f6] h-11 p-3 border-b">
                    <h1>Profession</h1>
                    <h1>Job</h1>
                </span>
                <span className="flex items-center gap-8 bg-[#f9f6f6] h-11 p-3 border-b">
                    <h1>Location</h1>
                    <h1>Bangladesh</h1>
                </span>
            </div>

            <button className="text-blue-500 bg-[#f9f6f6] h-11 w-full">View Profile </button>
        </div>
    );
};

export default BasicSearchCom;
