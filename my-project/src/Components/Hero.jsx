import React from "react";
import ProfilePic from "../assets/me.jpg";
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
              className="pb-2 text-4xl tracking-tighter lg:text-8xl"
            >
              Rex Umeh
            </motion.h2>

            <motion.span
              variants={fadeUp}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Software Engineer
            </motion.span>

            <motion.p
              variants={fadeUp}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              My curiosity for Cloud Security sparked my journey into tech. What
              began as an interest in how systems stay protected soon grew into
              a passion for building them. Today, I develop scalable MERN and AI
              applications that combine performance, security, and great user
              experience.
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
