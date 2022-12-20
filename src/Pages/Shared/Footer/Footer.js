import React from 'react';
import { Link } from 'react-router-dom';
import img  from '../../../images/img2.png';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content" data-theme='dark'>
            <div>
                <img alt='' src={img} width="100" height="50" viewBox="0 0 24 24" xmlns="images/abacus.png" fillRule="evenodd" clipRule="evenodd" className="fill-current"/>
                <p>Abacus Academy<br />Providing Good Quality Education</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <Link className="link link-hover">Teaching </Link>
                <Link className="link link-hover">Advice </Link>
                <Link className="link link-hover">Success</Link>
               
            </div>
            <div>
                <span className="footer-title">Important Links</span>
                <Link to='/' className="link link-hover">Home</Link>
                <Link to='/about' className="link link-hover">About us</Link>
                <Link to='/contact' className="link link-hover">Contact</Link>
                <Link to='/login' className="link link-hover">Login</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;