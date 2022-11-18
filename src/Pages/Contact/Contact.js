import React, { useRef } from 'react';
import MyHelmet from '../../components/MyHelmet';
import contact from '../../images/Telecommuting-pana.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_s3bklnu', 'template_xiobz9x', form.current, 'U0g6Ht1DVmnBbENk0')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <MyHelmet>Contact</MyHelmet>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-base items-center">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2 text-center lg:text-left">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                        <div className="text-gray-600">Vivamus in nisl metus? Phasellus.</div>
                    </div>
                    <img src={contact} alt="" className="mt-[-90px] mx-auto" />
                </div>
                <form ref={form} onSubmit={sendEmail} noValidate="" className="space-y-6 ng-untouched ng-pristine ng-valid shadow-2xl p-10 rounded-xl bg-opacity-5 bg-slate-500">
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input name="user_name" id="name" type="text" placeholder="Name" className="w-full p-3 bg-black bg-opacity-5  border border-gray-600 mt-3 rounded-lg" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input name="user_email" placeholder='Email' id="email" type="email" className="w-full p-3 bg-black bg-opacity-5 border border-gray-600 mt-3 rounded-lg" />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea name="message" placeholder='Message' id="message" rows="3" className="w-full p-3 bg-black bg-opacity-5 border border-gray-600 mt-3 rounded-lg"></textarea>
                    </div>
                    <input type="submit" className="w-full p-3 font-bold btn btn-error hover:bg-opacity-60 rounded-lg" value='Send Message'/>
                </form>
            </div>
        </div>
    );
};

export default Contact;