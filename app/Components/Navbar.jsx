"use client"
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function NavBar(){
 return(
    <nav className="flex items-center justify-between p-4 text-black dark:text-white">
    <div className="text-lg font-bold">
    <a href="/">Kalpana Chinthareddy</a>
    </div>
    <ul className="flex space-x-8">
      <li><a href="#about">About</a></li>
      <li><a href="#education">Education</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#certifications">Certifications</a></li>
      <li><a href="#achievements">Achievements</a></li>
      <li><a href="#contact">ContactMe!</a></li>
      <li><ThemeToggle/></li>
    </ul>
  </nav>
 );


}