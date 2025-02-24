"use client";
import infa from "@/app/assets/informatica_logo.png"

export default function Experience() {
    const experience = [
        {
            company: "Informatica",
            role: "Apprentice/Intern",
            duration: "Aug 2022 - Nov 2023",
            location: "Bangalore, Karnataka, India",
            description: ["Developed and maintained automated UI and API tests using Selenium with Python and Java, reducing manual testing efforts approximately by 30%.",
            "Utilized Perforce to upload and manage test cases, streamlining version control and collaboration within the team.",
            " Integrated automated tests into a Jenkins CI/CD pipeline in collaboration with DevOps teams, using shell scripting to automate deployment processes, cutting deployment time by 50% and reducing production errors by 15%.",
            "Participated in microservices-based development, debugging, and automation testing for Data Integration and Infacore products.",
            " Worked in Agile environments, actively participating in daily stand-ups, sprint planning, and project reviews to align testing efforts with development goals."
            ],
            image: infa
        },
        
    ];
    
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-10" id="experience">
    <div className="container mx-auto px-8 md:px-16 lg:px-24 py-10">
      <h2 className="text-4xl font-bold text-center mb-12">My Experience</h2>
      <div className="">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transform 
            transition-transform duration-300 hover:scale-105 flex space-x-6"
          >
            <img
              src={exp.image.src}
              alt={exp.company}
              className="w-16 h-16 object-cover rounded-full"
            />
            <div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-orange-600 dark:from-orange-500 to-blue-300 dark:to-blue-300">
                {exp.company}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">{exp.role}</p>
              <p className="text-gray-600 dark:text-gray-400">{exp.duration}</p>
              <p className="text-gray-600 dark:text-gray-400">{exp.location}</p>
              <ul className="mt-4 list-disc list-inside text-gray-900 dark:text-gray-100 text-justify">
                {exp.description.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

