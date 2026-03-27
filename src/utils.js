const heroBg = new URL('./assets/images/hero-bg.jpg', import.meta.url).href;
const spendwiseImg = new URL('./assets/images/spendwise-card.svg', import.meta.url).href;
const pantryImg = new URL('./assets/images/pantry-book.jpeg', import.meta.url).href;
const smartmartImg = new URL('./assets/images/smartmart.jpg', import.meta.url).href;
const travelImg = new URL('./assets/images/travel-tracker.jpg', import.meta.url).href;
const aiLmsImg = new URL('./assets/images/AI Enterprise LMS System.png', import.meta.url).href;
const marketplaceAiImg = new URL('./assets/images/Marketplace AI.png', import.meta.url).href;
const pantryBookAiImg = new URL('./assets/images/Pantry Book AI.png', import.meta.url).href;
const spendwiseAiImg = new URL('./assets/images/Spendwise AI.png', import.meta.url).href;
const travelTrackerAiImg = new URL('./assets/images/Travel Tracker AI.png', import.meta.url).href;

export const profile = {
  name: 'Nekha Bose',
  title: 'Senior Software Engineer | Full-Stack | AI & Agentic Systems | Cloud Architecture',
  summary:
    'High-impact full-stack engineer building AI, RAG, and cloud-native products with measurable business outcomes. I lead cross-functional teams, design enterprise-grade systems, and translate product goals into scalable delivery.',
  about:
    'I build resilient product platforms across React, TypeScript, Node.js, FastAPI, and cloud infrastructure. My recent work spans AI recommendation systems, retrieval-augmented workflows, multi-tenant platform design, and high-scale API delivery, with a focus on shipping reliable systems that improve velocity, engagement, and operational clarity.',
  location: 'Chicago, IL',
  email: 'nekhabose1998@gmail.com',
  phone: '+1 312-874-9702',
  linkedin: 'https://www.linkedin.com/in/nekha-bose',
  github: 'https://github.com/nekhabose',
  site: 'https://nekhabose.github.io/nekha-bose-portfolio',
  resumeFile: 'nekhaBoseResume.pdf',
  focusAreas: [
    'AI and agentic product delivery',
    'Cloud-native backend architecture',
    'Enterprise full-stack systems',
    'Engineering leadership and execution',
  ],
  heroMetrics: [
    { value: '150+', label: 'Production APIs' },
    { value: '75+', label: 'PostgreSQL schemas' },
    { value: '15+', label: 'Engineers led' },
    { value: '10M+', label: 'Users supported' },
  ],
  achievements: [
    'Led 15+ engineers across product and platform delivery.',
    'Improved rollout speed by 30 percent through tighter Agile execution.',
    'Lifted product engagement by 12 percent with A/B-tested UI improvements.',
    'Delivered ETL redesigns that cut processing time by 40 percent.',
  ],
};

export const experiences = [
  {
    id: 'breatheit',
    company: 'BreatheIT Inc.',
    role: 'Lead Software Developer',
    period: 'Dec 2024 - Present',
    location: 'Chicago, IL (Hybrid)',
    metrics: ['150+ APIs on GCP', '75+ PostgreSQL schemas', '30% faster rollout', '12% engagement lift'],
    bullets: [
      'Lead engineering for an AI-powered lifestyle platform spanning a Node.js and TypeScript backend, React portal, and React Native mobile apps.',
      'Built FastAPI recommendation services across seven life disciplines using OpenAI and Groq to deliver personalized guidance flows.',
      'Integrated Google Maps, YouTube, and Amazon services into core product journeys to expand utility and retention.',
      'Scaled the platform with 75+ PostgreSQL schemas, 150+ production APIs on GCP, and Docker, Nginx, and Redis rate limiting.',
      'Led 15+ engineers in Agile delivery, improving rollout speed by 30 percent and increasing engagement by 12 percent through A/B-tested UI updates.',
    ],
    tech: [
      'Node.js',
      'TypeScript',
      'React',
      'React Native',
      'FastAPI',
      'OpenAI',
      'Groq',
      'PostgreSQL',
      'GCP',
      'Docker',
      'Nginx',
      'Redis',
    ],
  },
  {
    id: 'infosys',
    company: 'Infosys Limited',
    role: 'Senior Software Engineer',
    period: 'Mar 2021 - Dec 2023',
    location: 'Nike account, remote',
    metrics: ['10M+ users', '40% faster ETL', '30% faster retrieval', '20% retention lift'],
    bullets: [
      'Delivered a Java Spring Boot and React e-commerce platform at scale for 10M+ users using Docker and Kubernetes.',
      'Improved MongoDB and PostgreSQL performance to reduce response times and support a smoother high-volume user experience.',
      'Redesigned ETL pipelines for Nike with Autosys, Airflow, and AWS, cutting processing time by 40 percent and improving retrieval speed by 30 percent.',
      'Built Tableau dashboards that helped stakeholders track business performance and act faster on operational signals.',
    ],
    tech: [
      'Java',
      'Spring Boot',
      'React',
      'Docker',
      'Kubernetes',
      'MongoDB',
      'PostgreSQL',
      'Autosys',
      'Airflow',
      'AWS',
      'Tableau',
    ],
  },
  {
    id: 'freelance',
    company: 'Freelancer',
    role: 'Software Engineer',
    period: 'Oct 2018 - Mar 2021',
    location: 'Remote',
    metrics: ['End-to-end delivery', 'Vendor consulting', 'Design to deployment'],
    bullets: [
      'Delivered end-to-end web and product builds for multiple vendors, from discovery and scoping through deployment and support.',
      'Owned architecture choices, front-end implementation, API integration, and production readiness for client-facing applications.',
      'Partnered directly with stakeholders to translate goals into scoped roadmaps, faster feedback cycles, and stable releases.',
    ],
    tech: [
      'React',
      'JavaScript',
      'Node.js',
      'REST APIs',
      'SQL',
      'Product discovery',
      'Client delivery',
    ],
  },
];

