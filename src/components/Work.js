import React from 'react';
// Import only specific animations from framer-motion if possible
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Work = ({ projects }) => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="h2 heading-tight text-accent">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16">
                Showcasing a selection of my recent projects, each designed to address specific needs with functional and user-friendly interfaces. From a streamlined dental clinic appointment system to an e-commerce site with visually engaging product displays, each project reflects my commitment to quality and detail. Click "View all projects" to explore more of my work.
              </p>
              <a
                href="https://github.com/Davidleal1122"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm"
                style={{ padding: "12px 24px", fontSize: "1rem" }}
              >
                View all projects
              </a>
            </div>
            {/* Display the first project */}
            <ProjectDisplay project={projects.get("01")} />
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-7"
          >
            {/* Display the second and third projects */}
            <ProjectDisplay project={projects.get("02")} />
            <ProjectDisplay project={projects.get("03")} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Separate ProjectDisplay component to reduce code repetition
const ProjectDisplay = ({ project }) => (
  <a href={project.live} target="_blank" rel="noopener noreferrer">
    <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
      {/* overlay */}
      <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
      {/* image */}
      <img
        className="group-hover:scale-125 transition-all duration-500"
        src={project.image}
        alt={project.title}
        loading="lazy"
        width="800" // Adjust based on actual image dimensions
        height="600"
      />
      {/* pretitle */}
      <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
        <span className="text-gradient">{project.stack[0].name}</span>
      </div>
      {/* title */}
      <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
        <span className="text-3xl text-white">{project.title}</span>
      </div>
    </div>
  </a>
);

export default Work;
