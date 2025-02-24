"use client";
import { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaLinkedin } from 'react-icons/fa';

export default function Contactme() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("email", form.email);
        formData.append("message", form.message);
        formData.append("_subject", "New Contact Form Submission");
        formData.append("_captcha", "false"); // Disables captcha if using FormSubmit

        try {
            const res = await fetch("https://formsubmit.co/kalpanareddy331@gmail.com", {
                method: "POST",
                body: formData,
            });

            if (res.ok) {
                setStatus("Message Sent Successfully!");
                setForm({ name: "", email: "", message: "" });
            } else {
                setStatus("Failed to send. Try again!");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setStatus("Failed to send. Try again later.");
        }
    };

    return (
        <div className="bg-white dark:bg-black text-black dark:text-white py-10 md:py-10" id="contact">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Contact Me</h2>
            <div className="flex flex-col md:flex-row md:space-x-12">
              <div className="flex-1 mb-8 md:mb-0">
                <h3 className='text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 dark:from-blue-500 to-purple-400 dark:to-purple-200 mb-4'>Let's Connect</h3>
                <p className="text-base md:text-lg"> I’m actively seeking <b>Software Engineering Internships</b> and <b>Full-Time Roles</b>.  
                If you're hiring or have an opportunity, let’s connect! 🚀</p>
                <div className='mb-4 mt-8'>
                    <FaEnvelope className='inline-block text-blue-700 dark:text:blue-400 mr-2' />
                    <a href="mailto:kalpanareddy331@gmail.com" className='hover:underline text-blue-700 dark:text-blue-400'>
                    kalpanareddy331@gmail.com
                    </a>
                </div>
                <div className='mb-4'>
                    <FaPhone className='inline-block text-blue-700 dark:text-blue-400 mr-2' />
                    <span>+1 (314)-745-7915</span>
                </div>
                <div className='mb-4'>
                    <FaMapMarkedAlt className='inline-block text-blue-700 dark:text-blue-400 mr-2' />
                    <span>St Louis, Missouri, US</span>
                </div>
              </div>
              
              <div className='flex-1'>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                        <label htmlFor="name" className='block mb-2'>Your Name</label>
                        <input 
                          type="text" 
                          name="name"
                          value={form.name} 
                          onChange={handleChange}
                          className='w-full p-2 rounded bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-green-400'
                          placeholder='Enter Your Name'
                          required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className='block mb-2'>Email</label>
                        <input 
                          type="email" 
                          name="email"
                          value={form.email} 
                          onChange={handleChange}
                          className='w-full p-2 rounded bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-green-400'
                          placeholder='Enter Your Email'
                          required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className='block mb-2'>Message</label>
                        <textarea 
                          name="message"
                          value={form.message} 
                          onChange={handleChange}
                          className='w-full p-2 rounded bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-green-400'
                          rows="5"
                          placeholder='Enter Your Message'
                          required
                        />
                    </div>
                    <button type="submit" className='bg-gradient-to-r from-blue-900 dark:from-blue-500 to-purple-400 dark:to-purple-200 text-white px-8 py-2 rounded-full transform transition-transform duration-300 hover:scale-105'>
                        Send Message
                    </button>
                </form>
                {status && <p className="mt-4 text-center text-lg font-semibold">{status}</p>}
              </div>
            </div>
          </div>
        </div>
      );
}
