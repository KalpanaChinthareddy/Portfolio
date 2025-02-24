"use client";
import { FaPython, FaJava, FaDatabase, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJenkins, FaFlask } from "react-icons/fa";
import { SiMysql, SiMongodb, SiNextdotjs, SiJavascript, SiSelenium, SiTestinglibrary } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBinaryTree } from "react-icons/tb";

export default function Skills(){
    const skills = [
        { id: 1, name: "Python", proficiency: 90, icon: <FaPython /> },
        { id: 2, name: "Java", proficiency: 80, icon: <FaJava /> },
        { id: 3, name: "SQL", proficiency: 85, icon: <FaDatabase /> },
        { id: 4, name: "Data Structures", proficiency: 85, icon: <TbBinaryTree /> },
        { id: 5, name: "Algorithms", proficiency: 80, icon: <TbBinaryTree /> },
        { id: 6, name: "Javascript", proficiency: 80, icon: <SiJavascript /> },
        { id: 7, name: "HTML/CSS", proficiency: 85, icon: [<FaHtml5 />,<FaCss3Alt/>] },
        { id: 8, name: "MySQL", proficiency: 80, icon: <SiMysql /> },
        { id: 9, name: "React", proficiency: 80, icon: <FaReact /> },
        { id: 10, name: "Flask", proficiency: 70, icon: <FaFlask /> },
        { id: 11, name: "Node.js", proficiency: 75, icon: <FaNodeJs /> },
        { id: 12, name: "Next.js", proficiency: 80, icon: <SiNextdotjs /> },
        { id: 13, name: "MongoDB", proficiency: 70, icon: <SiMongodb /> },
        { id: 14, name: "VS Code", proficiency: 85, icon: <VscVscode /> },
        { id: 15, name: "Selenium", proficiency: 85, icon: <SiSelenium /> },
        { id: 16, name: "Jenkins(CI/CD)", proficiency: 65, icon: <FaJenkins /> },
        { id: 17, name: "Automation Testing", proficiency: 70, icon: <SiTestinglibrary /> },
    ];
    
    return(
    <div className="bg-white dark:bg-black text-black dark:text-white py-10" id="skills">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 py-10">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
         <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-3 gap-6 p-5">
            {skills.map((skill) => (
                <div key={skill.id} className="flex items-center space-x-3 p-3 bg-gray-100 dark:bg-gray-800 hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                    <span className="text-2xl">{skill.icon}</span>
                    <p className="text-lg">{skill.name}</p>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                        <div 
                            className="h-2 bg-gradient-to-r from-blue-900 dark:from-blue-500 to-purple-400 dark:to-purple-200 rounded-full transition-all" 
                            style={{ width: `${skill.proficiency}%` }}
                        ></div>
                    </div>
                    <p className="text-right text-sm text-gray-600 dark:text-gray-400 mt-1">{skill.proficiency}%</p>
                </div>
            ))}
        </div>
        </div>
    </div>
    );

}