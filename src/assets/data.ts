import { main, mySkills, sidebar, work } from "../typings/data";

export const sidebarData: sidebar = {
  subTitle: "Web Developer",
  options: [
    {
      title: "About",
      id: "about",
    },
    {
      title: "My Skills",
      id: "skill",
    },
    {
      title: "Work",
      id: "work",
    },
    {
      title: "Projects",
      id: "projects",
    },
    {
      title: "Contact",
      id: "contact",
    },
  ],
};

export const mainData: main = {
  firstLine: "Hi,",
  secondLine: "I'm-Tushar",
  thirdLine: "Web-Developer",
  subHeading: "Full-Stack Web Developer",
};

export const mySkillsData: mySkills = {
  number: "01.",
  title: "My Skill Set",
  skills: [
    { skill: "Front-end", progress: 90, color: "#03F6C0" },
    { skill: "Back-end", progress: 80, color: "#F6033E" },
    { skill: "ReactJs", progress: 70, color: "#8800AA" },
    { skill: "UX/UI", progress: 60, color: "#03F6C0" },
  ],
  words: [
    "JavaScript",
    "CSS",
    "HTML",
    "Vscode",
    "Figma",
    "React",
    "NextJS",
    "git",
    "Firebase",
    "NodeJS",
    "Express",
    "MongoDB",
    "Mongoose",
    "UI/UX",
    "Figma",
    "Redux",
    "C/C++",
    "NPM",
    "GitHub",
  ],
};

export const workData: work = {
  number: "02.",
  title: "Where I've Worked",
  work: [
    {
      title: "Full-Stack Web Developer",
      company: "Bessalani",
      date: "May 2022 – July 2022",
      description: [
        "Led the development and delivery of a full-stack service that created a web application aimed at providing learners from multiple organizations with a platform to learn new skills.",
        "Designed and developed a fully operational Learning Management System (LMS) with Admin and Learner panels, featuring various CRUD operations, class scheduling, attendance tracking, course uploads, and user authentication.",
        "Led the design and implementation of the backend operations using Node.js and MongoDB, incorporating AWS S3 for cloud storage.",
        "Designed a Figma-based user interface and developed the frontend of an application that visualizes employee and learner growth, course completion, and batch progress using ReactJS, Tailwind CSS, and Syncfusion.",
        "Designed and implemented the landing page and course section of the Bessalani website, using Figma for the design and ReactJS and Tailwind CSS for the development.",
      ],
    },
    {
      title: "Frontend Web Developer Intern",
      company: "Cloutflow",
      date: "Sept 2022 – Nov 2022",
      description: [
        "Contributed to the development of the Brand Side Web Application, an online platform that facilitates the recruitment of creators for brands’ advertising campaigns.",
        "Contributed to the development of the Creator’s facing application, which enables creators to discover and apply for brand campaigns.",
        "Utilized WebSockets technology to implement real-time chat and notification functionality in both the Brand and Creator applications.",
        "Developed the Admin Panel using ReactJS, ReactQuery, and AntD, in accordance with a Figma design.",
      ],
    },
  ],
};
