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
  // TODO: add screenshot imports for the three new projects, e.g.:
  // reactPokedex,
  // reactTodoApp,
  // rshop,
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
  {
    name: "Pokédex — Premium Edition",
    description:
      "An in-universe Pokédex built with React, Vite, and Three.js, featuring an interactive open/close Pokéball hero, cinematic backgrounds, and live PokéAPI data across all 10 regions.",
    features: [
      "Interactive 3D Pokéball hero that shakes, charges, and splits open with particle and bloom effects to reveal a featured Pokémon.",
      "Region map covering all 10 regions (Kanto through Hisui) with starters, professors, and champions per region.",
      "Expanded Pokémon detail pages with full type chart weaknesses/resistances, egg groups, catch rate, habitat, and cry playback.",
      "Instant autosuggest search across the full national dex with match highlighting.",
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
    image: reactPokedex, // TODO: swap in your real screenshot
    source_code_link: "https://github.com/ragulk2211/React-pokedex-frontend-project",
    live_link: "https://github.com/ragulk2211/React-pokedex-frontend-project",
  },
  {
    name: "MERN Todo App",
    description:
      "A full-stack todo application with a React/Redux frontend and an Express, MongoDB, and JWT-secured backend, supporting tagged todos and per-user authentication.",
    features: [
      "JWT-based authentication so each user's todos stay private.",
      "Redux-managed frontend for predictable state across todo, tag, and user data.",
      "Tag support for organizing and filtering todos.",
      "REST API built with Express and Mongoose, backed by MongoDB.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "jwt",
        color: "orange-text-gradient",
      },
    ],
    image: reactTodoApp, // TODO: swap in your real screenshot
    source_code_link: "https://github.com/ragulk2211/React-ToDo-App",
    live_link: "https://github.com/ragulk2211/React-ToDo-App",
  },
  {
    name: "Rshop",
    description:
      "A Django-based e-commerce store with product catalog, cart, order management, and Razorpay payment integration.",
    features: [
      "Full shopping flow: browse products, manage cart, and place orders.",
      "Razorpay integration for handling payments.",
      "Separate Django apps for authentication, cart, orders, payments, and products for clean separation of concerns.",
      "Deployable as a Django app with static/media handling via Whitenoise.",
    ],
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "ecommerce",
        color: "pink-text-gradient",
      },
      {
        name: "razorpay",
        color: "orange-text-gradient",
      },
    ],
    image: rshop, // TODO: swap in your real screenshot
    source_code_link: "https://github.com/ragulk2211/Rshop",
    live_link: "https://github.com/ragulk2211/Rshop",
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