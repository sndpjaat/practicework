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
     <div className='flex items-center justify-center h-screen  gap-5'>
     <label className=''>Name</label>
      <input type="text" name="user_name" /> 
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
     </div>
    </form>
  );
};
export default Email