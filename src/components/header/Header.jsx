import React from "react";

const Header = () => {
  return (
    <div>
      <div className="bg-sky-50 sm:flex items-center justify-between pt-8 lg:px-36">
        <div>
          <p className="text-3xl font-medium bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500 inline-block text-transparent bg-clip-text ">
            Job_Hunter
          </p>
        </div>
        <nav className="">
          <a className="lg:ml-8" href="">
            Statistics
          </a>
          <a className="ml-8" href="">
            Applied Jobs
          </a>
          <a className="ml-8" href="">
            Blog
          </a>
        </nav>
        <button className=" text-white p-2 rounded font-medium bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500">
          Start Applying
        </button>
      </div>
    </div>
  );
};

export default Header;
