import React from 'react';
import Banner from '../Banner';
import { useLoaderData } from 'react-router-dom';
import Gallery from '../Gallery/Gallery';

const Home = () => {

    const toys = useLoaderData()
    // console.log(toys)

    return (
        <div>
            <Banner></Banner>
            {
                toys.map(toy => <Gallery
                    key={toy._id}
                    toy={toy}

                ></Gallery>)
            }
        </div>
    );
};

export default Home;