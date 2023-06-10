import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCard from '../ToyCard/ToyCard';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Category = ({ toys }) => {

    useEffect(() => {
        AOS.init();
    }, []);

    const marvel = toys.filter(toy => toy.Category === "Marvel")
    const dc = toys.filter(toy => toy.Category === "DC")
    const transformers = toys.filter(toy => toy.Category === "Transformers")
    // console.log(marvel)

    return (
        <Tabs>
            <TabList className={"text-2xl font-extrabold flex justify-around"}>
                <Tab>Marvel</Tab>
                <Tab>DC</Tab>
                <Tab>Tranformer</Tab>
            </TabList>

            <TabPanel>
                <div className='grid lg:grid-cols-3 gap-5 sm:grid-cols-1 md:grid-cols-2' data-aos="fade-up-right" data-aos-duration="3000">
                    {
                        marvel.map(toy => <ToyCard
                            key={toy._id}
                            toy={toy}></ToyCard>)
                    }
                </div>

            </TabPanel>
            <TabPanel>
                <div className='grid lg:grid-cols-3 gap-5 sm:grid-cols-1 md:grid-cols-2' data-aos="flip-up" data-aos-duration="3000">
                    {
                        dc.map(toy => <ToyCard
                            key={toy._id}
                            toy={toy}></ToyCard>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid lg:grid-cols-3 gap-5 sm:grid-cols-1 md:grid-cols-2' data-aos="fade-up-left" data-aos-duration="3000">
                    {
                        transformers.map(toy => <ToyCard
                            key={toy._id}
                            toy={toy}></ToyCard>)
                    }
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default Category;