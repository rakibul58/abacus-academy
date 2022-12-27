import React, { useEffect } from 'react';
import MyHelmet from '../../../components/MyHelmet';
import Banner from '../Banner/Banner';
import CoreFeatures from '../CoreFeatures/CoreFeatures';
import Info from '../Info/Info';
import Contact from '../../Contact/Contact';
import About from '../../About/About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AllCourses from '../AllCourses/AllCourses';

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            

            <div data-aos="fade-right">
                <Banner></Banner>
            </div>
            <div data-aos="fade-left" style={{margin:"150px 0"}}>
                <AllCourses></AllCourses>
            </div>
            <div data-aos="fade-right">
                <CoreFeatures></CoreFeatures>
            </div>
            <div data-aos="fade-left">
                <Info></Info>
            </div>
            <div data-aos="fade-right">
                <Contact></Contact>
            </div>
            <div data-aos="fade-left">
                <About></About>
            </div>
            <MyHelmet>Home</MyHelmet>
        </div>
    );
};

export default Home;