import docport from "./docport.jpeg";
import bloghexa from "./bloghexa.jpeg";
import molocart from "./molocart.jpeg";
import asaihomes from "./asaihomes.jpeg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "DocPort",
    image: docport,
    description:
      "DocPort is an online medical appointment platform that streamlines how patients schedule and manage doctor visits. It offers secure booking, Paystack payments, and dedicated portals for both administrators and doctors.",
    features: [
      "Secure online appointment booking",
      "Paystack payment integration",
      "Admin dashboard for managing users and appointments",
      "Doctor portal for schedules and availability",
      "Real-time updates and notifications",
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Paystack "],
    vercel: "https://docport-eta.vercel.app/", // <--- UPDATE THIS
  },

  {
    title: "BlogHexa",
    image: bloghexa,
    description:
      "BlogHexa is a real-time blogging platform built for seamless content creation and reading. It includes instant blog updates, a dedicated admin panel for managing posts and users, and secure authentication.",
    features: [
      "Real-time blog publishing",
      "Admin dashboard for content management",
      "User and admin authentication",
      "Responsive and modern UI",
      "Fast MERN API performance",
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    vercel: "https://bloghexa.vercel.app/", // <--- UPDATE THIS
  },

  {
    title: "Molocart",
    image: molocart,
    description:
      "Molocart is an e-commerce platform for fresh foods and vegetables, offering fast delivery, affordability, and secure payment options including Paystack and Cash on Delivery.",
    features: [
      "Fresh food and vegetable marketplace",
      "Paystack payment integration",
      "Cash on Delivery (COD) support",
      "Merchant product and order management",
      "Responsive and optimized UI",
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Paystack"],
    vercel: "https://molocart.vercel.app", // <--- UPDATE THIS
  },

  {
    title: "AsaiHomes",
    image: asaihomes,
    description:
      "AsaiHomes is a modern front-end real estate platform showcasing premium homes across Nigeria. It blends luxury and affordability with smooth navigation and a responsive design.",
    features: [
      "Modern real estate showcase",
      "Responsive front-end design",
      "Basin form integration for inquiries",
      "Smooth navigation and clean UI",
      "High-quality visuals for immersive viewing",
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "Basin"],
    vercel: "https://asaihomes.vercel.app/", // <--- UPDATE THIS
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
