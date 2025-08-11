

const smartmartImg    = new URL('./assets/images/smartmart.jpg', import.meta.url).href;
const travelImg       = new URL('./assets/images/travel-tracker.jpg', import.meta.url).href;
const marketplaceImg  = new URL('./assets/images/marketplace.jpg', import.meta.url).href;
const tipImg          = new URL('./assets/images/tip-calculator.jpg', import.meta.url).href;

export const projects = [
  {
    id: 'smartmart',
    title: 'SmartMart – Full-Stack E-Commerce Web App',
    short: 'Modular multi-user e-commerce with brand-consistent UI, auth, roles, and admin flows.',
    thumb: smartmartImg,
    hero: smartmartImg,
    gitUrl: 'https://github.com/nekhabose/SmartMart-WebApp',
    links: [{ label: 'GitHub', href: 'https://github.com/nekhabose/SmartMart-WebApp' }],
    tech: ['Java/Jakarta EE', 'MySQL', 'NetBeans', 'Payara'],
    stats: [
      { value: 3, label: 'User Roles' },
      { value: 15, label: 'Reusable Modules' },
      { value: 100, label: 'Responsive%' },
    ],
    problem:
      'Users needed a clean, fast, and reliable storefront with role-based access for shoppers, managers, and admins—without sacrificing brand consistency or performance.',
    approach:
      'Designed a component-driven frontend in React with a design-token system for consistent branding. Built REST services on Java/Jakarta EE (Payara) with JWT auth, separated shopper/admin flows, and containerized the stack for repeatable deploys.',
    highlights: [
      'Authentication & authorization (role-based routes).',
      'Product catalog, search/filtering, cart & checkout.',
      'Admin: inventory, categories, orders, and users.',
      'Design-token theming for instant brand-wide updates.',
    ],
    impact:
      'Reduced UI defects caused by inconsistent styles, and enabled faster changes via component reuse and design tokens. Clean roles meant fewer support issues and safer admin operations.',
  },
  {
    id: 'travel-tracker',
    title: 'Travel Tracker – Android App with Gemini AI',
    short: 'AI-assisted itinerary planning with real-time routing, maps, and offline support.',
    thumb: travelImg,
    hero: travelImg,
    gitUrl: 'https://github.com/nekhabose/TravelTrackerApp',
    links: [{ label: 'GitHub', href: 'https://github.com/nekhabose/TravelTrackerApp' }],
    tech: ['Android', 'Kotlin/Java', 'Gemini AI', 'Google Maps SDK', 'Directions/Places', 'Room/Cache', 'WorkManager', 'Notifications'],
    stats: [
      { value: 12, label: 'Screens' },
      { value: 5, label: 'AI Prompts' },
      { value: 0, label: 'Dead Zones (Offline Cache)' },
    ],
    problem:
      'Travel planning is fragmented across tabs and notes. People want a single place that suggests, organizes, and navigates—online or offline.',
    approach:
      'Used Gemini AI to propose itineraries, budget hints, and must-see spots. Integrated Google Maps for route previews and time estimates. Local caching keeps plans available without data; background sync refreshes when connected.',
    highlights: [
      'Gemini prompts craft day-plans from preferences & time.',
      'Interactive maps + step-by-step routes (ETA, distance).',
      'Offline-ready with local cache and intelligent sync.',
      'Trip timelines, reminders, and quick re-order.',
      'Clean MVVM architecture; testable modules.',
    ],
    impact:
      'Turned multi-tab planning into a single flow. Users can plan on Wi-Fi and stay productive offline during trips. AI reduces “blank-page” planning anxiety.',
  },
  {
    id: 'marketplace',
    title: 'Marketplace – Listings, Cart & Checkout',
    short: 'Full-stack marketplace prototype with listings, cart, and order flow.',
    thumb: marketplaceImg,
    hero: marketplaceImg,
    gitUrl: 'https://github.com/nekhabose/Marketplace',
    links: [{ label: 'GitHub', href: 'https://github.com/nekhabose/Marketplace' }],
    tech: ['JavaFX', 'Scene Builder'],
  },
  {
    id: 'tip-calculator',
    title: 'Tip Calculator – Responsive Web App',
    short: 'Clean, responsive tip calculator with split and rounding.',
    thumb: tipImg,
    hero: tipImg,
    gitUrl: 'https://github.com/nekhabose/tip-calculator.github.io',
    links: [{ label: 'GitHub', href: 'https://github.com/nekhabose/tip-calculator.github.io' }],
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
];
export const experiences = [
  {
    id: 'breatheit',
    company: 'BreatheIT Solutions Inc',
    role: 'Lead Software Developer',
    location: 'Chicago, IL (Hybrid)',
    period: 'Dec 2024 – Present',
    bullets: [
      'Built an AI-powered lifestyle platform across web and mobile (Node.js, React/React Native).',
      'Designed and secured 100+ REST APIs with JWT/OAuth and role-based access; standardized OpenAPI docs.',
      'Dockerized services and automated CI/CD; deployed to GCP behind Nginx with zero-downtime releases.',
      'Mentored a squad of 15+ engineers and drove Agile delivery — cut release cycle time by ~30%.',
    ],
    tech: [
      'TypeScript','Node.js','React','React Native','JWT','PostgreSQL','WebSockets',
      'GCP','Docker','Nginx','CI/CD','OpenAPI','A/B tests'
    ],
  },
  {
    id: 'infosys',
    company: 'Infosys Ltd',
    role: 'Sr. Software Engineer',
    location: 'Client: Nike — Beaverton, OR (Remote)',
    period: 'Mar 2021 – Dec 2023',
    bullets: [
      'Scaled e-commerce microservices using Spring Boot and PostgreSQL/MongoDB; 10M+ concurrent users with 99.99% availability.',
      'Automated ETL pipelines with Apache Airflow on AWS to feed analytics and finance systems.',
      'Built stakeholder dashboards in Tableau enabling ~30% faster decision-making.',
    ],
    tech: ['Java','Spring Boot','PostgreSQL','MongoDB','AWS','Airflow','Kafka','Tableau'],
  },
  {
    id: 'cognizant',
    company: 'Cognizant',
    role: 'Software Engineer',
    location: 'India',
    period: 'Jun 2017 – Dec 2019',
    bullets: [
      'Developed sales-analytics dashboards (React + Node.js + MongoDB) adopted by regional teams.',
      'Implemented REST APIs and data services; improved engagement by 20% and sales insights by 30%.',
    ],
    tech: ['React','Node.js','Express','GraphQL','MongoDB','REST APIs','Jest'],
  },
];

