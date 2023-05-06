import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function OtherSearch() {
    const dataList = [
        {
            "id": 1,
            "gender": "male",
            "age": 20,
            "color": "#98B2D1",
            "religion": "15-4020"
        },
        {
            "id": 2,
            "gender": "male",
            "age": 21,
            "color": "#C74375",
            "religion": "17-2031"
        },
        {
            "id": 3,
            "gender": "true red",
            "age": 22,
            "color": "#BF1932",
            "religion": "19-1664"
        },
        {
            "id": 4,
            "gender": "aqua sky",
            "age": 23,
            "color": "#7BC4C4",
            "religion": "14-4811"
        },
        {
            "id": 5,
            "gender": "tigerlily",
            "age": 24,
            "color": "#E2583E",
            "religion": "17-1456"
        },
        {
            "id": 6,
            "gender": "blue turquoise",
            "age": 25,
            "color": "#53B0AE",
            "religion": "15-5217"
        },
        {
            "id": 7,
            "gender": "sand dollar",
            "age": 26,
            "color": "#DECDBE",
            "religion": "13-1106"
        },
        {
            "id": 8,
            "gender": "chili pepper",
            "age": 27,
            "color": "#9B1B30",
            "religion": "19-1557"
        },
        {
            "id": 9,
            "gender": "blue iris",
            "age": 28,
            "color": "#5A5B9F",
            "religion": "18-3943"
        },
        {
            "id": 10,
            "gender": "mimosa",
            "age": 29,
            "color": "#F0C05A",
            "religion": "14-0848"
        },
        {
            "id": 11,
            "gender": "turquoise",
            "age": 20,
            "color": "#45B5AA",
            "religion": "15-5519"
        },
        {
            "id": 12,
            "gender": "honeysuckle",
            "age": 21,
            "color": "#D94F70",
            "religion": "18-2120"
        },
        {
            "id": 13,
            "gender": "cerulean",
            "age": 20,
            "color": "#98B2D1",
            "religion": "15-4020"
        },
        {
            "id": 14,
            "gender": "fuchsia rose",
            "age": 21,
            "color": "#C74375",
            "religion": "17-2031"
        },
        {
            "id": 15,
            "gender": "true red",
            "age": 22,
            "color": "#BF1932",
            "religion": "19-1664"
        },
        {
            "id": 16,
            "gender": "aqua sky",
            "age": 23,
            "color": "#7BC4C4",
            "religion": "14-4811"
        },
        {
            "id": 17,
            "gender": "tigerlily",
            "age": 24,
            "color": "#E2583E",
            "religion": "17-1456"
        },
        {
            "id": 18,
            "gender": "blue turquoise",
            "age": 25,
            "color": "#53B0AE",
            "religion": "15-5217"
        },
        {
            "id": 19,
            "gender": "sand dollar",
            "age": 26,
            "color": "#DECDBE",
            "religion": "13-1106"
        },
        {
            "id": 20,
            "gender": "chili pepper",
            "age": 27,
            "color": "#9B1B30",
            "religion": "19-1557"
        },
        {
            "id": 21,
            "gender": "blue iris",
            "age": 28,
            "color": "#5A5B9F",
            "religion": "18-3943"
        },
        {
            "id": 22,
            "gender": "male",
            "age": "",
            "color": "#F0C05A",
            "religion": "14-0848"
        },
        {
            "id": 23,
            "gender": "Male",
            "age": 32,
            "color": "#45B5AA",
            "religion": "muslim"
        },
        {
            "id": 298,
            "gender": "Male",
            "age": 31,
            "color": "#45B5AA",
            "religion": "muslim"
        },
        {
            "id": 24,
            "gender": "honeysuckle",
            "age": 32,
            "color": "#D94F70",
            "religion": "18-2120"
        }
    ];

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

                console.log(ageMatch)
                return nameMatch && religionMatch && ageMatch;
            });
            setData(filteredData);
        }
    }


    // basice sreach 







    const aged = [];
    for (let i = 18; i <= 70; i++) {
        aged.push(<option key={i}>{i}</option>);
    }

    return (
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


            {/* see all data */}

            <div className="OtherSearch">
                <div className="box-container">
                    {data.map((d, i) => {
                        return <div key={i} className="box" style={{ backgroundColor: d.color }}>
                            <b>gender : </b>{d.gender}<br />
                            <b>age : </b>{d.age}<br />
                            <b>Color : </b>{d.color}<br />
                            <b>Religion : </b>{d.religion}
                        </div>
                    })}
                    <div className="clearboth"></div>
                    {data.length === 0 && <span>No records found to display!</span>}
                </div>
            </div>

        </>




    );
}

export default OtherSearch;