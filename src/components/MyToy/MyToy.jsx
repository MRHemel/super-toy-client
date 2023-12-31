import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyToyCard from './MyToyCard';

const MyToy = () => {

    const myToys = useLoaderData()
    // console.log(myToys)
    return (
        <div className='grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2'>
            {
                myToys.map(myToy => <MyToyCard
                    key={myToy._id}
                    myToy={myToy}></MyToyCard>)
            }
        </div>
    );
};

export default MyToy;