import ContactForm from "@/components/ContactForm";
import TechStackTable from "@/components/TechStackTable";
import Carousel from "@/components/ui/Carousel";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-28 pb-12 bg-gray-50 text-gray-800">
      {/* Hero */}
      <section id="hero" className="max-w-3xl text-center space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight">
          Hi, I’m <span className="text-blue-600">David</span>
        </h1>
        <p className="text-lg text-gray-600">
          Full-stack Developer — building smooth, performant, and user-friendly
          web experiences.
        </p>
        <Link
          href="#contact"
          className="rounded-lg border border-gray-300 px-5 py-2 text-gray-700 font-medium shadow hover:bg-gray-100 transition"
          scroll
        >
          Contact Me
        </Link>
      </section>

      {/* Projects */}
      <section id="projects" className="mt-20 w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">💼 Projects</h2>
        {/* Project Card */}
        <div className="p-6 shadow hover:shadow-md transition bg-white">
          <div className="md:flex space-x-8">
            <div>
              <h3 className="text-xl font-semibold">Trip Timeline Planner</h3>
              <p>
                Full-stack web app, coded using Ruby on Rails (back-end), React
                (front-end)
              </p>
              <p className="mt-2 text-gray-600">
                When traveling to multiple destinations in a row, I found it
                difficult to keep track of all bookings and details. I developed
                this app that allows you to manage your travel itinerary,
                including flights, accommodations, and activities, in a more
                intuitive way than a simple notepad.
              </p>
            </div>
            <Carousel />
          </div>
          <Link
            href="https://trip-timeline-planner-f11b5c574f9a.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-blue-600 font-medium hover:underline"
          >
            View app →
          </Link>
        </div>
        <div className="p-6 shadow hover:shadow-md transition bg-white">
          <h3 className="text-xl font-semibold">Portfolio Site</h3>
          <p className="mt-2 text-gray-600">
            This very portfolio, built with Next.js and Tailwind CSS.
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="w-full mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">⚡ Tech Stack</h2>
        <TechStackTable />
      </section>

      {/* About me */}
      <section id="about" className="w-full mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">🌱 About me</h2>
        <div className="flex justify-center mb-4">
          <Image
            className="mx-8 rounded-xl"
            src="/mypic.png"
            alt="My Picture"
            width={300}
            height={300}
          />
          <div>
            <h3 className="text-2xl font-bold mb-12">
              I’m <span className="text-blue-600">David Mambou Fotie</span> — a
              full-stack software engineer with 3 years of professional
              experience.
            </h3>
            <p className="text-xl text-gray-600">
              I hold a Master’s degree in Engineering, and over the past few
              years I’ve had the opportunity to collaborate with clients from
              around the world, building modern, reliable, and scalable
              applications. My work spans both front-end and back-end
              development, allowing me to deliver complete solutions from
              intuitive user interfaces to robust server-side systems. I’m
              passionate about writing clean, maintainable code and leveraging
              the best tools to solve real problems.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="w-full mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-12">📞 Contact</h2>
        <p className="mb-8 text-lg text-gray-600">
          Let’s work together! Feel free to contact me using the form below.
        </p>
        <ContactForm />
      </section>

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
