import React from "react";
import ProfilePic from "../assets/Generated Image May 14, 2026 - 1_00PM (1).jpg";
import { motion } from "framer-motion";

// Motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const float = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <motion.div
        className="flex flex-wrap lg:flex-row-reverse"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* IMAGE SIDE */}
        <div className="w-full lg:w-1/2">
          <motion.div className="flex justify-center lg:p-8" variants={fadeUp}>
            <motion.img
              src={ProfilePic}
              alt="profilepic"
              className="border border-stone-900 rounded-3xl"
              variants={float}
              animate="animate"
            />
          </motion.div>
        </div>

        {/* TEXT SIDE */}
        <div className="w-full lg:w-1/2">
          <motion.div
            className="flex flex-col items-center lg:items-start mt-10"
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUp}
              className="pb-2 text-4xl tracking-tighter lg:text-8xl font-['Geist_Mono',monospace]"
            >
              Dickson Umeh
            </motion.h2>

            <motion.span
              variants={fadeUp}
              className="bg-gradient-to-r from-stone-200 to-teal-200 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Healthcare Data Analyst
            </motion.span>

            <motion.p
              variants={fadeUp}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              Healthcare Data Analyst (MSc health Data Science) with a clinical
              background in medical radiography . Skilled in R, SQL, Excel, and
              Power BI for analyzing healthcare data, improving patient flow,
              and delivering KPI-driven insights for operational efficiency and
              service performance.
            </motion.p>

            <motion.a
              variants={fadeUp}
              href="/resume.pdf"
              target="blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
