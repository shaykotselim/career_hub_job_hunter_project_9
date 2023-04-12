import React from "react";
import { ImLocation, ImCoinDollar } from 'react-icons/im';
import { MdWorkOutline,MdOutlineEmail } from 'react-icons/md';
import { BiPhone } from 'react-icons/bi';
import { addToDb } from "../../utilities/fakedb";

const Details = ({ details }) => {
    
  // console.log(details)
  const {
    job_description,
    email,
    phone,
    salary,
    location,
    job_title,
    job_responsibility,
    educational_requirements,
    experiences,
    id
  } = details;
  const handleApply= (id)=>{
      addToDb(id)
  }
  
  return (
    <>
      <div className="px-4 lg:px-32 mt-24 sm:grid sm:grid-cols-4 lg:gap-4">
        <div className="sm:col-span-3">
          <p className="mt-8">
            <span className="font-bold">Job Description:</span>
            {job_description}
          </p>
          <p className="mt-8">
            <span className="font-bold">Job Responsibility:</span>
            {job_responsibility}
          </p>
            <p className="font-bold mt-8" >Educational Requirements:</p>
            <p className="mt-4">{educational_requirements}</p>

            <p className="font-bold mt-8" >Experiences:</p>
            <p className="mt-4">{experiences}</p>
        </div>

        <div>
             <div className="bg-cyan-50 rounded p-8 mt-4 ">
                    <p className="text-1xl font-bold border-b pb-2">Job Details</p>

                    <p className="flex items-center gap-1 mt-4"><ImCoinDollar/><span className="font-bold">Salary:</span>{salary}</p>
                    <p className="flex items-center gap-1 mt-2"><MdWorkOutline/><span className="font-bold">Job Title:</span>{job_title}</p>

                    <p className="mt-4 text-1xl font-bold border-b pb-2">Contact Information</p>

                    <p className="flex items-center gap-1 mt-4"><BiPhone/><span className="font-bold">Phone:</span>{phone}</p>

                    <p className="flex items-center gap-1 mt-2"><MdOutlineEmail/><span className="font-bold">Email:</span>{email}</p>

                    <p className="flex items-center gap-1 mt-2"><ImLocation/><span className="font-bold">Address:</span>{location}</p>
                
             </div>
             <button onClick={()=>handleApply(id)} className="mt-4 mb-4 py-2 w-full  rounded text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500">Apply Now</button>
        </div>
      </div>
    </>
  );
};

export default Details;
