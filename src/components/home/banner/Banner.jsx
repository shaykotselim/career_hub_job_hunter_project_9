import React from 'react';
import bannerimg from '../../../assets/All Images/banner.png'
const Banner = () => {
    return (
        <>
            <div className=" sm:flex items-center justify-between bg-sky-50 px-4 lg:px-36">
                 <div>  
                        <p className="text-4xl font-medium lg:text-6xl">One step </p>
                        <p className="text-4xl font-medium lg:text-6xl">Closer To Your</p>
                        <p className="text-4xl font-medium lg:text-6xl text-blue-600">Dream Job</p>
                        <p className="mt-2">Explore thousands of job opportunities with all
                         the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>

                         <button className=" mt-8 text-white p-2 rounded font-medium bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500">
                            Get Started
                        </button>
                 </div>
                 <div>
                        <img className="w-full " src={bannerimg} alt="" />
                 </div>
            </div>
        </>
    );
};

export default Banner;