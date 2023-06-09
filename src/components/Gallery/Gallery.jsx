import React from 'react';

const Gallery = ({ toy }) => {

    const { Picture, Name } = toy;
    // console.log(toy.Picture)
    return (
        <div>
            <img src={Picture} alt="" />
            <p>{Name}</p>


        </div>
    );
};

export default Gallery;