import React from 'react';
// import ismail  from '../../../images/ismail.jpeg'
import ismail from '../../images/ismail.jpeg'
import rakib from '../../images/rakib.jpg'

const About = () => {
    return (
        <div className="border bg-success">
        <div className=" px-4 py-6 bg-primary-focus text-white text-3xl font-semibold text-center">About
Abacus Academy


</div >
<p  className='bg-primary-focus text-white text-1xl font-semibold text-center py-2'>Our objective is to create Skillful Nation.  <br /> and spreading education around.  So welcome if you also want to be skilled.</p>


<div className='flex justify-center gap-x-10 m-5'>

<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={ismail}className='mask mask-circle object-cover w-24' alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Mohammad Ismail Emon</h2>
    <p>CEO</p>
    <div className="card-actions justify-end">
   
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100 shadow-xl">
<figure><img src={rakib} className='mask mask-circle object-cover w-24' alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Muhammed Rakibul Hasan</h2>
    <p>Mentor</p>
    <div className="card-actions justify-end">
   
    </div>
  </div>
</div>

</div>


   </div>
       
    );
};

export default About;