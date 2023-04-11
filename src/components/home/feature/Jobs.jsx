import React from "react";
import { ImLocation, ImCoinDollar } from 'react-icons/im';
import { Link } from "react-router-dom";
const Jobs = ({ job }) => {
    const {id} = job
  // console.log(job);

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
            <Link to={`/job_details/${id}`}>
                <button className="mt-2 p-2 rounded text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500">View Details</button>
            </Link>
      </div>
    </>
  );
};

export default Jobs;
