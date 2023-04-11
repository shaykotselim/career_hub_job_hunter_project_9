import React from 'react';
import vector1 from "../../assets/All Images/Vector-1.png"
import vector from "../../assets/All Images/Vector.png"
const BlogBanner = () => {
    return (
        <div>
             <div className="bg-cyan-50 relative">
                    <div>
                        <img className="h-36 absolute right-0 -top-[164px] lg:-top-[104px]" src={vector1} alt="" />
                    </div>
                    <div>
                        <p className="text-center lg:absolute lg:left-[700px] lg:top-8 text-4xl font-bold ">Blog Q & A </p>
                    </div>
                    <div>
                        <img className="h-36" src={vector} alt="" />
                    </div>
            </div>  
        </div>
    );
};

export default BlogBanner;