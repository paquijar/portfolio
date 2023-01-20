import { Subtitle } from "@ui/.";

export const Experience = () => {
  return (
    <section id="experience" className="container mx-auto py-20">
      <Subtitle>Experience</Subtitle>
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
          <li>Developing projects with React, TypeScript, Next.js and Sass</li>
        </ul>
      </div>
      <div className="py-2">
        <h3 className="text-xl font-medium">
          Universidad EAFIT, Medellín, Colombia
        </h3>
        <p className="text-lg">Full-stack Developer (03/2020 - 02/2021)</p>
        <ul className="text-lg">
          <li>
            Worked at the innovation department, as a developer and analyst for
            IT projects
          </li>
          <li>
            Utilized technologies such as React, Node.js, and MongoDB to develop
            web applications and improve internal processes
          </li>
        </ul>
      </div>
      <div className="py-2">
        <h3 className="text-xl font-medium">
          Freelance Developer (07/2019 - 03/2020)
        </h3>
        <p className="text-lg">
          Worked with multiple clients to develop web applications and websites
          using technologies such as React, Vue, and PHP.
        </p>
      </div>
    </section>
  );
};

export default Experience;
