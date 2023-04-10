import React, { useEffect, useState } from 'react';
import Jobs from './Jobs';

const Feature = () => {
    const [jobs, setJobs]= useState([])
    useEffect(()=>{
        fetch('./feature.json')
        .then(res => res.json())
        .then(data => setJobs(data))

    },[])
    return (
        <>
            <div className="text-center mt-20">
                <p className="text-3xl font-semibold">Feature Jobs</p>
                <p className="mt-4 text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 px-36 gap-8 mt-12">
                {
                    jobs.map(job=><Jobs
                        key = {job.id}
                        job = {job}
                    />)
                }
            </div>

        </>
    );
};

export default Feature;