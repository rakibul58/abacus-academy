import React from 'react';
import { Link } from 'react-router-dom';

const MyCourseCard = ({course}) => {
    return (
        <div className="card card-compact bg-base-100 shadow-2xl pb-3">
            <figure><img style={{ height: "300px", width: "100%" }} src={course.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{course.title}</h2>
                <p className='text-secondary font-semibold text-lg'>By {course.teacher}</p>
                <div className="card-actions justify-end">
                    <Link to={`videos/${course._id}`} className="btn btn-secondary btn-outline btn-sm">Go to Videos</Link>
                </div>
            </div>
        </div>
    );
};

export default MyCourseCard;