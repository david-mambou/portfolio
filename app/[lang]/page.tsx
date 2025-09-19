import Clients from "@/components/Clients";
import ContactForm from "@/components/ContactForm";
import TechStackTable from "@/components/TechStackTable";
import Carousel from "@/components/ui/Carousel";
import { getDictionary } from "@/dictionaries/dictionaries";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-28 pb-12 bg-gray-50 dark:bg-neutral-800 text-gray-800 dark:text-gray-100">
      {/* Hero */}
      <section
        id="hero"
        className="max-w-3xl text-center space-y-6 px-4 scroll-mt-30"
      >
        <h1 className="text-5xl font-extrabold tracking-tight text-blue-700 dark:text-blue-400">
          David Mambou Fotie
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {dict.headline}
        </p>
        <Link
          href="#contact"
          className="rounded border border-gray-300 px-5 py-2 text-gray-700 dark:text-gray-200 font-medium shadow dark:shadow-[0_2px_6px_rgba(255,255,255,0.08)] bg-white dark:bg-neutral-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          scroll
        >
          {dict.contactMe}
        </Link>
      </section>

      {/* Projects */}
      <section id="projects" className="my-20 w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">{dict.projects}</h2>
        {/* Project Card */}
        <div className="p-6 shadow hover:shadow-md transition bg-white dark:bg-neutral-900">
          <div className="lg:flex space-x-8">
            <div className="flex flex-col justify-between mb-4 lg:mb-0">
              <div>
                <h3 className="text-xl font-semibold">Trip Timeline Planner</h3>
                <p>{dict.tripTimelinePlanner.stack}</p>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {dict.tripTimelinePlanner.description}
                </p>
              </div>
              <Link
                href="https://trip-timeline-planner-f11b5c574f9a.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-700 dark:text-blue-400 font-medium hover:underline"
              >
                {dict.viewApp} →
              </Link>
            </div>
            <Carousel />
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20">
        <Clients />
      </section>

      {/* Tech Stack */}
      <section className="w-full mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          {dict.techStack}
        </h2>
        <TechStackTable />
      </section>

      {/* About me */}
      <section id="about" className="w-full mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">{dict.about}</h2>

        <div className="flex flex-col md:flex-row items-center md:items-center justify-center mb-4 gap-8">
          {/* Picture */}
          <Image
            className="rounded-xl shadow dark:shadow-[0_2px_6px_rgba(255,255,255,0.08)]"
            src="/mypic.png"
            alt="My Picture"
            width={300}
            height={300}
          />

          {/* Text */}
          <div className="mt-4 flex flex-col space-y-4 md:mt-0 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">
              {dict.aboutHeadlineA}{" "}
              <span className="text-blue-700 dark:text-blue-400">
                David Mambou Fotie
              </span>{" "}
              {dict.aboutHeadlineB}
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {dict.aboutContent}
            </p>
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              {lang === "ja" && (
                <Link
                  href="/resume-ja.pdf"
                  className="bg-blue-700 dark:bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  scroll
                >
                  {dict.resumeJa}
                </Link>
              )}
              {lang === "fr" ? (
                <Link
                  href="/resume-fr.pdf"
                  className="bg-blue-700 dark:bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  scroll
                >
                  {dict.resume}
                </Link>
              ) : (
                <Link
                  href="/resume-en.pdf"
                  className="bg-blue-700 dark:bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  scroll
                >
                  {dict.resume}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="w-full mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-12">{dict.contact}</h2>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
          {dict.contactHeadline}
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
