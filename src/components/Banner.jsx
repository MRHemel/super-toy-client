import React from 'react';
import banner from '../assets/images/banner.jpg'

const Banner = () => {
    return (
        <div className="banner flex mt-4 mb-8">
            <div className="image-container w-1/2">
                <img src={banner} alt="Banner" />
            </div>
            <div className="content-container flex flex-col w-1/2 text-center justify-center space-y-32 bg-[#FFE8CC]">
                <div className="text space-y-32">
                    <h2 className='text-5xl font-extrabold'>Super Toys</h2>
                    <p className='text-3xl'>Your Kids Our Toys.</p>
                </div>
                <div className="button">
                    <button className='bg-red-500 p-5 rounded-2xl font-extrabold'>Happy Shopping</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;