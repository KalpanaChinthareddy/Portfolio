"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 text-black dark:text-white bg-gray-100 dark:bg-gray-900">
      {/* Logo */}
      <div className="text-lg font-bold">
        <Link href="/">
          <span className="cursor-pointer">Kalpana Chinthareddy</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        {["about", "education", "experience", "projects", "skills", "certifications", "achievements", "contact"].map(
          (section) => (
            <li key={section}>
              <Link href={`#${section}`} className="hover:text-blue-500">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          )
        )}
        <li>
          <ThemeToggle />
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-gray-200 dark:bg-gray-800 text-center space-y-4 py-4 md:hidden">
          {["about", "education", "experience", "projects", "skills", "certifications", "achievements", "contact"].map(
            (section) => (
              <li key={section}>
                <Link href={`#${section}`} className="block py-2 hover:text-blue-500" onClick={() => setIsOpen(false)}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            )
          )}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      )}
    </nav>
  );
}
