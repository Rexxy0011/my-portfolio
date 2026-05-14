import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { EXPERIENCES } from "../constants";

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
  visible: { transition: { staggerChildren: 0.05 } },
};

const DEFAULT_VISIBLE = 5;

const Experience = () => {
  const [expanded, setExpanded] = useState({});
  const toggle = (idx) =>
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));

  return (
    <section className="relative py-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-stone-400 to-stone-700 bg-clip-text text-transparent text-3xl sm:text-4xl mb-16 tracking-tight text-center font-['Geist_Mono',monospace]"
      >
        + Experience
      </motion.h1>

      <div className="mx-auto max-w-5xl">
        {EXPERIENCES.map((exp, idx) => {
          const isOpen = !!expanded[idx];
          const total = exp.bullets.length;
          const hiddenCount = Math.max(0, total - DEFAULT_VISIBLE);
          const visibleBullets = exp.bullets.slice(0, DEFAULT_VISIBLE);
          const extraBullets = exp.bullets.slice(DEFAULT_VISIBLE);

          return (
            <motion.div
              key={idx}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] lg:gap-12"
            >
              {/* Left rail */}
              <div>
                <motion.p
                  variants={fadeUp}
                  className="mb-4 text-sm text-stone-400 font-['Geist_Mono',monospace]"
                >
                  {exp.year}
                </motion.p>
                <motion.h3 variants={fadeUp} className="text-xl text-stone-100">
                  {exp.role}
                </motion.h3>
                <motion.p variants={fadeUp} className="mt-1 text-stone-400">
                  {exp.company}
                </motion.p>
                {exp.location && (
                  <motion.p
                    variants={fadeUp}
                    className="mt-1 text-sm text-stone-500"
                  >
                    {exp.location}
                  </motion.p>
                )}
                {exp.technologies && (
                  <motion.div
                    variants={fadeUp}
                    className="mt-4 flex flex-wrap gap-2"
                  >
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-stone-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Right column — bullets */}
              <div>
                <ul className="space-y-3">
                  {visibleBullets.map((bullet, i) => (
                    <motion.li
                      key={i}
                      variants={fadeUp}
                      className="flex gap-3 text-sm leading-relaxed text-stone-300 sm:text-base"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0E5A6B]"
                      />
                      <span>{bullet}</span>
                    </motion.li>
                  ))}

                  <AnimatePresence initial={false}>
                    {isOpen &&
                      extraBullets.map((bullet, i) => (
                        <motion.li
                          key={`extra-${i}`}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{
                            duration: 0.25,
                            delay: i * 0.03,
                            ease: "easeOut",
                          }}
                          className="flex gap-3 text-sm leading-relaxed text-stone-300 sm:text-base"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0E5A6B]"
                          />
                          <span>{bullet}</span>
                        </motion.li>
                      ))}
                  </AnimatePresence>
                </ul>

                {hiddenCount > 0 && (
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    className="mt-6 inline-flex items-center gap-1.5 text-xs text-stone-400 transition-colors hover:text-stone-200 font-['Geist_Mono',monospace]"
                  >
                    {isOpen ? (
                      <>
                        <ChevronUp className="h-3.5 w-3.5" />
                        Show less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-3.5 w-3.5" />
                        Show {hiddenCount} more
                      </>
                    )}
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
