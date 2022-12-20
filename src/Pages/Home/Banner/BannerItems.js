import React from 'react';
import { Link } from 'react-router-dom';
import './BannerItems.css';
const BannerItems = ({slide}) => {
    const {image , id , next , prev} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt='' style={{height: '800px' , width: '100%'}} className="w-full rounded-xl" />
            </div>
            <div className="absolute flex transform -translate-y-1/2 left-10 lg:left-24 top-1/3">
                <h1 className='text-white font-semibold lg:font-bold text-3xl lg:text-5xl'>Affordable<br />
                    Price for all<br />
                    Course</h1>
            </div>
            <div className="absolute flex transform -translate-y-1/2 left-24 top-1/2">
                <p className='text-white font-semibold text-lg hidden lg:flex w-96 mt-5'>There are many courses available, but the majority have enrolled to this as it is the best. Join us and we will help you to achieve your dream.</p>
            </div>
            <div className="absolute flex transform -translate-y-1/2 left-10 lg:left-24 top-1/2 lg:top-2/3 justify-center">
                <Link to='/contact'><button className="btn btn-error hover:bg-transparent hover:text-white mr-2">Contact Us</button></Link>
                <Link to='/about'><button className="btn btn-outline btn-error">About Us</button></Link>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5 bg-black bg-opacity-60">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle bg-error border-none">❯</a>
            </div>
        </div>
    );
};

export default BannerItems;