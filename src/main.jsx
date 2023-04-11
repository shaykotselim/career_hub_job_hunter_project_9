import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home';
import Layout from './components/layout/Layout';
import Statistics from './components/statistics/Statistics';
import AppliedJobs from './components/appliedJobs/AppliedJobs';
import Blog from './components/blog/Blog';
import JobDetails from './components/jobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"home",
        element:<Home/>,
      },
      {
        path:"statistics",
        element:<Statistics/>
      },
      {
        path:"applied_job",
        element:<AppliedJobs/>,
        loader:()=> fetch("/feature.json")
        
      },
      {
        path:"blog",
        element:<Blog/>
      },
      {
        path:"job_details/:jobId",
        element:<JobDetails/>,
        loader: ({ params }) => fetch("/feature.json")
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
