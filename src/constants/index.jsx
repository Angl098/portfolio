import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { FaHtml5 } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "ANGELES ORQUERA",
  greet: "Hello there! 👋🏻",
  description:
    "I'm a full stack developer, passionate about technology and always looking to learn more. Currently, I'm involved in projects and honing my skills, ready to take on new challenges.",
};

export const PROJECTS = [
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using React and Mercado Pago for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/Angl098/optimotech-front",
  },
  {
    id: 3,
    name: "Landing Page",
    description:
      "This project is a modern corporate landing page with intuitive navigation, featuring sections on services, projects, team, and pricing. It includes a contact form using EmailJS and notifications with React Hot Toast",
    image: projectImage3,
    githubLink: "https://github.com/Angl098/adCarrot",
  },
  {
    id: 4,
    name: "Rotiseria - CEC",
    description:
      "For my final project in the Web Development course at Coderhouse in 2023, I built a website from the ground up, starting with a paper prototype. The project involved working with HTML, CSS, Bootstrap, and SASS, along with basic Git and GitHub practices. The website was designed for a family restaurant, serving as an informative platform where users could easily find details about the location, menu, contact information, and more",
    image: projectImage3,
    githubLink: "https://github.com/Angl098/coderhouse-project",
  },
];

export const BIO = [
  "My name is Ángeles Orquera, and I live in Buenos Aires, Argentina. I hold a high school diploma in Economics and Administration and have experience in administrative and accounting roles. During my career, I discovered a passion for web development, which led me to deepen my knowledge and skills in this field. Subsequently, I completed an intensive Full Stack Developer Bootcamp, where I participated in multiple projects that allowed me to apply and expand my technical competencies.",
  "Currently, I am focused on refining my skills as a Front-End developer, combining my technical experience with a strong attention to detail and efficiency in creating attractive and functional user interfaces. At the same time, I am building my career as a freelancer, collaborating on projects that allow me to continue growing and adding value in the world of web development.",
];

export const SKILLS = [
  {
    icon: <FaHtml5 className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "HTML5 y CSS3",
    experience: "2+ years",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "1+ years",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <SiExpress className="text-4xl text-white lg:text-5xl" />,
    name: "Express JS",
    experience: "1 year",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1 year",
  },
  {
    icon: <FaGitAlt className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Git",
    experience: "2 year",
  },
];

export const EXPERIENCES = [
  {
    title: "Administrativo contable",
    company: "Indo Deli",
    duration: "March 2023 - August 2024",
    description:
      "I have managed data using spreadsheets and other tools, keeping up-to-date records and reports. I have also kept a tight control of invoices and used administrative systems and accounting software, such as Tango Software, to record, store, analyse and consult information. In addition, I have served clients and managed the tracking of collections and payments, making sure that all these processes were recorded and controlled efficiently.",
  },
];

export const EDUCATION = [
  {
    degree: "",
    institution: "",
    duration: "",
    description:
      "Specialized in Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
