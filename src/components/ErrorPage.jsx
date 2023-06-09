import React from 'react';
import error from '../assets/error.jpg'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='relative'>

            <Link to={'/'}><h1 className='absolute text-3xl font-extrabold bg-amber-200 rounded-xl p-3'> Go Back To Home</h1></Link>
            <img src={error} alt="" className='w-full h-screen' />


        </div>
    );
};

export default ErrorPage;