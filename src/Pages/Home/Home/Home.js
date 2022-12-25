import React from 'react';
import MyHelmet from '../../../components/MyHelmet';
import Banner from '../Banner/Banner';
import CoreFeatures from '../CoreFeatures/CoreFeatures';
import Info from '../Info/Info';
import Contact from '../../Contact/Contact';
import About from '../../About/About';

const Home = () => {
    return (
        <div>
            <MyHelmet>Home</MyHelmet>
            <Banner></Banner>
            <CoreFeatures></CoreFeatures>
            <Info></Info>
            <div>
                <Contact></Contact>
            </div>
            <div>
                <About></About>
            </div>
        </div>
    );
};

export default Home;