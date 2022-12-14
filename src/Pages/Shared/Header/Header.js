import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTeacher from '../../../Hooks/useTeacher';
import useStudent from '../../../Hooks/useStudent';

const Header = () => {
    const [theme, setTheme] = useState('cmyk');
    const { user, logOut } = useContext(AuthContext);
    console.log(user?.email);
    const [isTeacher] = useTeacher(user?.email);
    const [isStudent] = useStudent(user?.email);
    const handleTheme = () => {
        theme === 'cmyk' ? setTheme('night') : setTheme('cmyk');
    }

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    const handleLogout = () => {
        logOut()
            .then(result => {
            })
            .catch(error => console.error(error));
    }
    console.log(isTeacher, isStudent);

    const navItems = <>
        <li><NavLink className={({ isActive }) => (isActive ? 'text-secondary' : '')} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? 'text-secondary' : '')} to='/contact'>Contact</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? 'text-secondary' : '')} to='/about'>About</NavLink></li>
        {
            (user && isStudent) &&
            <>
                <li><NavLink className={({ isActive }) => (isActive ? 'text-secondary' : '')} to='/mycourses'>My Courses</NavLink></li>
            </>
        }
        {
            (user && isTeacher) &&
            <>
                <li><NavLink className={({ isActive }) => (isActive ? 'text-secondary' : '')} to='/addcourse'>Add Course</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? 'text-secondary' : '')} to='/addedcourse'>My Courses</NavLink></li>
            </>
        }
        {
            user ? <><li><button onClick={handleLogout} className='btn btn-secondary btn-outline rounded-3xl text-center' to='/login'>Logout</button></li></> : <>
                <li><NavLink className={({ isActive }) => (isActive ? 'text-secondary' : '')} to='/login'>Login</NavLink></li>
            </>
        }
    </>

    return (
        <div>
            <div className="navbar bg-base-100 pt-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                            {navItems}
                        </ul>
                    </div>
                    <img className='h-10 w-15 rounded-lg' src={logo} alt="" />
                    <Link to='/' className="btn btn-ghost normal-case text-xl hidden sm:flex">Abacus Academy</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 font-semibold">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <span className='mr-2 text-lg font-semibold text-secondary'>{theme === 'cmyk' ? 'Light' : 'Dark'}</span>
                    <input type="checkbox" className="toggle toggle-md" onClick={handleTheme} />
                </div>
            </div>
        </div>
    );
};

export default Header;