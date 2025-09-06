"use client";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { FaAws, FaDocker, FaJava } from "react-icons/fa6";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiRuby,
  SiRubyonrails,
  SiDjango,
  SiPython,
  SiGooglecloud,
  SiFirebase,
  SiJest,
  SiRemix,
} from "react-icons/si";
import PlaywrightIcon from "./icons/PlaywrightIcon";

export default function TechStackTable() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Frontend */}
      <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow">
        <h3 className="text-xl font-semibold mb-4 text-center">Frontend</h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <FaReact className="text-blue-600 dark:text-blue-400 text-2xl" />{" "}
            React
          </li>
          <li className="flex items-center gap-3">
            <SiNextdotjs className="text-blue-600 dark:text-blue-400 dark:text-white text-2xl" />{" "}
            Next.js
          </li>
          <li className="flex items-center gap-3">
            <SiRemix className="text-blue-600 dark:text-blue-400 dark:text-white text-2xl" />{" "}
            Remix
          </li>
          <li className="flex items-center gap-3">
            <SiTypescript className="text-blue-600 dark:text-blue-400 text-2xl" />{" "}
            TypeScript
          </li>
          <li className="flex items-center gap-3">
            <SiTailwindcss className="text-blue-600 dark:text-blue-400 text-2xl" />{" "}
            Tailwind CSS
          </li>
          <li className="flex items-center gap-3">
            <FaHtml5 className="text-blue-600 dark:text-blue-400 text-2xl" />{" "}
            HTML5
          </li>
          <li className="flex items-center gap-3">
            <FaCss3Alt className="text-blue-600 dark:text-blue-400 text-2xl" />{" "}
            CSS3
          </li>
        </ul>
      </div>

      {/* Backend */}
      <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow">
        <h3 className="text-xl font-semibold mb-4 text-center">Backend</h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <FaNodeJs className="text-blue-600 dark:text-blue-400 text-2xl" />{" "}
            Node.js
          </li>
          <li className="flex items-center gap-3">
            <SiPostgresql className="text-blue-600 dark:text-blue-400 text-2xl" />{" "}
            PostgreSQL
          </li>
          <li className="flex items-center gap-3">
            <SiPython className="text-blue-600 dark:text-blue-400 text-2xl" />{" "}
            Python
          </li>
          <li className="flex items-center gap-3">
            <SiDjango className="text-blue-600 dark:text-blue-400 text-2xl" />{" "}
            Django
          </li>
          <li className="flex items-center gap-3">
            <FaJava className="text-blue-600 dark:text-blue-400 text-2xl" />{" "}
            Java
          </li>
          <li className="flex items-center gap-3">
            <SiRuby className="text-blue-600 dark:text-blue-400 text-2xl" />{" "}
            Ruby
          </li>
          <li className="flex items-center gap-3">
            <SiRubyonrails className="text-blue-600 dark:text-blue-400 text-2xl" />{" "}
            Rails
          </li>
        </ul>
      </div>

      {/* Tools */}
      <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow">
        <h3 className="text-xl font-semibold mb-4 text-center">Tools</h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <FaDocker className="text-blue-600 dark:text-blue-400 text-2xl" />{" "}
            Docker
          </li>
          <li className="flex items-center gap-3">
            <FaAws className="text-blue-600 dark:text-blue-400 text-2xl" />{" "}
            Amazon Web Services
          </li>
          <li className="flex items-center gap-3">
            <SiGooglecloud className="text-blue-600 dark:text-blue-400 text-2xl" />{" "}
            Google Cloud Platform
          </li>
          <li className="flex items-center gap-3">
            <SiFirebase className="text-blue-600 dark:text-blue-400 text-2xl" />{" "}
            Firebase
          </li>
          <li className="flex items-center gap-3">
            <PlaywrightIcon className="text-blue-600 dark:text-blue-400" />{" "}
            Playwright
          </li>
          <li className="flex items-center gap-3">
            <SiJest className="text-blue-600 dark:text-blue-400 text-2xl" />{" "}
            Jest
          </li>
          <li className="flex items-center gap-3">
            <FaGitAlt className="text-blue-600 dark:text-blue-400 text-2xl" />{" "}
            Git
          </li>
        </ul>
      </div>
    </div>
  );
}
