import React from 'react';
import MyHelmet from '../../components/MyHelmet';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useState } from 'react';

const AddVideos = () => {


    const { id } = useParams();
    const { register, handleSubmit, reset } = useForm();
    const [course, setCourse] = useState({});

    useEffect(() => {
        fetch(`https://abacus-academy-server-swart.vercel.app/courses/${id}`)
            .then(res => res.json())
            .then(data => setCourse(data));
    }, [id]);

    const handleSubmitVideo = data => {


        const video = {
            course_id: id,
            title: data.title,
            video: data.video,
            used_for: data.used_for,
            post_date: new Date().toDateString()
        };

        // console.log(video);

        fetch('https://abacus-academy-server-swart.vercel.app/videos', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(video)
        })
            .then(res => res.json())
            .then(result => {
                toast.success(`${data.title} Added Successfully`);
                reset();
            });


    }

    return (
        <div>
            <div style={{ margin: "20px 0" }} className="p-10">
                <MyHelmet>Add Videos</MyHelmet>
                <div className="my-20">
                    <div className="flex flex-col items-center lg:flex-row gap-5">

                        <div className="text-center lg:pr-40 mb-5">
                            <h1 className='text-5xl font-bold text-left text-primary'>{course.title}<span className='text-2xl text-info'>{" "} by {course.teacher}</span></h1>
                            <img src='https://i.ibb.co/7CzC8gx/12079894-4905784-removebg-preview.png' alt="" />
                        </div>
                        <form onSubmit={handleSubmit(handleSubmitVideo)} className="card w-full lg:w-1/3 shadow-2xl bg-base-100 py-6 border border-white">
                            <div className="card-body">
                                <h1 className="text-3xl font-bold mb-6 text-secondary">Add Video</h1>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>
                                    <input {...register("title", { required: "course title is required" })} type="text" placeholder="Give a course Title" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Video Link</span>
                                    </label>
                                    <input {...register("video", { required: "Link is require is required" })} type="text" placeholder="Give a Video Link" className="input input-bordered" />
                                </div>

                                <input className='btn btn-secondary mt-5 text-white hover:text-opacity-50 font-bold' type="submit" value="Add Video" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddVideos;