import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CourseCard from './CourseCard';

const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/allcourses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    return (
        <div className='w-full'>
            <div className='text-center'>
                <h4 className='font-bold text-2xl text-error'>Courses</h4>
                <h1 className='text-4xl text-semibold'>These are all of our available courses</h1>
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10'>
                {!showAll ? courses.slice(0, 6).map(course => <CourseCard
                    key={course._id}
                    course={course}
                ></CourseCard>)
                    : courses.map(course => <CourseCard
                        key={course._id}
                        course={course}
                    ></CourseCard>)
                }

            </div>
            <div className='w-28 mx-auto mt-12'>
                <button className='btn btn-error btn-outline' onClick={() => setShowAll(!showAll)}>{!showAll ? "Show all" : "Show less"}</button>
            </div>
        </div>
    );
};

export default AllCourses;