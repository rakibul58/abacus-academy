import React, { useContext } from 'react';
import MyHelmet from '../../components/MyHelmet';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

const AddCourse = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    console.log(imageHostKey);

    const { data: currentUser = [] } = useQuery({
        queryKey: ['currentUser'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://abacus-academy-server-swart.vercel.app/users?email=${user?.email}`);
                const data = res.json();
                return data;
            } catch (error) {

            }
        }
    });



    const handleSubmitCourse = data => {

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const course = {
                        teacher: currentUser.name,
                        email: currentUser.email,
                        image: imgData.data.url,
                        title: data.title,
                        price: data.price,
                        used_for: data.used_for,
                        post_date: new Date().toDateString()
                    };

                    console.log(course);

                    fetch('https://abacus-academy-server-swart.vercel.app/courses', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(course)
                    })
                        .then(res => res.json())
                        .then(result => {
                            toast.success(`${data.title} Added Successfully`);
                            navigate(`/addvideos/${result.insertedId}`);
                        });
                }
            });

    }

    return (
        <div style={{ margin: "20px 0" }} className="p-10">
            <MyHelmet>Add Course</MyHelmet>
            <div className="my-20">
                <div className="flex flex-col items-center lg:flex-row gap-5">
                    <div className="text-center lg:pr-40 mb-5">
                        <img src='https://i.ibb.co/mRm8dXd/7915189-3784896-removebg-preview.png' alt="" />
                    </div>
                    <form onSubmit={handleSubmit(handleSubmitCourse)} className="card w-full lg:w-1/3 shadow-2xl bg-base-100 py-6 border border-white">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold mb-6 text-secondary">Add Course</h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input {...register("title", { required: "course title is required" })} type="text" placeholder="Give a course Title" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input {...register("image", { required: "thumbnail is required" })} type="file" placeholder="Add a thumbnail" className="file-input file-input-bordered file-input-primary" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea {...register("description", { required: "course description is required" })} type="text" placeholder="Give a course Description" className="textarea textarea-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input {...register("price", { required: "price is required" })} type="text" placeholder="Give a course Price" className="input input-bordered" />
                            </div>

                            <input className='btn btn-secondary mt-5 text-white hover:text-opacity-50 font-bold' type="submit" value="Add Course" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCourse;