import ContactForm from "@/components/ContactForm";
import TechStackTable from "@/components/TechStackTable";
import Carousel from "@/components/ui/Carousel";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-28 pb-12 bg-gray-50 dark:bg-neutral-800 text-gray-800 dark:text-gray-100">
      {/* Hero */}
      <section id="hero" className="max-w-3xl text-center space-y-6 px-4">
        <h1 className="text-5xl font-extrabold tracking-tight">
          Hi, I’m{" "}
          <span className="text-blue-600 dark:text-blue-400">David</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Full-stack Developer — building smooth, performant, and user-friendly
          web experiences.
        </p>
        <Link
          href="#contact"
          className="rounded-lg border border-gray-300 px-5 py-2 text-gray-700 dark:text-gray-200 font-medium shadow dark:shadow-[0_2px_6px_rgba(255,255,255,0.08)] bg-white dark:bg-neutral-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          scroll
        >
          Contact Me
        </Link>
      </section>

      {/* Projects */}
      <section id="projects" className="mt-20 w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">💼 Projects</h2>
        {/* Project Card */}
        <div className="p-6 shadow hover:shadow-md transition bg-white dark:bg-neutral-900">
          <div className="lg:flex space-x-8">
            <div className="flex flex-col justify-between mb-4 lg:mb-0">
              <div>
                <h3 className="text-xl font-semibold">Trip Timeline Planner</h3>
                <p>
                  Full-stack web app, coded using Ruby on Rails (back-end),
                  React (front-end)
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  When traveling to multiple destinations in a row, I found it
                  difficult to keep track of all bookings and details. I
                  developed this app that allows you to manage your travel
                  itinerary, including flights, accommodations, and activities,
                  in a more intuitive way than a simple notepad.
                </p>
              </div>
              <Link
                href="https://trip-timeline-planner-f11b5c574f9a.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                View app →
              </Link>
            </div>
            <Carousel />
          </div>
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

        <div className="flex flex-col md:flex-row items-center md:items-center justify-center mb-4 gap-8">
          {/* Picture */}
          <Image
            className="rounded-xl"
            src="/mypic.png"
            alt="My Picture"
            width={300}
            height={300}
          />

          {/* Text */}
          <div className="mt-4 md:mt-0 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">
              I’m{" "}
              <span className="text-blue-600 dark:text-blue-400">
                David Mambou Fotie
              </span>{" "}
              — a full-stack software engineer with 3 years of professional
              experience.
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              I hold a Master’s degree in Engineering, and I’ve had the
              privilege of working with major software companies as well as a
              variety of clients around the world. I’ve contributed both as part
              of collaborative teams and in solo projects, giving me the
              versatility to adapt to different workflows and deliver value in
              any setting. From building intuitive, responsive front-end
              interfaces to designing scalable back-end systems, I enjoy taking
              projects end-to-end and turning ideas into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="w-full mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-12">📞 Contact</h2>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
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
