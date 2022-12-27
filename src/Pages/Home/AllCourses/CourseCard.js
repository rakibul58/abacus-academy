import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import useStudent from '../../../Hooks/useStudent';

const CourseCard = ({ course }) => {
    const { user } = useContext(AuthContext);
    const [isStudent] = useStudent(user?.email);
    return (
        <div className="card card-compact bg-base-100 shadow-2xl pb-3">
            <figure><img style={{ height: "300px", width: "100%" }} src={course.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{course.title}</h2>
                <p className='text-secondary font-semibold text-lg'>By {course.teacher}</p>
                <p className='text-warning text-2xl font-bold'>Price: ${course.price}</p>

                {
                    (user && !isStudent) &&
                    <div className="card-actions justify-end">
                        <button className="btn btn-secondary btn-outline btn-sm">Enroll Now</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default CourseCard;