import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  qrhino,
  pokemonPortfolio,
  threejs,
  express,
  java,
  jwt,
  nextauth,
  tesla,
  shopify,
  meta,
  starbucks,
  speedvitals,
  reactNative,
  prisma,
  postgresql,
  antd,
  bootstrap,
  initialLetterLogo,
} from "../assets";

const initialLetterIcon = initialLetterLogo;
const remainingLetters = "agul";

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
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Website Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
    position: [0, 0, 0],
  },
  {
    name: "Express JS",
    icon: express,
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
    name: "Ant Design",
    icon: antd,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
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
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  { name: "React Native", icon: reactNative },
  { name: "Prisma", icon: prisma },
];

const projects = [
  {
    name: "QRhino",
    description:
      "A QR-code-based restaurant ordering and management platform with a customer ordering app, an admin dashboard, and a shared backend API.",
    features: [
      "Customers scan a table QR code to browse the menu and place orders from their phone.",
      "Admin dashboard for restaurant staff to manage menus and track incoming orders in real time.",
      "Shared backend API powering both the customer and admin apps.",
      "Separate frontend, admin, and backend repos for independent deployment.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "rest-api",
        color: "pink-text-gradient",
      },
      {
        name: "qr-code",
        color: "orange-text-gradient",
      },
    ],
    image: qrhino,
    source_code_link: "https://github.com/ragulk2211/ragul-frontend",
    live_link: "https://github.com/ragulk2211/ragul-frontend",
  },
  {
    name: "Pokémon Portfolio",
    description:
      "A Pokémon-themed personal portfolio built with React, Vite, and Three.js, featuring interactive 3D visuals and floating Pokémon sprites.",
    features: [
      "3D visuals and animations built with Three.js and React Three Fiber.",
      "Custom floating Pokémon sprite animations pulled from PokeAPI.",
      "Fully responsive, fast-loading Vite build.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: pokemonPortfolio,
    source_code_link: "https://github.com/ragulk2211",
    live_link: "https://github.com/ragulk2211",
  },
  // TODO: swap in your real screenshots for the "image" fields above,
  // and update source_code_link/live_link once each project is deployed.
];

// TODO: add your own work experience here. The Experience section is
// currently commented out in src/app/page.js until you have entries to show.
const experiences = [];

// TODO: add real client/collaborator testimonials here. The Feedbacks
// section is currently commented out in src/app/page.js until you have some.
const testimonials = [];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  initialLetterIcon,
  remainingLetters,
};