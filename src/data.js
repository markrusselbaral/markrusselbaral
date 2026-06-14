// All editable site content in one place.

export const profile = {
  name: 'Mark Russel Baral',
  role: "I'm a Full-Stack Web Developer & Software Engineer",
  portrait: '/assets/img/portrait.jpg',
  email: 'nullcracker04@gmail.com',
  github: 'https://github.com/markrusselbaral/',
  linkedin: 'https://www.linkedin.com/in/mark-russel-baral-bb0718257/',
  resume:
    'https://drive.google.com/file/d/1bQ0RbeQ8P1h0awtKt4QFtvft5tFBBnaz/view?usp=sharing'
}

export const about = [
  "I'm Mark — a full-stack software engineer with over five years of experience building and scaling web applications across the entire stack. On the front-end I craft responsive, accessible interfaces with modern frameworks like Vue and Angular; on the back-end I architect secure, well-structured APIs and database systems with Laravel, Node.js, and MySQL/PostgreSQL that perform reliably in production.",
  "I take ownership of clean architecture, performance, and maintainability — hardening applications against common vulnerabilities, optimizing bottlenecks, and mentoring junior developers along the way. I'm fluent with Docker and CI/CD pipelines, and I thrive on partnering with teams to turn business requirements into robust, well-engineered products."
]

export const stacks = [
  {
    title: 'Languages',
    body: 'Python · JavaScript · TypeScript · C# · PHP · Dart — the languages I work in across web, services, and scripting.'
  },
  {
    title: 'Frameworks & Libraries',
    body: 'Laravel · Vue.js · React.js · Angular · Node.js · Nest.js · AdonisJS · Flask · TensorFlow — for building front-ends, APIs, and services.'
  },
  {
    title: 'Databases & Caching',
    body: 'MySQL · PostgreSQL · Redis — designing efficient, scalable schemas and fast data access.'
  },
  {
    title: 'DevOps & Cloud',
    body: 'Docker · AWS · GitHub Actions · Jenkins · Git — containerized environments, CI/CD pipelines, and version control.'
  },
  {
    title: 'Concepts',
    body: 'Microservices Architecture · RESTful APIs · CI/CD · Agile Development — the practices I build and ship with.'
  }
]

export const skills = [
  { name: 'PHP / Laravel', level: 90 },
  { name: 'JavaScript / TypeScript', level: 85 },
  { name: 'MySQL / PostgreSQL', level: 85 },
  { name: 'Vue.js', level: 80 },
  { name: 'Angular', level: 75 },
  { name: 'Docker & CI/CD', level: 75 }
]

export const experience = [
  {
    company: 'Surefire Local',
    period: 'Sept 2025 – Present',
    role: 'Backend Software Engineer · Remote',
    summary:
      'Maintain and enhance Angular/Laravel web applications — building and updating RESTful APIs, shipping new features, managing Docker environments, and troubleshooting issues to keep systems stable and performant.'
  },
  {
    company: 'Cody Web Development Inc.',
    period: 'June 2024 – Sept 2025',
    role: 'Fullstack Software Engineer · Cebu City',
    summary:
      'Built and maintained robust PHP/Laravel applications backed by scalable MySQL databases, hardened apps against SQL injection and XSS, optimized performance, and mentored junior developers on best practices.'
  },
  {
    company: 'Acaciasoft Corporation',
    period: 'July 2023 – April 2024',
    role: 'Software Engineer · Antipolo City',
    summary:
      'Developed and maintained Laravel web applications, designed efficient MySQL schemas, integrated backend logic with frontend components, and applied security best practices and clean coding standards.'
  },
  {
    company: 'YARAMAY',
    period: 'Oct 2022 – Dec 2022',
    role: 'Web Developer · Remote',
    summary:
      'Designed landing pages in Figma and converted them into responsive, SEO-optimized web applications with HTML, CSS, and JavaScript, ensuring accessibility across all devices.'
  },
  {
    company: 'BlendIT',
    period: 'Dec 2021 – Dec 2022',
    role: 'Backend Developer · Remote',
    summary:
      'Developed reliable REST API endpoints for mobile apps in Laravel and contributed across the full stack, taking part in code reviews, testing, and debugging.'
  },
  {
    company: 'Freelancing',
    period: 'Dec 2020 – Dec 2022',
    role: 'Web Developer · Remote',
    summary:
      'Delivered end-to-end software solutions for clients — development, code review and testing, debugging, requirements analysis, and Git-based version control.'
  }
]

export const projects = [
  {
    title: 'Paddliq',
    cover: '/assets/img/paddliq.jpg',
    link: 'https://paddliq.com/',
    status: 'live',
    tags: ['NFC', 'Web App', 'Player Profiles'],
    description:
      'An NFC paddle-tag system for pickleball players. Each physical NFC tag links to a lifetime player profile, so players can track their stats, performance data, and match history persistently across matches and venues.'
  },
  {
    title: 'Cat Fight Arena',
    cover: '/assets/img/tiktok-game.jpg',
    link: 'https://tiktok-interactive-game.vercel.app/',
    status: 'live',
    tags: ['Vite', 'JavaScript', 'Real-time'],
    description:
      'An interactive TikTok Live game where viewer interactions drive real-time battles between cat characters across rounds, complete with a live audience feed, character roster, and score tracking. Built as a Vite single-page app.'
  },
  {
    title: 'E-Voting System',
    cover: '/assets/img/voting.png',
    status: 'live',
    link: 'http://evoting.bisubilar.org/',
    tags: ['Laravel', 'Bootstrap', 'JavaScript'],
    description:
      'A college project built to modernize and streamline the voting process. It offers a user-friendly interface for voters while ensuring secure data storage and accurate result tabulation. Built with Laravel, Bootstrap, and JavaScript.'
  },
  {
    title: 'Steno Game',
    cover: '/assets/img/steno.png',
    link: 'https://steno-frontend.vercel.app/',
    tags: ['Vue.js', 'Laravel'],
    description:
      "An engaging stenography game with a Vue.js front-end and a Laravel back-end. The project showcases interactive, dynamic UX paired with Laravel's robust framework for efficient data management and server-side logic."
  },
  {
    title: 'Food Menu App',
    cover: '/assets/img/foodMenu.png',
    link: 'https://markrusselbaral.github.io/arbain/',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description:
      'An enticing food menu built with HTML, CSS, and JavaScript — HTML for structure, CSS for styling and layout, and JavaScript for interactive elements and functionality.'
  },
  {
    title: 'SmartID',
    status: 'building',
    description:
      'A digital smart-ID platform currently in development.'
  },
  {
    title: 'eHatod Express',
    status: 'building',
    description:
      'A food delivery application currently in development.'
  }
]

export const nav = [
  { id: 'intro', label: 'Home', icon: 'ti-location-pin' },
  { id: 'about', label: 'About', icon: 'ti-user' },
  { id: 'skills', label: 'Skills', icon: 'ti-bar-chart' },
  { id: 'experience', label: 'Experience', icon: 'ti-briefcase' },
  { id: 'portfolio', label: 'Portfolio', icon: 'ti-view-grid' },
  { id: 'contact', label: 'Contact', icon: 'ti-comments' }
]
