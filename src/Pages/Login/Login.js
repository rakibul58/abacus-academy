import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MyHelmet from '../../components/MyHelmet';
import img from '../../images/rsz_signin.png';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {

    const { logIn } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                setError("");
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => setError(error.message));
    }

    return (
        <div className='px-3 md:px-10 mb-36'>
            <MyHelmet>Login</MyHelmet>
            <div className="mt-20">
                <div className="flex flex-col items-center lg:flex-row gap-5">
                    <div className="text-center lg:pr-40 mb-5">
                        <img src={img} alt="" />
                    </div>
                    <form onSubmit={handleSubmit} className="card w-full lg:w-2/3 shadow-2xl bg-base-100 py-6 border border-white">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold mb-6 text-secondary">Login now!</h1>
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
                            <div className="form-control mt-3">
                                <p>Do not Have an Account? <strong><Link className='text-secondary' to='/register'>Register</Link></strong></p>
                                {
                                    error && <p className='text-error text-sm mt-3'>{error}</p>
                                }
                            </div>
                            <input className='btn btn-secondary mt-5 text-white hover:text-opacity-50 font-bold' type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;