import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = ({ toy }) => {

    useEffect(() => {
        AOS.init();
    }, []);

    const { Picture, Name } = toy;
    // console.log(toy.Picture)
    return (
        <div className=" w-40 bg-base-100 shadow-xl" data-aos="fade-in-up" data-aos-duration="3000">
            {/* <div className="card-body">
                <h2 className="card-title">{Name}</h2>

            </div> */}
            <figure><img src={Picture} alt="" /></figure>
        </div>
    );
};

export default Gallery;