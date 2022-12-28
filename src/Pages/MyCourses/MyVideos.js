import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Info from '../Home/Info/Info';

const MyVideos = () => {
    const { id } = useParams();
    const [videos, setVideos] = useState([]);
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch(`https://abacus-academy-server-swart.vercel.app/videos/${id}`)
            .then(res => res.json())
            .then(data => setVideos(data));
    }, [id]);
    useEffect(() => {
        fetch(`https://abacus-academy-server-swart.vercel.app/courses/${id}`)
            .then(res => res.json())
            .then(data => setCourse(data));
    }, [id]);
    return (
        <div className='my-20'>
            <div className='text-center'>
                <h4 className='text-2xl font-extrabold text-primary'>Videos</h4>
                <h1 className='text-4xl font-semibold'>These are the videos <span className='text-secondary'>{course.title}</span> by <span className='text-info'>{course.teacher}</span></h1>
                {videos.length===0 && <p className='mt-12 text-4xl text-info'>Videos Coming Soon</p>}
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    videos.map(video => <iframe height={"350px"} className='w-full' key={video._id} src={video.video} title={video.title} allow="fullscreen;"/>)
                }
            </div>
        </div>
    );
};

export default MyVideos;