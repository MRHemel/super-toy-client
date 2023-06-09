import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCard from '../ToyCard/ToyCard';

const Category = ({ toys }) => {
    const marvel = toys.filter(toy => toy.Category === "Marvel")
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
                <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 3</h2>
            </TabPanel>
        </Tabs>
    );
};

export default Category;