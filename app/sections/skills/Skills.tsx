import { Subtitle } from "@ui/.";
import React from "react";

export const Skills = () => {
  return (
    <section id="skills" className="container mx-auto py-20">
      <Subtitle>Skills</Subtitle>
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
  );
};

export default Skills;
