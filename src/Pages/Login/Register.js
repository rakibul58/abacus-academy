import React from 'react';
import { Link } from 'react-router-dom';
import MyHelmet from '../../components/MyHelmet';
import img from '../../images/rsz_signin.png';

const Register = () => {
    return (
        <div className='px-3 md:px-10'>
            <MyHelmet>Register</MyHelmet>
            <div className="my-20">
                <div className="flex flex-col lg:flex-row items-center gap-5">
                    <div className="text-center lg:pr-40 mb-5">
                        <img src={img} alt="" />
                    </div>
                    <form onSubmit={"handleSubmit"} className="card h-1/2 py-8 w-full lg:w-2/3 shadow-2xl bg-base-100 border border-white">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold mb-6 text-secondary">Register now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Role</span>
                                </label>
                                <select placeholder='Select Your Role' name='role' className="select select-bordered w-full">
                                    <option value='student'>Student</option>
                                    <option value='teacher'>Teacher</option>
                                </select>
                            </div>
                            <div className="form-control mt-3">
                                <p>Already Have an Account? <strong><Link className='text-secondary' to='/login'>Login</Link></strong></p>
                            </div>
                            <input className='btn btn-secondary mt-5 text-white hover:text-opacity-50 font-bold' type="submit" value="Register" />
                            {
                                "error" && <p className='text-error text-sm'>{"error"}</p>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;