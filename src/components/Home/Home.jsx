import React, { useEffect } from 'react';
import Banner from '../Banner';
import { useLoaderData } from 'react-router-dom';
import Gallery from '../Gallery/Gallery';
import Category from '../Category/Category';

// import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    const toys = useLoaderData()
    // console.log(toys)

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <Banner></Banner>
            <h1 className='text-5xl font-extrabold text-center mb-5' data-aos="slide-up" data-aos-duration="3000">Toys Gallery</h1>
            <div className='grid grid-cols-5 gap-4' data-aos="fade-up" data-aos-duration="3000">
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