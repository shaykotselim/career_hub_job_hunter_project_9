import React, { useEffect, useState } from 'react';
import Jobs from './Jobs';

const Feature = () => {
  const [jobs, setJobs] = useState([]);
  const [displayAllJobs, setDisplayAllJobs] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('./feature.json');
      const jsonData = await response.json();
      setJobs(jsonData.slice(0, 4));
    }
    fetchData();
  }, []);

  const handleViewAllData = async () => {
    const response = await fetch('./feature.json');
    const jsonData = await response.json();
    setJobs(jsonData);
    setDisplayAllJobs(true);
  };

  return (
    <>
      <div className="text-center mt-20">
        <p className="text-3xl font-semibold">Feature Jobs</p>
        <p className="mt-4 text-gray-500">
          Explore thousands of job opportunities with all the information you
          need. It's your future.
        </p>
      </div>
      <div className="sm:grid sm:grid-cols-2 px-4 lg:px-36 gap-8 mt-12">
        {jobs.map((job) => (
          <Jobs key={job.id} job={job} />
        ))}
      </div>
      {!displayAllJobs && (
        <div className="text-center mt-4 mb-4">
          <button className="mt-2 p-2 rounded text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500" onClick={handleViewAllData}>See All Jobs</button>
        </div>
      )}
    </>
  );
};

export default Feature;
