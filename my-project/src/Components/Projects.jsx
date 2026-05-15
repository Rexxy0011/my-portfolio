import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { PROJECTS } from "../constants";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const Projects = () => {
  return (
    <section className="relative bg-white rounded-[50px] py-24 px-6 sm:px-12 lg:px-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-stone-900 to-stone-500 bg-clip-text text-transparent text-3xl sm:text-4xl mb-16 tracking-tight text-center font-['Geist_Mono',monospace]"
      >
        + Projects
      </motion.h1>

      <div className="mx-auto max-w-4xl space-y-16">
        {PROJECTS.map((project, idx) => (
          <motion.article
            key={project.title}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Number + rule */}
            <motion.div
              variants={fadeUp}
              className="mb-6 flex items-center gap-4"
            >
              <span className="text-sm text-[#0E5A6B] font-['Geist_Mono',monospace]">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span aria-hidden="true" className="h-px flex-1 bg-stone-200" />
            </motion.div>

            {/* Title + GitHub link */}
            <motion.div
              variants={fadeUp}
              className="mb-5 flex items-start justify-between gap-4"
            >
              <h2 className="text-2xl tracking-tight text-stone-900 sm:text-3xl">
                {project.title}
              </h2>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                  className="mt-2 flex-shrink-0 text-stone-500 transition-colors hover:text-[#0E5A6B]"
                >
                  <Github className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              )}
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed text-stone-600 sm:text-lg"
            >
              {project.description}
            </motion.p>

            {/* Tech tags */}
            {project.technologies && (
              <motion.div
                variants={fadeUp}
                className="mt-6 flex flex-wrap gap-2"
              >
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs text-stone-700"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
