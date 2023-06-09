import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCard from '../ToyCard/ToyCard';

const Category = ({ toys }) => {
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
                <div className='grid grid-cols-3 gap-5'>
                    {
                        marvel.map(toy => <ToyCard
                            key={toy._id}
                            toy={toy}></ToyCard>)
                    }
                </div>

            </TabPanel>
            <TabPanel>
                <div className='grid grid-cols-3 gap-5'>
                    {
                        dc.map(toy => <ToyCard
                            key={toy._id}
                            toy={toy}></ToyCard>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid grid-cols-3 gap-5'>
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