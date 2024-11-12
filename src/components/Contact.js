import React, { useRef, useState } from 'react';
// Motion library for animations
import { motion } from 'framer-motion';
// Animation variants
import { fadeIn } from '../variants';
// EmailJS library for handling emails
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState(''); // Message text
  const [showNotification, setShowNotification] = useState(false); // Notification visibility

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_z8f357r', 'template_jzgup7w', form.current, 'PQfNxHi6GUaJMivdm')
      .then(
        (result) => {
          console.log(result.text);
          setMessageStatus('Message sent successfully!');
          setShowNotification(true);
          form.current.reset(); // Clear the form
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMessageStatus('Failed to send message. Please try again.');
          setShowNotification(true);
        }
      );
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* Text */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'>
            <div>
              <h3 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h3>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* Form */}
          <motion.form 
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            ref={form} 
            onSubmit={sendEmail}
            className='flex-1 border rounded-2xl flex flex-col gap-y-5 pb-24 p-6 items-start'>
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
              type='text' 
              placeholder='Your name'
              name='user_name' 
              required
            />
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
              type='email' 
              placeholder='Your email' 
              name='user_email'
              required
            />
            <textarea 
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              placeholder='Your message'
              name='message'
              required
            ></textarea>
            <button 
              type='submit'
              className='btn btn-lg'>Send message</button>
          </motion.form>
        </div>
        
        {/* Notification Modal */}
        {showNotification && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center w-1/2 lg:w-1/4">
              <p className={messageStatus.includes('successfully') ? 'text-green-500' : 'text-red-500'}>
                {messageStatus}
              </p>
              <button
                onClick={() => setShowNotification(false)}
                className="mt-4 px-4 py-2 bg-accent text-white rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
