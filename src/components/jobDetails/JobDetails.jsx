import React from 'react';
import DetailsBanner from './DetailsBanner';
import { useLoaderData, useParams } from 'react-router-dom';
import Details from './Details';

const JobDetails = () => {
    const jobDetail = useLoaderData();
    const {jobId} = useParams();
    // console.log(jobDetail)
    const details = jobDetail.find(items=> items.id == jobId);
    // console.log(details);
        
    return (
        <>
           
            <div>
                 <DetailsBanner/>
            </div>
            <div>
                 <Details
                    details={details}
                 />
            </div>
                
        </>
    );
};

export default JobDetails;