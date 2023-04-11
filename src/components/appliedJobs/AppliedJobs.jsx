import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getAppliedJob } from '../../utilities/fakedb';
import { ImLocation, ImCoinDollar } from 'react-icons/im';
const AppliedJobs = () => {
    const lodeData = useLoaderData();
        console.log(lodeData)
        const getData = getAppliedJob()
        let data  = []
        for (const id in getData ){
            const getId = lodeData.find(items=>items.id == id)
            if(getId){
                data.push(getId);

            }
            console.log(data);
        }


    return (
        <div>
            {
                data.map(dt=><div className='px-32 mt-4'>
                            <div className="border rounded p-8 flex items-center justify-between">
                                <div className='flex items-center gap-4'>
                                    <div>
                                        <img className='bg-cyan-50 rounded p-8 h-32' width={200} src={dt.company_logo} alt="" />
                                    </div>
                                    <div>
                                        <p>{dt.job_title}</p>
                                        <p>{dt.company_name}</p>
                                        <div className="mt-2 flex gap-4 text-blue-600">
                                            <p className="border rounded border-blue-600 p-1">{dt.is_remote_onsite}</p>
                                            <p className="border rounded border-blue-600 p-1">{dt.typeof_job}</p>
                                        </div>
                                        <div className="mt-2 sm:flex gap-4 text-gray-600">
                                            <p className="flex items-center"><ImLocation/>{dt.location}</p>
                                            <p className="flex items-center"><ImCoinDollar/><span>Salary : {dt.salary}</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Link to={`/job_details/${dt.id}`}>
                                        <button className="mt-2 p-2 rounded text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        
                </div>)
            }
        </div>
    );
};

export default AppliedJobs;