export const projects = [
  {
    id: 'enterprise-ai-lms',
    title: 'Enterprise AI Learning Management System',
    category: 'RAG + Agentic Platform',
    short:
      'Multi-tenant learning platform with pluggable RAG pipelines, strict data isolation, and enterprise-ready orchestration for AI-assisted learning.',
    thumb: aiLmsImg,
    hero: aiLmsImg,
    tech: [
      'React',
      'TypeScript',
      'Node.js',
      'FastAPI',
      'LangChain',
      'LangGraph',
      'LlamaIndex',
      'FAISS',
      'ChromaDB',
      'Pinecone',
      'Qdrant',
    ],
    metrics: [
      'Multi-tenant architecture',
      'Strict tenant data isolation',
      'Pluggable chunking and retrieval',
      'Multi-LLM support',
    ],
    problem:
      'Enterprise learning teams need AI search and tutoring capabilities, but they cannot compromise on tenant isolation, auditability, or flexibility across models and retrieval strategies.',
    users:
      'Built for platform admins, instructors, learners, and enterprise customers with separate tenant boundaries and role-based permissions.',
    constraints: [
      'Strict data isolation between tenants and departments.',
      'Need to support multiple chunking, retrieval, and reranking strategies without rewriting the stack.',
      'Requirement to swap LLM providers based on cost, latency, and policy constraints.',
    ],
    approach: [
      'Designed a modular RAG platform where ingestion, indexing, retrieval, reranking, and generation can be configured per tenant or use case.',
      'Used Node.js and FastAPI services to separate product APIs, orchestration workflows, and AI processing concerns.',
      'Built a React and TypeScript admin and learner experience focused on explainable AI interactions, upload controls, and retrieval transparency.',
    ],
    architectureFlow: [
      'React portal',
      'Node.js API gateway',
      'LangGraph and LangChain orchestration',
      'FastAPI AI services',
      'Vector stores and model providers',
    ],
    challenges: [
      'Balancing flexible retrieval design with predictable latency and operational control.',
      'Maintaining tenant-safe indexing and retrieval paths across shared infrastructure.',
      'Supporting both experimentation and enterprise governance in the same platform.',
    ],
    resultsTitle: 'Capabilities delivered',
    results: [
      'Configurable RAG stack with pluggable chunking, retrieval, reranking, and model routing.',
      'Enterprise-ready tenant boundaries, role-aware access patterns, and scalable API composition.',
      'A foundation for AI chat, knowledge retrieval, guided learning flows, and extensible agentic workflows.',
    ],
  },
  {
    id: 'smartmart',
    title: 'SmartMart',
    category: 'Role-Based E-Commerce Platform',
    short:
      'Enterprise-style commerce platform focused on role-based access control, modular business flows, and deployment-ready backend patterns.',
    thumb: marketplaceAiImg,
    hero: marketplaceAiImg,
    links: [{ label: 'GitHub', href: 'https://github.com/nekhabose/SmartMart-WebApp' }],
    tech: [
      'Jakarta EE',
      'JSF',
      'Facelets',
      'JPA',
      'MVC',
      'DAO',
      'Jakarta Security',
      'Payara',
    ],
    metrics: [
      'Role-based storefront',
      'Admin and customer modules',
      'Secure checkout flows',
      'Server deployment on Payara',
    ],
    problem:
      'Commerce systems need clear separation between customer and admin workflows while keeping catalog, checkout, and order management reliable and secure.',
    users:
      'Designed for administrators, store managers, and end customers with distinct permissions and workflow boundaries.',
    constraints: [
      'Needed maintainable server-side rendering and clean separation of concerns.',
      'Security and payment-adjacent flows required strict role enforcement.',
      'The application had to stay modular enough for future catalog and admin feature growth.',
    ],
    approach: [
      'Structured the system with MVC and DAO layers to keep persistence, business logic, and UI responsibilities separate.',
      'Used Jakarta Security for authenticated role-based flows and protected management operations.',
      'Implemented catalog, cart, checkout, and admin modules with JPA-backed persistence and Payara deployment support.',
    ],
    architectureFlow: [
      'JSF and Facelets UI',
      'MVC controllers',
      'Service and DAO layer',
      'JPA persistence',
      'Payara runtime',
    ],
    challenges: [
      'Keeping authorization rules consistent across customer and admin interfaces.',
      'Avoiding tight coupling between UI templates and business logic as features expanded.',
      'Making deployment and environment setup predictable for testing and demos.',
    ],
    resultsTitle: 'Results',
    results: [
      'Delivered a role-based e-commerce foundation with secure navigation, catalog management, and order handling.',
      'Created a maintainable architecture suited for future payment, inventory, and user management enhancements.',
      'Improved clarity and safety across admin operations by enforcing explicit role boundaries.',
    ],
  },
  {
    id: 'pantrybook',
    title: 'PantryBook',
    category: 'Inventory + Productivity',
    short:
      'Smart pantry and recipe helper built to track inventory, reduce waste, and support better household planning.',
    thumb: pantryBookAiImg,
    hero: pantryBookAiImg,
    links: [
      { label: 'Live Demo', href: 'https://pantrybook.netlify.app/' },
      { label: 'GitHub', href: 'https://github.com/nekhabose/pantry_book' },
    ],
    tech: ['React', 'TypeScript', 'Supabase', 'Netlify'],
    metrics: ['Inventory tracking', 'Recipe suggestions', 'Expiry awareness'],
    problem:
      'Home inventory usually lives in notes or memory, which leads to duplicate purchases and food waste.',
    users:
      'Designed for individuals and households who need a simple way to track pantry items and plan meals.',
    constraints: [
      'Needed a clean interface that made inventory updates fast.',
      'Required reliable state updates for frequent list changes.',
    ],
    approach: [
      'Built inventory CRUD flows, category organization, and recipe suggestion support around a simple, responsive UX.',
      'Used typed front-end patterns and a lightweight backend workflow to keep the product easy to maintain.',
    ],
    architectureFlow: ['React UI', 'Typed client state', 'Supabase data layer', 'Hosted front-end delivery'],
    challenges: [
      'Keeping the interaction model simple enough for repeated daily use.',
      'Making status signals clear without overloading the screen with controls.',
    ],
    resultsTitle: 'Capabilities delivered',
    results: [
      'Faster pantry management, clearer visibility into expiring items, and easier recipe-driven planning.',
    ],
  },
  {
    id: 'spendwise',
    title: 'SpendWise',
    category: 'Fintech Dashboard',
    short:
      'Budgeting dashboard focused on clear decision support, visual spending insights, and disciplined delivery through CI/CD.',
    thumb: spendwiseAiImg,
    hero: spendwiseAiImg,
    links: [
      { label: 'Live Demo', href: 'https://spendwize-fintech.netlify.app/' },
      { label: 'GitHub', href: 'https://github.com/nekhabose/spendwise-ci-cd' },
    ],
    tech: ['React', 'Vite', 'Chart.js', 'Firebase', 'Netlify', 'GitHub Actions'],
    metrics: ['Budget tracking', 'Automated deploys', 'Visual KPI cards'],
    problem:
      'Many personal finance tools make quick decisions harder by hiding signals inside cluttered screens and weak release workflows.',
    users:
      'Built for users who want simple budget visibility and for teams that need a safe front-end CI/CD reference project.',
    constraints: [
      'The dashboard had to remain approachable while surfacing useful trend data.',
      'Deployment had to be repeatable and low-risk.',
    ],
    approach: [
      'Designed a clean dashboard with budget cards, trend views, and focused interaction patterns.',
      'Added CI/CD automation with GitHub Actions and Netlify to keep releases consistent.',
    ],
    architectureFlow: ['React UI', 'Client visualization layer', 'Firebase services', 'CI/CD pipeline'],
    challenges: [
      'Balancing UI simplicity with enough financial detail to feel useful.',
      'Keeping the project a strong delivery reference, not just a visual demo.',
    ],
    resultsTitle: 'Capabilities delivered',
    results: [
      'Clear budget visibility, faster confidence in release quality, and a reusable CI/CD reference for front-end projects.',
    ],
  },
  {
    id: 'travel-tracker',
    title: 'Travel Tracker',
    category: 'Mobile AI Assistant',
    short:
      'Mobile travel planner with AI-assisted itinerary support, maps integration, and offline-friendly trip management.',
    thumb: travelTrackerAiImg,
    hero: travelTrackerAiImg,
    links: [{ label: 'GitHub', href: 'https://github.com/nekhabose/TravelTrackerApp' }],
    tech: ['Android', 'Kotlin', 'Google Maps SDK', 'Gemini AI', 'Room', 'WorkManager'],
    metrics: ['AI itinerary support', 'Route planning', 'Offline-friendly state'],
    problem:
      'Trip planning often breaks across multiple apps, tabs, and notes, which makes it harder to keep plans usable on the go.',
    users:
      'Designed for travelers who want planning, routing, and itinerary support in a single mobile workflow.',
    constraints: [
      'Plans needed to stay usable when network access was inconsistent.',
      'Location and route interactions had to remain fast on mobile.',
    ],
    approach: [
      'Combined AI-assisted planning, route mapping, and cached trip data into a single mobile experience.',
      'Used local persistence and background refresh patterns to keep trips available and current.',
    ],
    architectureFlow: ['Android client', 'AI prompt flows', 'Maps integration', 'Local cache and sync'],
    challenges: [
      'Merging AI-generated suggestions with practical route and time constraints.',
      'Keeping the mobile UX smooth while handling map and background sync requirements.',
    ],
    resultsTitle: 'Capabilities delivered',
    results: [
      'A single travel workflow that supports itinerary planning, navigation context, and more reliable offline access.',
    ],
  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'React Native', 'Responsive UI', 'Accessibility'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'FastAPI', 'Java', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'AI and Agentic',
    items: ['OpenAI', 'Groq', 'RAG systems', 'LangChain', 'LangGraph', 'LlamaIndex', 'Prompt orchestration'],
  },
  {
    title: 'Cloud and DevOps',
    items: ['GCP', 'AWS', 'Docker', 'Kubernetes', 'Nginx', 'Redis', 'CI/CD', 'GitHub Actions'],
  },
  {
    title: 'Data and ETL',
    items: ['Airflow', 'Autosys', 'Tableau', 'Data pipelines', 'Query optimization', 'Analytics reporting'],
  },
  {
    title: 'Testing and Methods',
    items: ['Postman', 'A/B testing', 'Agile', 'Scrum', 'API validation', 'Production rollout discipline'],
  },
  {
    title: 'Design and Collaboration',
    items: ['Product discovery', 'Figma collaboration', 'Stakeholder alignment', 'Mentorship', 'Technical leadership'],
  },
];

export const education = [
  {
    degree: 'MS, Information Technology and Management',
    school: 'Illinois Institute of Technology',
    meta: 'GPA 3.90 / 4.0',
  },
  {
    degree: 'B.Tech, Information Technology',
    school: 'APJ Abdul Kalam Technological University',
    meta: '',
  },
];

export const certifications = [
  {
    title: 'Microsoft Certified: Azure AI Engineer Associate',
    detail: 'Applied AI engineering credential aligned with enterprise AI solution delivery.',
  },
];
