import React from 'react';
import AssignmentMarks from './AssignmentMarks';
import StatisticsBanner from './statisticsBanner';

const Statistics = () => {
    return (
        <div>
            <StatisticsBanner/>
            <AssignmentMarks/>
        </div>
    );
};

export default Statistics;