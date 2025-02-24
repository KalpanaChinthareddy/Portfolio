import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
export default function Footer(){
    return (
        <footer className="bg-gray-800 dark:bg-gray-900 text-white py-10">
          <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <div
              className="pt-4 flex flex-col justify-between items-center"
            > 
              <div>
                <p className="text-gray-400 dark:text-gray-300">
                &copy; {new Date().getFullYear()} Kalpana Chinthareddy. All rights reserved.
                </p>
                </div>
              <div className="flex pt-5 space-x-4 my-4 md:my-0">
                <a href="https://www.linkedin.com/in/kalpana-chinthareddy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white dark:hover:text-gray-300">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://github.com/KalpanaChinthareddy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white dark:hover:text-gray-300">
                  <FaGithub size={24} />
                </a>
                <a href="mailto:kalpanareddy331@gmail.com" className="text-gray-400 hover:text-white dark:hover:text-gray-300">
                  <AiOutlineMail size={24} />
                </a>
              </div>
              
            </div>
          </div>
        </footer>
      );
}