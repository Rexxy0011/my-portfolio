import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeItem = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <section className="py-24 px-6 lg:px-12">
      {/* HEADER */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-stone-300 to-gray-500 bg-clip-text text-transparent text-4xl text-center mb-16 tracking-tight"
      >
        Projects
      </motion.h2>

      {/* REDUCED SPACING ON SMALL SCREENS */}
      <div className="space-y-16 sm:space-y-24 lg:space-y-28">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={`flex flex-col lg:flex-row items-start gap-10 sm:gap-16 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE + VIEW BUTTON BLOCK */}
            <div className="w-full lg:w-1/2">
              <motion.div
                variants={fadeItem}
                className="rounded-2xl overflow-hidden shadow-xl bg-black/10"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover"
                />
              </motion.div>

              {/* TINY VIEW BUTTON UNDER IMAGE (RESPONSIVE SPACING) */}
              {project.vercel && (
                <a
                  href={project.vercel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 sm:mt-3 inline-block border border-white/40 text-white text-xs px-4 py-1 rounded-full"
                >
                  View Project
                </a>
              )}
            </div>

            {/* DETAILS */}
            <motion.div
              variants={staggerParent}
              className="flex-1 max-w-xl space-y-5"
            >
              <motion.h3
                variants={fadeItem}
                className="text-3xl font-semibold text-accent"
              >
                {project.title}
              </motion.h3>

              <motion.p
                variants={fadeItem}
                className="text-gray-300 leading-relaxed"
              >
                {project.description}
              </motion.p>

              {/* FEATURES */}
              {project.features && (
                <motion.ul
                  variants={staggerParent}
                  className="space-y-2 text-gray-400 text-sm"
                >
                  {project.features.map((feat, idx) => (
                    <motion.li
                      key={idx}
                      variants={fadeItem}
                      className="flex items-start gap-2"
                    >
                      <span className="text-accent text-lg mt-[-4px]">•</span>
                      <span>{feat}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              )}

              {/* TECH STACK */}
              <motion.div variants={fadeItem} className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-stone-900 border border-gray-700 text-xs text-gray-300 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
