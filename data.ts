import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { BsCircleFill } from "react-icons/bs";

import { IProject, IService, ISkill } from "./type";

export const services: IService[] = [
  {
    title: "React",
    about:
      "Proficient in building dynamic, responsive user interfaces using React. Experienced with hooks, context API, and state management.",
    Icon: SiReact,
  },
  {
    title: "Tailwind",
    about:
      "Skilled at rapidly prototyping and styling components using Tailwind CSS, creating clean and maintainable designs.",
    Icon: SiTailwindcss,
  },
  {
    title: "TypeScript",
    about:
      "Adept at utilizing TypeScript to enhance code quality and maintainability. Skilled in advanced type definitions, interfaces, and error prevention.",
    Icon: SiTypescript,
  },
  {
    title: "NextJS",
    about:
      "Well-versed in crafting optimized React applications with Next.js. Capable of implementing server-side rendering, static generation, and efficient routing strategies.",
    Icon: SiNextdotjs,
  },
  {
    title: "JavaScript",
    about:
      "Highly competent in core JavaScript and modern ECMAScript standards. Experienced in asynchronous programming, functional paradigms, and browser APIs.",
    Icon: SiJavascript,
  },
];

export const languages: ISkill[] = [
  {
    name: "Java  Script",
    level: "100",
    Icon: BsCircleFill,
  },
  {
    name: "React",
    level: "100",
    Icon: BsCircleFill,
  },
  {
    name: "NextJs",
    level: "100",
    Icon: BsCircleFill,
  },
  {
    name: "Tailwind",
    level: "100",
    Icon: BsCircleFill,
  },
  {
    name: "Bootstrap",
    level: "100",
    Icon: BsCircleFill,
  },
  {
    name: "TypeScript",
    level: "100",
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  {
    name: "Vscode",
    level: "100",
    Icon: BsCircleFill,
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "North Care",
    description:
      "North is a web and mobile platform (Android) application that allows users to access medical care from the comfort of their home or any other location.",
    image_path: "/Images/use_north.jpg",
    deployed_url: "https://usenorth.care",
    category: ["nextJs", "firebase", "react"],
    github_url: "",
    key_techs: ["nextJs", "redux", "firebase", "react"],
  },
  {
    id: 2,
    name: "PneumaPage",
    description:
      "Pneumapage is a web application that allows users to search for healthcare providers in different fields and locations.",
    image_path: "/Images/pneumapage.jpg",
    deployed_url: "https://pneumapage.com/",
    category: ["nextJs", "firebase", "react"],
    github_url: "",
    key_techs: ["nextJs", "styled-components", "antd", "redux", "firebase"],
  },
  {
    id: 3,
    name: "PneumaCare",
    description:
      "Pneuma care is crafted compelling telemedicine landing page, merging design & functionality for seamless user engagement",
    image_path: "/Images/pneumacare.jpg",
    deployed_url: "https://pneumapage.com/",
    category: ["nextJs", "firebase", "react"],
    github_url: "",
    key_techs: ["nextJs", "styled-components", "antd"],
  },
  {
    id: 4,
    name: "Pick Bazar E-Commerce Clone",
    description: "E-Commerce web application clone",
    image_path: "/Images/Ecommerce.png",
    deployed_url: "https://pick-bazar-clone.vercel.app/",
    category: ["nextJs", "firebase"],
    github_url: "https://github.com/Abdussamadajao/pick-bazar-clone",
    key_techs: ["nextJs", "Tailwind", "Context Api", "react"],
  },
  {
    id: 5,
    name: "Glade Clone",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image_path: "/Images/Glade.png",
    deployed_url: "https://glade-clone-1n0gzjmzv-abdus-samad.vercel.app",
    category: ["html & css"],
    github_url: "https://github.com/Abdussamadajao/glade-website-clone",
    key_techs: ["HTML & CSS", "JavaScript"],
  },
];
