import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip, Legend, ResponsiveContainer
} from "recharts";

const data = [
  {
    subject: "Assignment-1",
    A: 60,
    fullMark: 60,
  },
  {
    subject: "Assignment-2",
    A: 59,
    fullMark: 60,
  },
  {
    subject: "Assignment-3",
    A: 60,
    fullMark: 60,
  },
  {
    subject: "Assignment-4",
    A: 59,
    fullMark: 60,
  },
  {
    subject: "Assignment-5",
    A: 58,
    fullMark: 60,
  },
  {
    subject: "Assignment-6",
    A: 59,
    fullMark: 60,
  },
  {
    subject: "Assignment-7",
    A: 60,
    fullMark: 60,
  },
  {
    subject: "Assignment-8",
    A: 60,
    fullMark: 60,
  },
];
const getIntroOfPage = (label) => {
  if (label === 'Assignment-1') {
    return "Obtain Mark: 60";
  }
  if (label === 'Assignment-2') {
    return "Obtain Mark: 59";
  }
  if (label === 'Assignment-3') {
    return "Obtain Mark: 60";
  }
  if (label === 'Assignment-4') {
    return 'Obtain Mark: 59';
  }
  if (label === 'Assignment-5') {
    return 'Obtain Mark: 58';
  }
  if (label === 'Assignment-6') {
    return 'Obtain Mark: 59';
  }
  if (label === 'Assignment-7') {
    return 'Obtain Mark: 60';
  }
  if (label === 'Assignment-8') {
    return 'Obtain Mark: 60';
  }
  return '';
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip text-white p-2 rounded   font-medium bg-gradient-to-r from-purple-500 to-pink-500 ">
        <p className="label">{`${label}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
      </div>
    );
  }

  return null;
};

///here start

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
          fill="#E0F7FA"
          fillOpacity={0.6}
        />
        <Tooltip content={<CustomTooltip />} />
      </RadarChart>
    </div>
  );
}
