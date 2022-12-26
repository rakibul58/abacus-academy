import React, { useEffect } from 'react';
import MyHelmet from '../../../components/MyHelmet';
import Banner from '../Banner/Banner';
import CoreFeatures from '../CoreFeatures/CoreFeatures';
import Info from '../Info/Info';
import Contact from '../../Contact/Contact';
import About from '../../About/About';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <MyHelmet>Home</MyHelmet>
            <div data-aos="fade-right">
                <Banner></Banner>
            </div>
            <div data-aos="fade-left">
                <CoreFeatures></CoreFeatures>
            </div>
            <div data-aos="fade-right">
                <Info></Info>
            </div>
            <div data-aos="fade-left">
                <Contact></Contact>
            </div>
            <div data-aos="fade-right">
                <About></About>
            </div>
        </div>
    );
};

export default Home;