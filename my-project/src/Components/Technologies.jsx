import React from "react";
import { motion } from "framer-motion";
import { Check, BarChart3 } from "lucide-react";
import { RiFileExcel2Line } from "react-icons/ri";
import {
  SiR,
  SiPostgresql,
  SiPython,
  SiTableau,
} from "react-icons/si";

// Stagger + fade-in (entry animation)
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
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

// FLOATING VARIANT
const float = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const techStack = [
  {
    name: "R",
    icon: <SiR className="text-xl sm:text-2xl lg:text-3xl text-blue-400" />,
  },
  {
    name: "SQL",
    icon: (
      <SiPostgresql className="text-xl sm:text-2xl lg:text-3xl text-sky-500" />
    ),
  },
  {
    name: "Excel",
    icon: (
      <RiFileExcel2Line className="text-xl sm:text-2xl lg:text-3xl text-green-500" />
    ),
  },
  {
    name: "Power BI",
    icon: (
      <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-yellow-400" />
    ),
  },
  {
    name: "Python",
    icon: (
      <SiPython className="text-xl sm:text-2xl lg:text-3xl text-yellow-300" />
    ),
  },
  {
    name: "Tableau",
    icon: (
      <SiTableau className="text-xl sm:text-2xl lg:text-3xl text-blue-500" />
    ),
  },
];

const competencies = [
  "Healthcare analytics",
  "Data cleaning",
  "Statistical analysis",
  "SQL query writing",
  "Exploratory data analysis",
  "Data visualization",
  "Dashboard development",
  "Performance metrics",
  "Healthcare operations",
  "Workflow optimization",
  "Technical documentation",
];

const Technologies = () => {
  return (
    <section className="relative ml-[calc(50%-50vw)] w-screen overflow-hidden bg-black py-24 text-center">

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className=" bg-gradient-to-r from-stone-400 to-stone-700 bg-clip-text text-transparent text-3xl sm:text-4xl mb-16 tracking-tight text-accent relative z-10 font-['Geist_Mono',monospace]"
      >
        + Skills
      </motion.h1>

      {/* Icon Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 relative z-10"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            variants={float}
            animate="animate"
            className="
              flex flex-col items-center gap-2 sm:gap-3
              px-4 py-3 sm:px-6 sm:py-4
              rounded-xl sm:rounded-2xl
              bg-white/5 backdrop-blur-md
              border border-white/10
            "
          >
            {tech.icon}
            <p className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-300">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Divider with label */}
      <div className="relative z-10 mx-auto mt-16 mb-8 flex max-w-md items-center justify-center gap-4 px-6 sm:mt-20 sm:mb-10">
        <div className="h-px flex-1 bg-white/15" />
        <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400 sm:text-xs">
          Expertise
        </span>
        <div className="h-px flex-1 bg-white/15" />
      </div>

      {/* Competencies chips */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 mx-auto flex max-w-3xl flex-wrap justify-center gap-2 px-4 sm:gap-3 sm:px-6"
      >
        {competencies.map((skill) => (
          <motion.span
            key={skill}
            variants={fadeUp}
            className="
              inline-flex items-center gap-2
              rounded-full border border-white/10 bg-white/5 backdrop-blur-md
              px-3 py-1.5 sm:px-4 sm:py-2
              text-[11px] sm:text-xs font-medium text-gray-300
            "
          >
            <Check className="h-3 w-3 text-[#0E5A6B] sm:h-3.5 sm:w-3.5" />
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
};

export default Technologies;
