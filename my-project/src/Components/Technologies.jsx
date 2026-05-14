import React from "react";
import { motion } from "framer-motion";
import { RiReactjsLine, RiNodejsLine } from "react-icons/ri";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiGit,
  SiGithub,
  SiVite,
  SiGreensock,
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
    name: "React.js",
    icon: (
      <RiReactjsLine className="text-xl sm:text-2xl lg:text-3xl text-cyan-400" />
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <SiTailwindcss className="text-xl sm:text-2xl lg:text-3xl text-sky-400" />
    ),
  },
  {
    name: "GSAP",
    icon: (
      <SiGreensock className="text-xl sm:text-2xl lg:text-3xl text-green-400" />
    ),
  },
  {
    name: "Vite",
    icon: (
      <SiVite className="text-xl sm:text-2xl lg:text-3xl text-purple-400" />
    ),
  },
  {
    name: "Node.js",
    icon: (
      <RiNodejsLine className="text-xl sm:text-2xl lg:text-3xl text-green-500" />
    ),
  },
  {
    name: "Express.js",
    icon: (
      <SiExpress className="text-xl sm:text-2xl lg:text-3xl text-gray-300" />
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <SiMongodb className="text-xl sm:text-2xl lg:text-3xl text-green-500" />
    ),
  },
  {
    name: "Git",
    icon: <SiGit className="text-xl sm:text-2xl lg:text-3xl text-orange-500" />,
  },
  {
    name: "GitHub",
    icon: (
      <SiGithub className="text-xl sm:text-2xl lg:text-3xl text-gray-200" />
    ),
  },
];

const Technologies = () => {
  return (
    <section className="relative py-24 text-center ">
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none"></div>

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className=" bg-gradient-to-r from-stone-400 to-stone-700 bg-clip-text text-transparent text-3xl sm:text-4xl mb-16 tracking-tight text-accent relative z-10"
      >
        Technology Stack
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
            variants={fadeUp}
            animate="animate"
            variants={float}
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
    </section>
  );
};

export default Technologies;
