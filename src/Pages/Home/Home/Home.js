import React from 'react';
import MyHelmet from '../../../components/MyHelmet';
import Banner from '../Banner/Banner';
import CoreFeatures from '../CoreFeatures/CoreFeatures';
import Info from '../Info/Info';

const Home = () => {
    return (
        <div>
            <MyHelmet>Home</MyHelmet>
            <Banner></Banner>
            <CoreFeatures></CoreFeatures>
            <Info></Info>
        </div>
    );
};

export default Home;