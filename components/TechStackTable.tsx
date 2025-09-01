"use client";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiRuby,
  SiRubyonrails,
} from "react-icons/si";

export default function TechStackTable() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Frontend */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">
        <h3 className="text-xl font-semibold mb-4 text-center">Frontend</h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <FaReact className="text-sky-500 text-2xl" /> React
          </li>
          <li className="flex items-center gap-3">
            <SiNextdotjs className="text-gray-900 dark:text-white text-2xl" />{" "}
            Next.js
          </li>
          <li className="flex items-center gap-3">
            <SiTypescript className="text-blue-600 text-2xl" /> TypeScript
          </li>
          <li className="flex items-center gap-3">
            <SiTailwindcss className="text-cyan-500 text-2xl" /> Tailwind CSS
          </li>
          <li className="flex items-center gap-3">
            <FaHtml5 className="text-orange-500 text-2xl" /> HTML5
          </li>
          <li className="flex items-center gap-3">
            <FaCss3Alt className="text-blue-500 text-2xl" /> CSS3
          </li>
        </ul>
      </div>

      {/* Backend */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">
        <h3 className="text-xl font-semibold mb-4 text-center">Backend</h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <FaNodeJs className="text-green-600 text-2xl" /> Node.js
          </li>
          <li className="flex items-center gap-3">
            <SiPostgresql className="text-sky-700 text-2xl" /> PostgreSQL
          </li>
          <li className="flex items-center gap-3">
            <SiRuby className="text-red-600 text-2xl" /> Ruby
          </li>
          <li className="flex items-center gap-3">
            <SiRubyonrails className="text-red-500 text-2xl" /> Rails
          </li>
        </ul>
      </div>

      {/* Others */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">
        <h3 className="text-xl font-semibold mb-4 text-center">Others</h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <FaGitAlt className="text-orange-600 text-2xl" /> Git
          </li>
          {/* Add more tools here */}
        </ul>
      </div>
    </div>
  );
}
