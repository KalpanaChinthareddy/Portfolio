import task_tracker from "@/app/assets/task_tracker.png";
import portfolio from "@/app/assets/portfolio.png"
export default function Projects(){
    const projects=[
        {
            id:1,
            name:"Portfolio",
            skills:"NextJs, Node.js, Tailwind CSS",
            github:"https://github.com/KalpanaChinthareddy/Portfolio",
            image:portfolio
        },
        {
            id:2,
            name:"Task tracker Ingtegrated with Chat",
            skills:"React, NextJs, Node.js, MongoDB, Websocket",
            github:"https://github.com/KalpanaChinthareddy/Task_tracker_communication",
            image:task_tracker
        },
        
    ];
    return(
        <div className="bg-white dark:bg-black text-black dark:text-white py-10" id="projects">
            <div className="container mx-auto px-8 md:px-16 lg:px-24 py-10">
                <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div 
                            key={project.id} 
                            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transform 
                            transition-transform duration-300 hover:scale-105 flex flex-col"
                        >
                            <img
                            src={project.image.src}
                            alt={project.name}
                            className="object-cover"
                            />    
                            <h3 className="mt-10 text-2xl font-bold text-black dark:text-white">{project.name}</h3>
                            <p className="text-l text-gray-900 dark:text-gray-200 mt-4"><strong>Tech Stack:</strong> {project.skills}</p>
                            <div className="flex mt-4 space-x-4">
                                <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="px-4 py-2 font-bold text-white bg-gradient-to-r from-blue-900 to-purple-400 rounded-3xl hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                                >
                                    GitHub
                                </a>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

}
