import React from 'react';
import Banner from '../Banner';
import { useLoaderData } from 'react-router-dom';
import Gallery from '../Gallery/Gallery';
import Category from '../Category/Category';

const Home = () => {

    const toys = useLoaderData()
    // console.log(toys)

    return (
        <div>
            <Banner></Banner>
            <h1 className='text-5xl font-extrabold text-center mb-5'>Toys Gallery</h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    toys.map(toy => <Gallery
                        key={toy._id}
                        toy={toy}

                    ></Gallery>)
                }
            </div>
            <div>
                <h1 className='text-5xl font-extrabold text-center mb-5 mt-5'>Toys Categorys</h1>
                <Category
                    toys={toys}></Category>
            </div>
        </div>
    );
};

export default Home;