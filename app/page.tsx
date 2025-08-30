import ContactForm from "@/components/ContactForm";
import TechStackTable from "@/components/TechStackTable";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center py-12 bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="max-w-3xl text-center space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight">
          Hi, I’m <span className="text-blue-600">David</span>
        </h1>
        <p className="text-lg text-gray-600">
          Frontend Developer — building smooth, performant, and user-friendly
          web experiences.
        </p>
        <a
          href="mailto:you@example.com"
          className="rounded-lg border border-gray-300 px-5 py-2 text-gray-700 font-medium shadow hover:bg-gray-100 transition"
        >
          Contact Me
        </a>
      </section>

      {/* Projects */}
      <section id="projects" className="mt-20 w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="">
          {/* Project Card */}
          <div className=" p-6 shadow hover:shadow-md transition bg-white">
            <h3 className="text-xl font-semibold">Trip Timeline Planner</h3>
            <p>
              Full-stack app, coded using Ruby on Rails (back-end), React
              (front-end)
            </p>
            <p className="mt-2 text-gray-600">
              When traveling to multiple destinations in a row, I found it
              difficult to keep track of all bookings and details. I developed
              this app that allows you to manage your travel itinerary,
              including flights, accommodations, and activities, in a more
              intuitive way than a simple notepad.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-600 font-medium hover:underline"
            >
              Open app →
            </a>
          </div>
          <div className="rounded-2xl border p-6 shadow hover:shadow-md transition bg-white">
            <h3 className="text-xl font-semibold">💻 Portfolio Site</h3>
            <p className="mt-2 text-gray-600">
              This very portfolio, built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </section>

      <TechStackTable />

      <ContactForm />

      {/* Footer */}
      <footer className="flex justify-between w-full px-8 mt-20 text-gray-500 text-sm">
        <div>
          © {new Date().getFullYear()} David Mambou Fotie. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <Link
            href="https://www.linkedin.com/in/david-mambou"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </Link>
          <Link
            href="https://github.com/david-mambou"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </Link>
        </div>
      </footer>
    </main>
  );
}
