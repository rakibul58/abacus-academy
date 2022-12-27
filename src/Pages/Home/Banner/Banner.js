import React from 'react';
import img1 from '../../../images/1.jpg';
import img2 from '../../../images/2.jpg';
import img3 from '../../../images/3.jpg';
import img5 from '../../../images/5.jpg';
import BannerItems from './BannerItems';
import MyHelmet from '../../../components/MyHelmet';

const Banner = () => {
    const bannerData = [
        {
            image: img1,
            prev: 6,
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: img5,
            prev: 3,
            id: 4,
            next: 1
        },
        
    ]
    return (
        <div className="carousel w-full py-10">
            <MyHelmet>Home</MyHelmet>
            {
                bannerData.map(slide => <BannerItems
                key={slide.id} 
                slide={slide}
                >

                </BannerItems>)
            }
        </div>
    );
};

export default Banner;