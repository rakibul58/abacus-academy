import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { useEffect } from 'react';
import MyHelmet from '../../components/MyHelmet';
import MyCourseCard from './MyCourseCard';

const MyCourse = () => {
    const { user } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch(`https://abacus-academy-server-swart.vercel.app/enroll?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [user]);

    return (
        <div className='my-20'>
            <MyHelmet>My Courses</MyHelmet>
            <div className='text-center'>
                <h4 className='font-extrabold text-primary text-2xl'>Courses</h4>
                <h1 className='text-4xl font-semibold'>These are your enrolled courses</h1>
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10'>
                {
                    courses.map(course => <MyCourseCard
                        key={course._id}
                        course={course.course}
                    ></MyCourseCard>)
                }
            </div>
        </div>
    );
};

export default MyCourse;