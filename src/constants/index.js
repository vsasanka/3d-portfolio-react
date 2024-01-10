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
  docker,
  meta,
  starbucks,
  tesla,
  servicenow,
  carrent,
  jobit,
  tripguide,
  threejs,
  nvidia,
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
    title: "Full Stack Engineer",
    icon: web,
  },
  {
    title: "Software Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "ServiceNow",
    icon: servicenow,
    iconBg: "#383E56",
    date: "June 2018 - July 2022",
    points: [
      "Built Knowledge Portal Widgets in web pages of Knowledge Management application using JavaScript framework AngularJS. Developed the secured access mechanism to the articles using Java.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Nvidia",
    icon: nvidia,
    iconBg: "#E6DEDD",
    date: "July 2017 - Dec 2017",
    points: [
      "Worked on project MISRA C - aimed to implement the software development guidelines developed by MISRA (Motor Industry Software Reliability Association).",
      "Worked on Bootloader chip - used by gaming consoles and microcontrollers for AI - Fixed bugs removing security vulnerabilities and ensuring safe execution of the code.",
      "Impacted more than 10,000 lines of code.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "Sasanka brings along a great set of technical and soft skills to the table, making it seamless to work with him.",
    name: "Lokenath Chakraborty",
    designation: "Product Manager",
    company: "ServiceNow",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I am impressed by the dedication with which Sasanka took the initiative to identify a production issue, and resolved it overnight which unblocked several developers of the bootloader org.",
    name: "Vivek Kumar",
    designation: "Senior Manager",
    company: "Nvidia",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I appreciate the attention to detail and meticule with which Sasanka works on his assignments.",
    name: "Dinesh Sthapit",
    designation: "Associate Professor",
    company: "ASU",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Social Media App",
    description:
      "Built and deployed a social media app that involved implementing various features, including infinite scrolling for Home, Users, and Profile pages using React Query. This included setting up cursor-based pagination with Appwrite and using React Intersection Observer for automatic loading. Additionally, the project tasks included displaying top creators, creating functional pages for People, Saved Posts, and Edit Profile. These pages fetch users, display saved posts, and allow users to edit their profiles with form validation and Appwrite mutations, enhancing the overall functionality of the Snapgram application.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/vsasanka/social-media-application",
  },
  {
    name: "Spotify 2.0",
    description:
      "Built and deployed an improved version of Spotify. With a modern homepage, fully-fledged music player, search, lyrics, song exploration features, search, popular music around you, worldwide top charts, and much more, this is the best music application you can currently find on YouTube. Built using React, Redux, Tailwind and RapidAPI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/vsasanka/spotify-clone-2",
  },
  {
    name: "3D Web Developer Portfolio",
    description:
      "Built and deployed my 3D web developer portfolio using ThreeJS and React. This includes proficiency in ThreeJS, a robust 3D graphics library, and React Three Fiber, a popular framework for integrating ThreeJS into React applications. Additionally, I gained expertise in TailwindCSS for efficient CSS styling and Framer Motion for incorporating dynamic animations into React websites. The course equipped me with the skills to load, create, and customize 3D models, implement reusable and scalable code practices, integrate email functionality through web forms, and ensure responsive design across all devices using Suspense and Preload techniques.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/vsasanka/3d-portfolio-react",
  },
];

export { services, technologies, experiences, testimonials, projects };
