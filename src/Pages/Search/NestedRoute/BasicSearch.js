import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { API_URL } from '../../../Context/API_URL';
import BasicSearchCom from './BasiceSearchCom';

function BasicSearch() {

    const [dataList, setUsers] = useState([]);
    const [showForm, setShowForm] = useState(true);
    const [entry, setEntry] = useState("")

    useEffect(() => {
        fetch(`${API_URL}users`)
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error(error));
    }, []);


    const { register, handleSubmit } = useForm();
    const [data, setData] = useState(dataList);

    // handle change event of search input
    const handleHomeSearch = value => {
        const filterPbject = {
            genderValue: value.gender,
            toAgeValue: value.toAged,
            formAgeValue: value.formAged,
            religionValue: value.religion
        }
        filterData(filterPbject);
    };

    // filter records by search text
    const filterData = ({ formAgeValue, toAgeValue, genderValue, religionValue }) => {
        const lowercasedName = genderValue.toLowerCase().trim();
        const lowercasedReligion = religionValue.toLowerCase().trim();
        const toAgeFilter = toAgeValue ? parseInt(toAgeValue) : null;
        const formAgeFilter = formAgeValue ? parseInt(formAgeValue) : null;

        if (lowercasedName === "" && lowercasedReligion === "" && !toAgeFilter && !formAgeFilter) {
            setData(dataList);
        } else {
            const filteredData = dataList.filter(item => {
                const lowercasedItemName = item.gender.toLowerCase();
                const lowercasedItemReligion = item.religion.toLowerCase();
                const itemAge = parseInt(item.age);
                const nameMatch = lowercasedItemName.includes(lowercasedName);
                const religionMatch = lowercasedItemReligion.includes(lowercasedReligion);
                const ageMatch = (formAgeFilter ? itemAge >= formAgeFilter : true) && (toAgeFilter ? itemAge <= toAgeFilter : true);

                return nameMatch && religionMatch && ageMatch;
            });
            setData(filteredData);
            if(filteredData.length){
                setShowForm(false);
            }else{
                setEntry("No records found to display!")
            }
        }
    }

    const aged = [];
    for (let i = 18; i <= 70; i++) {
        aged.push(<option key={i}>{i}</option>);
    }

    return (
        <>

            {showForm && (
                <>
                <form onSubmit={handleSubmit(handleHomeSearch)} className='flex flex-col gap-8'>
                    <div className='flex lg:gap-20 gap-4 items-center'>
                        <span className='text-[#737373] lg:text-xl text-base'>Search By Id</span>
                        <span className='lg:w-[600px] w-[200px] border border-b-red-500'></span>
                    </div>

                    <div className='lg:flex items-center gap-16'>
                        <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Looking For</span>
                        <span className='w-full'>
                            <select {...register("gender")} className="select-secondary select w-full max-w-xs ">
                                <option disabled selected>Select</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>

                        </span>
                    </div>





                    <div className='lg:flex items-center gap-16'>
                        <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Search Age Range</span>
                        <span className='w-full flex'>
                            <div className='w-[160px]'>
                                <select {...register("formAged")} className="select-secondary select w-full max-w-xs rounded-r-none">
                                    <option disabled selected>Select</option>
                                    {aged}
                                </select>
                            </div>
                            <div className='w-[160px]'>
                                <select {...register("toAged")} className="select-secondary select w-full max-w-xs rounded-l-none">
                                    <option disabled selected>Select</option>
                                    {aged}
                                </select>
                            </div>

                        </span>
                    </div>

                    <div className='lg:flex items-center gap-16'>
                        <span className='text-[#737373] lg:text-base text-sm w-[300px] '>Religion</span>
                        <span className='w-full'>
                            <select {...register("religion")} className="select w-full max-w-xs select-secondary">
                                <option disabled selected>Select</option>
                                <option>Muslim</option>
                                <option>Islam</option>
                                <option>Hindu</option>
                                <option>Buddhist</option>
                                <option>Christion</option>
                            </select>

                        </span>
                    </div>

                    <div className='flex lg:gap-12 gap-4 items-center '>
                        <button type='submit' className='w-28 h-10 rounded-full bg-red-500 text-white font-medium duration-500 hover:bg-red-800'>Submit</button>

                    </div>
                </form>

                <span className='mt-2'>{entry}</span>
</>


            )}

            <div className="mt-5 lg:mx-16 mx-2">
                <div className="w-full bg-white rounded-2xl  h-full lg:mt-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-between gap-x-3 gap-y-12 mt-12 mb-12">


                        {data.map(user => (
                            <BasicSearchCom key={user.id} users={user} />
                        ))}



                    </div>
                </div>
            </div>


        </>




    );
}

export default BasicSearch;