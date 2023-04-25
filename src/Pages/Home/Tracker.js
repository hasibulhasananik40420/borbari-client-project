import React from 'react'
import { useForm } from 'react-hook-form';

const Tracker = () => {

    const { register, handleSubmit } = useForm();

    const handleHomeSearch = (data) => {
        console.log( data.formAged)
    }

    const aged = [];
    for (let i = 18; i <= 70; i++) {
        aged.push(<option key={i}>{i}</option>);
    }




    return (
        <form onChange={handleSubmit(handleHomeSearch)} className="lg:mt-3 lg:w-[86%] w-full lg:mb-8 lg:block hidden">


            <div className="lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-6 mt-6 w-full lg:h-[150px] h-full flex flex-col justify-center items-center gap-3 bg-[#00000a] opacity-70  rounded-full ">

                <select {...register("groom")} className="select select-error lg:w-[220px] max-w-xs bg-white text-black">
                    <option selected>I'm looking for a</option>
                    <option>Groom</option>
                    <option>Bride</option>

                </select>

                <div className='lg:flex items-center gap-16'>

                    <span className='lg:w-[240px] w-[270px] flex'>
                        <div className='w-full'>
                            <select {...register("formAged")} className="select-secondary select w-full max-w-xs rounded-r-none bg-white text-black">
                                <option disabled selected>Aged</option>
                                {aged}
                            </select>
                        </div>
                        <div className='w-full'>
                            <select {...register("toAged")} className="select-secondary select bg-white text-black w-full max-w-xs rounded-l-none">
                                <option disabled selected>Aged</option>
                                {aged}

                            </select>
                        </div>

                    </span>
                </div>


                <select {...register("religion")} className="select select-error lg:w-[220px] max-w-xs bg-white text-black">
                    <option selected>Religion</option>
                    <option>Islam</option>
                    <option>Ghost</option>

                </select>

                <select {...register("maritalStatus")} className="select select-error lg:w-[220px] max-w-xs bg-white text-black">
                    <option selected>Marital Status</option>
                    <option>Strapi</option>
                    <option>Ghost</option>

                </select>


            </div>
        </form>
    )
}

export default Tracker