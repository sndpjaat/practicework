"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Email = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_g9py85y', 'template_5k8534i', form.current, {
                publicKey: '0hRB6tWQxCnMAqHfV',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <form ref={form} onSubmit={sendEmail}>

            <div className='bg-blue-950'>
                <div className='flex items-center flex-col justify-center h-screen gap-4'>
                    <label className=" border-transparent bg-black text-white px-2 py-1 text-4xl rounded transition duration-300 border-[2px] hover:border-blue-500 hover:bg-red-800">Name</label>
                    <input type="text" name="user_name" className="border border-yellow-500 bg-gray-100 text-3xl px-3 py-2 rounded transition duration-300 focus:border-blue-500 focus:bg-white" placeholder="Enter your name" />
                    <label className='border-transparent bg-black text-white px-2 py-1 text-4xl rounded transition duration-300 border-[2px] hover:border-blue-500 hover:bg-red-800'>Email</label>
                    <input className='border border-yellow-500 bg-gray-100 text-3xl px-3 py-2 rounded transition duration-300 focus:border-blue-500 focus:bg-white' type="email" name="user_email" />
                    <label className='border-transparent bg-black text-white px-2 py-1 text-4xl  rounded transition duration-300 border-[2px] hover:border-blue-500 hover:bg-red-800'>Message</label>
                    <textarea className='border border-yellow-500 bg-gray-100 text-3xl px-3 py-2 rounded transition duration-300 focus:border-blue-500 focus:bg-white' name="message" />
                    <input className='border-transparent bg-black text-white px-2 py-1 text-4xl  rounded transition duration-300 border-[2px] hover:border-blue-500 hover:bg-red-800' type="submit" value="Send" />
                </div>
            </div>


        </form>
    );
};
export default Email