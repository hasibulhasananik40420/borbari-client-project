import React from 'react'
import NavigationShape1 from '../../images/navigation-shape1.png'
import NavigationShape2 from '../../images/navigation-shape2.png'
import logo from '../../images/logo.png'
const Footer = () => {
    return (
        <div className="bg-footer-image  bg-center bg-no-repeat h-full w-full">
            <div className='flex flex-col justify-center items-center pt-52 pb-40 text-white'>
               


                <div className="rounded-full w-32 h-32 flex justify-center items-center p-2 bg-red-50">


                    <img className='' src={logo} alt="biyerful-logo" />

                </div>



            </div>

        </div>
    )
}

export default Footer