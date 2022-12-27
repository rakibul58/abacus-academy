import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import MyHelmet from '../../components/MyHelmet';
import { useParams } from 'react-router-dom';

const AddedVideos = () => {
    // const [addedCourses, setAddedCourses] = useState([]);
    const { user } = useContext(AuthContext);
    const {id} = useParams()

    const { data: course = {} } = useQuery({
        queryKey: ['course'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/courses/${id}`);
                const data = res.json();
                return data;
            } catch (error) {

            }
        }
    });

    const { data: videos = [], refetch } = useQuery({
        queryKey: ['videos'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/videos/${id}`);
                const data = res.json();
                return data;
            } catch (error) {

            }
        }
    });



    const handleDelete = id => {

        fetch(`http://localhost:5000/videos/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Video Removed Successfully");
                refetch();
            })

    }

    return (
        <div className='my-20'>
            <MyHelmet>My </MyHelmet>
            <div className='text-center'>
                <h4 className='font-bold text-2xl text-primary'>Videos</h4>
                <h1 className='text-4xl'>This are the Videos of <span className='text-warning font-bold'>{course.title}</span></h1>
            </div>
            {
                !videos.length === 0 ?
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
                                        <th>Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        videos?.map((video, i) => <tr key={video._id}>
                                            <td>
                                                {i + 1}
                                            </td>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div>
                                                        <div className="font-bold">{video.title}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{video.post_date}</td>
                                            <th>
                                                <button onClick={() => handleDelete(video._id)} className="btn btn-error hover:bg-opacity-70 btn-xs">Delete</button>
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

export default AddedVideos;