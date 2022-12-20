import React from 'react';
import teamwork from '../../../images/teamwork-svgrepo-com.svg';
import support from '../../../images/24-hours-support-svgrepo-com.svg';
import mentor from '../../../images/teacher-svgrepo-com.svg';
import quality from '../../../images/quality-svgrepo-com.svg';
import MyPhotoViewer from '../../../components/MyPhotoViewer';

const CoreFeatures = () => {
    return (
        <div className='mt-24'>
            <div>
                <h3 className='text-center text-error font-bold text-xl'>Core Features</h3>
                <h1 className='text-center font-semibold text-3xl m-3'> Why Choose Us</h1>
                <p className='text-center m-5'>We are the best free online Courses provider and we believe in Quality.  <br /> Our Goal is spreading knowledge around.</p>
            </div>

            <div className='flex flex-wrap justify-center gap-10 my-10'>
                <div className='p-12 shadow-2xl rounded-2xl'>
                    <div className='flex justify-center '>
                        <MyPhotoViewer src={teamwork}><img className='h-[100px]' src={teamwork} alt="" /></MyPhotoViewer>
                    </div >
                    <h4 className='font-medium text-2xl mt-4'>Expert Teams</h4>
                </div>

                <div className='p-12 shadow-2xl rounded-2xl'>
                    <div className='flex justify-center '>
                        <MyPhotoViewer src={support}><img className='h-[100px]' src={support} alt="" /></MyPhotoViewer>
                    </div >
                    <h4 className='font-medium text-2xl mt-4'>24/7 Support</h4>
                </div>

                <div className='p-12 shadow-2xl rounded-2xl'>
                    <div className='flex justify-center '>
                        <MyPhotoViewer src={mentor}><img className='h-[100px]' src={mentor} alt="" /></MyPhotoViewer>
                    </div >
                    <h4 className='font-medium text-2xl mt-4'>Skillfull Mentors</h4>
                </div>

                <div className='p-12 shadow-2xl rounded-2xl'>
                    <div className='flex justify-center '>
                        <MyPhotoViewer src={quality}><img className='h-[100px]' src={quality} alt="" /></MyPhotoViewer>
                    </div >
                    <h4 className='font-medium text-2xl mt-4'>Believe in Quality</h4>
                </div>

            </div>
        </div>
    );
};

export default CoreFeatures;