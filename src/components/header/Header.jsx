import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="bg-sky-50 sm:flex items-center justify-between py-8 lg:px-36">
        <div>
          <p className="text-3xl font-medium bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500 inline-block text-transparent bg-clip-text ">
            Job_Hunter
          </p>
        </div>
        <div className="">
          <Link to="/home">Home</Link>
          <Link className="ml-8" to="/statistics">
            Statistics
          </Link>
          <Link className="ml-8" to="/applied_job">
            Applied Jobs
          </Link>
          <Link className="ml-8" to="/blog">
            Blog
          </Link>
        </div>
        <button className=" text-white p-2 rounded font-medium bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500">
          Start Applying
        </button>
      </div>
    </div>
  );
};

export default Header;
