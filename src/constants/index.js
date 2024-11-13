import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    Codsoft,
    Udemy,
    carrent,
    jobit,
    tripguide,
    threejs,
    Wxora,
    Freecodecamp,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full-Stack Development",
      icon: web,
    },
    {
      title: "Responsive Web Design",
      icon: mobile,
    },
    {
      title: "API Integration and Backend Setup",
      icon: backend,
    },
    {
      title: "Project Consulting and Agile Support",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
   
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "Codsoft",
      icon: Codsoft,
      iconBg: "#383E56",
      date: "August 2024 - September 2024",
      points: [
"        Built applications like a Number Guessing Game and a Student Grade Calculator, enhancing skills in logic and application development."
      ],
    },
    {
      title: "Full-Stack Development Course",
      company_name: "Udemy - Taught by Yahya Nabil ElAraby",
      icon: Udemy,
      iconBg: "#E6DEDD",
      date: "Completed October 2024",
      points: [
"Learned to develop web applications using React, Node.js, Express, and MongoDB.",
"Strengthened skills in backend and frontend integration and data handling for full-stack applications."],
      
    },
    {
      title: "JavaScript Algorithms & Data Structures",
      company_name: "freeCodeCamp",
      icon: Freecodecamp,
      iconBg: "#383E56",
      date: "Issued July 2023 - Expired September 2023",
      points: [
"Practiced advanced algorithms and data structures, building a foundation in efficient coding practices.",
"Developed problem-solving skills through coding challenges and projects.",
"Enhanced understanding of JavaScript fundamentals and its applications.",

      ],
    },
    {
      title: "MERN Stack Web Development",
      company_name: "Wxora",
      icon: Wxora,
      iconBg: "#E6DEDD",
      date: "Issued September 2023 - Expired October 2023",
      points: [
"Gained hands-on experience in MongoDB, Express, React, and Node.js.",
"Developed a strong understanding of MERN stack architecture and its applications.",
"Built a real-world project using the MERN stack, enhancing skills in full-stack development.",
"Developed projects from scratch, applying full-stack knowledge to create dynamic web applications."

      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };