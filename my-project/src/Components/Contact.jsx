import React from "react";
import { motion } from "framer-motion";

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

const ROWS = [
  { label: "location", value: "South Yorkshire, England" },
  { label: "phone", value: "+44 7393 132386", href: "tel:+447393132386" },
  {
    label: "email",
    value: "dusky327@gmail.com",
    href: "mailto:dusky327@gmail.com",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 px-6 sm:px-12 lg:px-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-stone-400 to-stone-700 bg-clip-text text-transparent text-3xl sm:text-4xl mb-16 tracking-tight text-center font-['Geist_Mono',monospace]"
      >
        + Contact
      </motion.h1>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-2xl space-y-4 font-['Geist_Mono',monospace]"
      >
        {ROWS.map(({ label, value, href }) => (
          <motion.div
            key={label}
            variants={fadeUp}
            className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-sm sm:text-base"
          >
            <span className="w-20 flex-shrink-0 text-stone-500">{label}</span>
            <span aria-hidden="true" className="text-stone-600">
              ──
            </span>
            {href ? (
              <a
                href={href}
                className="text-stone-200 transition-colors hover:text-[#0E5A6B]"
              >
                {value}
              </a>
            ) : (
              <span className="text-stone-200">{value}</span>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Contact;
