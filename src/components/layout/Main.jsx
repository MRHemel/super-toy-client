import React from 'react';
import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Home/Header';

const Main = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;