import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

// Floating Motion
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://usebasin.com/f/d971cb8c17ec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Your message has been sent successfully!");
        setFormData({ name: "", email: "", service: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-[#0a0a0a] to-black text-white"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="bg-gradient-to-r from-stone-200 via-stone-400 to-stone-700 bg-clip-text text-transparent text-4xl mb-3">
          Let’s Connect
        </h2>
        <div className="h-1 w-24 bg-accent mx-auto rounded-full mb-6"></div>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          Have an idea, a product, or a vision you want to bring to life? Let’s
          connect and make it happen.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT - Contact Info WITH FLOAT */}
        <motion.div
          animate="animate"
          variants={float}
          className="p-8 rounded-2xl bg-gradient-to-br from-[#0d0d0d]/70 to-[#111]/80 border border-accent/30 shadow-[0_0_25px_rgba(212,175,55,0.08)] backdrop-blur-sm"
        >
          <h3 className="text-2xl mb-10">Contact info</h3>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]">
                <MapPin className="text-accent w-5 h-5 sm:w-5 sm:h-5" />
              </div>

              <div className="flex-1">
                <p className="text-gray-400 text-sm sm:text-sm">Address</p>
                <p className="text-white font-medium text-sm sm:text-base">
                  Lagos, Nigeria
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]">
                <Mail className="text-accent w-5 h-5 sm:w-5 sm:h-5" />
              </div>

              <div className="flex-1">
                <p className="text-gray-400 text-sm sm:text-sm">Email</p>
                <a
                  href="mailto:Rexxycael@gmail.com"
                  className="text-white font-medium text-sm sm:text-base hover:text-accent transition-colors duration-300 break-words"
                >
                  Rexxycael@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]">
                <Phone className="text-accent w-5 h-5 sm:w-5 sm:h-5" />
              </div>

              <div className="flex-1">
                <p className="text-gray-400 text-sm sm:text-sm">Phone</p>
                <a
                  href="tel:+2348088389298"
                  className="text-white font-medium text-sm sm:text-base hover:text-accent transition-colors duration-300"
                >
                  +234 808 838 9298
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT - Contact Form */}
        <div>
          <h3 className="text-2xl mb-6 text-accent">Send Me a Message</h3>
          <form
            onSubmit={handleSubmit}
            className="space-y-5 text-gray-200"
            autoComplete="off"
          >
            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-lg outline-none focus:border-accent"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-lg outline-none focus:border-accent"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-lg outline-none focus:border-accent"
              >
                <option value="">Select a Service</option>
                <option>Website Development</option>
                <option>Frontend Design</option>
                <option>Full Stack Application</option>

                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="4"
                required
                className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-lg outline-none focus:border-accent resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full mt-4 border-2 border-accent text-white font-semibold py-3 rounded-full hover:text-accent transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
