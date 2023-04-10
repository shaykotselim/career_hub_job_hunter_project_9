import React from "react";

const Items = ({ items }) => {
  return (
    <>
      <div className="  ">
        <div className="bg-gray-50 p-8 rounded shadow-md mt-4">
          <img src={items.img} alt="" />
          <p className="text-lg font-medium mt-2">{items.category}</p>
          <p className="text-sm text-gray-400">{items.jobs}</p>
        </div>
      </div>
    </>
  );
};

export default Items;
