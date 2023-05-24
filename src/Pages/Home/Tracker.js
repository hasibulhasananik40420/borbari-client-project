import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { API_URL } from '../../Context/API_URL';
import { Link } from 'react-router-dom';

const Tracker = ({ setData, setUsers, dataList}) => {


    useEffect(() => {
        fetch(`${API_URL}users`)
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error(error));
    }, []);


    const { register, handleSubmit } = useForm();

    // handle change event of search input
    const handleHomeSearch = value => {
        const filterPbject = {
            genderValue: value.gender,
            toAgeValue: value.toAged,
            formAgeValue: value.formAged,
            religionValue: value.religion
        }
        filterData(filterPbject);
        // console.log(filterPbject)
    };

    // filter records by search text
    const filterData = ({ formAgeValue, toAgeValue, genderValue, religionValue }) => {
        const lowercasedName = genderValue.toLowerCase().trim();
        const lowercasedReligion = religionValue.toLowerCase().trim();
        const toAgeFilter = toAgeValue ? parseInt(toAgeValue) : null;
        const formAgeFilter = formAgeValue ? parseInt(formAgeValue) : null;

        if (lowercasedName === "" && lowercasedReligion === "" && !toAgeFilter && !formAgeFilter) {
            setData(dataList);
            // console.log(dataList)
        } else {
            // console.log(dataList)
            const outputData = dataList.filter(item => {
                const lowercasedItemName = item.gender.toLowerCase();
                const lowercasedItemReligion = item.religion.toLowerCase();
                const itemAge = parseInt(item.age);
                const nameMatch = lowercasedItemName.includes(lowercasedName);
                const religionMatch = lowercasedItemReligion.includes(lowercasedReligion);
                const ageMatch = (formAgeFilter ? itemAge >= formAgeFilter : true) && (toAgeFilter ? itemAge <= toAgeFilter : true);
                console.log(ageMatch)

                return nameMatch && religionMatch;
            });
            setData(outputData);
            // console.log(outputData)
        }
    }


    



    const aged = [];
    for (let i = 19; i <= 70; i++) {
        aged.push(<option key={i}>{i}</option>);
    }




    return (
        <form onSubmit={handleSubmit(handleHomeSearch)} className="lg:mt-3 lg:w-[90%] w-full lg:mb-8 mt-32">


            <div className="lg:flex lg:flex-row lg:justify-center lg:pl-3 lg:items-center lg:gap-6 lg:mt-6 w-full lg:h-[150px] h-full flex flex-col justify-center items-center gap-3 lg:bg-[#00000a] lg:opacity-70  lg:rounded-full lg:border lg:border-red-600 pt-36 lg:pt-0">
               
                <select {...register("gender")} className="select select-error lg:w-[320px] w-[300px] bg-white text-black cursor-pointer">
                    <option >I'm looking for a</option>
                    <option selected>Male</option>
                    <option>Female</option>

                </select>

                <div className='lg:flex items-center gap-16'>

                    <span className='lg:w-[240px] w-[300px] flex'>
                        <div className='w-full'>
                            <select {...register("formAged")} className="select-secondary select w-full max-w-xs rounded-r-none bg-white text-black">
                                <option selected>18</option>
                                {aged}
                            </select>
                        </div>
                        <div className='lg:w-full w-[300px]'>
                            <select {...register("toAged")} className="select-secondary select bg-white text-black w-full max-w-xs rounded-l-none">
                                {aged}
                                <option selected>71</option>

                            </select>
                        </div>

                    </span>
                </div>


                <select {...register("religion")} className="select select-error lg:w-[300px] w-[300px] bg-white text-black">
                    <option selected>Islam</option>
                    <option>Ghost</option>

                </select>

               
              
               <div className='lg:bg-white h-full w-full lg:rounded-r-full  py-10 lg:text-left'>
                <button type='submit' className='bg-red-500 text-white w-32 h-11 lg:rounded-r-full rounded-full'>Let's Begin</button>
              
              
                <Link to='/search'> <h1 className='text-red-500 font-sans mt-2 ml-2'>Advanced search</h1></Link>
               </div>


            </div>
        </form>
    )
}

export default Tracker