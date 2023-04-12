import React from "react";
import Category from "./category/Category";
import Feature from "./feature/Feature";
import Banner from "./banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Feature />
    </div>
  );
};

export default Home;
