import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import MyHelmet from '../../components/MyHelmet';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const AddedCourses = () => {
    // const [addedCourses, setAddedCourses] = useState([]);
    const { user } = useContext(AuthContext);

    const { data: addedCourses = [], refetch } = useQuery({
        queryKey: ['addedCourses'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/courses?email=${user?.email}`);
                const data = res.json();
                return data;
            } catch (error) {

            }
        }
    });



    const handleDelete = id => {

        fetch(`http://localhost:5000/courses/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Course Removed Successfully");
                refetch();
            })

    }

    return (
        <div className='my-20'>
            <MyHelmet>My Courses</MyHelmet>
            <div className='text-center'>
                <h4 className='font-bold text-2xl text-primary'>Courses</h4>
                <h1 className='text-5xl'>This are the courses create by you</h1>
            </div>
            {
                !addedCourses.length === 0 ?
                    <div className='mt-12'>
                        <p className='text-center font-bold text-4xl text-error'>You Don't have any courses</p>
                    </div> :
                    <div className='mt-12'>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        addedCourses.map((course, i) => <tr key={course._id}>
                                            <td>
                                                {i + 1}
                                            </td>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={course.image} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{course.title}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                ${course.price}
                                            </td>
                                            <td>{course.post_date}</td>
                                            <th>
                                                <Link to={`/addvideos/${course._id}`} className="btn btn-success text-white hover:bg-opacity-70 btn-xs mr-2">Add Video</Link>
                                                <Link to={`/addedvideos/${course._id}`} className="btn btn-warning text-white hover:bg-opacity-70 btn-xs mr-2">Details</Link>
                                                <button onClick={() => handleDelete(course._id)} className="btn btn-error hover:bg-opacity-70 btn-xs">Delete</button>
                                            </th>
                                        </tr>)
                                    }

                                </tbody>

                            </table>
                        </div>
                    </div>
            }
        </div>
    );
};

export default AddedCourses;