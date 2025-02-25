"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  return (
    <nav className="flex flex-wrap items-center justify-between p-4 text-black dark:text-white bg-gray-100 dark:bg-gray-900">
      <div className="text-lg font-bold">
        <Link href="/">
          <span className="cursor-pointer">Kalpana Chinthareddy</span>
        </Link>
      </div>
      <ul className="hidden md:flex space-x-6">
        {[
          "about",
          "education",
          "experience",
          "projects",
          "skills",
          "certifications",
          "achievements",
          "contact",
        ].map((section) => (
          <li key={section}>
            <Link href={`#${section}`} className="hover:text-blue-500">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
