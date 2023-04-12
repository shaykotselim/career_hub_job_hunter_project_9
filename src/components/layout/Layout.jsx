import React from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import HeaderV2 from '../header/HeaderV2';

const Layout = () => {
    return (
        <div>
            {/* <Header/> */}
            <HeaderV2/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;