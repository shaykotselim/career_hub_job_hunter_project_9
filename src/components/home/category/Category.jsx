import React, { useEffect, useState } from "react";
import Items from "./Items";

const Category = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("./category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <>
      <div className="mt-16">
        <p className="text-center text-3xl font-semibold">Job Category List</p>
        <p className="mt-4 text-center text-gray-500">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="mt-8 sm:grid sm:grid-cols-4 gap-8 px-4 lg:px-36 ">
          {category.map((items) => (
            <Items key={items.id} items={items} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
