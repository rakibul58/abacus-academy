import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import useStudent from '../../../Hooks/useStudent';
import { toast } from 'react-hot-toast';

const CourseCard = ({ course }) => {
    const { user } = useContext(AuthContext);
    const [isStudent] = useStudent(user?.email);

    const handleOnClick = id => {
        fetch('https://abacus-academy-server-swart.vercel.app/enroll', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: user?.email, id , course })
        })
            .then(res => res.json())
            .then(result => {
                if(result?.available){
                    toast("Your are already enrolled");
                }
                else{
                    toast.success("Enrolled Successfully");
                }
            });
    }

    return (
        <div className="card card-compact bg-base-100 shadow-2xl pb-3">
            <figure><img style={{ height: "300px", width: "100%" }} src={course.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{course.title}</h2>
                <p className='text-secondary font-semibold text-lg'>By {course.teacher}</p>
                <p className='text-warning text-2xl font-bold'>Price: ${course.price}</p>

                {
                    (user && isStudent) &&
                    <div className="card-actions justify-end">
                        <button onClick={() => handleOnClick(course._id)} className="btn btn-secondary btn-outline btn-sm">Enroll Now</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default CourseCard;