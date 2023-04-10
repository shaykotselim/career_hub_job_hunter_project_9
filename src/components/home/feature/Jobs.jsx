import React from "react";
import { ImLocation, ImCoinDollar } from 'react-icons/im';
const Jobs = ({ job }) => {
  console.log(job);
  return (
    <>
      <div className=" p-8 rounded shadow-lg lg:shadow-md mt-4">
            <div>
                <img width={150} src={job.company_logo} alt="" />
            </div>
            <div className="mt-4">
                <p className="text-xl font-medium">{job.job_title}</p>
                <p className="text-gray-600">{job.company_name}</p>
            </div>
            <div className="mt-2 flex gap-4 text-blue-600">
                <p className="border rounded border-blue-600 p-1">{job.is_remote_onsite}</p>
                <p className="border rounded border-blue-600 p-1">{job.typeof_job}</p>
            </div>
            <div className="mt-2 sm:flex gap-4 text-gray-600">
                <p className="flex items-center"><ImLocation/>{job.location}</p>
                <p className="flex items-center"><ImCoinDollar/><span>Salary : {job.salary}</span></p>
            </div>
            <button className="mt-2 bg-blue-600 text-white p-2 rounded hover:bg-orange-600">View Details</button>
      </div>
    </>
  );
};

export default Jobs;
