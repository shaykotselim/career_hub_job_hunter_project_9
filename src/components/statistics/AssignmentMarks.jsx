import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

const data = [
  {
    subject: "Assignment-1",
    A: 60,
    
    fullMark: 60
  },
  {
    subject: "Assignment-2",
    A: 59,
  
    fullMark: 60
  },
  {
    subject: "Assignment-3",
    A: 60,
    
    fullMark: 60
  },
  {
    subject: "Assignment-4",
    A: 58,
   
    fullMark: 60
  },
  {
    subject: "Assignment-5",
    A: 59,
   
    fullMark: 60
  },
  {
    subject: "Assignment-6",
    A: 59,
    
    fullMark: 60
  },
  {
    subject: "Assignment-7",
    A: 60,
    
    fullMark: 60
  },
  {
    subject: "Assignment-8",
    A: 60,
    
    fullMark: 60
  }
];

export default function App() {
  return (
    <div className="flex mt-16 justify-center">
      <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={600}
      height={600}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="shaykot_selim"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
    </div>
  );
}
