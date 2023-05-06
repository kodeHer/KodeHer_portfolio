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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "As a React.js Developer, my main responsibilities include creating and maintaining web applications with the use of various related technologies.",
      "I work closely with cross-functional teams such as designers, product managers, and other developers to ensure the delivery of high-quality products.",
      "My expertise includes implementing responsive design and ensuring cross-browser compatibility.",
      "I also take part in code reviews, providing constructive feedback to my fellow developers to maintain code quality and optimize application performance.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I never thought it would be possible to create a website that matched the beauty of our product, but KodeHer proved me wrong.",
    name: "Becky Reed",
    designation: "CTO",
    company: "Family.Co",
    image: "https://img.myloview.com/canvas-prints/3d-illustration-of-a-female-figure-in-profile-with-eyes-closed-and-tears-streaming-down-her-face-dull-blue-background-700-262730304.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Whitney Brown",
    designation: "COO",
    company: "DEAN Corp",
    image: "https://img.myloview.com/canvas-prints/3d-illustration-of-a-female-figure-with-her-eyes-closed-and-shedding-tears-dark-background-700-254492177.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Bishop Wang",
    designation: "CTO",
    company: "456 Realestate",
    image: "https://img.myloview.com/posters/3d-illustration-of-a-female-figure-with-her-eyes-closed-and-shedding-tears-yellow-and-green-light-700-255703378.jpg",
  },
];

const projects = [
  {
    name: "Payment Web app",
    description:
      "This UI/UX React app is all about crafting an exceptional user experience. By leveraging the power of React, we can create highly responsive, interactive and visually stunning interfaces that provide a seamless experience to the users",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "UI/UX",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://kodeher-business-landing.netlify.app/",
  },
  {
    name: "AI summarizer",
    description:
      "Web application that enables users to Transform lengthy articles into clear and concise summaries with KodeHer Summarizer, an open-source article summarizer that simplifies your reading.",
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
        name: "AI",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://kodeher-summarizer.netlify.app/",
  },
  {
    name: "MetaVerse",
    description:
      "Metaverse website, a virtual world that allows you to explore and connect with people from around the globe in a fully immersive experience. Join us on a journey to explore new horizons and unlock the infinite potential of the Metaverse.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "UI/UX",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://kodeher-metaverse.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
