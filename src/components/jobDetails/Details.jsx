import React from "react";
import { ImLocation, ImCoinDollar } from 'react-icons/im';
import { MdWorkOutline,MdOutlineEmail } from 'react-icons/md';
import { BiPhone } from 'react-icons/bi';
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
  } = details;
  return (
    <>
      <div className="px-32 mt-24 grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <p className="mt-8">
            <span className="font-medium">Job Description:</span>
            {job_description}
          </p>
          <p className="mt-8">
            <span className="font-medium">Job Responsibility:</span>
            {job_responsibility}
          </p>
            <p className="font-medium mt-8" >Educational Requirements:</p>
            <p className="mt-4">{educational_requirements}</p>

            <p className="font-medium mt-8" >Experiences:</p>
            <p className="mt-4">{experiences}</p>
        </div>

        <div>
             <div className="bg-sky-50 rounded p-8">
                    <p className="text-2xl font-medium border-b pb-2">Job Details</p>

                    <p className="flex items-center gap-1 mt-4"><ImCoinDollar/><span className="font-medium">Salary:</span>{salary}</p>
                    <p className="flex items-center gap-1 mt-2"><MdWorkOutline/><span className="font-medium">Job Title:</span>{job_title}</p>

                    <p className="mt-4 text-2xl font-medium border-b pb-2">Contact Information</p>

                    <p className="flex items-center gap-1 mt-4"><BiPhone/><span className="font-medium">Phone:</span>{phone}</p>

                    <p className="flex items-center gap-1 mt-2"><MdOutlineEmail/><span className="font-medium">Email:</span>{email}</p>

                    <p className="flex items-center gap-1 mt-2"><ImLocation/><span className="font-medium">Address:</span>{location}</p>
                
             </div>
             <button className="mt-4 py-2 w-full  rounded text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500">Apply Now</button>
        </div>
      </div>
    </>
  );
};

export default Details;
