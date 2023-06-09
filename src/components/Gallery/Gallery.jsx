import React from 'react';

const Gallery = ({ toy }) => {

    const { Picture, Name } = toy;
    // console.log(toy.Picture)
    return (
        <div className="card w-40 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{Name}</h2>

            </div>
            <figure><img src={Picture} alt="Shoes" /></figure>
        </div>
    );
};

export default Gallery;