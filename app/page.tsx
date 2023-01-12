import Head from "next/head";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Head>
        <title>Pablo Quijano Jaramillo's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-gray-900 py-4 fixed w-full z-10 top-0">
        <div className="container mx-auto flex items-center justify-between px-4">
          <h1 className="text-2xl font-medium">Pablo Quijano</h1>
          <div className="flex items-center">
            <a
              href="#about"
              className="px-4 py-2 text-white hover:bg-yellow-500"
            >
              About
            </a>
            <a
              href="#experience"
              className="px-4 py-2 text-white hover:bg-yellow-500"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="px-4 py-2 text-white hover:bg-yellow-500"
            >
              Skills
            </a>
            <a
              href="#skills"
              className="px-4 py-2 text-white hover:bg-yellow-500"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(./hero.jpg)" }}
      >
        <div className="container mx-auto py-32 text-center">
          <h1 className="text-4xl font-medium">Welcome to my portfolio</h1>
          <p className="text-xl">
            I am Pablo Quijano Jaramillo, a software developer
          </p>
        </div>
      </section>

      <section id="about" className="container mx-auto py-20">
        <h2 className="text-2xl font-medium text-center text-yellow-500">
          About
        </h2>
        <p className="text-lg text-center">
          Computer scientist with a specialization in software development. 3+
          years of experience mainly in front-end and some full-stack
          development. Proficient in Javascript, Typescript, HTML and CSS, plus
          libraries and Frameworks like React. Next JS, Redux, Sass. Experience
          working with agile methodologies. I am a responsible person, with
          moral values, punctual, excellent working in a team and following
          instructions, passionate about what I do. I like to learn new things
          and I am open to changes and challenges.
        </p>
      </section>
      <section id="experience" className="container mx-auto py-20">
        <h2 className="text-2xl font-medium text-center text-yellow-500">
          Experience
        </h2>
        <div className="py-2">
          <h3 className="text-xl font-medium">
            Perficient LATAM, Medellín, Colombia
          </h3>
          <p className="text-lg">Front-end Developer (03/2021 - Current)</p>
          <ul className="text-lg">
            <li>
              Working as frontend technical leader of multiple projects for
              international clients
            </li>
            <li>
              Developing projects with React, TypeScript, Next.js and Sass
            </li>
          </ul>
        </div>
        <div className="py-2">
          <h3 className="text-xl font-medium">
            Universidad EAFIT, Medellín, Colombia
          </h3>
          <p className="text-lg">Full-stack Developer (03/2020 - 02/2021)</p>
          <ul className="text-lg">
            <li>
              Worked at the innovation department, as a developer and analyst
              for IT projects
            </li>
            <li>
              Utilized technologies such as React, Node.js, and MongoDB to
              develop web applications and improve internal processes
            </li>
          </ul>
        </div>
        <div className="py-2">
          <h3 className="text-xl font-medium">
            Freelance Developer (07/2019 - 03/2020)
          </h3>
          <p className="text-lg">
            Worked with multiple clients to develop web applications and
            websites using technologies such as React, Vue, and PHP.
          </p>
        </div>
      </section>
      <section id="skills" className="container mx-auto py-20">
        <h2 className="text-2xl font-medium text-center text-yellow-500">
          Skills
        </h2>
        <div className="flex flex-wrap items-center justify-center">
          <span className="bg-yellow-500 text-gray-900 rounded-full px-3 py-1 text-sm font-medium mr-2 mb-2">
            React
          </span>
          <span className="bg-yellow-500 text-gray-900 rounded-full px-3 py-1 text-sm font-medium mr-2 mb-2">
            Next.js
          </span>
          <span className="bg-yellow-500 text-gray-900 rounded-full px-3 py-1 text-sm font-medium mr-2 mb-2">
            TypeScript
          </span>
          <span className="bg-yellow-500 text-gray-900 rounded-full px-3 py-1 text-sm font-medium mr-2 mb-2">
            HTML
          </span>
          <span className="bg-yellow-500 text-gray-900 rounded-full px-3 py-1 text-sm font-medium mr-2 mb-2">
            CSS
          </span>
        </div>
      </section>
      <section id="contact" className="container mx-auto py-20">
        <h2 className="text-2xl font-medium text-center text-yellow-500">
          Contact
        </h2>
        <div className="text-center py-4">
          <p className="text-lg">
            If you're interested in working together or just want to say hi,
            feel free to contact me at:
          </p>
          <a
            href="mailto:pablo.quijano@example.com"
            className="text-yellow-500 underline hover:text-white"
          >
            pablo.quijano@example.com
          </a>
        </div>
        <div className="text-center py-4">
          <p className="text-lg">
            Also you can follow me on my social media accounts:
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/pablo-quijano-jaramillo"
              target="_blank"
              className="text-yellow-500 hover:text-white px-4"
              rel="noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24H22.225c.966 0 1.771-.773 1.771-1.729v-20.542c0-.956-.805-1.729-1.771-1.729z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/pabloquijanoj"
              target="_blank"
              className="text-yellow-500 hover:text-white px-4"
              rel="noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 6.5 5.11 6.5c-1.09 0-1.98.63-2.4 1.48-.24-.02-.48-.03-.72-.03-1.72 0-3.12 1.37-3.12 3.05 0 .23.02.46.07.67-2.54-.13-4.78-1.35-6.22-3.23-.25.4-.37.85-.37 1.32 0 .91.33 1.75.88 2.38-.74-.03-1.44-.22-2.08-.55v.03c0 1.25.89 2.32 2.1 2.57-.27.03-.53.03-.8.03-.21 0-.4-.02-.58-.07.4 1.24 1.48 2.16 2.73 2.28C3.5 9.13 2.57 8.5 1.89 8.5c-.34 0-.68.02-1.02.07 1.35.94 3.02 1.57 4.8 1.57 2.61 0 4.83-1.43 5.56-3.36.18-.6.29-1.24.29-1.89 0-.03-.01-.02-.01.01v.01c0 2.21-1.5 4-3.47 4.46-.24.02-.48.03-.72.03-.5 0-.97-.17-1.38-.46.94.8 2.17 1.32 3.57 1.32 3.32 0 5.97-2.72 5.97-6.07 0-.26-.02-.5-.06-.74.9-.64 1.62-1.5 2.08-2.5z" />
              </svg>
            </a>
            <a
              href="https://github.com/pabloquijanoj"
              target="_blank"
              className="text-yellow-500 hover:text-white px-4"
              rel="noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 0110 10 10 10 0 01-10 10c-1.75 0-3.37-.31-.57-.83-.7-.81-1.55-.6-2.66.35-3.54 1.55-3.54 2.56 0 .69.33 1.37.94 1.85 1.11.73 2.85 1.12 4.51.91 1.66-.22 3.15-1.14 3.89-2.67.24-.56.37-1.14.37-1.71 0-1.68-.64-3.16-1.72-4.27zM11.97 12c-.15-1.65-1.09-2.73-2.68-3.08-.56-.14-1.2-.05-1.68.31-.48.36-.75.93-.75 1.53 0 1.07.54 2.01 1.4 2.61.87.59 2.06.92 3.26.92 1.2 0 2.39-.33 3.26-.92.87-.6 1.4-1.54 1.4-2.61 0-.6-.27-1.17-.75-1.53-.48-.36-1.12-.46-1.68-.31-1.6.35-2.52 1.43-2.68 3.08zM9.28 8c.96-.52 1.87-1.2 2.66-2.02-.43.22-.87.44-1.32.64-.44.2-.9.38-1.39.53-.49.15-1.02.28-1.56.39-.54.11-1.1.18-1.69.18-.58 0-1.14-.07-1.69-.18-.54-.11-1.07-.24-1.56-.39-.49-.15-.95-.33-1.39-.53-.45-.2-.89-.42-1.32-.64.79.82 1.7 1.5 2.66 2.02.69-.35 1.41-.66 2.17-.93-.31.65-.61 1.29-.87 1.96-.26.67-.51 1.37-.71 2.09-.2.72-.35 1.44-.44 2.19-.09.75-.13 1.51-.13 2.24 0 .73.04 1.48.13 2.24.09.75.24 1.47.44 2.19.2.72.45 1.42.71 2.09.26.67.56 1.31.87 1.96-.76-.27-1.48-.58-2.17-.93z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
