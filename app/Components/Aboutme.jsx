"use client";
import profilepic from "@/app/assets/kalpana.png";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin,FaGithub } from 'react-icons/fa';
import { SiGmail,SiLeetcode } from "react-icons/si";

export default function AboutMe(){
    return(
    <div className="flex bg-white dark:bg-black text-black dark:text-white py-5 flex-col md:flex-row items-center justify-center" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-10 basis-1/2">
        <img src={profilepic.src} className="mx-auto mb-5 w-52 h-52 rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform"/>
        <h1 className="text-2xl font-bold text-center "><Typewriter
        words={["Hi, There!", "I'm Kalpana Chinthareddy"]}
        loop={false}
        cursor
        cursorStyle="|"
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={1100}
        /></h1>
        <h1 className="mt-4 text-xl font-sans text-center mb-8">Actively Seeking <b>Software Engineering</b> Internships and Full-Time Roles</h1>
               
        <div className="flex justify-center space-x-6 mt-4 mb-8 text-3xl">
          <a href="https://www.linkedin.com/in/kalpana-chinthareddy" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-600 hover:text-blue-800 transition" />
          </a>
          <a href="https://github.com/KalpanaChinthareddy" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-800 dark:text-white dark:hover:text-gray-300 hover:text-gray-600 transition" />
          </a>
          <a href="mailto:kalpanareddy331@gmail.com">
            <SiGmail className="text-red-600 hover:text-red-800 transition" />
          </a>
          <a href="https://leetcode.com/kalpanareddy33/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="text-orange-500 hover:text-orange-700 transition" />
          </a>
        </div>
        <div className="flex justify-center mt-4">
          <a
          href="./KalpanaChinthareddy_SE.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-transparent  
                bg-gradient-to-r from-blue-900 to-purple-400 text-white font-bold py-2 px-6 rounded-3xl shadow-lg hover:bg-blue-700 transition duration-300"
        >
          View Resume
        </a>
      </div>
      </div>
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-10">
            <h2 className="text-2xl font-bold text-center mb-12">About Me!</h2>
            <p className="text-justify mb-8">I am currently pursuing a Master of Science in Computer Science at Saint Louis University with a GPA of 3.89/4.0. I have over a year of experience as an Apprentice and Intern at Informatica Business Solutions, where I worked on automation testing, software development, and CI/CD pipelines using Jenkins, Selenium, and Shell Scripting.</p>
            <p className="text-justify mb-8">My technical expertise includes Python, Java, C++, SQL, React.js, Next.js, Node.js, and AWS. I have a strong problem-solving background, having solved 300+ coding challenges on LeetCode, CodeChef, and HackerRank.
              I have earned certifications, including AWS Cloud Virtual Internship(AICTE), Python (HackerRank), and Data Structures & Algorithms (Smart Interviews) enhancing my expertise in cloud computing, algorithms, and programming.
            </p>
            <p className="text-justify">I am actively seeking internship and full-time opportunities to apply my skills, contribute to innovative projects, and grow in a dynamic environment.</p>
      </div>
      
    </div>
    )
}
