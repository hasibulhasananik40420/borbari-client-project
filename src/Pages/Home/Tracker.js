import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { API_URL } from '../../Context/API_URL';
import { Link } from 'react-router-dom';

const Tracker = () => {
    const [users, setUsers] = useState([]);
    const [searchInfo, setSearchInfo] = useState()

    const { register, handleSubmit } = useForm();

    const handleHomeSearch = (data) => {
        setSearchInfo = {
            groom: data.groom,
            formAged: data.formAged,
            toAged: data.toAged,
            religion: data.religion,
            maritalStatus: data.maritalStatus

        }
    }
    useEffect((searchInfo) => {
        
        fetch(`${API_URL}users?search=${searchInfo}`)
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error(error));
    }, [searchInfo]);


    console.log(searchInfo)

    const aged = [];
    for (let i = 19; i <= 70; i++) {
        aged.push(<option key={i}>{i}</option>);
    }




    return (
        <form onChange={handleSubmit(handleHomeSearch)} className="lg:mt-3 lg:w-[90%] w-full lg:mb-8 lg:block hidden">


            <div className="lg:flex lg:flex-row lg:justify-center lg:pl-3 lg:items-center lg:gap-6 mt-6 w-full lg:h-[150px] h-full flex flex-col justify-center items-center gap-3 bg-[#00000a] opacity-70  rounded-full border border-red-600">
               
                <select {...register("groom")} className="select select-error lg:w-[220px] max-w-xs bg-white text-black">
                    <option >I'm looking for a</option>
                    <option selected>Groom</option>
                    <option>Bride</option>

                </select>

                <div className='lg:flex items-center gap-16'>

                    <span className='lg:w-[240px] w-[270px] flex'>
                        <div className='w-full'>
                            <select {...register("formAged")} className="select-secondary select w-full max-w-xs rounded-r-none bg-white text-black">
                                <option selected>18</option>
                                {aged}
                            </select>
                        </div>
                        <div className='w-full'>
                            <select {...register("toAged")} className="select-secondary select bg-white text-black w-full max-w-xs rounded-l-none">
                                {aged}
                                <option selected>71</option>

                            </select>
                        </div>

                    </span>
                </div>


                <select {...register("religion")} className="select select-error lg:w-[220px] max-w-xs bg-white text-black">
                    <option selected>Islam</option>
                    <option>Ghost</option>

                </select>

                <select {...register("maritalStatus")} className="select select-error lg:w-[220px] max-w-xs bg-white text-black">
                    <option selected>Strapi</option>
                    <option>Ghost</option>

                </select>
              
               <div className='bg-white h-full w-full rounded-r-full py-10 text-left'>
                <button className='bg-red-500 text-white w-32 h-11 rounded-r-full'>Let's Begin</button>
              
              
                <Link to='/search'> <h1 className='text-red-500 font-sans mt-2 ml-2'>Advanced search</h1></Link>
               </div>


            </div>
        </form>
    )
}

export default Tracker