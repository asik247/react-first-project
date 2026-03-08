import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <div className='flex flex-col h-[100vh] w-11/12 mx-auto'>
            <Navbar></Navbar>
            <div className='flex-1 mt-20 mb-20'>
                  <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;