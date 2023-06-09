import React from 'react';

const MyToyCard = ({ myToy }) => {

    const { name, price, photo } = myToy;
    return (
        <div className="card w-96 glass">
            <figure><img src={photo} alt="toy!" /></figure>
            <div className="card-body">
                <h2 className="card-title">Toy Name{name}</h2>
                <p>Price:${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View details</button>
                </div>
            </div>
        </div>
    );
};

export default MyToyCard;