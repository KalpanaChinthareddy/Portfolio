"use client";
import slu from "@/app/assets/slu.png"
import snist from "@/app/assets/snist.png"
import Image from "next/image";
export default function Education() {
        const education = [
            {
              institution: "Saint Louis University",
              degree: "Master of Science in Computer Science",
              duration: "Jan 2024 - Dec 2025",
              gpa: "GPA: 3.89/4.0",
              image: slu
            },
            {
              institution: "Sreenidhi Institute of Science and Technology",
              degree: "Bachelor of Technology in Computer Science and Engineering",
              duration: "Aug 2019 - Jun 2023",
              gpa: "GPA: 8.63/10.0",
              image: snist
            },
          ];
    
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-10" id="education">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-10">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105 flex items-center "
            >
              
              <Image
                src={edu.image} 
                alt={edu.institution}
                width={100} 
                height={100} 
                className="rounded-full object-cover"
              />
              
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-blue-900 dark:from-blue-500 to-purple-400 dark:to-purple-200">
                  {edu.institution}
                </h3>
                <p className="mt-2 text-lg">{edu.degree}</p>
                <p className="mt-1 text-gray-600 dark:text-gray-300">{edu.duration}</p>
                <p className="mt-1 text-gray-600 dark:text-gray-300 font-semibold">{edu.gpa}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

