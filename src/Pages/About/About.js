import React from 'react';
import MyHelmet from '../../components/MyHelmet';
import MyPhotoViewer from '../../components/MyPhotoViewer';
// import ismail  from '../../../images/ismail.jpeg'
import ismail from '../../images/ismail.jpeg'
import rakib from '../../images/rakib.jpg'

const About = () => {
  return (
    <div className='px-4'>
      <MyHelmet>About</MyHelmet>
      <h1 className=" px-4 py-6 text-3xl font-semibold text-center text-secondary-focus text-bold">
        About Abacus Academy
      </h1 >
      <p className='text-1xl font-semibold text-center py-2'>
        Our objective is to create a skillful nation<br /> and spreading knowledge around. So join us if you also want to be enlightened.
      </p>
      <div className='flex flex-wrap justify-center gap-10 my-10'>
        <div className="card w-96 bg-base-100 shadow-2xl">
          <figure><MyPhotoViewer src={ismail}><img src={ismail} className='mask mask-circle object-cover w-24' alt="Shoes" /></MyPhotoViewer></figure>
          <div className="card-body">
            <h2 className="card-title text-secondary">Mohammad Ismail Emon</h2>
            <p>CEO</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-2xl pt-5">
          <figure><MyPhotoViewer src={rakib}><img src={rakib} className='mask mask-circle object-cover w-24' alt="Shoes" /></MyPhotoViewer></figure>
          <div className="card-body">
            <h2 className="card-title text-secondary">Muhammed Rakibul Hasan</h2>
            <p>CEO</p>
          </div>
        </div>


      </div>


    </div>

  );
};

export default About;